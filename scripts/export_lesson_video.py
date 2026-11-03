import os
import json
import re
import subprocess
import imageio_ffmpeg
from playwright.sync_api import sync_playwright

FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()
PROJECT_DIR = r"d:\programming\gridfix-academy"
AUDIO_FILE = os.path.join(PROJECT_DIR, r"public\audio\cmrp\station-1\lesson-cmrp-1-1.mp3")
OUTPUT_DIR = os.path.join(PROJECT_DIR, r"dist\videos")
SLIDES_DIR = os.path.join(OUTPUT_DIR, "slides_cmrp_1_1")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(SLIDES_DIR, exist_ok=True)

# 1. Lesson cues data for lesson-cmrp-1-1
cues = [
    {
        "id": "cue-1",
        "atSeconds": 0,
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
        }
    },
    {
        "id": "cue-2",
        "atSeconds": 45,
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
                "desc": "لا يوجد نمط واحد للأعطال بل 6 أنماط مختلفة تماماً في السلوك الفيزيائي"
            }
        }
    },
    {
        "id": "cue-3",
        "atSeconds": 105,
        "badge": "المجموعتان الكبريان للأعطال",
        "badgeIcon": "📊",
        "title": "توزيع الأعطال: العشوائية مقابل المرتبطة بالعمر",
        "keyTakeaway": "89% من أعطال المعدات عشوائية تماماً وتفشل معها الصيانة بالتقويم الزمني!",
        "detail": "الصيانة الوقائية بالزمن تصلح فقط مع 11% من الأصول الميكانيكية البسيطة المعرضة للاحتكاك المباشر.",
        "type": "visualBar",
        "visualBar": {
            "title": "النسبة الإحصائية الحقيقية لأعطال المعدات الصناعية الحديثة",
            "left": {"percent": 89, "label": "89% أعطال عشوائية (D, E, F)", "desc": "تتطلب الصيانة المشروطة بالحالة والمراقبة التنبؤية (CBM)"},
            "right": {"percent": 11, "label": "11% مرتبطة بالعمر (A, B, C)", "desc": "تصلح معها الصيانة الوقائية بالزمن (Time-Based PM)"}
        }
    },
    {
        "id": "cue-4",
        "atSeconds": 180,
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
        }
    },
    {
        "id": "cue-5",
        "atSeconds": 270,
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
                {"step": "3", "title": "فشل مبكر فوري بعد التشغيل", "desc": "وفيات رضع خلال الساعات الأولى"}
            ]
        }
    },
    {
        "id": "cue-6",
        "atSeconds": 330,
        "badge": "الخلاصة الهندسية التنفيذية",
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
        }
    }
]

TOTAL_DURATION = 383 # 06:23

