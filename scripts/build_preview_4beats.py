import os
import sys
import subprocess
import imageio_ffmpeg
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
PROJECT_DIR = r"d:\programming\gridfix-academy"
MASTER_DIR = os.path.join(PROJECT_DIR, r"dist\videos\masterclass_cmrp_1_1")
AUDIO_DIR = os.path.join(MASTER_DIR, "audio")
PREVIEW_DIR = os.path.join(MASTER_DIR, "preview")
SLIDES_DIR = os.path.join(PREVIEW_DIR, "slides")

os.makedirs(PREVIEW_DIR, exist_ok=True)
os.makedirs(SLIDES_DIR, exist_ok=True)

# The 4 beats already generated and verified
beats = [
    {
        "id": "beat-1",
        "badge": "سؤال البداية واللغز التاريخي",
        "badgeIcon": "🤔",
        "hudStep": 1,
        "title": "هل تعطل المعدات الصناعية مرتبط حتماً بمرور الزمن وتقدم العمر؟",
        "visualType": "hook_intro",
        "keyHighlight": "المفاجأة الصادمة: زيادة العمرات الوقائية الدورية ارتبطت بزيادة التوقفات المفاجئة!",
        "audio_file": os.path.join(AUDIO_DIR, "beat_1.mp3")
    },
    {
        "id": "beat-2",
        "badge": "نسف الأسطورة التاريخية",
        "badgeIcon": "💥",
        "hudStep": 1,
        "title": "نسف أسطورة منحنى حوض الاستحمام (The Bathtub Curve Myth)",
        "visualType": "bathtub_myth",
        "keyHighlight": "منحنى حوض الاستحمام التقليدي لا يمثل سوى 4% فقط من أصول الصناعة!",
        "audio_file": os.path.join(AUDIO_DIR, "beat_2.mp3")
    },
    {
        "id": "beat-3",
        "badge": "الأساس الرياضي للاعتمادية",
        "badgeIcon": "📐",
        "hudStep": 2,
        "title": "معادلة الاحتمال الشرطي للفشل: معدل الخطر اللحظي λ(t)",
        "visualType": "formula_deconstruction",
        "keyHighlight": "احتمال العطل اللحظي تحكمه ظروف التشغيل والإجهادات الآنية، لا تاريخ التقويم الزمني.",
        "audio_file": os.path.join(AUDIO_DIR, "beat_3.mp3")
    },
    {
        "id": "beat-4",
        "badge": "التقسيم الإحصائي الكبير",
        "badgeIcon": "⚖️",
        "hudStep": 2,
        "title": "المجموعتان الكبريان: 11% مرتبطة بالعمر مقابل 89% عشوائية",
        "visualType": "two_groups_distribution",
        "keyHighlight": "89% أعطال عشوائية تتطلب مراقبة الحالة (CBM) • 11% فقط تنجح معها الصيانة بالزمن",
        "audio_file": os.path.join(AUDIO_DIR, "beat_4.mp3")
    }
]

# Measure exact durations
total_dur = 0.0
for idx, b in enumerate(beats):
    res = subprocess.run([FFMPEG, "-i", b["audio_file"]], capture_output=True, text=True, errors="ignore")
    dur = 10.0
    for line in res.stderr.splitlines():
        if "Duration:" in line:
            parts = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = parts.split(":")
            dur = float(h) * 3600 + float(m) * 60 + float(s)
            break
    b["duration"] = dur
    total_dur += dur
    print(f"Beat {idx+1} duration: {dur:.2f}s")

print(f"Total Preview Audio Duration: {total_dur:.2f}s ({int(total_dur // 60):02d}:{int(total_dur % 60):02d})")

