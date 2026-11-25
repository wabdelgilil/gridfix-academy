import os
import sys
import re
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
OUTPUT_DIR = os.path.join(PROJECT_DIR, r"dist\videos\pilot_gemini")
SLIDES_DIR = os.path.join(OUTPUT_DIR, "slides")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(SLIDES_DIR, exist_ok=True)

# Load GEMINI_API_KEY
api_key = None
with open(".env", "r", encoding="utf-8") as f:
    for line in f:
        if line.startswith("GEMINI_API_KEY="):
            api_key = line.strip().split("=", 1)[1]
            break

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=api_key, http_options={"api_version": "v1alpha"})
VOICE_NAME = "Charon"

scenes = [
    {
        "id": "scene-1",
        "badge": "المدخل والأساس العلمي",
        "badgeIcon": "📐",
        "title": "صدمة نولان وهيب ومعادلة الاحتمال الشرطي",
        "keyTakeaway": "احتمالية الفشل لا تُقاس بعمر المعدة، بل بالاحتمال الشرطي لحدوث العطل!",
        "detail": "دراسة أساطيل الطيران الأمريكي (1978) أثبتت أن احتمالية الفشل تحكمها طبيعة الإجهادات والتركيب، لا سنوات التشغيل.",
        "type": "formula",
        "formula": {
            "label": "معادلة الاحتمالية الشرطية للفشل — Conditional Probability of Failure",
            "expression": "P(t < T ≤ t + Δt | T > t) = λ(t)",
            "variables": [
                {"symbol": "T > t", "meaning": "المعدة عملت بنجاح حتى اللحظة الحالية (t)"},
                {"symbol": "Δt", "meaning": "احتمال حدوث العطل خلال الفترة القادمة"},
                {"symbol": "λ(t)", "meaning": "معدل الخطر اللحظي (Hazard Rate)"}
            ]
        },
        "text": (
            "هذا الكورس مقدم برعاية GridFix.\n\n"
            "أهلاً بكم في أكاديمية GridFix، مع كورس هندسة الصيانة والموثوقية، والتحضير لشهادة CMRP.\n\n"
            "الدرس الأول: أنماط الأعطال ونظرية التقادم.\n\n"
            "السؤال الذي غيّر تاريخ إدارة الصيانة والموثوقية في العالم: هل تعطل المعدات الصناعية... مرتبط دائماً بمرور الزمن وتقدم العمر التشغيلي؟\n\n"
            "الإجابة الصادمة التي أثبتتها الأرقام والدراسات الإحصائية... هي: لا!\n\n"
            "حتى أواخر سبعينيات القرن الماضي، كان الاعتقاد السائد بين المهندسين أن كل معدة، كلما زاد عمرها، زاد احتمال فشلها حتماً.\n\n"
            "وكانت الشركات تنفق مبالغ ضخمة على تفكيك المعدات السليمة واستبدال القطع في مواعيد تقويمية ثابتة.\n\n"
            "ولكن دراسة أساطيل الطيران الأمريكي عام 1978 للعالمين نولان وهيب أثبتت حقيقة مختلفة تماماً: احتمالية الفشل تحكمها الاحتمالية الشرطية لحدوث العطل، وليس مجرد سنوات التشغيل."
        )
    },
    {
        "id": "scene-2",
        "badge": "المعضلة الهندسية الكبرى",
        "badgeIcon": "⚖️",
        "title": "الاعتقاد التقليدي مقابل الحقيقة المثبتة",
        "keyTakeaway": "تفكيك المعدات السليمة في مواعيد زمنية ثابتة يرفع معدل التوقفات المفاجئة!",
        "detail": "زيادة العمرات الوقائية الدورية تسببت في زيادة الأعطال ومعدلات التوقف غير المخطط للمعدات.",
        "type": "comparison",
        "comparison": {
            "right": {
                "label": "الافتراض القديم الخاطئ",
                "value": "تآكل حتمي بالزمن",
                "desc": "كلما زاد عمر المعدة زاد احتمال فشلها حتماً (منحنى حوض الاستحمام التقليدي)"
            },
            "left": {
                "label": "الحقيقة الإحصائية المثبتة",
                "value": "احتمال شرطي بستة أنماط",
                "desc": "لا يوجد نمط واحد للأعطال بل 6 أنماط مختلفة تماماً في السلوك الفيزيائي للمعدات الحديثة"
            }
        },
        "text": (
            "المفاجأة الكبرى التي صدمت إدارات الصيانة كانت عكسية تماماً:\n\n"
            "زيادة العمرات الوقائية وتفكيك المعدات الدورية... تسببت في زيادة الأعطال وارتفاع معدلات التوقف المفاجئ!\n\n"
            "المهندسون اكتشفوا أن الافتراض القديم القائل بأن التآكل حتمي بالزمن يمثل وهماً هندسياً كبيراً.\n\n"
            "الحقيقة الإحصائية المثبتة علمياً هي أن الأعطال تسلك ستة أنماط فيزيائية مختلفة، وأن تفكيك المعدة السليمة في ميعاد زمني ثابت غالباً ما يضرها أكثر مما ينفعها."
        )
    },
    {
        "id": "scene-3",
        "badge": "المجموعتان الكبريان للأعطال",
        "badgeIcon": "📊",
        "title": "توزيع الأعطال: العشوائية مقابل المرتبطة بالعمر",
        "keyTakeaway": "89% من أعطال المعدات عشوائية تماماً وتفشل معها الصيانة بالتقويم الزمني!",
        "detail": "الصيانة الوقائية بالزمن تصلح فقط مع 11% من الأصول الميكانيكية البسيطة المعرضة للاحتكاك المباشر.",
        "type": "visualBar",
        "visualBar": {
            "title": "النسبة الإحصائية الحقيقية لأعطال المعدات الصناعية الحديثة",
            "left": {"percent": 89, "label": "89% أعطال عشوائية (D, E, F)", "desc": "تتطلب الصيانة المشروطة بالحالة والمراقبة التنبؤية (CBM)"},
            "right": {"percent": 11, "label": "11% مرتبطة بالعمر (A, B, C)", "desc": "تصلح معها الصيانة الوقائية بالتقويم الزمني (Time-Based PM)"}
        },
        "text": (
            "قسّمت دراسة نولان وهيب أعطال المعدات إلى مجموعتين رئيستين:\n\n"
            "المجموعة الأولى: الأعطال المرتبطة بالعمر الزمني، وتمثل فقط أحد عشر بالمئة من إجمالي الأعطال!\n\n"
            "تتميز بوجود منطقة تآكل وتقادم واضحة يمكن التنبؤ بها، وتظهر في الأجزاء الميكانيكية البسيطة المعرضة للاحتكاك المباشر كبطانات الفرامل والفلاتر وإطارات الشاحنات.\n\n"
            "ومع هذه النسبة الضئيلة فقط تنجح الصيانة الوقائية بالتقويم الزمني.\n\n"
            "أما الصدمة الكبرى، فهي المجموعة الثانية: تسعة وثمانون بالمئة من أعطال المعدات الحديثة هي أعطال عشوائية تماماً غير مرتبطة بالعمر!\n\n"
            "احتمالية العطل فيها تكون ثابتة في أي لحظة أو ترتفع بعد التركيب مباشرة، كما في الإلكترونيات والأنظمة الهيدروليكية المعقدة.\n\n"
            "ومع هذه النسبة الساحقة، فإن الصيانة بالتقويم الزمني تفشل تماماً، والحل الهندسي الوحيد هو الصيانة المشروطة بالحالة CBM."
        )
    },
    {
        "id": "scene-4",
        "badge": "المنحنيات الستة بالتفصيل",
        "badgeIcon": "📈",
        "title": "رسم المنحنيات الستة (The Six Failure Curves)",
        "keyTakeaway": "النمط F (وفيات الرضع) يمثل 68% بينما حوض الاستحمام A يمثل 4% فقط!",
        "detail": "شكل المنحنى يحدد استراتيجية الصيانة: المنحنيات المسطحة والمتناقصة لا يصلح معها استبدال زمني مطلقاً.",
        "type": "curves",
        "curvesGraphic": {
            "title": "الأنماط الثلاثة الأكثر أهمية في امتحان CMRP",
            "items": [
                {"letter": "F", "label": "وفيات الرضع (Infant Mortality)", "percent": "68%", "color": "#f43f5e"},
                {"letter": "E", "label": "عشوائي تام (Random)", "percent": "14%", "color": "#f43f5e"},
                {"letter": "A", "label": "حوض الاستحمام (Bathtub)", "percent": "4%", "color": "#14b8a6"}
            ]
        },
        "text": (
            "حددت الدراسة ستة أنماط فيزيائية دقيقة للأعطال، أهم ثلاثة منها لامتحان CMRP هي:\n\n"
            "أولاً: النمط F، وهو وفيات الرضع، ويمثل ثمانية وستين بالمئة من إجمالي الأعطال!\n\n"
            "احتمالية الفشل فيه تكون مرتفعة جداً بعد التركيب أو العمرة مباشرة، ثم تنخفض وتستقر.\n\n"
            "ثانياً: النمط E، وهو العشوائي التام، ويمثل أربعة عشر بالمئة، باحتمالية ثابتة من أول يوم تشغيل إلى آخر يوم دون أي علامة تقادم.\n\n"
            "وأخيراً النمط A، وهو منحنى حوض الاستحمام التقليدي الشهير، ولكنه في الحقيقة لا يمثل سوى أربعة بالمئة فقط من معدات الصناعة!\n\n"
            "القاعدة الذهبية: شكل المنحنى هو الذي يحدد استراتيجية الصيانة، فالمنحنيات المسطحة والمتناقصة تتطلب المراقبة المشروطة بالحالة، ولا يصلح معها الاستبدال الدوري بالتقويم الزمني مطلقاً."
        )
    },
    {
        "id": "scene-5",
        "badge": "قاعدة امتحان CMRP الذهبية",
        "badgeIcon": "⚠️",
        "title": "الأعطال المستحثة بالصيانة (Maintenance-Induced Failures)",
        "keyTakeaway": "كل تفكيك غير ضروري لمعدة سليمة هو مقامرة تُدخل عيوباً قاتلة!",
        "detail": "أخطاء المحاذاة، وزيادة تشحيم كراسي التحميل، ودخول الرطوبة، هي المسؤول الأول عن وفيات الرضع بعد العمرات.",
        "type": "flowchart",
        "flowchart": {
            "title": "سلسلة حدوث أعطال وفيات الرضع (النمط F)",
            "steps": [
                {"step": "1", "title": "عمرة دورية غير مبررة لمعدة سليمة", "desc": "تفكيك وإعادة تجميع ميكانيكي دون داعٍ"},
                {"step": "2", "title": "أخطاء بشرية أثناء التركيب والتزييت", "desc": "محاذاة خاطئة بالمسطرة أو زيادة شحم مفرطة"},
                {"step": "3", "title": "فشل مبكر فوري بعد التشغيل", "desc": "وفيات رضع خلال الساعات الأولى للتشغيل"}
            ]
        },
        "text": (
            "السؤال الجوهري: لماذا يمثل نمط وفيات الرضع F وحده ثمانية وستين بالمئة من الأعطال؟\n\n"
            "السبب يكمن في التدخل البشري أثناء الفك وإعادة التجميع، وهو ما يُعرف في هندسة الصيانة بالأعطال المستحثة بالصيانة Maintenance-Induced Failures.\n\n"
            "أشهر أسبابها: أخطاء المحاذاة وعدم اتزان الدوار بالليزر، والتشحيم الزائد الذي يخنق المحامل ويرفع حرارتها، ودخول الشوائب والأتربة أثناء فتح المعدات.\n\n"
            "لذلك، فإن كل تفكيك غير مبرر لمعدة تعمل بكفاءة... هو مجازفة هندسية تُدخل عيوباً جديدة وترفع وفيات الرضع بدلاً من خفضها."
        )
    },
    {
        "id": "scene-6",
        "badge": "الخلاصة الهندسية ومعيار القرار",
        "badgeIcon": "🏁",
        "title": "شجرة قرار اختيار نوع الصيانة (RCM Logic)",
        "keyTakeaway": "المعيار الوحيد للصيانة بالزمن هو وجود عمر تقادم إحصائي مؤكد (Wear-out Zone).",
        "detail": "إذا لم تكن هناك نقطة اهتراء واضحة، فالبديل الوحيد الصحيح هو المراقبة المشروطة بالحالة (CBM).",
        "type": "flowchart",
        "flowchart": {
            "title": "شجرة القرار الهندسي لاستراتيجية الصيانة",
            "steps": [
                {"step": "1", "title": "فحص نمط عطل المكوّن", "desc": "هل للمعدة عمر تآكل إحصائي مؤكد (A, B, C)؟"},
                {"step": "نعم", "title": "صيانة وقائية بالتقويم الزمني (Time-Based PM)", "desc": "استبدال دوري مجدول للقطع البسيطة المعرضة للاحتكاك"},
                {"step": "لا", "title": "صيانة مشروطة بالحالة (CBM) — الحل لـ 89%", "desc": "مراقبة الاهتزاز والزيوت والحرارة دون تفكيك"}
            ]
        },
        "text": (
            "الخلاصة الهندسية والمعيار العملي الفاصل لتطبيق الصيانة في منشأتك:\n\n"
            "لكي تقرر استبدال قطعة غيار بميعاد زمني ثابت، يجب إثبات وجود نقطة تآكل واهتراء حتمية ومؤكدة إحصائياً، وهذا لا يتحقق إلا في أحد عشر بالمئة فقط من الأصول.\n\n"
            "أما في غياب هذا الدليل، فإن الصيانة المشروطة بالحالة، والمراقبة التنبؤية بالاهتزازات وتحليل الزيوت والحرارة، هي الخيار الهندسي والاقتصادي الصحيح.\n\n"
            "هذا الفهم هو الركيزة الأساسية لمنهجية RCM وامتحان CMRP.\n\n"
            "يمكنكم تجربة الحاسبة التفاعلية لحساب المنحنيات الستة وحل بنك الأسئلة مجاناً عبر منصة أكاديمية GridFix، والرابط متوفر في صندوق الوصف بالأسفل.\n\n"
            "شكراً لمتابعتكم، ونلتقي في الدرس القادم مع استراتيجيات الصيانة المعتمدة على الموثوقية."
        )
    }
]

