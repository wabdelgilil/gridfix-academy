import os
import subprocess
import imageio_ffmpeg
from google import genai
from google.genai import types

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
VOICE = "Charon"
MODEL = "gemini-2.5-flash-preview-tts"
OUTPUT_DIR = "public/audio/cmrp/station-1"
TEMP_DIR = "public/audio/test/_temp_gemini"

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

# Load API key
with open(".env", "r", encoding="utf-8") as f:
    api_key = [line.strip().split("=", 1)[1] for line in f if line.startswith("GEMINI_API_KEY=")][0]

client = genai.Client(api_key=api_key, http_options={"api_version": "v1alpha"})

# Structured sections for Lesson 1-1 with calibrated pedagogical pauses
sections = [
    # 0: Sponsorship Intro
    ("00_intro", "هذا الكورس مقدم برعاية GridFix.", 1.0),

    # 1: Lesson Title & Hook
    ("01_hook", 
     "أهلاً بكم في أكاديمية GridFix، مع كورس هندسة الصيانة وإدارة الأصول... الدرس الأول: أنماط الأعطال ونظرية التقادم.\n"
     "السؤال الذي غيّر تاريخ إدارة الصيانة والموثوقية في العالم: هل تعطل المعدات... مرتبط دائماً بمرور الزمن وتقدم العمر التشغيلي؟\n"
     "الإجابة الصادمة التي أثبتتها الأرقام... هي: لا!", 1.2),

    # 2: Section 1 - Nowlan & Heap Study
    ("02_nowlan_heap",
     "حتى أواخر سبعينيات القرن الماضي، كان الاعتقاد السائد بين المهندسين أن كل معدة، كلما زاد عمرها وساعات تشغيلها، زادت احتمالية تعطلها حتماً.\n"
     "وبناءً على هذه الفرضية، كانت الشركات تنفق مبالغ طائلة على تفكيك المعدات السليمة واستبدال القطع في مواعيد تقويمية ثابتة.\n"
     "ولكن المفاجأة كانت عكسية تماماً: زيادة العمرات الوقائية كانت تترافق مع ارتفاع معدلات الأعطال والتوقفات المفاجئة!\n"
     "هذه المعضلة دفعت إدارة الطيران الفيدرالية الأمريكية عام 1978 لتكليف العالمين ستانلي نولان وتوماس هيب بدراسة سلوك آلاف المكونات في أساطيل الطائرات.\n"
     "والنتيجة كانت ثورة علمية: احتمالية الفشل لا تقاس بعمر المعدة، بل بالاحتمالية الشرطية لحدوث العطل خلال الفترة القادمة بشرط أنها عملت بنجاح حتى اللحظة الحالية.", 1.2),

    # 3: Section 2 - Two Major Groups (11% vs 89%)
    ("03_two_groups",
     "قسّمت دراسة نولان وهيب الأعطال إلى مجموعتين رئيستين:\n"
     "المجموعة الأولى: الأعطال المرتبطة بالعمر الزمني، وتمثل فقط أحد عشر بالمئة من إجمالي الأعطال. تتميز بوجود منطقة تقادم واضحة يمكن التنبؤ بها، وتظهر في الأجزاء الميكانيكية البسيطة المعرضة للاحتكاك المباشر كالإطارات وبطانات الفرامل والفلاتر. مع هذه النسبة الضئيلة فقط تنجح الصيانة الوقائية بالتقويم الزمني.\n"
     "أما المجموعة الثانية: فهي الأعطال العشوائية غير المرتبطة بالعمر، وتمثل تسعة وثمانين بالمئة من أعطال المعدات الحديثة! احتمالية العطل فيها ثابتة في أي لحظة أو ترتفع بعد التركيب مباشرة، وتظهر في الإلكترونيات والأنظمة الهيدروليكية والتجميعات الدوارة المعقدة. ومع هذه النسبة الساحقة، فإن الصيانة بالزمن لا تفيد، بل تزيد من احتمالية الانهيار.", 1.2),

    # 4: Section 3 - Six Curves
    ("04_six_curves",
     "حددت الدراسة ستة أنماط فيزيائية دقيقة للأعطال:\n"
     "النمط إف: وهو وفيات الرضع، ويمثل ثمانية وستين بالمئة من الأعطال! احتمالية فشل مرتفعة جداً بعد التركيب أو العمرة مباشرة، ثم تستقر.\n"
     "النمط إي: وهو العشوائي التام، ويمثل أربعة عشر بالمئة، باحتمالية ثابتة من أول يوم تشغيل دون أي علامة تقادم.\n"
     "النمط دي: البداية المنخفضة ثم الاستقرار، ويمثل سبعة بالمئة.\n"
     "النمط سي: التعب والإجهاد التدريجي، ويمثل خمسة بالمئة.\n"
     "النمط إيه: منحنى حوض الاستحمام التقليدي الشهير، ولكنه في الحقيقة لا يمثل سوى أربعة بالمئة فقط من معدات الصناعة!\n"
     "وأخيراً النمط بي: التآكل الصريح مع استهلاك المادة، ويمثل اثنين بالمئة فقط.\n"
     "القاعدة الذهبية: شكل المنحنى هو الذي يحدد استراتيجية الصيانة، فالمنحنيات المسطحة والمتناقصة تتطلب المراقبة المشروطة بالحالة، ولا يصلح معها الاستبدال بالتقويم الزمني.", 1.2),

    # 5: Section 4 - Infant Mortality & Human Intervention
    ("05_infant_mortality",
     "السؤال المحوري: لماذا يمثل نمط وفيات الرضع وحده ثمانية وستين بالمئة من الأعطال؟\n"
     "السبب يكمن في التدخل البشري أثناء الفك وإعادة التجميع، وهو ما يُعرف بالأعطال المستحثة بالصيانة.\n"
     "أشهر أسبابها: أخطاء المحاذاة وعدم اتزان الدوار بالليزر، والتشحيم الزائد الذي يخنق المحامل ويرفع حرارتها، ودخول الأتربة والرطوبة إلى داخل المعدات أثناء فتحها.\n"
     "لذلك، فإن كل تفكيك غير مبرر لمعدة تعمل بكفاءة... هو مجازفة هندسية ترفع معدل وفيات الرضع بدلاً من خفضه.", 1.2),

    # 6: Section 5 - Engineering Decision Criterion & Conclusion
    ("06_conclusion",
     "المعيار الهندسي الفاصل لتطبيق الصيانة الوقائية بالتقويم الزمني معيار فيزيائي صارم:\n"
     "يجب إثبات وجود نقطة اهتراء وتقادم حتمية ومؤكدة إحصائياً يرتفع عندها معدل الخطر بشكل حاد، وهذا لا يتحقق إلا في أحد عشر بالمئة فقط من الأصول.\n"
     "أما في غياب هذا الدليل، فإن الصيانة المشروطة بالحالة، والمراقبة التنبؤية بالاهتزازات والحرارة، هي الخيار الهندسي والاقتصادي الصحيح.\n"
     "هذا الفهم هو الأساس المتين لمنهجية الصيانة المعتمدة على الموثوقية، وهو الركيزة الأساسية لامتحان المحترفين المعتمدين في الصيانة والموثوقية سي إم آر بي.\n"
     "شكراً لمتابعتكم، ونلتقي في الدرس القادم مع استراتيجيات الصيانة المعتمدة على الموثوقية.", 1.5)
]