def build_hud_html(current_step):
    steps = [
        (1, "1. الصدمة التاريخية"),
        (2, "2. الاحتمال الشرطي"),
        (3, "3. الأنماط العشوائية"),
        (4, "4. أنماط التقادم"),
        (5, "5. شجرة القرار"),
        (6, "6. التطبيق العملي"),
    ]
    items_html = ""
    for num, label in steps:
        active = (num == current_step)
        color = "#38bdf8" if active else "#64748b"
        bg = "rgba(56,189,248,0.15)" if active else "rgba(15,23,42,0.6)"
        border = "rgba(56,189,248,0.5)" if active else "rgba(255,255,255,0.06)"
        weight = "900" if active else "600"
        shadow = "box-shadow: 0 0 12px rgba(56,189,248,0.4);" if active else ""
        items_html += f'<div style="background: {bg}; border: 1px solid {border}; color: {color}; padding: 6px 16px; border-radius: 12px; font-size: 16px; font-weight: {weight}; {shadow}">{label}</div>'
    return f'<div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 24px;">{items_html}</div>'

def build_slide_center_content(b):
    vt = b["visualType"]
    title = b["title"]
    badge = b["badge"]
    badge_icon = b["badgeIcon"]
    highlight = b["keyHighlight"]

    header_block = f'''
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(56,189,248,0.12); border: 1px solid rgba(56,189,248,0.35); padding: 6px 20px; border-radius: 999px; color: #38bdf8; font-weight: 800; font-size: 19px; margin-bottom: 12px;">
        <span>{badge_icon}</span>
        <span>{badge}</span>
      </div>
      <h1 style="font-size: 38px; color: #f8fafc; font-weight: 900; margin: 0; line-height: 1.3; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">{title}</h1>
    </div>
    '''

    highlight_block = f'''
    <div style="background: linear-gradient(90deg, rgba(56,189,248,0.15), rgba(15,23,42,0.8)); border-right: 5px solid #38bdf8; padding: 14px 24px; border-radius: 12px; color: #e2e8f0; font-size: 21px; font-weight: bold; margin-top: 24px; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
      💡 <span style="color: #38bdf8;">الخلاصة الميدانية:</span> {highlight}
    </div>
    '''

    inner_content = ""
    if vt == "hook_intro":
        inner_content = '''
        <div style="display: flex; gap: 28px; width: 1000px; justify-content: center;">
          <div style="flex: 1; background: rgba(30,41,59,0.7); border: 2px dashed rgba(239,68,68,0.5); padding: 28px; border-radius: 20px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 8px;">🔧❓</div>
            <div style="font-size: 22px; color: #f87171; font-weight: 900; margin-bottom: 10px;">الافتراض التقليدي القديم</div>
            <div style="font-size: 18px; color: #cbd5e1; line-height: 1.6;">تفكيك المعدات السليمة واستبدال القطع دورياً لحمايتها من العطل الحتمي بالزمن!</div>
          </div>
          <div style="display: flex; align-items: center; font-size: 36px; color: #94a3b8;">⬅️</div>
          <div style="flex: 1; background: rgba(15,23,42,0.9); border: 2px solid #38bdf8; padding: 28px; border-radius: 20px; text-align: center; box-shadow: 0 0 24px rgba(56,189,248,0.25);">
            <div style="font-size: 48px; margin-bottom: 8px;">✈️⚡</div>
            <div style="font-size: 22px; color: #38bdf8; font-weight: 900; margin-bottom: 10px;">صدمة أساطيل الطيران (FAA 1978)</div>
            <div style="font-size: 18px; color: #f8fafc; line-height: 1.6;">زيادة العمرات الوقائية تسببت في زيادة معدل التوقفات والأعطال المفاجئة!</div>
          </div>
        </div>
        '''
    elif vt == "bathtub_myth":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.85); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 28px; position: relative;">
          <div style="position: absolute; top: 20px; left: 24px; background: rgba(239,68,68,0.2); border: 2px solid #ef4444; color: #fca5a5; padding: 6px 18px; border-radius: 12px; font-weight: 900; font-size: 20px; transform: rotate(-3deg);">
            ❌ أسطورة الـ 100% تم نسفها!
          </div>
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="flex: 1.2;">
              <svg viewBox="0 0 400 180" style="width: 100%; height: auto;">
                <path d="M 30,30 Q 80,140 140,140 L 260,140 Q 320,140 370,30" fill="none" stroke="#ef4444" stroke-width="5" stroke-dasharray="8 4" />
                <path d="M 30,30 Q 80,140 140,140" fill="none" stroke="#f59e0b" stroke-width="5" />
                <path d="M 140,140 L 260,140" fill="none" stroke="#10b981" stroke-width="5" />
                <path d="M 260,140 Q 320,140 370,30" fill="none" stroke="#38bdf8" stroke-width="5" />
                <text x="50" y="70" fill="#f59e0b" font-size="14" font-weight="bold">وفيات رضع</text>
                <text x="170" y="165" fill="#10b981" font-size="14" font-weight="bold">عمر مفيد مستقر</text>
                <text x="310" y="70" fill="#38bdf8" font-size="14" font-weight="bold">تآكل حتمي</text>
              </svg>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 14px;">
              <div style="background: rgba(30,41,59,0.8); padding: 14px 20px; border-radius: 14px; border-right: 4px solid #ef4444;">
                <div style="color: #f87171; font-weight: bold; font-size: 18px;">الاعتقاد السائد سابقاً:</div>
                <div style="color: #cbd5e1; font-size: 16px;">كل المعدات تبلى مع الزمن ويجب استبدالها دورياً.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 14px 20px; border-radius: 14px; border-right: 4px solid #10b981;">
                <div style="color: #34d399; font-weight: bold; font-size: 18px;">الحقيقة الإحصائية المعتمدة:</div>
                <div style="color: #f8fafc; font-size: 16px;">النمط A لا يمثل سوى <span style="color: #f59e0b; font-weight: 900; font-size: 20px;">4% فقط</span>، و 89% لا تتبع حوض الاستحمام أصلاً!</div>
              </div>
            </div>
          </div>
        </div>
        '''
    elif vt == "formula_deconstruction":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.9); border: 2px solid rgba(56,189,248,0.4); border-radius: 24px; padding: 26px; box-shadow: 0 0 30px rgba(0,0,0,0.5);">
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 17px; color: #94a3b8; font-weight: bold; margin-bottom: 6px;">معادلة الاحتمال الشرطي للفشل (Conditional Probability of Failure)</div>
            <div style="font-family: 'Cambria Math', 'Times New Roman', serif; font-size: 52px; font-weight: bold; direction: ltr; color: #38bdf8; letter-spacing: 2px;">
              λ(t) = <span style="color: #34d399;">f(t)</span> / <span style="color: #38bdf8;">R(t)</span>
            </div>
          </div>
          <div style="display: flex; gap: 20px; justify-content: center;">
            <div style="flex: 1; background: rgba(30,41,59,0.7); border: 1px solid rgba(52,211,153,0.3); padding: 16px; border-radius: 16px; text-align: center;">
              <div style="font-size: 26px; color: #34d399; font-weight: 900; font-family: monospace;">f(t)</div>
              <div style="font-size: 16px; color: #e2e8f0; font-weight: bold; margin-top: 6px;">كثافة احتمال الفشل اللحظية</div>
              <div style="font-size: 14px; color: #94a3b8; margin-top: 4px;">احتمال العطل في الفترة القادمة بالضبط</div>
            </div>
            <div style="flex: 1; background: rgba(30,41,59,0.7); border: 1px solid rgba(56,189,248,0.3); padding: 16px; border-radius: 16px; text-align: center;">
              <div style="font-size: 26px; color: #38bdf8; font-weight: 900; font-family: monospace;">R(t)</div>
              <div style="font-size: 16px; color: #e2e8f0; font-weight: bold; margin-top: 6px;">دالة الموثوقية التراكمية</div>
              <div style="font-size: 14px; color: #94a3b8; margin-top: 4px;">شرط أن المعدة نجت وعملت بنجاح حتى t</div>
            </div>
            <div style="flex: 1; background: rgba(30,41,59,0.7); border: 1px solid rgba(245,158,11,0.3); padding: 16px; border-radius: 16px; text-align: center;">
              <div style="font-size: 26px; color: #f59e0b; font-weight: 900; font-family: monospace;">λ(t)</div>
              <div style="font-size: 16px; color: #e2e8f0; font-weight: bold; margin-top: 6px;">معدل الخطر اللحظي (Hazard Rate)</div>
              <div style="font-size: 14px; color: #94a3b8; margin-top: 4px;">لا يرتبط بعمر المعدة في 89% من الحالات</div>
            </div>
          </div>
        </div>
        '''
    elif vt == "two_groups_distribution":
        inner_content = '''
        <div style="width: 1050px; display: flex; flex-direction: column; gap: 20px;">
          <!-- 89% Random Bar -->
          <div style="background: rgba(15,23,42,0.9); border: 2px solid #38bdf8; border-radius: 20px; padding: 22px; box-shadow: 0 0 24px rgba(56,189,248,0.25);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="background: #38bdf8; color: #020617; font-size: 26px; font-weight: 900; padding: 4px 18px; border-radius: 10px;">89%</span>
                <span style="font-size: 24px; color: #f8fafc; font-weight: 900;">الأعطال العشوائية غير المرتبطة بالعمر (الأنماط D, E, F)</span>
              </div>
              <span style="color: #38bdf8; font-weight: bold; font-size: 17px;">⚙️ القرار: الصيانة المشروطة CBM</span>
            </div>
            <div style="background: rgba(30,41,59,0.8); height: 16px; border-radius: 999px; overflow: hidden; margin-bottom: 10px;">
              <div style="background: linear-gradient(90deg, #0284c7, #38bdf8); height: 100%; width: 89%;"></div>
            </div>
            <div style="color: #94a3b8; font-size: 16px;">المحركات الكهربائية، الإلكترونيات، التجميعات الهيدروليكية — الاستبدال بالتقويم الزمني هنا ضار ومكلف.</div>
          </div>

          <!-- 11% Age-Related Bar -->
          <div style="background: rgba(15,23,42,0.9); border: 1px solid rgba(52,211,153,0.4); border-radius: 20px; padding: 22px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="background: #10b981; color: #020617; font-size: 26px; font-weight: 900; padding: 4px 18px; border-radius: 10px;">11%</span>
                <span style="font-size: 24px; color: #f8fafc; font-weight: 900;">الأعطال المرتبطة بالعمر الزمني (الأنماط A, B, C)</span>
              </div>
              <span style="color: #10b981; font-weight: bold; font-size: 17px;">⏱️ القرار: الصيانة بالزمن Time-Based PM</span>
            </div>
            <div style="background: rgba(30,41,59,0.8); height: 16px; border-radius: 999px; overflow: hidden; margin-bottom: 10px;">
              <div style="background: linear-gradient(90deg, #059669, #10b981); height: 100%; width: 11%;"></div>
            </div>
            <div style="color: #94a3b8; font-size: 16px;">تيل الفرامل، الفلاتر، إطارات الشاحنات، شفرات التقطيع — وجود نقطة اهتراء واضحة (Wear-Out Zone).</div>
          </div>
        </div>
        '''

    return f'''
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
      {header_block}
      {inner_content}
      {highlight_block}
    </div>
    '''