def generate_gemini_audio_single_pass():
    print("=== 1. Requesting Full Lesson Audio from Google Gemini Flash (Single-Pass Request) ===")
    
    # Build complete narrative separated by distinct breath pause markers
    full_lecture_text = ""
    for idx, sc in enumerate(scenes):
        full_lecture_text += f"\n\n[Section {idx+1}]\n{sc['text'].strip()}\n\n...\n\n"
        
    prompt = f"""
You are a senior engineering instructor and reliability expert delivering an audio lecture for GridFix Academy.
Read the following Arabic lecture aloud with natural, warm, authoritative pedagogical pacing.
Guidelines:
1. Speak in a calm, confident, and engaging engineering tone.
2. Insert natural deliberate pauses of about 1 to 2 seconds at the ellipsis '...' and section transitions.
3. Pronounce technical terms and Arabic numbers clearly and smoothly.
4. Do NOT read '[Section X]' tags aloud—only read the spoken lecture text.

Lecture text:
{full_lecture_text}
""".strip()

    config = types.GenerateContentConfig(
        response_modalities=["AUDIO"],
        speech_config=types.SpeechConfig(
            voice_config=types.VoiceConfig(
                prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=VOICE_NAME)
            )
        ),
    )

    print(f"   Calling Gemini 2.5 Flash TTS with voice '{VOICE_NAME}' (Consuming exactly 1 API call)...")
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
        raise RuntimeError("No audio data returned from Gemini API")

    raw_pcm = os.path.join(OUTPUT_DIR, "gemini_raw.pcm")
    with open(raw_pcm, "wb") as f:
        f.write(pcm_data)

    final_mp3 = os.path.join(OUTPUT_DIR, "full_lesson_gemini.mp3")
    print("   Converting PCM (24kHz s16le) to 128kbps stereo MP3 via FFmpeg...")
    cmd = [
        FFMPEG, "-y",
        "-f", "s16le",
        "-ar", "24000",
        "-ac", "1",
        "-i", raw_pcm,
        "-c:a", "libmp3lame",
        "-b:a", "128k",
        final_mp3
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    
    if os.path.exists(raw_pcm):
        os.remove(raw_pcm)

    # Get total audio duration
    res = subprocess.run([FFMPEG, "-i", final_mp3], capture_output=True, text=True, errors="ignore")
    total_dur = 300.0
    for line in res.stderr.splitlines():
        if "Duration:" in line:
            parts = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = parts.split(":")
            total_dur = float(h) * 3600 + float(m) * 60 + float(s)
            break
            
    print(f"   Audio Generated: {final_mp3}")
    print(f"   Total Duration: {int(total_dur // 60):02d}:{int(total_dur % 60):02d} ({total_dur:.1f}s)")
    return final_mp3, total_dur

def calculate_scene_durations(total_dur):
    # Proportional text-length distribution calibrated with pause buffer
    lengths = [len(sc["text"]) for sc in scenes]
    total_len = sum(lengths)
    current_time = 0.0
    
    for sc in scenes:
        ratio = len(sc["text"]) / total_len
        dur = round(ratio * total_dur, 2)
        sc["duration"] = dur
        sc["atSeconds"] = current_time
        current_time += dur
    
    # Adjust last scene to match total
    scenes[-1]["duration"] += round(total_dur - current_time, 2)

def generate_slide_html(sc, idx, total, total_dur):
    badge = sc["badge"]
    badge_icon = sc["badgeIcon"]
    title = sc["title"]
    takeaway = sc["keyTakeaway"]
    detail = sc["detail"]
    cue_type = sc["type"]

    visual_html = ""
    if cue_type == "formula":
        f = sc["formula"]
        vars_html = "".join([f'<div style="background: rgba(15,23,42,0.75); padding: 12px 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12);"><span style="color: #38bdf8; font-family: monospace; font-weight: 900; font-size: 22px;">{v["symbol"]}</span>: <span style="color: #cbd5e1; font-size: 18px; font-weight: bold;">{v["meaning"]}</span></div>' for v in f["variables"]])
        visual_html = f'''
        <div style="background: linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.98)); border: 2px solid rgba(56,189,248,0.4); border-radius: 24px; padding: 26px 36px; margin: 18px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 10px;">📐 {f["label"]}</div>
            <div style="font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 48px; font-weight: bold; color: #38bdf8; text-align: center; direction: ltr; margin: 14px 0; letter-spacing: 1px;">
                {f["expression"]}
            </div>
            <div style="display: flex; gap: 16px; margin-top: 18px; justify-content: center;">
                {vars_html}
            </div>
        </div>
        '''
    elif cue_type == "comparison":
        c = sc["comparison"]
        visual_html = f'''
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 18px 0;">
            <div style="background: rgba(244,63,94,0.1); border: 2px solid rgba(244,63,94,0.4); border-radius: 24px; padding: 26px; text-align: right;">
                <div style="color: #f43f5e; font-size: 18px; font-weight: 900; margin-bottom: 6px;">❌ {c["right"]["label"]}</div>
                <div style="color: #ffffff; font-size: 32px; font-weight: 900; margin-bottom: 10px;">{c["right"]["value"]}</div>
                <div style="color: #cbd5e1; font-size: 19px; font-weight: 600; line-height: 1.55;">{c["right"]["desc"]}</div>
            </div>
            <div style="background: rgba(20,184,166,0.1); border: 2px solid rgba(20,184,166,0.4); border-radius: 24px; padding: 26px; text-align: right;">
                <div style="color: #14b8a6; font-size: 18px; font-weight: 900; margin-bottom: 6px;">✅ {c["left"]["label"]}</div>
                <div style="color: #ffffff; font-size: 32px; font-weight: 900; margin-bottom: 10px;">{c["left"]["value"]}</div>
                <div style="color: #cbd5e1; font-size: 19px; font-weight: 600; line-height: 1.55;">{c["left"]["desc"]}</div>
            </div>
        </div>
        '''
    elif cue_type == "visualBar":
        vb = sc["visualBar"]
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 24px; margin: 18px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 14px;">📊 {vb["title"]}</div>
            <div style="height: 50px; width: 100%; border-radius: 16px; overflow: hidden; display: flex; box-shadow: inset 0 4px 8px rgba(0,0,0,0.5);">
                <div style="width: {vb['left']['percent']}%; background: #f43f5e; display: flex; align-items: center; justify-content: center; color: white; font-size: 26px; font-weight: 900;">
                    {vb['left']['percent']}%
                </div>
                <div style="width: {vb['right']['percent']}%; background: #14b8a6; display: flex; align-items: center; justify-content: center; color: white; font-size: 26px; font-weight: 900;">
                    {vb['right']['percent']}%
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px;">
                <div style="background: rgba(244,63,94,0.15); border: 1px solid rgba(244,63,94,0.3); border-radius: 16px; padding: 16px;">
                    <div style="color: #f43f5e; font-size: 22px; font-weight: 900;">{vb['left']['label']}</div>
                    <div style="color: #e2e8f0; font-size: 17px; margin-top: 4px;">{vb['left']['desc']}</div>
                </div>
                <div style="background: rgba(20,184,166,0.15); border: 1px solid rgba(20,184,166,0.3); border-radius: 16px; padding: 16px;">
                    <div style="color: #14b8a6; font-size: 22px; font-weight: 900;">{vb['right']['label']}</div>
                    <div style="color: #e2e8f0; font-size: 17px; margin-top: 4px;">{vb['right']['desc']}</div>
                </div>
            </div>
        </div>
        '''
    elif cue_type == "curves":
        cg = sc["curvesGraphic"]
        cards = ""
        for it in cg["items"]:
            path = "M 10,20 Q 40,80 80,82 L 200,82" if it["letter"] == "F" else ("M 10,50 L 200,50" if it["letter"] == "E" else "M 10,30 Q 35,80 70,82 L 140,82 Q 175,80 200,30")
            cards += f'''
            <div style="background: rgba(30,41,59,0.8); border: 2px solid {'#f43f5e' if it['color'] == '#f43f5e' else '#14b8a6'}; border-radius: 20px; padding: 16px; text-align: center;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="background: {it['color']}; color: white; padding: 4px 14px; border-radius: 10px; font-weight: 900; font-size: 20px;">{it['letter']}</span>
                    <span style="color: {it['color']}; font-family: monospace; font-size: 24px; font-weight: 900;">{it['percent']}</span>
                </div>
                <svg viewBox="0 0 220 100" style="width: 100%; height: 72px;">
                    <line x1="10" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                    <line x1="10" y1="10" x2="10" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                    <path d="{path}" fill="none" stroke="{it['color']}" stroke-width="5" stroke-linecap="round" />
                </svg>
                <div style="color: #f1f5f9; font-weight: 800; font-size: 17px; margin-top: 6px;">{it['label']}</div>
            </div>
            '''
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 20px; margin: 18px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 12px;">📈 {cg["title"]}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                {cards}
            </div>
        </div>
        '''
    elif cue_type == "flowchart":
        fc = sc["flowchart"]
        steps_html = ""
        for s in fc["steps"]:
            steps_html += f'''
            <div style="background: rgba(30,41,59,0.85); border: 2px solid rgba(56,189,248,0.3); border-radius: 20px; padding: 18px; text-align: right;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                    <span style="background: #0284c7; color: white; width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px;">{s['step']}</span>
                    <span style="color: #ffffff; font-size: 19px; font-weight: 900;">{s['title']}</span>
                </div>
                <div style="color: #94a3b8; font-size: 15px; line-height: 1.5; padding-right: 46px;">{s['desc']}</div>
            </div>
            '''
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 20px; margin: 18px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 12px;">🔄 {fc["title"]}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                {steps_html}
            </div>
        </div>
        '''

    progress_pct = max(5, int(((idx + 1) / total) * 100))
    minutes = int(sc["atSeconds"]) // 60
    seconds = int(sc["atSeconds"]) % 60
    time_str = f"{minutes:02d}:{seconds:02d}"

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
    background: radial-gradient(circle at 50% 20%, #1e293b 0%, #0f172a 60%, #020617 100%);
    font-family: 'Cairo', system-ui, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 38px 60px 28px 60px;
    overflow: hidden;
    position: relative;
  }}
  .header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(255,255,255,0.1);
    padding-bottom: 16px;
  }}
  .logo {{
    display: flex;
    align-items: center;
    gap: 16px;
  }}
  .logo-badge {{
    background: linear-gradient(135deg, #059669, #0d9488);
    color: white;
    padding: 8px 20px;
    border-radius: 14px;
    font-weight: 900;
    font-size: 20px;
    box-shadow: 0 4px 12px rgba(5,150,105,0.3);
  }}
  .course-title {{
    font-size: 22px;
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
    padding: 8px 22px;
    border-radius: 18px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.4);
  }}
  .center-card {{
    background: rgba(30, 41, 59, 0.72);
    border: 2px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    padding: 30px 42px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
  }}
  .scene-badge {{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(245, 158, 11, 0.2);
    border: 1px solid rgba(245, 158, 11, 0.4);
    color: #fcd34d;
    padding: 6px 20px;
    border-radius: 14px;
    font-size: 19px;
    font-weight: 900;
  }}
  .main-title {{
    font-size: 38px;
    font-weight: 900;
    color: #ffffff;
    margin: 12px 0 8px 0;
    line-height: 1.3;
  }}
  .takeaway-card {{
    background: linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.1));
    border-right: 6px solid #f59e0b;
    border-radius: 16px;
    padding: 14px 22px;
    font-size: 22px;
    font-weight: 900;
    color: #fef3c7;
    margin-bottom: 14px;
    line-height: 1.45;
  }}
  .detail-text {{
    font-size: 19px;
    color: #cbd5e1;
    line-height: 1.5;
    font-weight: 600;
  }}
  .footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid rgba(255,255,255,0.1);
    padding-top: 14px;
    font-size: 19px;
    color: #94a3b8;
    font-weight: 700;
  }}
  .footer-right {{
    display: flex;
    align-items: center;
    gap: 12px;
  }}
  .in-video-progress-bar {{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 7px;
    width: {progress_pct}%;
    background: linear-gradient(90deg, #0284c7, #38bdf8, #f59e0b);
    box-shadow: 0 0 16px rgba(56,189,248,0.9);
  }}
</style>
</head>
<body>
  <div class="header">
    <div class="logo">
      <div class="logo-badge">CMRP • المحطة 1</div>
      <div class="course-title">الدرس 1.1: أنماط الأعطال ونظرية التقادم (Failure Patterns)</div>
    </div>
    <div class="channel-brand">
      <span>🎓</span>
      <span>GridFix Academy — أكاديمية جريد فيكس</span>
    </div>
  </div>

  <div class="center-card">
    <div class="scene-badge">
      <span>{badge_icon}</span>
      <span>{badge}</span>
    </div>
    <h1 class="main-title">{title}</h1>
    <div class="takeaway-card">
      💡 {takeaway}
    </div>
    {visual_html}
    <div class="detail-text">
      {detail}
    </div>
  </div>

  <div class="footer">
    <div class="footer-right">
      <span style="color: #38bdf8; font-weight: 900;">⏱️ توقيت المشهد: {time_str}</span>
      <span>•</span>
      <span>المحور {idx+1} من {total}</span>
    </div>
    <div style="color: #64748b; font-size: 18px;">
      🔗 الحاسبة التفاعلية وبنك الأسئلة: <span style="color: #f59e0b; font-weight: 800;">academy.gridfix.net</span>
    </div>
  </div>

  <div class="in-video-progress-bar"></div>
</body>
</html>'''
    return html

def render_slides(total_dur):
    print("=== 2. Rendering 1080p High-Resolution Slides via Playwright ===")
    slide_images = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        
        for idx, sc in enumerate(scenes):
            html = generate_slide_html(sc, idx, len(scenes), total_dur)
            html_file = os.path.join(SLIDES_DIR, f"slide_{idx+1}.html")
            png_file = os.path.join(SLIDES_DIR, f"slide_{idx+1}.png")
            
            with open(html_file, "w", encoding="utf-8") as f:
                f.write(html)
                
            page.goto(f"file:///{os.path.abspath(html_file)}")
            page.wait_for_timeout(300)
            page.screenshot(path=png_file, full_page=True)
            sc["slide_img"] = png_file
            slide_images.append(png_file)
            print(f"   [Slide {idx+1}/{len(scenes)}] Rendered: {png_file}")
            
        browser.close()
    return slide_images

def render_final_video(audio_file):
    print("=== 3. Encoding Full HD MP4 Video with FFmpeg ===")
    output_mp4 = os.path.join(OUTPUT_DIR, "lesson_cmrp_1_1_gemini.mp4")
    
    concat_script = os.path.join(OUTPUT_DIR, "concat_slides.txt")
    with open(concat_script, "w", encoding="utf-8") as f:
        for idx, sc in enumerate(scenes):
            f.write(f"file '{os.path.abspath(sc['slide_img'])}'\n")
            f.write(f"duration {sc['duration']:.2f}\n")
        f.write(f"file '{os.path.abspath(scenes[-1]['slide_img'])}'\n")
        
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

def export_youtube_metadata():
    print("=== 4. Generating YouTube Metadata and Chapters ===")
    meta_path = os.path.join(OUTPUT_DIR, "YOUTUBE_METADATA.md")
    
    chapters_str = ""
    for sc in scenes:
        m = int(sc["atSeconds"]) // 60
        s = int(sc["atSeconds"]) % 60
        chapters_str += f"{m:02d}:{s:02d} - {sc['title']}\n"
        
    content = f"""# بيانات رفع الفيديو إلى YouTube — كورس CMRP (الدرس 1.1)

## 📌 العنوان المقترح (Title)
منحنيات الفشل الستة وصدمة نولان وهيب | دورة CMRP - المحطة 1 (الموثوقية والصيانة)

---

## 📝 صندوق الوصف (Description)
في هذا الدرس الأول من كورس هندسة الصيانة والموثوقية (CMRP)، نناقش الصدمة التي غيرت فكر إدارة الصيانة في العالم: لماذا لا ترتبط 89% من أعطال المعدات الصناعية بالزمن؟ وما هي المنحنيات الستة للأعطال وكيف تختار الاستراتيجية الصحيحة بين الصيانة الوقائية بالتقويم والصيانة المشروطة بالحالة؟

📌 جرب الحاسبة التفاعلية للمنحنيات الستة وحل كويز السيناريوهات الخاص بالدرس مجاناً:
👉 https://academy.gridfix.net/cmrp/lessons/lesson-cmrp-1-1/

⏱️ الفصول الزمنية للدرس (Timestamps / Chapters):
{chapters_str}
📚 المراجع والمعايير المعتمدة:
• SMRP Body of Knowledge (BoK) — Pillar 3: Equipment Reliability
• John Moubray — Reliability-centered Maintenance (RCM II)
• Nowlan & Heap Study (1978) — United States Airlines Fleet Reliability

اشترك في القناة وفعل جرس التنبيهات لمتابعة باقي دروس الدورة المجانية.
#GridFix #CMRP #هندسة_الصيانة #الموثوقية #إدارة_الأصول #SMRP
"""
    with open(meta_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"   Metadata exported to: {meta_path}")

def main():
    final_audio, total_dur = generate_gemini_audio_single_pass()
    calculate_scene_durations(total_dur)
    render_slides(total_dur)
    render_final_video(final_audio)
    export_youtube_metadata()

if __name__ == "__main__":
    main()
