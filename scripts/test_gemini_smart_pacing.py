import os
import subprocess
import imageio_ffmpeg
from google import genai
from google.genai import types

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
OUTPUT_DIR = "public/audio/test"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Load GEMINI_API_KEY from .env
api_key = None
with open(".env", "r", encoding="utf-8") as f:
    for line in f:
        if line.startswith("GEMINI_API_KEY="):
            api_key = line.strip().split("=", 1)[1]
            break

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=api_key, http_options={"api_version": "v1alpha"})

# Voices available: Puck, Charon, Kore, Fenrir, Aoede
# Let's test Charon (deeper male authoritative voice) and Puck
VOICE_NAME = "Charon"

prompt = """
You are a distinguished senior engineering instructor and reliability expert delivering an audio lecture for GridFix Academy.
Read the following Arabic lecture aloud with natural pedagogical pacing.
Guidelines for your voice and delivery:
1. Speak in a calm, confident, authoritative, and engaging tone.
2. Insert natural, deliberate pauses (about 1 second) after the title, after rhetorical questions, and before shocking discoveries so the student can digest the concepts.
3. Pronounce engineering terms and Arabic numbers clearly.
4. Do NOT read any stage directions or parenthetical cues aloud—only read the spoken lecture text.

Lecture text:
هذا الكورس مقدم برعاية GridFix.

أهلاً بكم في أكاديمية GridFix، مع درس: أنماط الأعطال، ونظرية التقادم.

هل تعطل المعدات... مرتبط دائماً بمرور الزمن وتقدم العمر التشغيلي؟

الإجابة الصادمة التي غيّرت وجه هندسة الصيانة في العالم... هي: لا!

حتى أواخر سبعينيات القرن الماضي... كان المهندسون يعتقدون أن أي معدة، ستنهار حتماً كلما تقدم بها العمر. ولذلك... كانوا يفككون الآلات السليمة في مواعيد ثابتة لعمل عمرات وقائية.

ولكن ماذا حدث؟... كلما زادت العمرات الدورية، ارتفعت الأعطال المفاجئة، وزادت معدلات التوقف غير المخطط!

هنا جاءت دراسة نولان وهيب التاريخية على أساطيل الطيران الأمريكي، لتكشف الحقيقة الكبرى:

تسعة وثمانون بالمئة من أعطال المعدات الحديثة... هي أعطال عشوائية تماماً! لا تحميها الصيانة بالتقويم الزمني، بل تتطلب مراقبة الحالة، والصيانة التنبؤية المشروطة.
""".strip()

config = types.GenerateContentConfig(
    response_modalities=["AUDIO"],
    speech_config=types.SpeechConfig(
        voice_config=types.VoiceConfig(
            prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=VOICE_NAME)
        )
    ),
)

print(f"1. Calling Gemini Flash TTS (voice: {VOICE_NAME})...")
response = client.models.generate_content(
    model="gemini-2.5-flash-preview-tts",
    contents=prompt,
    config=config,
)

pcm_data = None
for part in response.parts:
    if part.inline_data:
        pcm_data = part.inline_data.data
        break

if not pcm_data:
    raise RuntimeError("No audio data received from Gemini Flash TTS")

raw_pcm_path = os.path.join(OUTPUT_DIR, f"gemini_{VOICE_NAME.lower()}_raw.pcm")
with open(raw_pcm_path, "wb") as f:
    f.write(pcm_data)

mp3_output_path = os.path.join(OUTPUT_DIR, f"gemini_sample_1_1_{VOICE_NAME.lower()}.mp3")

# Convert raw PCM (24kHz, 16-bit signed, mono) to 64kbps MP3 via FFmpeg
print("2. Converting raw PCM to MP3 (64kbps mono)...")
cmd = [
    FFMPEG, "-y",
    "-f", "s16le",
    "-ar", "24000",
    "-ac", "1",
    "-i", raw_pcm_path,
    "-c:a", "libmp3lame",
    "-b:a", "64k",
    mp3_output_path,
]
subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
print(f"3. MP3 successfully created: {mp3_output_path}")

# Duration check
res = subprocess.run([FFMPEG, "-i", mp3_output_path], capture_output=True, text=True, errors="ignore")
for line in res.stderr.splitlines():
    if "Duration:" in line:
        print("   " + line.strip())

# Clean up raw PCM
if os.path.exists(raw_pcm_path):
    os.remove(raw_pcm_path)