def generate_slide_html(cue, idx, total):
    # Generates a pixel-perfect 1920x1080 Full HD slide
    badge = cue["badge"]
    badge_icon = cue["badgeIcon"]
    title = cue["title"]
    takeaway = cue["keyTakeaway"]
    detail = cue["detail"]
    cue_type = cue["type"]

    visual_html = ""
    if cue_type == "formula":
        f = cue["formula"]
        vars_html = "".join([f'<div style="background: rgba(15,23,42,0.6); padding: 12px 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.1);"><span style="color: #38bdf8; font-family: monospace; font-weight: 900; font-size: 20px;">{v["symbol"]}</span>: <span style="color: #cbd5e1; font-size: 18px; font-weight: bold;">{v["meaning"]}</span></div>' for v in f["variables"]])
        visual_html = f'''
        <div style="background: linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.98)); border: 2px solid rgba(56,189,248,0.4); border-radius: 24px; padding: 28px 36px; margin: 24px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 12px;">📐 {f["label"]}</div>
            <div style="font-family: 'Cambria Math', 'KaTeX_Math', 'Times New Roman', serif; font-size: 46px; font-weight: bold; color: #38bdf8; text-align: center; direction: ltr; margin: 16px 0; letter-spacing: 1px;">
                {f["expression"]}
            </div>
            <div style="display: flex; gap: 16px; margin-top: 20px; justify-content: center;">
                {vars_html}
            </div>
        </div>
        '''
    elif cue_type == "comparison":
        c = cue["comparison"]
        visual_html = f'''
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
            <div style="background: rgba(244,63,94,0.1); border: 2px solid rgba(244,63,94,0.4); border-radius: 24px; padding: 28px; text-align: right;">
                <div style="color: #f43f5e; font-size: 18px; font-weight: 900; margin-bottom: 8px;">❌ {c["right"]["label"]}</div>
                <div style="color: #ffffff; font-size: 32px; font-weight: 900; margin-bottom: 12px;">{c["right"]["value"]}</div>
                <div style="color: #cbd5e1; font-size: 20px; font-weight: 600; line-height: 1.6;">{c["right"]["desc"]}</div>
            </div>
            <div style="background: rgba(20,184,166,0.1); border: 2px solid rgba(20,184,166,0.4); border-radius: 24px; padding: 28px; text-align: right;">
                <div style="color: #14b8a6; font-size: 18px; font-weight: 900; margin-bottom: 8px;">✅ {c["left"]["label"]}</div>
                <div style="color: #ffffff; font-size: 32px; font-weight: 900; margin-bottom: 12px;">{c["left"]["value"]}</div>
                <div style="color: #cbd5e1; font-size: 20px; font-weight: 600; line-height: 1.6;">{c["left"]["desc"]}</div>
            </div>
        </div>
        '''
    elif cue_type == "visualBar":
        vb = cue["visualBar"]
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 28px; margin: 24px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 16px;">📊 {vb["title"]}</div>
            <div style="height: 48px; width: 100%; border-radius: 16px; overflow: hidden; display: flex; box-shadow: inset 0 4px 8px rgba(0,0,0,0.5);">
                <div style="width: {vb['left']['percent']}%; background: #f43f5e; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 900; letter-spacing: 1px;">
                    {vb['left']['percent']}%
                </div>
                <div style="width: {vb['right']['percent']}%; background: #14b8a6; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 900; letter-spacing: 1px;">
                    {vb['right']['percent']}%
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                <div style="background: rgba(244,63,94,0.15); border: 1px solid rgba(244,63,94,0.3); border-radius: 16px; padding: 18px;">
                    <div style="color: #f43f5e; font-size: 22px; font-weight: 900;">{vb['left']['label']}</div>
                    <div style="color: #e2e8f0; font-size: 17px; margin-top: 6px;">{vb['left']['desc']}</div>
                </div>
                <div style="background: rgba(20,184,166,0.15); border: 1px solid rgba(20,184,166,0.3); border-radius: 16px; padding: 18px;">
                    <div style="color: #14b8a6; font-size: 22px; font-weight: 900;">{vb['right']['label']}</div>
                    <div style="color: #e2e8f0; font-size: 17px; margin-top: 6px;">{vb['right']['desc']}</div>
                </div>
            </div>
        </div>
        '''
    elif cue_type == "curves":
        cg = cue["curvesGraphic"]
        cards = ""
        for it in cg["items"]:
            path = "M 10,20 Q 40,80 80,82 L 200,82" if it["letter"] == "F" else ("M 10,50 L 200,50" if it["letter"] == "E" else "M 10,30 Q 35,80 70,82 L 140,82 Q 175,80 200,30")
            cards += f'''
            <div style="background: rgba(30,41,59,0.8); border: 2px solid {'#f43f5e' if it['color'] == '#f43f5e' else '#14b8a6'}; border-radius: 20px; padding: 20px; text-align: center;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <span style="background: {it['color']}; color: white; padding: 4px 14px; border-radius: 10px; font-weight: 900; font-size: 20px;">{it['letter']}</span>
                    <span style="color: {it['color']}; font-family: monospace; font-size: 26px; font-weight: 900;">{it['percent']}</span>
                </div>
                <svg viewBox="0 0 220 100" style="width: 100%; height: 75px;">
                    <line x1="10" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                    <line x1="10" y1="10" x2="10" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                    <path d="{path}" fill="none" stroke="{it['color']}" stroke-width="5" stroke-linecap="round" />
                </svg>
                <div style="color: #f1f5f9; font-weight: 800; font-size: 18px; margin-top: 8px;">{it['label']}</div>
            </div>
            '''
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 24px; margin: 24px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 16px;">📈 {cg["title"]}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                {cards}
            </div>
        </div>
        '''
    elif cue_type == "flowchart":
        fc = cue["flowchart"]
        steps_html = ""
        for s in fc["steps"]:
            steps_html += f'''
            <div style="background: rgba(30,41,59,0.85); border: 2px solid rgba(56,189,248,0.3); border-radius: 20px; padding: 20px; text-align: right;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                    <span style="background: #0284c7; color: white; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px;">{s['step']}</span>
                    <span style="color: #ffffff; font-size: 20px; font-weight: 900;">{s['title']}</span>
                </div>
                <div style="color: #94a3b8; font-size: 16px; line-height: 1.5; padding-right: 48px;">{s['desc']}</div>
            </div>
            '''
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 24px; margin: 24px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 16px;">🔄 {fc["title"]}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                {steps_html}
            </div>
        </div>
        '''

    progress_pct = int((cue["atSeconds"] / TOTAL_DURATION) * 100)
    minutes = cue["atSeconds"] // 60
    seconds = cue["atSeconds"] % 60
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
    background: radial-gradient(circle at 50% 30%, #0f172a 0%, #020617 100%);
    font-family: 'Cairo', system-ui, sans-serif;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px 64px;
    overflow: hidden;
  }}
  .header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(255,255,255,0.1);
    padding-bottom: 24px;
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
    letter-spacing: 1px;
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
  }}
  .center-card {{
    background: rgba(30, 41, 59, 0.7);
    border: 2px solid rgba(255, 255, 255, 0.12);
    border-radius: 32px;
    padding: 40px 48px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
    backdrop-filter: blur(20px);
  }}
  .scene-badge {{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(245, 158, 11, 0.2);
    border: 1px solid rgba(245, 158, 11, 0.4);
    color: #fcd34d;
    padding: 8px 22px;
    border-radius: 16px;
    font-size: 20px;
    font-weight: 900;
  }}
  .main-title {{
    font-size: 42px;
    font-weight: 900;
    color: #ffffff;
    margin: 16px 0 12px 0;
    line-height: 1.3;
  }}
  .takeaway-card {{
    background: linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.1));
    border-right: 6px solid #f59e0b;
    border-radius: 16px;
    padding: 18px 24px;
    font-size: 24px;
    font-weight: 900;
    color: #fef3c7;
    margin-bottom: 20px;
    line-height: 1.5;
  }}
  .detail-text {{
    font-size: 20px;
    color: #cbd5e1;
    line-height: 1.6;
    font-weight: 600;
  }}
  .footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid rgba(255,255,255,0.1);
    padding-top: 20px;
    font-size: 20px;
    color: #94a3b8;
    font-weight: 700;
  }}
  .footer-right {{
    display: flex;
    align-items: center;
    gap: 12px;
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
    <div class="channel-brand">
      <span>🎓</span>
      <span>GridFix Academy — أكاديمية جريد فيكس</span>
    </div>
  </div>

  <!-- Main Center Card -->
  <div class="center-card">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div class="scene-badge">
        <span>{badge_icon}</span>
        <span>{badge}</span>
      </div>
      <div style="color: #64748b; font-size: 20px; font-weight: 900; font-family: monospace;">
        مشهد {idx} من {total}
      </div>
    </div>

    <h1 class="main-title">{title}</h1>

    <div class="takeaway-card">
      💡 {takeaway}
    </div>

    <!-- Visual Element -->
    {visual_html}

    <div class="detail-text">
      {detail}
    </div>
  </div>

  <!-- Clean Professional Footer (No fake embedded timeline - YouTube/VLC provides the player timeline) -->
  <div class="footer">
    <div class="footer-right">
      <span style="color: #f59e0b;">🌐</span>
      <span style="color: #ffffff; font-weight: 800;">gridfix.net</span>
      <span style="color: #64748b;">•</span>
      <span>أكاديمية إدارة المنشآت والموثوقية</span>
    </div>
    <div style="color: #64748b;">
      شروحات شهادة موثوقية الصيانة المعتمدة (Certified Maintenance & Reliability Professional)
    </div>
  </div>
</body>
</html>
'''
    return html

