import os
import sys
import subprocess
import imageio_ffmpeg
from google import genai
from google.genai import types
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
PROJECT_DIR = r"d:\programming\gridfix-academy"
OUTPUT_DIR = os.path.join(PROJECT_DIR, r"dist\videos\dynamic_sample")
SLIDES_DIR = os.path.join(OUTPUT_DIR, "slides")
AUDIO_DIR = os.path.join(OUTPUT_DIR, "audio")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(SLIDES_DIR, exist_ok=True)
os.makedirs(AUDIO_DIR, exist_ok=True)

# Load GEMINI_API_KEY
api_key = None
with open(".env", "r", encoding="utf-8") as f:
    for line in f:
        if line.startswith("GEMINI_API_KEY="):
            api_key = line.strip().split("=", 1)[1]
            break

client = genai.Client(api_key=api_key, http_options={"api_version": "v1alpha"})
VOICE_NAME = "Charon"

# Micro-beats for progressive reveal (each beat has its own focused visual state)
beats = [
    {
        "id": "beat-1",
        "badge": "سؤال البداية",
        "badgeIcon": "🤔",
        "narration": "خليني أسألك سؤال بصراحة يا باشمهندس... لو عندك معدة في المصنع أو المنشأة شغالة بكفاءة، هل منطقي توقفها عشان تفكها وتعملها عمرة؟",
        "visualState": "question",
        "title": "هل تعطل المعدات مرتبط دائماً بمرور الزمن وتقدم العمر؟"
    },
    {
        "id": "beat-2",
        "badge": "المفاجأة الصادمة",
        "badgeIcon": "⚡",
        "narration": "زمان كنا فاكرين إن ده قمة الصح! بس المفاجأة اللي صدمت مهندسي الطيران سنة 1978... كانت الإجابة: لأ!",
        "visualState": "shock_answer",
        "title": "الإجابة الصادمة التي أثبتتها دراسة الطيران المدني: لا!"
    },
    {
        "id": "beat-3",
        "badge": "الافتراض القديم",
        "badgeIcon": "❌",
        "narration": "لحد السبعينيات، كان الاعتقاد السائد إن كل ما المعدة كبرت في السن، زادت احتمالية عطلها حتماً... وده اللي بنسميه منحنى حوض الاستحمام التقليدي.",
        "visualState": "comparison_step1",
        "title": "الافتراض التقليدي القديم (وهم التآكل الحتمي بالزمن)"
    },
    {
        "id": "beat-4",
        "badge": "الحقيقة العلمية",
        "badgeIcon": "✅",
        "narration": "لكن دراسة أساطيل الطيران الأمريكي أثبتت العكس تماماً: تفكيك المعدات السليمة في مواعيد ثابتة... بيرفع معدل الأعطال المفاجئة!",
        "visualState": "comparison_step2",
        "title": "الحقيقة المثبتة: تفكيك المعدات السليمة يرفع التوقفات المفاجئة"
    },
    {
        "id": "beat-5",
        "badge": "المجموعة الأولى (11%)",
        "badgeIcon": "⏱️",
        "narration": "الدراسة قسمت الأعطال لمجموعتين: الأولى مرتبطة بالعمر، ودي بتمثل فقط 11% من الأصول البسيطة زي تيل الفرامل والفلاتر... وهنا بس تنفع الصيانة بالزمن.",
        "visualState": "distribution_step1",
        "title": "11% فقط من الأعطال مرتبطة بالعمر الزمني (Time-Based PM)"
    },
    {
        "id": "beat-6",
        "badge": "الصدمة الكبرى (89%)",
        "badgeIcon": "🚨",
        "narration": "أما الصدمة الكبرى اللي لازم تحفظها لامتحان سي إم آر بي: 89% من أعطال المعدات الحديثة عشوائية تماماً! الصيانة بالزمن بتفشل معاها، والحل هو مراقبة الحالة CBM.",
        "visualState": "distribution_step2",
        "title": "89% أعطال عشوائية تماماً تفشل معها الصيانة بالتقويم الزمني!"
    },
    {
        "id": "beat-7",
        "badge": "وفيات الرضع (النمط F)",
        "badgeIcon": "📉",
        "narration": "وأهم منحنى في الستة هو النمط F: وفيات الرضع، وبيمثل لوحده 68% من الأعطال! احتمالية فشل عالية جداً بعد العمرة مباشرة نتيجة أخطاء التركيب والتشحيم.",
        "visualState": "curve_f_reveal",
        "title": "النمط F: وفيات الرضع (68%) بعد التدخل البشري والعمرات مباشرة"
    },
    {
        "id": "beat-8",
        "badge": "القاعدة الذهبية",
        "badgeIcon": "🏆",
        "narration": "القاعدة الذهبية: شكل المنحنى هو اللي بيحدد استراتيجية الصيانة، مش تاريخ التقويم! تقدر تجرب مستكشف المنحنيات التفاعلي مجاناً على منصة GridFix.",
        "visualState": "golden_rule",
        "title": "شكل منحنى العطل هو المعيار الوحيد لاختيار استراتيجية الصيانة"
    }
]

