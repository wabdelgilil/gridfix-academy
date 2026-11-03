import os
import sys
import json
import time
import subprocess
import imageio_ffmpeg
from playwright.sync_api import sync_playwright

# Fix Windows console UTF-8 output
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

FFMPEG_EXE = imageio_ffmpeg.get_ffmpeg_exe()
PROJECT_DIR = r"d:\programming\gridfix-academy"
MANIFEST_PATH = os.path.join(PROJECT_DIR, r"dist\videos\cmrp_video_manifest.json")
OUTPUT_DIR = os.path.join(PROJECT_DIR, r"dist\videos\cmrp")
TEMP_SLIDES_DIR = os.path.join(OUTPUT_DIR, "_temp_slides")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(TEMP_SLIDES_DIR, exist_ok=True)

def get_audio_duration(audio_path):
    cmd = [FFMPEG_EXE, "-i", audio_path]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    # Parse Duration: 00:06:23.02
    for line in res.stderr.splitlines():
        if "Duration:" in line:
            parts = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = parts.split(":")
            return float(h) * 3600 + float(m) * 60 + float(s)
    return 300.0

def build_slide_html(cue, idx, total, lesson_info):
    badge = cue.get("badge", "إضاءة هندسية")
    badge_icon = cue.get("badgeIcon", "💡")
    title = cue.get("title", "")
    takeaway = cue.get("keyTakeaway", "")
    detail = cue.get("detail", "")
    cue_type = cue.get("type", "concept")

    visual_html = ""
    
    # 1. Formula
    if "formula" in cue and cue["formula"]:
        f = cue["formula"]
        vars_html = "".join([f'''<div style="background: rgba(15,23,42,0.6); padding: 12px 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #38bdf8; font-family: monospace; font-weight: 900; font-size: 20px;">{v.get("symbol", "")}</span>: 
            <span style="color: #cbd5e1; font-size: 18px; font-weight: bold;">{v.get("meaning", "")}</span>
        </div>''' for v in f.get("variables", [])])
        
        visual_html = f'''
        <div style="background: linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.98)); border: 2px solid rgba(56,189,248,0.4); border-radius: 24px; padding: 28px 36px; margin: 24px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 12px;">📐 {f.get("label", "")}</div>
            <div style="font-family: 'Cambria Math', 'KaTeX_Math', 'Times New Roman', serif; font-size: 44px; font-weight: bold; color: #38bdf8; text-align: center; direction: ltr; margin: 16px 0; letter-spacing: 1px;">
                {f.get("expression", "")}
            </div>
            <div style="display: flex; gap: 16px; margin-top: 20px; justify-content: center; flex-wrap: wrap;">
                {vars_html}
            </div>
        </div>
        '''

    # 2. Comparison
    elif "comparison" in cue and cue["comparison"]:
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

    # 3. Visual Proportion Bar
    elif "visualBar" in cue and cue["visualBar"]:
        vb = cue["visualBar"]
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 28px; margin: 24px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 16px;">📊 {vb["title"]}</div>
            <div style="height: 48px; width: 100%; border-radius: 16px; overflow: hidden; display: flex; box-shadow: inset 0 4px 8px rgba(0,0,0,0.5);">
                <div style="width: {vb['left']['percent']}%; background: #f43f5e; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 900;">
                    {vb['left']['percent']}%
                </div>
                <div style="width: {vb['right']['percent']}%; background: #14b8a6; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 900;">
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

    # 4. Curves Graphic
    elif "curvesGraphic" in cue and cue["curvesGraphic"]:
        cg = cue["curvesGraphic"]
        cards = ""
        for it in cg["items"]:
            let = it.get("letter", "")
            clr = "#f43f5e" if it.get("group") == "random" or it.get("color") == "rose" else "#14b8a6"
            path = "M 10,20 Q 40,80 80,82 L 200,82" if let == "F" else ("M 10,50 L 200,50" if let == "E" else "M 10,30 Q 35,80 70,82 L 140,82 Q 175,80 200,30")
            cards += f'''
            <div style="background: rgba(30,41,59,0.8); border: 2px solid {clr}; border-radius: 20px; padding: 20px; text-align: center;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <span style="background: {clr}; color: white; padding: 4px 14px; border-radius: 10px; font-weight: 900; font-size: 20px;">{let}</span>
                    <span style="color: {clr}; font-family: monospace; font-size: 26px; font-weight: 900;">{it.get('percent', '')}</span>
                </div>
                <svg viewBox="0 0 220 100" style="width: 100%; height: 75px;">
                    <line x1="10" y1="90" x2="200" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                    <line x1="10" y1="10" x2="10" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                    <path d="{path}" fill="none" stroke="{clr}" stroke-width="5" stroke-linecap="round" />
                </svg>
                <div style="color: #f1f5f9; font-weight: 800; font-size: 18px; margin-top: 8px;">{it.get('label', '')}</div>
            </div>
            '''
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 24px; margin: 24px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 16px;">📈 {cg["title"]}</div>
            <div style="display: grid; grid-template-columns: repeat({len(cg["items"])}, 1fr); gap: 20px;">
                {cards}
            </div>
        </div>
        '''

    # 5. Flowchart
    elif "flowchart" in cue and cue["flowchart"]:
        fc = cue["flowchart"]
        steps_html = ""
        for s in fc["steps"]:
            steps_html += f'''
            <div style="background: rgba(30,41,59,0.85); border: 2px solid rgba(56,189,248,0.3); border-radius: 20px; padding: 20px; text-align: right;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                    <span style="background: #0284c7; color: white; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px;">{s['step']}</span>
                    <span style="color: #ffffff; font-size: 20px; font-weight: 900;">{s['title']}</span>
                </div>
                <div style="color: #94a3b8; font-size: 16px; line-height: 1.5; padding-right: 48px;">{s.get('decision', s.get('desc', ''))}</div>
            </div>
            '''
        cols = min(len(fc["steps"]), 3)
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 24px; margin: 24px 0;">
            <div style="color: #94a3b8; font-size: 18px; font-weight: 800; margin-bottom: 16px;">🔄 {fc["title"]}</div>
            <div style="display: grid; grid-template-columns: repeat({cols}, 1fr); gap: 20px;">
                {steps_html}
            </div>
        </div>
        '''

    # 6. Highlight Stat
    elif "highlightStat" in cue and cue["highlightStat"]:
        hs = cue["highlightStat"]
        clr = "#f43f5e" if hs.get("color") == "rose" else ("#f59e0b" if hs.get("color") == "amber" else "#10b981")
        visual_html = f'''
        <div style="background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 32px 40px; margin: 24px 0; display: flex; justify-content: space-between; align-items: center;">
            <div style="text-align: right;">
                <div style="font-size: 26px; font-weight: 900; color: #ffffff;">{hs.get('label', '')}</div>
                <div style="font-size: 18px; font-weight: 600; color: #94a3b8; margin-top: 8px;">{hs.get('sub', '')}</div>
            </div>
            <div style="font-family: monospace; font-size: 52px; font-weight: 900; color: {clr}; background: rgba(255,255,255,0.05); padding: 12px 28px; border-radius: 20px; border: 2px solid {clr};">
                {hs.get('value', '')}
            </div>
        </div>
        '''

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
</style>
</head>
<body>
  <div class="header">
    <div class="logo">
      <div class="logo-badge">CMRP • المحطة {lesson_info['stationNumber']}</div>
      <div class="course-title">الدرس {lesson_info['number']}: {lesson_info['title']}</div>
    </div>
    <div class="channel-brand">
      <span>🎓</span>
      <span>GridFix Academy — أكاديمية جريد فيكس</span>
    </div>
  </div>

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

    {visual_html}

    <div class="detail-text">
      {detail}
    </div>
  </div>

  <div class="footer">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="color: #f59e0b;">🌐</span>
      <span style="color: #ffffff; font-weight: 800;">gridfix.net</span>
      <span style="color: #64748b;">•</span>
      <span>أكاديمية إدارة المنشآت والموثوقية الصناعية</span>
    </div>
    <div style="color: #64748b;">
      شروحات شهادة موثوقية الصيانة المعتمدة (Certified Maintenance & Reliability Professional)
    </div>
  </div>