def render_slides():
    print(f"Rendering {len(cues)} Full HD slides at 1920x1080...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        for i, cue in enumerate(cues, 1):
            html = generate_slide_html(cue, i, len(cues))
            html_file = os.path.join(SLIDES_DIR, f"slide_{i}.html")
            with open(html_file, "w", encoding="utf-8") as f:
                f.write(html)

            page.goto(f"file:///{html_file}")
            page.wait_for_load_state("networkidle")
            png_file = os.path.join(SLIDES_DIR, f"slide_{i}.png")
            page.screenshot(path=png_file)
            print(f" - Slide {i}/{len(cues)} captured: {png_file}")

        browser.close()

def build_video():
    # Calculate duration for each slide
    durations = []
    for i in range(len(cues)):
        cur_t = cues[i]["atSeconds"]
        nxt_t = cues[i+1]["atSeconds"] if i + 1 < len(cues) else TOTAL_DURATION
        dur = nxt_t - cur_t
        durations.append(dur)

    concat_txt = os.path.join(SLIDES_DIR, "concat.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for i, dur in enumerate(durations, 1):
            slide_png = os.path.join(SLIDES_DIR, f"slide_{i}.png").replace("\\", "/")
            f.write(f"file '{slide_png}'\n")
            f.write(f"duration {dur}\n")
        # Final frame repeat required by ffmpeg concat demuxer
        last_png = os.path.join(SLIDES_DIR, f"slide_{len(durations)}.png").replace("\\", "/")
        f.write(f"file '{last_png}'\n")

    output_mp4 = os.path.join(OUTPUT_DIR, "lesson-cmrp-1-1-sample.mp4")
    print(f"\nEncoding MP4 video with FFmpeg: {output_mp4}...")

    cmd = [
        FFMPEG_EXE,
        "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", concat_txt,
        "-i", AUDIO_FILE,
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        "-c:a", "aac",
        "-b:a", "192k",
        "-t", "383.05",
        output_mp4
    ]

    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        size_mb = os.path.getsize(output_mp4) / (1024 * 1024)
        print(f"\n[SUCCESS] Generated YouTube-ready 1080p Video:")
        print(f"Path: {output_mp4}")
        print(f"Size: {size_mb:.2f} MB")
        print(f"Duration: 06:23 (383 seconds)")
        print(f"Resolution: 1920x1080 (16:9 Full HD)")
    else:
        print("FFmpeg Error:", res.stderr)

if __name__ == "__main__":
    render_slides()
    build_video()
