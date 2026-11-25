import os
import sys
import json
import asyncio
import subprocess
import imageio_ffmpeg
import edge_tts
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
PROJECT_DIR = r"d:\programming\gridfix-academy"
OUTPUT_DIR = os.path.join(PROJECT_DIR, r"dist\videos\pilot_egyptian")
SLIDES_DIR = os.path.join(OUTPUT_DIR, "slides")
AUDIO_DIR = os.path.join(OUTPUT_DIR, "audio_parts")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(SLIDES_DIR, exist_ok=True)
os.makedirs(AUDIO_DIR, exist_ok=True)

# 1. Definitive lesson narrative script broken into visual scenes with conversational Egyptian engineering tone
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
        "narration": (
            "أهلاً بكم يا باشمهندسين في أكاديمية جريد فيكس... معاكم في كورس هندسة الصيانة والموثوقية للتحضير لشهادة سي إم آر بي. "
            "النهارده بنبدأ بأهم درس هيغير طريقة تفكيرك تماماً: أنماط الأعطال ونظرية التقادم. "
            "خليني أبدأ معاكم بسؤال مهم جداً: هل تعطل المعدات الصناعية مرتبط دائماً بمرور الزمن وتقدم العمر التشغيلي؟ "
            "الإجابة الصادمة اللي أثبتتها الأرقام والدراسات الإحصائية... هي: لا! "
            "لحد أواخر سبعينيات القرن الماضي، كان الاعتقاد السائد بين المهندسين إن كل ما زاد عمر المعدة، زاد احتمال عطلها حتماً. "
            "والشركات كانت بتصرف مبالغ ضخمة على تفكيك المعدات السليمة وتغيير قطع الغيار في مواعيد تقويمية ثابتة. "
            "لكن دراسة أساطيل الطيران الأمريكي سنة 1978 للعالمين نولان وهيب أثبتت حقيقة مختلفة تماماً: احتمالية الفشل بتحكمها الاحتمالية الشرطية للعطل، مش مجرد سنين التشغيل."
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
        "narration": (
            "المفاجأة الكبرى اللي صدمت إدارات الصيانة في العالم كانت عكسية تماماً: "
            "لقوا إن زيادة العمرات الوقائية وتفكيك المعدات، ارتبطت بارتفاع معدلات الأعطال والتوقفات المفاجئة! "
            "يعني تفكيك المعدة السليمة كان بيجيب نتيجة عكسية. "
            "المهندسين اكتشفوا إن فكرة إن التآكل حتمي مع الزمن ده افتراض قديم مش دقيق. "
            "الحقيقة المثبتة علمياً هي إن الأعطال بتسلك ستة أنماط فيزيائية مختلفة، وإن التدخل غير المبرر غالباً بيضر المعدة أكتر ما ينفعها."
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
        "narration": (
            "ركزوا معايا هنا كويس جداً: الدراسة قسمت أعطال المعدات لمجموعتين رئيستين: "
            "المجموعة الأولى: الأعطال المرتبطة بالعمر الزمني، ودي بتمثل فقط أحد عشر بالمئة من إجمالي الأعطال! "
            "بتتميز بوجود منطقة تآكل واضحة نقدر نتنبأ بيها، وبتظهر في الأجزاء الميكانيكية البسيطة المعرضة للاحتكاك المباشر زي تيل الفرامل، والفلاتر، وسيور الحركة. "
            "ودي النسبة الوحيدة اللي بتنفع معاها الصيانة الوقائية المجدولة بالتقويم الزمني. "
            "أما الصدمة الحقيقية، فهي المجموعة التانية: تسعة وثمانون بالمئة من أعطال المعدات الحديثة هي أعطال عشوائية غير مرتبطة بالعمر نهائياً! "
            "احتمالية العطل فيها بتكون ثابتة في أي لحظة أو بترتفع بعد التركيب مباشرة، زي الكروت الإلكترونية والأنظمة الهيدروليكية. "
            "ومع النسبة الساحقة دي، الصيانة بالزمن بتفشل تماماً، والحل الهندسي الوحيد هو الصيانة المشروطة بالحالة سي بي إم."
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
        "narration": (
            "الدراسة حددت ستة أنماط دقيقة للأعطال، في تلاتة منهم بيتكرروا دايماً في امتحان سي إم آر بي: "
            "أولاً: النمط إف، وهو نمط وفيات الرضع، وبيمثل لوحده ثمانية وستين بالمئة من كل الأعطال! "
            "احتمالية الفشل فيه بتكون عالية جداً أول ما تركب المعدة أو تخرج من العمرة، وبعدين بتنخفض وتستقر. "
            "ثانياً: النمط إي، وهو العشوائي التام، بيمثل أربعة عشر بالمئة، احتمالية فشله ثابتة من أول يوم تشغيل لآخر يوم. "
            "وأخيراً النمط إيه، وهو منحنى حوض الاستحمام الشهير اللي اتعلمناه في الكتب، لكن الحقيقة إنه مش بيمثل غير أربعة بالمئة فقط من معدات الصناعة! "
            "القاعدة الذهبية هنا: شكل المنحنى هو اللي بيحدد نوع الصيانة؛ المنحنيات المسطحة والمتناقصة لا يصلح معاها تغيير دوري بالزمن نهائياً."
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
        "narration": (
            "ليه بقى نمط وفيات الرضع إف بيمثل لوحده ثمانية وستين بالمئة؟ "
            "السبب ببساطة هو التدخل البشري أثناء الفك وإعادة التجميع، وهو اللي بنسميه في إدارة الصيانة: الأعطال المستحثة بالصيانة أو مينتينانس إنديوسد فيليرز. "
            "أشهر أسبابها: أخطاء المحاذاة وعدم ضبط الاتزان بالليزر، والتشحيم الزائد اللي بيخنق كراسي التحميل ويرفع حرارتها، أو دخول الأتربة والرطوبة أثناء الفتح. "
            "عشان كده، كل تفكيك غير مبرر لمعدة شغالة بكفاءة... هو مجازفة بتدخل عيوب جديدة وبترفع وفيات الرضع بدال ما تحمي المعدة."
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
        "narration": (
            "الخلاصة الهندسية العملية اللي تطبقها في منشأتك: "
            "عشان تقرر تستبدل قطعة غيار بميعاد زمني ثابت، لازم يكون عندك دليل إحصائي قاطع على وجود نقطة تآكل واهتراء حتمية، وده مش بيتحقق غير في حداشر بالمية فقط من الأصول. "
            "أما في غياب الدليل ده، فالصيانة المشروطة بالحالة، ومراقبة الاهتزازات، وتحليل الزيوت والحرارة، هي الخيار الهندسي والاقتصادي السليم مئة بالمئة. "
            "ده الأساس اللي اتبنت عليه صيانة الموثوقية آر سي إم، وده المحور الأهم في امتحان سي إم آر بي. "
            "تقدر تجرب الأداة التفاعلية لحساب المنحنيات الستة وتحل بنك الأسئلة والسيناريوهات كاملاً مجاناً عبر منصة أكاديمية جريد فيكس. الرابط موجود تحت في صندوق الوصف. "
            "شكراً لمتابعتكم، وأشوفكم في الدرس القادم مع استراتيجيات الصيانة المعتمدة على الموثوقية."
        )
    }
]

def get_audio_duration(audio_path):
    cmd = [FFMPEG, "-i", audio_path]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    for line in res.stderr.splitlines():
        if "Duration:" in line:
            parts = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = parts.split(":")
            return float(h) * 3600 + float(m) * 60 + float(s)
    return 60.0

async def generate_egyptian_audio():
    print("=== 1. Checking / Generating Egyptian Voiceover ===")
    final_audio = os.path.join(OUTPUT_DIR, "full_lesson_egyptian.mp3")
    audio_files = []
    
    # Check if all scene audio files exist
    all_exist = True
    for idx in range(len(scenes)):
        p = os.path.join(AUDIO_DIR, f"scene_{idx+1}.mp3")
        if not (os.path.exists(p) and os.path.getsize(p) > 1000):
            all_exist = False
            break
            
    if not (all_exist and os.path.exists(final_audio)):
        voice = "ar-EG-ShakirNeural"
        for idx, sc in enumerate(scenes):
            part_path = os.path.join(AUDIO_DIR, f"scene_{idx+1}.mp3")
            print(f"   [{idx+1}/{len(scenes)}] Generating audio for: {sc['title']}...")
            comm = edge_tts.Communicate(sc["narration"], voice, rate="+2%", pitch="+0Hz")
            await comm.save(part_path)
    
    current_time = 0.0
    for idx, sc in enumerate(scenes):
        part_path = os.path.join(AUDIO_DIR, f"scene_{idx+1}.mp3")
        dur = get_audio_duration(part_path)
        sc["duration"] = dur
        sc["atSeconds"] = current_time
        current_time += dur
        audio_files.append(part_path)
    
    total_duration = current_time
    print(f"=== Total Audio Duration: {int(total_duration // 60):02d}:{int(total_duration % 60):02d} ({total_duration:.1f}s) ===")
    
    concat_list = os.path.join(OUTPUT_DIR, "concat_audio.txt")
    with open(concat_list, "w", encoding="utf-8") as f:
        for p in audio_files:
            f.write(f"file '{os.path.abspath(p)}'\n")
            
    cmd = [FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", concat_list, "-c", "copy", final_audio]
    subprocess.run(cmd, check=True, capture_output=True)
    print(f"   Combined Audio ready at: {final_audio}")
    return final_audio, total_duration

def generate_slide_html(sc, idx, total, total_duration):
    badge = sc["badge"]
    badge_icon = sc["badgeIcon"]
    title = sc["title"]
    takeaway = sc["keyTakeaway"]
    detail = sc["detail"]
    cue_type = sc["type"]

    visual_html = ""
    if cue_type == "formula":
        f = sc["formula"]
        vars_html = "".join([f'<div style="background: rgba(15,23,42,0.7); padding: 12px 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12);"><span style="color: #38bdf8; font-family: monospace; font-weight: 900; font-size: 22px;">{v["symbol"]}</span>: <span style="color: #cbd5e1; font-size: 18px; font-weight: bold;">{v["meaning"]}</span></div>' for v in f["variables"]])
        visual_html = f'''
        <div class="visual-box" style="background: linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.98)); border: 2px solid rgba(56,189,248,0.4); border-radius: 24px; padding: 26px 36px; margin: 18px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 10px;">📐 {f["label"]}</div>
            <div class="glow-math" style="font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 48px; font-weight: bold; color: #38bdf8; text-align: center; direction: ltr; margin: 14px 0; letter-spacing: 1px;">
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
  
  /* Official GridFix Academy Institutional Badge */
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
  
  /* Animated In-Video Progress Bar */
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
  <!-- Header -->
  <div class="header">
    <div class="logo">
      <div class="logo-badge">CMRP • المحطة 1</div>
      <div class="course-title">الدرس 1.1: أنماط الأعطال ونظرية التقادم (Failure Patterns)</div>
    </div>
    
    <!-- Clean Academy Brand -->
    <div class="channel-brand">
      <span>🎓</span>
      <span>GridFix Academy — أكاديمية جريد فيكس</span>
    </div>
  </div>

  <!-- Center Content -->
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

  <!-- Footer -->
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

  <!-- Dynamic Progress Bar -->
  <div class="in-video-progress-bar"></div>
</body>
</html>'''
    return html

def render_slides(total_duration):
    print("=== 2. Rendering 1080p High-Resolution Slides via Playwright ===")
    slide_images = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        
        for idx, sc in enumerate(scenes):
            html = generate_slide_html(sc, idx, len(scenes), total_duration)
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
    output_mp4 = os.path.join(OUTPUT_DIR, "lesson_cmrp_1_1_egyptian.mp4")
    
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
    final_audio, total_dur = asyncio.run(generate_egyptian_audio())
    render_slides(total_dur)
    render_final_video(final_audio)
    export_youtube_metadata()

if __name__ == "__main__":
    main()