def generate():
    concat_lines = []
    
    print(f"=== Generating Full Lesson CMRP 1.1 Audio via Gemini Flash (Voice: {VOICE}) ===")
    
    config = types.GenerateContentConfig(
        response_modalities=["AUDIO"],
        speech_config=types.SpeechConfig(
            voice_config=types.VoiceConfig(
                prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=VOICE)
            )
        )
    )

    for idx, (tag, text, pause_sec) in enumerate(sections):
        part_pcm = os.path.join(TEMP_DIR, f"{tag}.pcm")
        part_wav = os.path.join(TEMP_DIR, f"{tag}.wav")
        silence_wav = os.path.join(TEMP_DIR, f"{tag}_silence.wav")
        
        prompt = f"Read the following text aloud exactly as written in Arabic:\n{text.strip()}"
        print(f"[{idx+1}/{len(sections)}] Requesting {tag} from Gemini Flash TTS...")
        
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=config
        )
        
        pcm_bytes = response.parts[0].inline_data.data
        with open(part_pcm, "wb") as f:
            f.write(pcm_bytes)
            
        # Convert PCM to standardized WAV (24000Hz mono 16-bit)
        subprocess.run([
            FFMPEG, "-y", "-f", "s16le", "-ar", "24000", "-ac", "1",
            "-i", part_pcm, part_wav
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        
        # Generate exact calibrated silence
        subprocess.run([
            FFMPEG, "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
            "-t", str(pause_sec), silence_wav
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        
        concat_lines.append(f"file '{os.path.abspath(part_wav)}'")
        concat_lines.append(f"file '{os.path.abspath(silence_wav)}'")
        
        if os.path.exists(part_pcm):
            os.remove(part_pcm)

    concat_manifest = os.path.join(TEMP_DIR, "concat_manifest.txt")
    with open(concat_manifest, "w", encoding="utf-8") as f:
        f.write("\n".join(concat_lines) + "\n")

    final_mp3 = os.path.join(OUTPUT_DIR, "lesson-cmrp-1-1.mp3")
    print(f"\nStitching all sections with calibrated pauses and encoding to LAME MP3 64kbps mono...")
    cmd = [
        FFMPEG, "-y", "-f", "concat", "-safe", "0",
        "-i", concat_manifest,
        "-c:a", "libmp3lame",
        "-b:a", "64k",
        final_mp3
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    print(f"SUCCESS: Final audio deliverable ready at: {final_mp3}")

    # Check duration
    res = subprocess.run([FFMPEG, "-i", final_mp3], capture_output=True, text=True, errors="ignore")
    duration_str = "Unknown"
    for line in res.stderr.splitlines():
        if "Duration:" in line:
            duration_str = line.split("Duration:")[1].split(",")[0].strip()
            print("Final Audio Duration: " + duration_str)

    # Clean up temp directory
    for f in os.listdir(TEMP_DIR):
        try:
            os.remove(os.path.join(TEMP_DIR, f))
        except Exception:
            pass
    try:
        os.rmdir(TEMP_DIR)
    except Exception:
        pass

if __name__ == "__main__":
    generate()
