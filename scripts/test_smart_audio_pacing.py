import asyncio
import os
import subprocess
import imageio_ffmpeg
import edge_tts

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
VOICE = "ar-EG-ShakirNeural"
OUTPUT_DIR = "public/audio/test"

# 1. Continuous approach: Raw text, fast, monotonic, no pauses
text_continuous = (
    "أهلاً بكم في أكاديمية GridFix. درس اليوم عن أنماط الأعطال ونظرية التقادم. "
    "حتى أواخر سبعينيات القرن الماضي كان الاعتقاد السائد أن كل معدة كلما زاد عمرها "
    "وساعات تشغيلها زادت احتمالية تعطلها حتماً. وبناءً على ذلك كانت المصانع تنفق مبالغ ضخمة "
    "على تفكيك المعدات وعمل عمرات دورية. لكن المفاجأة كانت صادمة. تفكيك المعدات السليمة "
    "تسبب في زيادة الأعطال المفاجئة. دراسة الطيران المدني الشهيرة نولان وهيب أثبتت أن تسعة "
    "وثمانين بالمئة من الأعطال عشوائية تماماً ولا علاقة لها بالعمر الزمني."
)

# 2. Smart Pacing approach: Pedagogical pauses, calm delivery (-5%), rhetorical structure
segments = [
    ("intro", "هذا الكورس مقدم برعاية GridFix.", 0.8),
    ("title", "أهلاً بكم في أكاديمية GridFix... مع درس أنماط الأعطال، ونظرية التقادم.", 1.2),
    ("question", "هل تعطل المعدات... مرتبط دائماً بمرور الزمن وتقدم العمر؟", 0.9),
    ("shock", "الإجابة الصادمة التي غيّرت وجه هندسة الصيانة في العالم... هي: لا!", 0.8),
    ("history", "حتى أواخر السبعينيات... كان المهندسون يعتقدون أن أي معدة، ستنهار حتماً كلما تقدم بها العمر. ولذلك... كانوا يفككون الآلات السليمة في مواعيد ثابتة لعمل عمرات وقائية.", 0.7),
    ("paradox", "ولكن ماذا حدث؟... كلما زادت العمرات الدورية، زادت الأعطال المفاجئة، وارتفعت معدلات التوقف!", 1.0),
    ("discovery", "هنا جاءت دراسة نولان وهيب التاريخية على أساطيل الطيران الأمريكي، لتكشف الحقيقة الكبرى:", 0.6),
    ("conclusion", "تسعة وثمانون بالمئة من أعطال المعدات الحديثة... هي أعطال عشوائية تماماً! لا تحميها الصيانة بالتقويم الزمني، بل تتطلب مراقبة الحالة، والصيانة التنبؤية.", 1.5),
]

async def generate():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    continuous_path = os.path.join(OUTPUT_DIR, "sample_1_continuous.mp3")
    print(f"Generating 1. Continuous stream ({VOICE})...")
    await edge_tts.Communicate(text_continuous, VOICE).save(continuous_path)
    print("   Continuous audio ready.")

    print(f"Generating 2. Smart-paced stream with pedagogical pauses ({VOICE}, rate=-5%)...")
    concat_lines = []
    
    for i, (name, text, pause_sec) in enumerate(segments):
        part_path = os.path.join(OUTPUT_DIR, f"temp_{i}_{name}.mp3")
        silence_path = os.path.join(OUTPUT_DIR, f"temp_silence_{i}.mp3")
        
        # Narration with calm pacing
        await edge_tts.Communicate(text, VOICE, rate="-5%").save(part_path)
        
        # Generate silence interval with ffmpeg matching the sample rate
        subprocess.run([
            FFMPEG, "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
            "-t", str(pause_sec), "-q:a", "9", "-acodec", "libmp3lame", silence_path
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        
        concat_lines.append(f"file '{os.path.abspath(part_path)}'")
        concat_lines.append(f"file '{os.path.abspath(silence_path)}'")

    concat_file = os.path.join(OUTPUT_DIR, "smart_concat.txt")
    with open(concat_file, "w", encoding="utf-8") as f:
        f.write("\n".join(concat_lines) + "\n")

    smart_path = os.path.join(OUTPUT_DIR, "sample_2_smart_paced.mp3")
    subprocess.run([
        FFMPEG, "-y", "-f", "concat", "-safe", "0",
        "-i", concat_file, "-c", "copy", smart_path
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    print(f"   Smart-paced audio ready: {smart_path}")

    # Clean up temporary part files
    for i, (name, _, _) in enumerate(segments):
        for prefix in ["temp_", "temp_silence_"]:
            fpath = os.path.join(OUTPUT_DIR, f"{prefix}{i}_{name}.mp3" if prefix == "temp_" else f"{prefix}{i}.mp3")
            if os.path.exists(fpath):
                os.remove(fpath)
    if os.path.exists(concat_file):
        os.remove(concat_file)

    # Print duration comparisons
    print("\n--- Audio Comparison Report ---")
    for label, path in [("1. Continuous (Old Way)", continuous_path), ("2. Smart Paced (New Pedagogical Way)", smart_path)]:
        res = subprocess.run([FFMPEG, "-i", path], capture_output=True, text=True, errors="ignore")
        duration_str = "Unknown"
        for line in res.stderr.splitlines():
            if "Duration:" in line:
                duration_str = line.split("Duration:")[1].split(",")[0].strip()
                break
        size_kb = os.path.getsize(path) / 1024
        print(f"{label}:")
        print(f"   Path: {path}")
        print(f"   Duration: {duration_str}")
        print(f"   File size: {size_kb:.1f} KB")

if __name__ == "__main__":
    asyncio.run(generate())