def build_slide_html(b, idx, total_beats, elapsed_before, total_dur):
    center_content = build_slide_center_content(b)
    hud_html = build_hud_html(b["hudStep"])
    bar_pct = max(2.5, min(98.5, (elapsed_before / total_dur) * 100))
    if idx == total_beats - 1:
        bar_pct = 95.0

    html = f'''<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    width: 1920px;
    height: 1080px;
    background: radial-gradient(circle at 50% 25%, #1e293b 0%, #0f172a 60%, #020617 100%);
    font-family: 'Cairo', system-ui, sans-serif;
    color: #f8fafc;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 70px 50px 70px;
  }}
  body::before {{
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 1;
  }}
  .header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 10;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    padding-bottom: 20px;
  }}
  .logo-badge {{
    background: linear-gradient(135deg, #059669, #10b981);
    color: #ffffff;
    font-weight: 900;
    padding: 6px 18px;
    border-radius: 12px;
    font-size: 20px;
    box-shadow: 0 4px 14px rgba(5,150,105,0.3);
  }}
  .course-title {{
    font-size: 22px;
    color: #94a3b8;
    font-weight: 700;
  }}
  .channel-brand {{
    font-size: 20px;
    color: #f59e0b;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(15,23,42,0.85);
    border: 1px solid rgba(245, 158, 11, 0.4);
    padding: 6px 20px;
    border-radius: 16px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.4);
  }}
  .main-stage {{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 10;
  }}
  .in-video-progress-bar {{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 7px;
    width: {bar_pct:.1f}%;
    background: linear-gradient(90deg, #0284c7, #38bdf8, #10b981, #f59e0b);
    box-shadow: 0 0 16px rgba(56,189,248,0.9);
  }}
</style>
</head>
<body>
  <div class="header">
    <div style="display: flex; align-items: center; gap: 16px;">
      <div class="logo-badge">CMRP • المحطة 1</div>
      <div class="course-title">الدرس 1.1: أنماط الأعطال ونظرية التقادم (Failure Patterns & The Six Curves)</div>
    </div>
    <div class="channel-brand">
      <span>🎓</span>
      <span>GridFix Academy — أكاديمية جريد فيكس</span>
    </div>
  </div>

  <div class="main-stage">
    {hud_html}
    {center_content}
  </div>

  <div class="in-video-progress-bar"></div>
</body>
</html>'''
    return html