def generate_friendly_audio():
    print("=== 1. Generating Friendly Conversational Audio for Each Beat ===")
    
    config = types.GenerateContentConfig(
        response_modalities=["AUDIO"],
        speech_config=types.SpeechConfig(
            voice_config=types.VoiceConfig(
                prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=VOICE_NAME)
            )
        )
    )

    audio_files = []
    for idx, b in enumerate(beats):
        pcm_path = os.path.join(AUDIO_DIR, f"beat_{idx+1}.pcm")
        mp3_path = os.path.join(AUDIO_DIR, f"beat_{idx+1}.mp3")
        
        prompt = f"""
You are an experienced, warm, friendly engineering colleague speaking casually and passionately to a fellow engineer over coffee.
Tone: Friendly, relaxed, engaging, warm Egyptian professional cadence (طريقة مهندس مصري فصيحة وودية جداً، بدون أي رسمية مبالغة أو نبرة قارئ كتب).
Pronounce technical abbreviations (CMRP, CBM, F) naturally.

Text:
{b['narration']}
""".strip()

        print(f"   [{idx+1}/{len(beats)}] Generating audio for: {b['badge']}...")
        resp = client.models.generate_content(
            model="gemini-2.5-flash-preview-tts",
            contents=prompt,
            config=config,
        )
        
        for part in resp.parts:
            if part.inline_data:
                with open(pcm_path, "wb") as f:
                    f.write(part.inline_data.data)
                break
                
        # Convert PCM to MP3
        cmd = [
            FFMPEG, "-y",
            "-f", "s16le",
            "-ar", "24000",
            "-ac", "1",
            "-i", pcm_path,
            "-c:a", "libmp3lame",
            "-b:a", "128k",
            mp3_path
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        if os.path.exists(pcm_path):
            os.remove(pcm_path)
            
        # Get exact audio duration
        res = subprocess.run([FFMPEG, "-i", mp3_path], capture_output=True, text=True, errors="ignore")
        dur = 8.0
        for line in res.stderr.splitlines():
            if "Duration:" in line:
                parts = line.split("Duration:")[1].split(",")[0].strip()
                h, m, s = parts.split(":")
                dur = float(h) * 3600 + float(m) * 60 + float(s)
                break
        b["duration"] = dur
        b["audio_path"] = mp3_path
        audio_files.append(mp3_path)
        print(f"         Exact Duration: {dur:.2f}s (Synchronized to millisecond)")
        
    # Stitch all audio parts
    concat_list = os.path.join(OUTPUT_DIR, "concat_audio.txt")
    with open(concat_list, "w", encoding="utf-8") as f:
        for p in audio_files:
            f.write(f"file '{os.path.abspath(p)}'\n")
            
    final_audio = os.path.join(OUTPUT_DIR, "full_audio.mp3")
    cmd = [FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", concat_list, "-c", "copy", final_audio]
    subprocess.run(cmd, check=True, capture_output=True)
    return final_audio

def build_slide_html(b, idx, total):
    # Generates a clean slide with NO FOOTER, and focused on progressive reveal
    vstate = b["visualState"]
    
    center_content = ""
    
    if vstate == "question":
        center_content = f'''
        <div style="text-align: center; padding: 60px 40px;">
            <div style="font-size: 80px; margin-bottom: 24px;">🤔</div>
            <h1 style="font-size: 54px; font-weight: 900; line-height: 1.4; color: #ffffff; max-width: 1400px; margin: 0 auto;">
                هل تعطل المعدات في منشأتك...<br>
                <span style="color: #38bdf8;">مرتبط دائماً بمرور الزمن وتقدم العمر التشغيلي؟</span>
            </h1>
            <div style="margin-top: 36px; display: inline-block; background: rgba(56,189,248,0.15); border: 2px dashed rgba(56,189,248,0.4); padding: 14px 36px; border-radius: 20px; font-size: 26px; color: #93c5fd; font-weight: 700;">
                سؤال غيّر تاريخ إدارة الصيانة والموثوقية في العالم
            </div>
        </div>
        '''
    elif vstate == "shock_answer":
        center_content = f'''
        <div style="text-align: center; padding: 50px 40px;">
            <div style="display: inline-block; background: rgba(244,63,94,0.2); border: 3px solid #f43f5e; border-radius: 36px; padding: 24px 64px; margin-bottom: 30px; box-shadow: 0 0 50px rgba(244,63,94,0.4);">
                <span style="font-size: 80px; font-weight: 900; color: #f43f5e; letter-spacing: 2px;">الإجابة: لا! ❌</span>
            </div>
            <h2 style="font-size: 42px; font-weight: 900; color: #f8fafc; line-height: 1.4; max-width: 1300px; margin: 0 auto;">
                دراسة أساطيل الطيران الأمريكي (1978) أثبتت:<br>
                <span style="color: #fcd34d;">احتمالية الفشل لا تُقاس بعمر المعدة</span> بل بالاحتمال الشرطي لحدوث العطل!
            </h2>
        </div>
        '''
    elif vstate == "comparison_step1":
        # Point 1 appears ALONE first
        center_content = f'''
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 24px;">
                <span style="background: rgba(245,158,11,0.2); color: #fcd34d; padding: 6px 24px; border-radius: 14px; font-size: 20px; font-weight: 800;">المعضلة الهندسية الكبرى • النقطة 1</span>
            </div>
            <div style="background: rgba(244,63,94,0.12); border: 3px solid #f43f5e; border-radius: 28px; padding: 44px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
                <div style="font-size: 54px; margin-bottom: 12px;">❌</div>
                <div style="color: #f43f5e; font-size: 26px; font-weight: 900; margin-bottom: 8px;">الافتراض التقليدي القديم</div>
                <div style="color: #ffffff; font-size: 44px; font-weight: 900; margin-bottom: 16px;">التآكل الحتمي بمرور الزمن</div>
                <div style="color: #cbd5e1; font-size: 24px; font-weight: 600; line-height: 1.6; max-width: 900px; margin: 0 auto;">
                    الاعتقاد الخاطئ بأن كل معدة كلما زاد عمرها زاد احتمال عطلها حتماً (منحنى حوض الاستحمام التقليدي).
                </div>
            </div>
        </div>
        '''
    elif vstate == "comparison_step2":
        # Point 2 slides in alongside Point 1
        center_content = f'''
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1600px; margin: 0 auto; align-items: stretch;">
            <div style="background: rgba(244,63,94,0.08); border: 2px solid rgba(244,63,94,0.3); border-radius: 28px; padding: 36px; text-align: right; opacity: 0.65;">
                <div style="color: #f43f5e; font-size: 20px; font-weight: 900; margin-bottom: 8px;">❌ الافتراض القديم الخاطئ</div>
                <div style="color: #ffffff; font-size: 32px; font-weight: 900; margin-bottom: 12px;">تآكل حتمي بالزمن</div>
                <div style="color: #cbd5e1; font-size: 20px; font-weight: 600; line-height: 1.5;">كلما زاد عمر المعدة زاد احتمال فشلها حتماً.</div>
            </div>
            
            <div style="background: rgba(20,184,166,0.18); border: 3px solid #14b8a6; border-radius: 28px; padding: 36px; text-align: right; box-shadow: 0 0 35px rgba(20,184,166,0.3);">
                <div style="color: #14b8a6; font-size: 20px; font-weight: 900; margin-bottom: 8px;">✅ الحقيقة الإحصائية المثبتة</div>
                <div style="color: #ffffff; font-size: 32px; font-weight: 900; margin-bottom: 12px;">احتمال شرطي بستة أنماط</div>
                <div style="color: #f0fdfa; font-size: 20px; font-weight: 700; line-height: 1.5;">
                    تفكيك المعدات السليمة في مواعيد ثابتة يرفع معدل الأعطال المفاجئة! الأعطال تسلك 6 أنماط فيزيائية مختلفة.
                </div>
            </div>
        </div>
        '''
    elif vstate == "distribution_step1":
        # 11% appears first
        center_content = f'''
        <div style="max-width: 1300px; margin: 0 auto; text-align: center;">
            <div style="margin-bottom: 20px;">
                <span style="background: rgba(56,189,248,0.2); color: #38bdf8; padding: 6px 24px; border-radius: 14px; font-size: 20px; font-weight: 800;">المجموعتان الكبريان للأعطال • المجموعة 1</span>
            </div>
            <div style="background: rgba(20,184,166,0.15); border: 3px solid #14b8a6; border-radius: 28px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
                <div style="font-size: 64px; font-weight: 900; color: #14b8a6; margin-bottom: 12px;">11% فقط</div>
                <div style="color: #ffffff; font-size: 36px; font-weight: 900; margin-bottom: 14px;">أعطال مرتبطة بالعمر الزمني (A, B, C)</div>
                <div style="color: #ccfbf1; font-size: 22px; font-weight: 600; line-height: 1.6; max-width: 900px; margin: 0 auto;">
                    تظهر فقط في القطع الميكانيكية البسيطة المعرضة للاحتكاك المباشر (تيل الفرامل، الفلاتر).<br>
                    <span style="color: #fcd34d; font-weight: 800;">مع هذه النسبة الضئيلة فقط تنجح الصيانة بالتقويم الزمني (Time-Based PM).</span>
                </div>
            </div>
        </div>
        '''
    elif vstate == "distribution_step2":
        # 89% pops in next to it with massive emphasis
        center_content = f'''
        <div style="max-width: 1500px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 28px; align-items: stretch;">
                <div style="background: rgba(20,184,166,0.1); border: 2px solid rgba(20,184,166,0.3); border-radius: 24px; padding: 32px; text-align: center; opacity: 0.65;">
                    <div style="font-size: 44px; font-weight: 900; color: #14b8a6;">11%</div>
                    <div style="color: #ffffff; font-size: 22px; font-weight: 800;">مرتبطة بالعمر</div>
                    <div style="color: #94a3b8; font-size: 16px; margin-top: 8px;">صيانة بالتقويم الزمني</div>
                </div>
                
                <div style="background: rgba(244,63,94,0.2); border: 3px solid #f43f5e; border-radius: 28px; padding: 36px; text-align: right; box-shadow: 0 0 45px rgba(244,63,94,0.4);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                        <span style="color: #f43f5e; font-size: 58px; font-weight: 900;">89%</span>
                        <span style="background: #f43f5e; color: white; padding: 6px 18px; border-radius: 12px; font-weight: 900; font-size: 20px;">الصدمة الكبرى</span>
                    </div>
                    <div style="color: #ffffff; font-size: 36px; font-weight: 900; margin-bottom: 10px;">أعطال عشوائية تماماً (D, E, F)</div>
                    <div style="color: #fecdd3; font-size: 21px; font-weight: 700; line-height: 1.5;">
                        الصيانة بالزمن تفشل معها تماماً! الحل الهندسي الوحيد هو الصيانة المشروطة بالحالة والمراقبة التنبؤية (Condition-Based Maintenance - CBM).
                    </div>
                </div>
            </div>
        </div>
        '''
    elif vstate == "curve_f_reveal":
        center_content = f'''
        <div style="max-width: 1400px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="background: rgba(244,63,94,0.2); color: #f43f5e; padding: 6px 24px; border-radius: 14px; font-size: 20px; font-weight: 800;">أهم نمط في امتحان CMRP</span>
            </div>
            <div style="background: rgba(30,41,59,0.9); border: 3px solid #f43f5e; border-radius: 28px; padding: 40px; box-shadow: 0 25px 50px rgba(0,0,0,0.6);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div>
                        <span style="background: #f43f5e; color: white; padding: 8px 20px; border-radius: 12px; font-weight: 900; font-size: 28px;">النمط F</span>
                        <span style="color: #ffffff; font-size: 34px; font-weight: 900; margin-right: 16px;">وفيات الرضع (Infant Mortality)</span>
                    </div>
                    <div style="color: #f43f5e; font-size: 64px; font-weight: 900; font-family: monospace;">68%</div>
                </div>
                
                <svg viewBox="0 0 800 160" style="width: 100%; height: 130px; margin: 16px 0;">
                    <line x1="50" y1="140" x2="750" y2="140" stroke="rgba(255,255,255,0.2)" stroke-width="3" />
                    <line x1="50" y1="20" x2="50" y2="140" stroke="rgba(255,255,255,0.2)" stroke-width="3" />
                    <!-- Curve F: High start, rapid drop, flat -->
                    <path d="M 50,30 Q 150,130 300,132 L 750,132" fill="none" stroke="#f43f5e" stroke-width="7" stroke-linecap="round" />
                    <text x="70" y="25" fill="#f43f5e" font-size="18" font-weight="bold">فشل مرتفع بعد التركيب أو العمرة</text>
                    <text x="500" y="125" fill="#94a3b8" font-size="18">استقرار بمستوى منخفض</text>
                </svg>
                
                <div style="color: #cbd5e1; font-size: 21px; line-height: 1.6; font-weight: 600; margin-top: 10px;">
                    سبب ارتفاعه لـ 68%: أخطاء التدخل البشري أثناء الفك والتركيب (محاذاة خاطئة، تشحيم زائد، دخول شوائب).<br>
                    <span style="color: #fcd34d; font-weight: 800;">الاستبدال الزمني الدوري ضار جداً معه!</span>
                </div>
            </div>
        </div>
        '''
    elif vstate == "golden_rule":
        center_content = f'''
        <div style="text-align: center; padding: 40px; max-width: 1300px; margin: 0 auto;">
            <div style="font-size: 70px; margin-bottom: 20px;">🏆</div>
            <div style="display: inline-block; background: rgba(245,158,11,0.2); border: 2px solid #f59e0b; padding: 12px 36px; border-radius: 20px; margin-bottom: 24px;">
                <span style="color: #fcd34d; font-size: 26px; font-weight: 900;">القاعدة الهندسية الذهبية لمدير الصيانة</span>
            </div>
            <h1 style="font-size: 46px; font-weight: 900; color: #ffffff; line-height: 1.4; margin-bottom: 28px;">
                شكل منحنى العطل هو المعيار الوحيد لاختيار الاستراتيجية...<br>
                <span style="color: #38bdf8;">وليس موعد تقويم السنة على الحائط!</span>
            </h1>
            <div style="background: rgba(15,23,42,0.8); border: 2px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 22px 40px; display: inline-block;">
                <span style="color: #cbd5e1; font-size: 22px; font-weight: 700;">جرب مستكشف المنحنيات التفاعلي وبنك أسئلة CMRP مجاناً عبر:</span>
                <span style="color: #f59e0b; font-size: 24px; font-weight: 900; margin-right: 12px;">academy.gridfix.net</span>
            </div>
        </div>
        '''

    # Notice: NO FOOTER WHATSOEVER! Just clean header + focused progressive center card
    html = f'''<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800;900&display=swap');
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 1920px;
    height: 1080px;
    background: radial-gradient(circle at 50% 30%, #1e293b 0%, #0f172a 60%, #020617 100%);
    font-family: 'Cairo', system-ui, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 44px 70px 48px 70px;
    overflow: hidden;
    position: relative;
  }}
  .header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(255,255,255,0.1);
    padding-bottom: 20px;
  }}
  .logo {{
    display: flex;
    align-items: center;
    gap: 16px;
  }}
  .logo-badge {{
    background: linear-gradient(135deg, #059669, #0d9488);
    color: white;
    padding: 8px 22px;
    border-radius: 14px;
    font-weight: 900;
    font-size: 22px;
    box-shadow: 0 4px 14px rgba(5,150,105,0.3);
  }}
  .course-title {{
    font-size: 24px;
    color: #94a3b8;
    font-weight: 700;
  }}
  .channel-brand {{
    font-size: 22px;
    color: #f59e0b;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(15,23,42,0.85);
    border: 1px solid rgba(245, 158, 11, 0.4);
    padding: 8px 24px;
    border-radius: 18px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.4);
  }}
  .main-container {{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }}
  /* Sleek smooth progress bar at bottom with NO text footer */
  .in-video-progress-bar {{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 7px;
    width: {max(5, int(((idx + 1) / total) * 100))}%;
    background: linear-gradient(90deg, #0284c7, #38bdf8, #f59e0b);
    box-shadow: 0 0 16px rgba(56,189,248,0.9);
  }}
</style>
</head>
<body>
  <div class="header">
    <div class="logo">
      <div class="logo-badge">CMRP • المحطة 1</div>
      <div class="course-title">الدرس 1.1: أنماط الأعطال ونظرية التقادم</div>
    </div>
    <div class="channel-brand">
      <span>🎓</span>
      <span>GridFix Academy — أكاديمية جريد فيكس</span>
    </div>
  </div>

  <div class="main-container">
    {center_content}
  </div>

  <!-- NO TEXT FOOTER, ONLY SUBTLE PROGRESS LINE -->
  <div class="in-video-progress-bar"></div>
</body>
</html>'''
    return html

def render_slides():
    print("=== 2. Rendering Progressive 1080p Slides via Playwright ===")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        
        for idx, b in enumerate(beats):
            html = build_slide_html(b, idx, len(beats))
            html_file = os.path.join(SLIDES_DIR, f"slide_{idx+1}.html")
            png_file = os.path.join(SLIDES_DIR, f"slide_{idx+1}.png")
            
            with open(html_file, "w", encoding="utf-8") as f:
                f.write(html)
                
            page.goto(f"file:///{os.path.abspath(html_file)}")
            page.wait_for_timeout(300)
            page.screenshot(path=png_file, full_page=True)
            b["slide_img"] = png_file
            print(f"   [Beat {idx+1}/{len(beats)}] Rendered: {b['visualState']}")
            
        browser.close()

def render_final_video(audio_file):
    print("=== 3. Encoding Progressive Explainer MP4 with Zero Dead Silence ===")
    output_mp4 = os.path.join(OUTPUT_DIR, "explainer_progressive_sample.mp4")
    
    concat_script = os.path.join(OUTPUT_DIR, "concat_slides.txt")
    with open(concat_script, "w", encoding="utf-8") as f:
        for idx, b in enumerate(beats):
            f.write(f"file '{os.path.abspath(b['slide_img'])}'\n")
            f.write(f"duration {b['duration']:.2f}\n")
        # FFmpeg requirement: duplicate last slide
        f.write(f"file '{os.path.abspath(beats[-1]['slide_img'])}'\n")
        
    cmd = [
        FFMPEG, "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_script,
        "-i", audio_file,
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        output_mp4
    ]
    
    print("   Running FFmpeg encoding...")
    subprocess.run(cmd, check=True, capture_output=True)
    size_mb = os.path.getsize(output_mp4) / (1024 * 1024)
    print(f"=== Video Successfully Exported! ===")
    print(f"   Path: {output_mp4}")
    print(f"   Size: {size_mb:.2f} MB")
    return output_mp4

def main():
    final_audio = generate_friendly_audio()
    render_slides()
    render_final_video(final_audio)

if __name__ == "__main__":
    main()
