import os
import sys
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

PROJECT_DIR = r"d:\programming\gridfix-academy"
OUTPUT_DIR = os.path.join(PROJECT_DIR, r"dist\youtube")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Read SVG logo content
logo_svg_path = os.path.join(PROJECT_DIR, r"public\logo-academic.svg")
with open(logo_svg_path, "r", encoding="utf-8") as f:
    logo_svg = f.read()

# YouTube Banner dimensions: 2560x1440 px
# Safe Zone: 1546x423 px in dead center
html_content = f"""<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900;1000&display=swap');
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    width: 2560px;
    height: 1440px;
    background: radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 50%, #020617 100%);
    font-family: 'Cairo', system-ui, sans-serif;
    color: #f8fafc;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }}
  /* Technical Blueprint CAD Grid background */
  body::before {{
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56, 189, 248, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }}
  /* Glowing Ambient Lights for Visual Depth */
  .glow-cyan {{
    position: absolute;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%);
    top: 320px;
    left: 200px;
    filter: blur(60px);
    pointer-events: none;
  }}
  .glow-amber {{
    position: absolute;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
    top: 320px;
    right: 200px;
    filter: blur(60px);
    pointer-events: none;
  }}
  .glow-emerald {{
    position: absolute;
    width: 1000px;
    height: 600px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
    top: 420px;
    left: 780px;
    filter: blur(50px);
    pointer-events: none;
  }}

  /* SAFE ZONE CONTAINER: Exact 1546px width x 423px height centered */
  .safe-zone {{
    width: 1546px;
    height: 423px;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
  }}

  .content-right {{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    max-width: 1080px;
  }}

  .brand-row {{
    display: flex;
    align-items: center;
    gap: 18px;
  }}
  .brand-badge {{
    background: linear-gradient(135deg, #0284c7, #38bdf8);
    color: #020617;
    font-size: 19px;
    font-weight: 900;
    padding: 4px 18px;
    border-radius: 999px;
    box-shadow: 0 0 16px rgba(56,189,248,0.5);
    letter-spacing: 0.5px;
  }}
  .url-badge {{
    background: rgba(15,23,42,0.85);
    border: 1px solid rgba(245, 158, 11, 0.5);
    color: #f59e0b;
    font-size: 18px;
    font-weight: 800;
    padding: 4px 20px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 8px;
  }}

  .main-title {{
    font-size: 58px;
    font-weight: 1000;
    line-height: 1.15;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 60%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 20px rgba(0,0,0,0.4);
  }}
  .english-brand {{
    color: #38bdf8;
    font-weight: 900;
    font-size: 44px;
    direction: ltr;
    display: inline-block;
    margin-right: 12px;
  }}

  .tagline {{
    font-size: 22px;
    color: #cbd5e1;
    font-weight: 700;
    line-height: 1.35;
  }}

  /* The 3 Certification Cards */
  .credentials-row {{
    display: flex;
    gap: 14px;
    margin-top: 6px;
  }}
  .cred-card {{
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    padding: 8px 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  }}
  .cred-card.cfm {{ border-right: 4px solid #0284c7; }}
  .cred-card.cmrp {{ border-right: 4px solid #10b981; }}
  .cred-card.cama {{ border-right: 4px solid #8b5cf6; }}
  
  .cred-icon {{ font-size: 22px; }}
  .cred-code {{ font-weight: 900; font-size: 19px; color: #f8fafc; }}
  .cred-desc {{ font-size: 14px; color: #94a3b8; font-weight: 600; }}

  /* Left Side: Glowing Institutional Academic Crest */
  .logo-wrapper {{
    width: 290px;
    height: 290px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }}
  .logo-wrapper::before {{
    content: '';
    position: absolute;
    width: 270px;
    height: 270px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(25px);
  }}
  .logo-box {{
    width: 250px;
    height: 250px;
    background: linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95));
    border: 2px solid rgba(56, 189, 248, 0.4);
    border-radius: 40px;
    padding: 24px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6), inset 0 0 20px rgba(56, 189, 248, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }}
</style>
</head>
<body>
  <div class="glow-cyan"></div>
  <div class="glow-emerald"></div>
  <div class="glow-amber"></div>

  <!-- Safe Area (Displays on all devices: TV, Desktop, Tablet, Mobile) -->
  <div class="safe-zone">
    <div class="content-right">
      <div class="brand-row">
        <div class="brand-badge">أكاديمية هندسية مجانية 100%</div>
        <div class="url-badge">
          <span>🌐</span>
          <span>academy.gridfix.net</span>
        </div>
      </div>

      <div class="main-title">
        أكاديمية جريد فيكس
        <span class="english-brand">| GridFix Academy</span>
      </div>

      <div class="tagline">
        المنصة العربية المتخصصة في هندسة وإدارة المنشآت • الصيانة والموثوقية • إدارة الأصول المؤسسية
      </div>

      <div class="credentials-row">
        <div class="cred-card cfm">
          <span class="cred-icon">🏢</span>
          <div>
            <div class="cred-code">CFM</div>
            <div class="cred-desc">إدارة المنشآت (IFMA)</div>
          </div>
        </div>

        <div class="cred-card cmrp">
          <span class="cred-icon">⚙️</span>
          <div>
            <div class="cred-code">CMRP</div>
            <div class="cred-desc">الصيانة والموثوقية (SMRP)</div>
          </div>
        </div>

        <div class="cred-card cama">
          <span class="cred-icon">🏛️</span>
          <div>
            <div class="cred-code">CAMA</div>
            <div class="cred-desc">إدارة الأصول (ISO 55000)</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Official Brand Logo -->
    <div class="logo-wrapper">
      <div class="logo-box">
        {logo_svg}
      </div>
    </div>
  </div>
</body>
</html>"""

html_file = os.path.join(OUTPUT_DIR, "banner_preview.html")
with open(html_file, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"HTML Preview created: {html_file}")
print("Rendering Banner in 2560x1440 resolution with Playwright...")

png_path = os.path.join(OUTPUT_DIR, "youtube_banner_2560x1440.png")
jpg_path = os.path.join(OUTPUT_DIR, "youtube_banner_2560x1440.jpg")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 2560, "height": 1440})
    page.goto(f"file:///{os.path.abspath(html_file)}")
    page.wait_for_timeout(500)
    
    # Save High-Res PNG
    page.screenshot(path=png_path, full_page=True)
    print(f"PNG Banner generated: {png_path} (Size: {os.path.getsize(png_path) / (1024*1024):.2f} MB)")
    
    # Save Optimized JPG for YouTube Upload (< 4MB guarantee)
    page.screenshot(path=jpg_path, full_page=True, type="jpeg", quality=92)
    print(f"JPG Banner generated: {jpg_path} (Size: {os.path.getsize(jpg_path) / 1024:.1f} KB)")
    
    browser.close()

print("=== YouTube Channel Banner Ready for Upload! ===")