def main():
    print("=== Rendering 4 Masterclass Slides via Playwright ===")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        elapsed = 0.0
        for idx, b in enumerate(beats):
            html = build_slide_html(b, idx, len(beats), elapsed, total_dur)
            html_file = os.path.join(SLIDES_DIR, f"slide_{idx+1}.html")
            png_file = os.path.join(SLIDES_DIR, f"slide_{idx+1}.png")
            with open(html_file, "w", encoding="utf-8") as f:
                f.write(html)
            page.goto(f"file:///{os.path.abspath(html_file)}")
            page.wait_for_timeout(350)
            page.screenshot(path=png_file, full_page=True)
            b["slide_img"] = png_file
            print(f"Slide {idx+1} rendered: {png_file}")
            elapsed += b["duration"]
        browser.close()

    print("=== Merging Audio Beats ===")
    concat_audio_txt = os.path.join(PREVIEW_DIR, "concat_audio.txt")
    with open(concat_audio_txt, "w", encoding="utf-8") as f:
        for b in beats:
            f.write(f"file '{os.path.abspath(b['audio_file'])}'\n")
            
    merged_audio = os.path.join(PREVIEW_DIR, "preview_audio_4beats.mp3")
    cmd = [
        FFMPEG, "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_audio_txt,
        "-c", "copy",
        merged_audio
    ]
    subprocess.run(cmd, check=True)

    print("=== Encoding Final 1080p Video via FFmpeg ===")
    concat_slides_txt = os.path.join(PREVIEW_DIR, "concat_slides.txt")
    with open(concat_slides_txt, "w", encoding="utf-8") as f:
        for b in beats:
            f.write(f"file '{os.path.abspath(b['slide_img'])}'\n")
            f.write(f"duration {b['duration']:.2f}\n")
        f.write(f"file '{os.path.abspath(beats[-1]['slide_img'])}'\n")

    output_mp4 = os.path.join(PREVIEW_DIR, "masterclass_sample_4beats_1080p.mp4")
    cmd = [
        FFMPEG, "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_slides_txt,
        "-i", merged_audio,
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        output_mp4
    ]
    subprocess.run(cmd, check=True)
    size_mb = os.path.getsize(output_mp4) / (1024 * 1024)
    print(f"=== Preview Video Successfully Generated! ===")
    print(f"Path: {output_mp4}")
    print(f"Duration: {total_dur:.2f}s ({int(total_dur // 60):02d}:{int(total_dur % 60):02d})")
    print(f"Size: {size_mb:.2f} MB")

if __name__ == "__main__":
    main()