</body>
</html>'''
    return html

def export_single_lesson(lesson_id, manifest_entry, browser, force=False):
    output_mp4 = os.path.join(OUTPUT_DIR, f"{lesson_id}.mp4")
    if not force and os.path.exists(output_mp4) and os.path.getsize(output_mp4) > 1024 * 1024:
        mb = os.path.getsize(output_mp4) / (1024 * 1024)
        print(f"Skipping {lesson_id}: already generated ({mb:.2f} MB).")
        return True

    cues = manifest_entry.get("cues", [])
    if not cues:
        print(f"Skipping {lesson_id}: no cues defined.")
        return False

    audio_rel = manifest_entry.get("audioPath")
    audio_file = os.path.join(PROJECT_DIR, audio_rel)
    if not os.path.exists(audio_file):
        print(f"Skipping {lesson_id}: audio file not found: {audio_file}")
        return False

    total_duration = get_audio_duration(audio_file)
    print(f"\n=======================================================")
    print(f"Processing: {lesson_id} (Duration: {total_duration:.2f}s, Cues: {len(cues)})")
    print(f"Title: {manifest_entry['title']}")
    print(f"=======================================================")

    lesson_temp_dir = os.path.join(TEMP_SLIDES_DIR, lesson_id)
    os.makedirs(lesson_temp_dir, exist_ok=True)

    page = browser.new_page(viewport={"width": 1920, "height": 1080})

    # 1. Render all slides
    slide_files = []
    for i, cue in enumerate(cues, 1):
        html = build_slide_html(cue, i, len(cues), manifest_entry)
        html_path = os.path.join(lesson_temp_dir, f"slide_{i}.html")
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html)
        
        page.goto(f"file:///{html_path}")
        page.wait_for_load_state("networkidle")
        png_path = os.path.join(lesson_temp_dir, f"slide_{i}.png")
        page.screenshot(path=png_path)
        slide_files.append(png_path)

    page.close()

    # 2. Build durations and concat.txt
    durations = []
    for i in range(len(cues)):
        cur_t = cues[i]["atSeconds"]
        nxt_t = cues[i+1]["atSeconds"] if i + 1 < len(cues) else total_duration
        dur = max(1.0, nxt_t - cur_t)
        durations.append(dur)

    concat_txt = os.path.join(lesson_temp_dir, "concat.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for i, dur in enumerate(durations, 1):
            png_clean = slide_files[i-1].replace("\\", "/")
            f.write(f"file '{png_clean}'\n")
            f.write(f"duration {dur:.2f}\n")
        # Final frame repeat for ffmpeg concat demuxer
        last_clean = slide_files[-1].replace("\\", "/")
        f.write(f"file '{last_clean}'\n")

    # 3. Encode MP4
    output_mp4 = os.path.join(OUTPUT_DIR, f"{lesson_id}.mp4")
    print(f"Encoding MP4: {output_mp4}...")
    
    cmd = [
        FFMPEG_EXE, "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", concat_txt,
        "-i", audio_file,
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        "-c:a", "aac",
        "-b:a", "192k",
        "-t", f"{total_duration:.2f}",
        output_mp4
    ]

    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        mb = os.path.getsize(output_mp4) / (1024 * 1024)
        print(f"[SUCCESS] Created: {output_mp4} ({mb:.2f} MB)")
        return True
    else:
        print("FFmpeg Error:", res.stderr)
        return False

def run():
    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    print(f"Loaded manifest with {len(manifest)} lessons.")
    
    # Check CLI filter e.g. python batch_export_videos.py lesson-cmrp-1-2
    target_lesson = sys.argv[1] if len(sys.argv) > 1 else None

    with sync_playwright() as p:
        browser = p.chromium.launch()

        if target_lesson:
            if target_lesson in manifest:
                export_single_lesson(target_lesson, manifest[target_lesson], browser)
            else:
                print(f"Lesson {target_lesson} not found in manifest!")
        else:
            # Batch export all lessons
            total = len(manifest)
            succeeded = 0
            for i, (lid, entry) in enumerate(manifest.items(), 1):
                print(f"\n>>> [{i}/{total}] Starting {lid}...")
                ok = export_single_lesson(lid, entry, browser)
                if ok:
                    succeeded += 1

            print(f"\n=======================================================")
            print(f"BATCH COMPLETE! Exported {succeeded}/{total} videos to {OUTPUT_DIR}")
            print(f"=======================================================")

        browser.close()

if __name__ == "__main__":
    run()
