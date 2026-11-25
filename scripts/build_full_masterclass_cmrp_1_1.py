import os
import sys
import time
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
OUTPUT_DIR = os.path.join(PROJECT_DIR, r"dist\videos\masterclass_cmrp_1_1")
SLIDES_DIR = os.path.join(OUTPUT_DIR, "slides")
AUDIO_DIR = os.path.join(OUTPUT_DIR, "audio")

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(SLIDES_DIR, exist_ok=True)
os.makedirs(AUDIO_DIR, exist_ok=True)

# Load GEMINI_API_KEY from .env
api_key = None
with open(os.path.join(PROJECT_DIR, ".env"), "r", encoding="utf-8") as f:
    for line in f:
        if line.startswith("GEMINI_API_KEY="):
            api_key = line.strip().split("=", 1)[1]
            break

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=api_key, http_options={"api_version": "v1alpha"})
VOICE_NAME = "Charon"

# 13 Detailed Masterclass Beats adhering 100% to VIDEO_PRODUCTION_CONSTITUTION.md
beats = [
    {
        "id": "beat-1",
        "badge": "سؤال البداية واللغز التاريخي",
        "badgeIcon": "🤔",
        "hudStep": 1,
        "title": "هل تعطل المعدات الصناعية مرتبط حتماً بمرور الزمن وتقدم العمر؟",
        "narration": (
            "خليني أبدأ معاك بسؤال صريح جداً يا باشمهندس... لو عندك في المصنع أو المحطة طلمبة تغذية أو كمبروسر شغال بامتياز ومفيش فيه أي مشكلة، "
            "هل أول قرار تفكر فيه إنك توقفه وتفكه حتة حتة وتعمل له عمرة كاملة عشان عدى عليه سنة في التشغيل؟ "
            "زمان كانت أغلب الشركات والمصانع بتعمل كده بالظبط... لكن سنة 1978، إدارة الطيران الفيدرالية الأمريكية FAA لاحظت ظاهرة غريبة ومقلقة جداً: "
            "كل ما يزيد عدد العمرات وتفكيك الطائرات في مواعيد ثابتة، كل ما معدلات الأعطال والتوقفات المفاجئة بتزيد مش بتقل! "
            "ومن هنا بدأت أكبر دراسة قلبت موازين علم الصيانة والموثوقية في العالم: دراسة نولان وهيب التاريخية."
        ),
        "visualType": "hook_intro",
        "keyHighlight": "المفاجأة الصادمة: زيادة العمرات الوقائية الدورية ارتبطت بزيادة التوقفات المفاجئة!",
    },
    {
        "id": "beat-2",
        "badge": "نسف الأسطورة التاريخية",
        "badgeIcon": "💥",
        "hudStep": 1,
        "title": "نسف أسطورة منحنى حوض الاستحمام (The Bathtub Curve Myth)",
        "narration": (
            "لحد أواخر السبعينيات كان في أسطورة مقدسة عند كل مهندسي الصيانة اسمها منحنى حوض الاستحمام أو الـ Bathtub Curve... "
            "الفكرة اللي كانت مسيطرة على العقول إن أي معدة في الدنيا لازم تبدأ بمشاكل تركيب في الأول، بعدين تعيش فترة استقرار، "
            "وفي الآخر خالص لازم يحصل لها تآكل وتقادم حتمي بالزمن. "
            "العالم كله كان فاكر إن المنحنى ده بينطبق على مية في المية من المعدات! "
            "لكن دراسة نولان وهيب لما حللت آلاف المكونات في أساطيل الطيران، طلعت بنتيجة صدمت المجتمع الهندسي: "
            "منحنى حوض الاستحمام التقليدي لا يمثل إلا أربعة بالمئة فقط من معدات الصناعة! "
            "وتسعة وثمانين في المية من الأعطال مبتمشيش ورا الزمن أصلاً!"
        ),
        "visualType": "bathtub_myth",
        "keyHighlight": "منحنى حوض الاستحمام التقليدي لا يمثل سوى 4% فقط من أصول الصناعة!",
    },
    {
        "id": "beat-3",
        "badge": "الأساس الرياضي للاعتمادية",
        "badgeIcon": "📐",
        "hudStep": 2,
        "title": "معادلة الاحتمال الشرطي للفشل: معدل الخطر اللحظي λ(t)",
        "narration": (
            "طب السؤال اللي يفرض نفسه هنا يا باشمهندس: إزاي بنقيس احتمالية الفشل علمياً؟ "
            "السر كله في مفهوم رياضي خطير اسمه الاحتمال الشرطي للفشل Conditional Probability of Failure أو الـ Hazard Rate ولمدا أوف تي. "
            "المعادلة ببساطة بتقول إن لمدا أوف تي بتساوي الدالة الكثافية للاحتمال إف سمول مقسومة على دالة الموثوقية آر أوف تي. "
            "يعني إيه بالبلدي؟ يعني: ما هو احتمال إن المعدة دي تتعطل في الساعة الجاية أو الأسبوع الجاي، "
            "بشرط، وحط تحت كلمة بشرط دي ميت خط، إنها اشتغلت بنجاح ومن غير أي عطل لحد اللحظة اللي إحنا واقفين فيها دلوقتي! "
            "المعدة اللي شغالة تمام، احتمال عطلها في اللحظة الجاية مش معتمد على هي بقالها كام سنة شغالة، بل معتمد على الإجهاد وظروف التشغيل اللحظية."
        ),
        "visualType": "formula_deconstruction",
        "keyHighlight": "احتمال العطل اللحظي تحكمه ظروف التشغيل والإجهادات الآنية، لا تاريخ التقويم الزمني.",
    },
    {
        "id": "beat-4",
        "badge": "التقسيم الإحصائي الكبير",
        "badgeIcon": "⚖️",
        "hudStep": 2,
        "title": "المجموعتان الكبريان: 11% مرتبطة بالعمر مقابل 89% عشوائية",
        "narration": (
            "وبناءً على مفهوم الاحتمال الشرطي ده، قسمت الدراسة أعطال الأصول لمجموعتين كبار جداً لازم تحفظهم صم: "
            "المجموعة الأولى: الأعطال المرتبطة بالعمر الزمني، ودي نسبتها الإجمالية إحدى عشر في المية فقط! "
            "بتضم الأنماط A و B و C، وبتتميز بوجود نقطة تآكل واضحة وصريحة اسمها الـ Wear-Out Zone، وهنا بس تنفع الصيانة بالتقويم الزمني. "
            "أما المجموعة التانية، وهي الكارثة الكبرى اللي لازم تركز فيها لامتحان الـ CMRP: "
            "تسعة وثمانون بالمئة من أعطال المعدات الحديثة أعطال عشوائية تماماً! "
            "بتضم الأنماط D و E و F، وفيها احتمالية العطل ثابتة في أي لحظة أو بترتفع بعد التركيب مباشرة. "
            "الصيانة بالزمن مع المجموعة دي فاشلة ومكلفة، والحل الوحيد هو الصيانة المشروطة بالحالة CBM."
        ),
        "visualType": "two_groups_distribution",
        "keyHighlight": "89% أعطال عشوائية تتطلب مراقبة الحالة (CBM) • 11% فقط تنجح معها الصيانة بالزمن",
    },
    {
        "id": "beat-5",
        "badge": "تشريح النمط F (وفيات الرضع)",
        "badgeIcon": "📉",
        "hudStep": 3,
        "title": "النمط F: وفيات الرضع (Infant Mortality) — 68% من الأعطال",
        "narration": (
            "تعال بقى نمسك منحنى منحنى ونفصصه هندسياً، ونبدأ بأخطرهم وأكبرهم على الإطلاق: النمط F وفيات الرضع Infant Mortality، "
            "وده بيمثل لوحده ثمانية وستين في المية من إجمالي الأعطال! "
            "بص كده على شكل المنحنى: بيبدأ بقمة فشل عالية جداً وخطيرة في بداية التشغيل بعد التركيب أو بعد العمرة، "
            "وبعدين بينحدر بسرعة ويستقر عند مستوى منخفض وثابت لبقية العمر. "
            "بنشوف ده فين في المصانع؟ بنشوفه في المحركات الكهربائية الجديدة، اللوحات الإلكترونية، والطلمبات بعد ما ترجع من الورشة. "
            "القرار الهندسي الصارم مع النمط ده: إياك والاستبدال بالتقويم الزمني، لأنك كل ما بتفك بتركب عطل جديد، "
            "والحل هو المراقبة المشروطة واختبارات التشغيل الأولي والتأهيل الدقيق."
        ),
        "visualType": "curve_f_detail",
        "keyHighlight": "النمط F يمثل 68% وحده! الفك والاستبدال الدوري يدخل عيوب تجميع جديدة ترفع الفشل فوراً.",
    },
    {
        "id": "beat-6",
        "badge": "الأعطال المستحثة بالصيانة",
        "badgeIcon": "⚠️",
        "hudStep": 3,
        "title": "أسباب وفيات الرضع: فخ المحاذاة والتشحيم والتلوث",
        "narration": (
            "طب ليه النمط F لوحده واخد ثمانية وستين في المية؟ إيه السر وراء وفيات الرضع دي يا ترى؟ "
            "السر في مصطلح هندسي لازم تفهمه كويس اسمه الأعطال المستحثة بالصيانة Maintenance-Induced Failures! "
            "يعني إيد الفني أو المهندس هي اللي دخلت العطل في المعدة اللي كانت سليمة! "
            "وأشهر تلات أسباب في المصانع: أولاً: أخطاء المحاذاة والاتزان Misalignment & Unbalance، عدم ضبط الكوبلنج بليزر ينتج عنه اهتزازات تدمر الرولمان بلي. "
            "ثانياً: أخطاء التشحيم، وأخطرها الشحم الزائد Over-Greasing اللي بيكتم البلي ويرفع حرارته ويحرقه. "
            "وثالثاً: تلوث الزيوت والأتربة اللي بتدخل جوه المحامل أثناء الفك في بيئة الورشة المفتوحة. كل فكة مش مبررة لمعدة شغالة هي مقامرة خاسرة!"
        ),
        "visualType": "maintenance_induced_traps",
        "keyHighlight": "الأسباب الثلاثة: 1. أخطاء المحاذاة والاتزان • 2. الشحم الزائد الخانق • 3. دخول الأتربة والتلوث",
    },
    {
        "id": "beat-7",
        "badge": "تشريح النمط E (العشوائي التام)",
        "badgeIcon": "📊",
        "hudStep": 3,
        "title": "النمط E: العشوائي التام (Purely Random) — 14% من الأعطال",
        "narration": (
            "النمط التاني في المجموعة العشوائية هو النمط E: العشوائي التام Purely Random، وبيمثل أربعة عشر بالمئة من الأعطال. "
            "المنحنى ده عبارة عن خط أفقي مسطح تماماً من أول ساعة تشغيل لحد آخر ساعة! "
            "احتمالية العطل فيه متساوية وثابتة في أي يوم: النهاردة زي بعد سنة زي بعد خمس سنين، ومفيش أي منطقة تآكل أو تقادم. "
            "بنشوفه في الصمامات الكروية Ball Valves، كروت الدوائر الإلكترونية، والسيور الناقلة لما تتعرض لأجسام غريبة وصدمات مفاجئة. "
            "القرار الهندسي هنا: الصيانة بالزمن عديمة الجدوى بنسبة مية في المية! "
            "الحل لو المعدة غير حرجة تشغلها لحد ما تعطل Run-to-Failure، ولو حرجة تعمل لها نظام احتياطي متوازي ومراقبة فورية."
        ),
        "visualType": "curve_e_detail",
        "keyHighlight": "النمط E (14%): خط مسطح بلا تقادم • الصيانة بالزمن عديمة الجدوى • الحل: RTF أو Redundancy",
    },
    {
        "id": "beat-8",
        "badge": "تشريح النمط D (البداية المنخفضة)",
        "badgeIcon": "📉",
        "hudStep": 3,
        "title": "النمط D: البداية المنخفضة ثم الاستقرار — 7% من الأعطال",
        "narration": (
            "النمط التالت والأخير في المجموعة العشوائية هو النمط D: البداية المنخفضة ثم الاستقرار، وبيمثل سبعة بالمئة. "
            "في النمط ده المعدة بتبدأ باحتمالية عطل منخفضة جداً وممتازة وهي جديدة تماماً ومحكومة التصنيع، "
            "وبعد فترة وجيزة بترتفع الاحتمالية سنة بسيطة جداً وتستقر عند خط أفقي ثابت لبقية عمرها. "
            "بنشوفه في الأنابيب المعزولة، خطوط المواسير، هياكل المعدات، والخراطيم الهيدروليكية المعتمدة عالية الجودة. "
            "القرار الهندسي: الصيانة بالزمن برضه ملهاش أي قيمة هنا؛ الفحص البصري الدوري، التأكد من عدم وجود تسريبات، "
            "واختبارات الضغط الهيدروستاتيكي وضبط بيئة التشغيل هي الحل الوحيد."
        ),
        "visualType": "curve_d_detail",
        "keyHighlight": "النمط D (7%): احتمالية ترتفع قليلاً ثم تستقر • الفحص الدوري وضبط الظروف كافٍ تماماً",
    },
    {
        "id": "beat-9",
        "badge": "تشريح النمط C (التعب والإجهاد)",
        "badgeIcon": "📈",
        "hudStep": 4,
        "title": "النمط C: التعب والإجهاد التدريجي (Gradual Fatigue) — 5%",
        "narration": (
            "تعال بقى ننتقل للمجموعة الأولى اللي هي المرتبطة بالعمر الزمني، ونبدأ بالنمط C: التعب والإجهاد التدريجي Gradual Fatigue، ونسبته خمسة بالمئة. "
            "بص لشكل المنحنى: بيبدأ بمعدل منخفض جداً، ويفضل يتصاعد تدريجياً وبانتظام مع كل ساعة تشغيل ومع كل دورة إجهاد ميكانيكي بتمر على المعدة. "
            "بنشوفه بوضوح شديد في التروس المسننة في الجيربوكس، نوابض وسوست صمامات الأمان، والهياكل المعدنية المعرضة لاهتزازات ديناميكية مستمرة. "
            "القرار الهندسي هنا: الصيانة الوقائية بالزمن أو بعدد دورات التشغيل Cyclic Life مجدية وناجحة جداً، "
            "بشرط حساب دورات الإجهاد بدقة وتغيير الجزء المجهد قبل الوصول لنقطة الكسر بالمعدن."
        ),
        "visualType": "curve_c_detail",
        "keyHighlight": "النمط C (5%): تصاعد منتظم مع تراكم دورات الإجهاد • الصيانة بعدد الدورات أو الساعات تنجح بامتياز",
    },
    {
        "id": "beat-10",
        "badge": "تشريح النمط A (حوض الاستحمام)",
        "badgeIcon": "🛁",
        "hudStep": 4,
        "title": "النمط A: حوض الاستحمام التقليدي (Classic Bathtub) — 4% فقط",
        "narration": (
            "نيجي بقى للمنحنى الأشهر تاريخياً، النمط A: منحنى حوض الاستحمام التقليدي Bathtub Curve، واللي المفاجأة إنه لا يمثل سوى أربعة بالمئة فقط من أصول المصانع! "
            "المنحنى ده جامع بين مرحلتين: وفيات رضع في الأول، بعدها فترة استقرار طويلة هي العمر التشغيلي المفيد، "
            "وفي الآخر خالص بيحصل صعود صاروخي وسريع في معدل الفشل نتيجة التآكل الحتمي. "
            "بنشوفه فين؟ في بطانات الأفران الحرارية المعرضة لحرارة وتآكل كيميائي مستمر، وبعض الأجهزة الكهروميكانيكية البسيطة القديمة. "
            "القرار الهندسي: هنا الصيانة الوقائية بالاستبدال الزمني تنجح بشرط واحد بس: "
            "إنك تحدد بدقة متناهية العتبة الزمنية لبداية مرحلة التآكل وتغير القطعة قبلها مباشرة."
        ),
        "visualType": "curve_a_detail",
        "keyHighlight": "النمط A (4%): وفيات رضع + استقرار + تآكل نهائي • الاستبدال بالزمن ينجح فقط عند عتبة نهاية العمر",
    },
    {
        "id": "beat-11",
        "badge": "تشريح النمط B (التآكل الصريح)",
        "badgeIcon": "🛑",
        "hudStep": 4,
        "title": "النمط B: التآكل الصريح مع العمر (Traditional Wear-Out) — 2%",
        "narration": (
            "آخر منحنى هو النمط B: التآكل الصريح مع العمر Traditional Wear-Out، ونسبته هي الأقل على الإطلاق: اتنين في المية بس! "
            "المنحنى ده بيفضل ماشي أفقي ومنخفض جداً بمعدل فشل شبه معدوم، وفجأة عند نقطة زمنية محددة بيقفز للأعلى قفزة حادة ورأسية نتيجة استهلاك المادة الفيزيائية بالكامل. "
            "أشهر أمثلته في الصناعة: تيل الفرامل، إطارات الشاحنات، سكاكين التقطيع وشفرات الكسارات، وفلاتر الهواء المعرضة لانسداد تدريجي. "
            "القرار الهندسي: ده هو النموذج المثالي والأصلي للصيانة الوقائية بالزمن أو بقياس السُمك واستهلاك المادة؛ "
            "تغيير مجدول بانتظام بيحمي المعدة تماماً وبيمنع الانهيار الكارثي."
        ),
        "visualType": "curve_b_detail",
        "keyHighlight": "النمط B (2%): ثبات تام ثم قفزة حادة بسبب نفاد المادة • النموذج المثالي للاستبدال بالزمن أو قياس السمك",
    },
    {
        "id": "beat-12",
        "badge": "شجرة قرارات RCM الحاكمة",
        "badgeIcon": "💡",
        "hudStep": 5,
        "title": "المعيار الهندسي الفاصل في RCM: متى تنجح الصيانة بالتقويم الزمني؟",
        "narration": (
            "نطلع بإيه بقى من كل التفصيل والتشريح اللي شرحناه ده يا باشمهندس؟ "
            "نطلع بالقاعدة الذهبية الحاكمة اللي بنى عليها جون موبراي علم صيانة الاعتمادية RCM: "
            "المعيار الفاصل الوحيد بين اختيار الصيانة بالزمن أو الصيانة المشروطة بالحالة هو معيار فيزيائي واحد: "
            "هل للمعدة عمر تقادم محدد ومؤكد إحصائياً؟ "
            "لو الإجابة نعم، يعني الأنماط A أو B أو C، يبقى الاستبدال بالزمن هو الحل الصح والآمن والأوفر. "
            "أما لو الإجابة لا، يعني الأنماط D أو E أو F، يبقى التدخل بالزمن جريمة في حق المعدة، "
            "والحل الوحيد هو الصيانة المشروطة بالحالة ومراقبة مؤشرات الاهتزاز والحرارة والتحليل الطيفي للزيوت."
        ),
        "visualType": "rcm_decision_tree",
        "keyHighlight": "المعيار فيزيائي لا مالي: هل يوجد عمر تقادم مؤكد إحصائياً؟ نعم = صيانة بالزمن، لا = صيانة مشروطة بالحالة",
    },
    {
        "id": "beat-13",
        "badge": "التطبيق العملي وخاتمة الدرس",
        "badgeIcon": "🎓",
        "hudStep": 6,
        "title": "اختبر معلوماتك وطبق عملياً على منصة GridFix Academy",
        "narration": (
            "وفي نهاية الدرس، تقدر تذاكر المحتوى والشرح كاملاً، وتجرب مستكشف المنحنيات التفاعلي، "
            "وتحل أسئلة وتختبر نفسك في كويز السيناريوهات الخاص بالدرس ده على منصة GridFix Academy... "
            "الرابط هتلاقيه موجود تحت في صندوق الوصف. شكراً لمتابعتكم، وأشوفكم في الدرس القادم."
        ),
        "visualType": "outro_platform",
        "keyHighlight": "المحتوى الكامل + حاسبة المنحنيات التفاعلية + كويز السيناريوهات متاح مجاناً على academy.gridfix.net",
    }
]

def generate_all_audio_beats():
    print("=== 1. Generating Conversational Audio with Gemini 2.5 Flash TTS ===")
    config = types.GenerateContentConfig(
        response_modalities=["AUDIO"],
        speech_config=types.SpeechConfig(
            voice_config=types.VoiceConfig(
                prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=VOICE_NAME)
            )
        )
    )

    audio_files = []
    total_audio_seconds = 0.0

    for idx, b in enumerate(beats):
        pcm_path = os.path.join(AUDIO_DIR, f"beat_{idx+1}.pcm")
        mp3_path = os.path.join(AUDIO_DIR, f"beat_{idx+1}.mp3")
        
        # Check if already generated (Cache check to prevent wasting quota)
        if os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 10000:
            res = subprocess.run([FFMPEG, "-i", mp3_path], capture_output=True, text=True, errors="ignore")
            dur = 10.0
            for line in res.stderr.splitlines():
                if "Duration:" in line:
                    parts = line.split("Duration:")[1].split(",")[0].strip()
                    h, m, s = parts.split(":")
                    dur = float(h) * 3600 + float(m) * 60 + float(s)
                    break
            b["audio_file"] = mp3_path
            b["duration"] = dur
            total_audio_seconds += dur
            print(f"   [{idx+1}/{len(beats)}] CACHED: {b['badge']} ({dur:.2f}s, Cumulative: {total_audio_seconds:.2f}s)")
            audio_files.append(mp3_path)
            continue
        
        prompt = f"""
You are an experienced, warm, friendly engineering consultant speaking casually, passionately, and clearly to a fellow engineer over coffee.
Tone: Warm, confident, authoritative yet friendly Egyptian engineering professional cadence (نبرة مهندس مصري استشاري خبير، ودودة جداً وفصيحة، تشرح بعمق وبساطة، مع وقفات طبيعية للتفكير والتأمل).
Pronounce technical abbreviations (CMRP, CBM, RCM, FAA, A, B, C, D, E, F) smoothly and naturally in Arabic context.

Text to speak aloud:
{b['narration']}
""".strip()

        print(f"   [{idx+1}/{len(beats)}] Generating audio for: {b['badge']}...")
        
        # Retry logic with backoff to guarantee quota resilience
        max_retries = 3
        resp = None
        for attempt in range(max_retries):
            try:
                resp = client.models.generate_content(
                    model="gemini-2.5-flash-preview-tts",
                    contents=prompt,
                    config=config,
                )
                break
            except Exception as e:
                print(f"      [Retry {attempt+1}/{max_retries}] API notice: {e}. Waiting 4 seconds...")
                time.sleep(4)

        if not resp:
            raise RuntimeError(f"Failed to generate audio for beat {idx+1}")

        pcm_data = None
        for part in resp.parts:
            if part.inline_data:
                pcm_data = part.inline_data.data
                break

        if not pcm_data:
            raise RuntimeError(f"No audio data in response for beat {idx+1}")

        with open(pcm_path, "wb") as f:
            f.write(pcm_data)

        # Convert to 192kbps MP3
        cmd = [
            FFMPEG, "-y",
            "-f", "s16le",
            "-ar", "24000",
            "-ac", "1",
            "-i", pcm_path,
            "-c:a", "libmp3lame",
            "-b:a", "192k",
            mp3_path
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        if os.path.exists(pcm_path):
            os.remove(pcm_path)

        # Measure exact duration via FFmpeg
        res = subprocess.run([FFMPEG, "-i", mp3_path], capture_output=True, text=True, errors="ignore")
        dur = 10.0
        for line in res.stderr.splitlines():
            if "Duration:" in line:
                parts = line.split("Duration:")[1].split(",")[0].strip()
                h, m, s = parts.split(":")
                dur = float(h) * 3600 + float(m) * 60 + float(s)
                break

        b["audio_file"] = mp3_path
        b["duration"] = dur
        total_audio_seconds += dur
        print(f"      Duration: {dur:.2f}s (Cumulative: {total_audio_seconds:.2f}s)")
        audio_files.append(mp3_path)
        
        # Polite 2s delay between calls to preserve RPM quota
        time.sleep(2)

    # Concatenate all beats into one continuous seamless audio file
    concat_list = os.path.join(AUDIO_DIR, "concat_audio.txt")
    with open(concat_list, "w", encoding="utf-8") as f:
        for af in audio_files:
            f.write(f"file '{os.path.abspath(af)}'\n")

    full_audio_mp3 = os.path.join(OUTPUT_DIR, "masterclass_audio_full.mp3")
    cmd = [
        FFMPEG, "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_list,
        "-c", "copy",
        full_audio_mp3
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    print(f"=== Audio Completed! Total Duration: {int(total_audio_seconds // 60):02d}:{int(total_audio_seconds % 60):02d} ({total_audio_seconds:.2f}s) ===")
    return full_audio_mp3, total_audio_seconds

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

    elif vt == "curve_f_detail":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.85); border: 2px solid #ef4444; border-radius: 24px; padding: 26px; box-shadow: 0 0 30px rgba(239,68,68,0.2);">
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="flex: 1.2;">
              <svg viewBox="0 0 360 160" style="width: 100%;">
                <path d="M 20,20 Q 60,130 140,135 L 340,135" fill="none" stroke="#ef4444" stroke-width="6" />
                <line x1="20" y1="140" x2="340" y2="140" stroke="#64748b" stroke-width="2" />
                <line x1="20" y1="140" x2="20" y2="20" stroke="#64748b" stroke-width="2" />
                <circle cx="20" cy="20" r="7" fill="#ef4444" />
                <text x="30" y="35" fill="#fca5a5" font-size="14" font-weight="bold">قمة وفيات الرضع (68%)</text>
                <text x="180" y="125" fill="#94a3b8" font-size="14">استقرار عند مستوى منخفض</text>
                <text x="280" y="155" fill="#64748b" font-size="12">الزمن التشغيلي ←</text>
              </svg>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
              <div style="background: rgba(239,68,68,0.15); border: 1px solid #ef4444; padding: 12px 18px; border-radius: 12px;">
                <div style="color: #fca5a5; font-weight: 900; font-size: 19px;">النسبة: 68% (الأعلى على الإطلاق)</div>
                <div style="color: #cbd5e1; font-size: 15px;">احتمالية فشل مرتفعة جداً بعد التركيب أو العمرة مباشرة، ثم تنخفض وتستقر.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #38bdf8;">
                <div style="color: #38bdf8; font-weight: bold; font-size: 16px;">الأمثلة الصناعية:</div>
                <div style="color: #cbd5e1; font-size: 15px;">المحركات الكهربائية، الكروت الإلكترونية، طلمبات الطرد المركزي بعد الصيانة.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #10b981;">
                <div style="color: #34d399; font-weight: bold; font-size: 16px;">القرار الهندسي السليم:</div>
                <div style="color: #cbd5e1; font-size: 15px;">منع الاستبدال بالتقويم الزمني، تشغيل تجريبي دقيق (Run-in)، ومراقبة الاهتزاز والحرارة.</div>
              </div>
            </div>
          </div>
        </div>
        '''

    elif vt == "maintenance_induced_traps":
        inner_content = '''
        <div style="width: 1050px; display: flex; gap: 20px;">
          <div style="flex: 1; background: rgba(30,41,59,0.85); border: 2px solid #f59e0b; border-radius: 20px; padding: 22px; text-align: center;">
            <div style="font-size: 42px; margin-bottom: 10px;">📐⚡</div>
            <div style="font-size: 20px; color: #f59e0b; font-weight: 900; margin-bottom: 8px;">1. أخطاء المحاذاة والاتزان</div>
            <div style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">عدم ضبط الكوبلنج بدقة الليزر أثناء إعادة التركيب يسبب إجهادات دورانية تدمر كراسي التحميل في ساعات معدودة.</div>
          </div>
          <div style="flex: 1; background: rgba(30,41,59,0.85); border: 2px solid #ef4444; border-radius: 20px; padding: 22px; text-align: center;">
            <div style="font-size: 42px; margin-bottom: 10px;">🛢️🔥</div>
            <div style="font-size: 20px; color: #ef4444; font-weight: 900; margin-bottom: 8px;">2. أخطاء الشحم الزائد</div>
            <div style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">الضغط الزائد للشحم يخنق البلي ويمنع تشتيت الحرارة، فيتحول الشحم لكتل كربونية تحرق المحرك فوراً.</div>
          </div>
          <div style="flex: 1; background: rgba(30,41,59,0.85); border: 2px solid #38bdf8; border-radius: 20px; padding: 22px; text-align: center;">
            <div style="font-size: 42px; margin-bottom: 10px;">🌪️⚙️</div>
            <div style="font-size: 20px; color: #38bdf8; font-weight: 900; margin-bottom: 8px;">3. دخول الأتربة والتلوث</div>
            <div style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">تفكيك المعدة السليمة في بيئة ورش مفتوحة يدخل حبيبات غبار مجهرية تعمل كأداة صنفرة تدمر أسطح الاحتكاك.</div>
          </div>
        </div>
        '''

    elif vt == "curve_e_detail":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.85); border: 2px solid #f59e0b; border-radius: 24px; padding: 26px;">
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="flex: 1.2;">
              <svg viewBox="0 0 360 160" style="width: 100%;">
                <line x1="20" y1="80" x2="340" y2="80" stroke="#f59e0b" stroke-width="6" />
                <line x1="20" y1="140" x2="340" y2="140" stroke="#64748b" stroke-width="2" />
                <line x1="20" y1="140" x2="20" y2="20" stroke="#64748b" stroke-width="2" />
                <text x="70" y="65" fill="#fcd34d" font-size="15" font-weight="bold">معدل فشل ثابت تماماً (14%)</text>
                <text x="140" y="110" fill="#94a3b8" font-size="14">لا يوجد أي تقادم أو تآكل بالزمن</text>
              </svg>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
              <div style="background: rgba(245,158,11,0.15); border: 1px solid #f59e0b; padding: 12px 18px; border-radius: 12px;">
                <div style="color: #fcd34d; font-weight: 900; font-size: 19px;">النسبة: 14% (العشوائي التام)</div>
                <div style="color: #cbd5e1; font-size: 15px;">احتمالية فشل ثابتة ومتساوية من أول يوم تشغيل حتى آخر يوم.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #38bdf8;">
                <div style="color: #38bdf8; font-weight: bold; font-size: 16px;">الأمثلة الصناعية:</div>
                <div style="color: #cbd5e1; font-size: 15px;">الصمامات الكروية (Ball Valves)، لوحات التحكم الإلكترونية، السيور عند الصدمات.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #10b981;">
                <div style="color: #34d399; font-weight: bold; font-size: 16px;">القرار الهندسي السليم:</div>
                <div style="color: #cbd5e1; font-size: 15px;">الصيانة بالزمن عديمة الجدوى 100%. الحل: التشغيل حتى العطل (RTF) أو نظام احتياطي (Redundancy).</div>
              </div>
            </div>
          </div>
        </div>
        '''

    elif vt == "curve_d_detail":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.85); border: 2px solid #06b6d4; border-radius: 24px; padding: 26px;">
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="flex: 1.2;">
              <svg viewBox="0 0 360 160" style="width: 100%;">
                <path d="M 20,135 Q 60,95 100,90 L 340,90" fill="none" stroke="#06b6d4" stroke-width="6" />
                <line x1="20" y1="140" x2="340" y2="140" stroke="#64748b" stroke-width="2" />
                <line x1="20" y1="140" x2="20" y2="20" stroke="#64748b" stroke-width="2" />
                <text x="40" y="125" fill="#67e8f9" font-size="13">بداية منخفضة</text>
                <text x="140" y="75" fill="#67e8f9" font-size="15" font-weight="bold">استقرار عند مستوى ثابت (7%)</text>
              </svg>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
              <div style="background: rgba(6,182,212,0.15); border: 1px solid #06b6d4; padding: 12px 18px; border-radius: 12px;">
                <div style="color: #67e8f9; font-weight: 900; font-size: 19px;">النسبة: 7% (البداية المنخفضة ثم الاستقرار)</div>
                <div style="color: #cbd5e1; font-size: 15px;">احتمالية منخفضة جداً وهي جديدة، ثم ترتفع قليلاً وتستقر تماماً.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #38bdf8;">
                <div style="color: #38bdf8; font-weight: bold; font-size: 16px;">الأمثلة الصناعية:</div>
                <div style="color: #cbd5e1; font-size: 15px;">الأنابيب المعزولة، هياكل المعدات، الخراطيم الهيدروليكية عالية الجودة.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #10b981;">
                <div style="color: #34d399; font-weight: bold; font-size: 16px;">القرار الهندسي السليم:</div>
                <div style="color: #cbd5e1; font-size: 15px;">الفحص البصري الدوري، اختبارات الضغط الهيدروستاتيكي، وضبط بيئة التشغيل.</div>
              </div>
            </div>
          </div>
        </div>
        '''

    elif vt == "curve_c_detail":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.85); border: 2px solid #8b5cf6; border-radius: 24px; padding: 26px;">
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="flex: 1.2;">
              <svg viewBox="0 0 360 160" style="width: 100%;">
                <path d="M 20,135 Q 160,110 340,30" fill="none" stroke="#8b5cf6" stroke-width="6" />
                <line x1="20" y1="140" x2="340" y2="140" stroke="#64748b" stroke-width="2" />
                <line x1="20" y1="140" x2="20" y2="20" stroke="#64748b" stroke-width="2" />
                <text x="140" y="90" fill="#c4b5fd" font-size="15" font-weight="bold">صعود تدريجي مع تراكم الإجهادات (5%)</text>
              </svg>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
              <div style="background: rgba(139,92,246,0.15); border: 1px solid #8b5cf6; padding: 12px 18px; border-radius: 12px;">
                <div style="color: #c4b5fd; font-weight: 900; font-size: 19px;">النسبة: 5% (التعب والإجهاد التدريجي)</div>
                <div style="color: #cbd5e1; font-size: 15px;">تبدأ منخفضة وتتزايد تدريجياً مع تراكم ساعات التشغيل ودورات الإجهاد.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #38bdf8;">
                <div style="color: #38bdf8; font-weight: bold; font-size: 16px;">الأمثلة الصناعية:</div>
                <div style="color: #cbd5e1; font-size: 15px;">تروس الجيربوكس، نوابض وسوست الصمامات، الهياكل المعرضة للاهتزاز المستمر.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #10b981;">
                <div style="color: #34d399; font-weight: bold; font-size: 16px;">القرار الهندسي السليم:</div>
                <div style="color: #cbd5e1; font-size: 15px;">الصيانة بالزمن أو بعدد دورات التشغيل (Cycles) مجدية جداً قبل الوصول لحد الكلال.</div>
              </div>
            </div>
          </div>
        </div>
        '''

    elif vt == "curve_a_detail":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.85); border: 2px solid #ec4899; border-radius: 24px; padding: 26px;">
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="flex: 1.2;">
              <svg viewBox="0 0 360 160" style="width: 100%;">
                <path d="M 20,40 Q 60,130 110,130 L 250,130 Q 300,130 340,30" fill="none" stroke="#ec4899" stroke-width="6" />
                <line x1="20" y1="140" x2="340" y2="140" stroke="#64748b" stroke-width="2" />
                <line x1="20" y1="140" x2="20" y2="20" stroke="#64748b" stroke-width="2" />
                <text x="30" y="65" fill="#f472b6" font-size="12">وفيات رضع</text>
                <text x="145" y="120" fill="#f472b6" font-size="14" font-weight="bold">عمر مفيد</text>
                <text x="270" y="55" fill="#f472b6" font-size="12">تآكل وتقادم</text>
              </svg>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
              <div style="background: rgba(236,72,153,0.15); border: 1px solid #ec4899; padding: 12px 18px; border-radius: 12px;">
                <div style="color: #f472b6; font-weight: 900; font-size: 19px;">النسبة: 4% فقط (حوض الاستحمام التقليدي)</div>
                <div style="color: #cbd5e1; font-size: 15px;">وفيات رضع في البداية، عمر مفيد مستقر، ثم صعود حاد عند نهاية العمر.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #38bdf8;">
                <div style="color: #38bdf8; font-weight: bold; font-size: 16px;">الأمثلة الصناعية:</div>
                <div style="color: #cbd5e1; font-size: 15px;">بطانات الأفران الحرارية، المعدات البسيطة المعرضة لتآكل كيميائي وحراري متزامن.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #10b981;">
                <div style="color: #34d399; font-weight: bold; font-size: 16px;">القرار الهندسي السليم:</div>
                <div style="color: #cbd5e1; font-size: 15px;">الاستبدال بالزمن ينجح فقط عند تحديد عتبة بداية التآكل بدقة واستبدالها قبلها.</div>
              </div>
            </div>
          </div>
        </div>
        '''

    elif vt == "curve_b_detail":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.85); border: 2px solid #10b981; border-radius: 24px; padding: 26px;">
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="flex: 1.2;">
              <svg viewBox="0 0 360 160" style="width: 100%;">
                <path d="M 20,135 L 240,135 Q 280,135 320,30" fill="none" stroke="#10b981" stroke-width="6" />
                <line x1="20" y1="140" x2="340" y2="140" stroke="#64748b" stroke-width="2" />
                <line x1="20" y1="140" x2="20" y2="20" stroke="#64748b" stroke-width="2" />
                <text x="80" y="125" fill="#6ee7b7" font-size="14">استقرار ومعدل عطل منخفض جداً</text>
                <text x="250" y="60" fill="#6ee7b7" font-size="14" font-weight="bold">قفزة تآكل حادة (2%)</text>
              </svg>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
              <div style="background: rgba(16,185,129,0.15); border: 1px solid #10b981; padding: 12px 18px; border-radius: 12px;">
                <div style="color: #6ee7b7; font-weight: 900; font-size: 19px;">النسبة: 2% فقط (التآكل الصريح مع العمر)</div>
                <div style="color: #cbd5e1; font-size: 15px;">ثبات منخفض ثم زيادة حادة ومفاجئة عند نقطة زمنية محددة لاستهلاك المادة.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #38bdf8;">
                <div style="color: #38bdf8; font-weight: bold; font-size: 16px;">الأمثلة الصناعية:</div>
                <div style="color: #cbd5e1; font-size: 15px;">إطارات الشاحنات، شفرات التقطيع، سكاكين الكسارات، فلاتر الهواء والوقود.</div>
              </div>
              <div style="background: rgba(30,41,59,0.8); padding: 12px 18px; border-radius: 12px; border-right: 4px solid #10b981;">
                <div style="color: #34d399; font-weight: bold; font-size: 16px;">القرار الهندسي السليم:</div>
                <div style="color: #cbd5e1; font-size: 15px;">النموذج المثالي والأصلي للاستبدال الوقائي بالزمن أو بقياس السُمك المستهلك.</div>
              </div>
            </div>
          </div>
        </div>
        '''

    elif vt == "rcm_decision_tree":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.9); border: 2px solid rgba(56,189,248,0.4); border-radius: 24px; padding: 26px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="font-size: 24px; color: #f8fafc; font-weight: 900; background: rgba(30,41,59,0.8); display: inline-block; padding: 10px 28px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
              السؤال الحاكم في شجرة قرارات RCM: <span style="color: #38bdf8;">هل يوجد عمر تقادم مؤكد إحصائياً؟</span>
            </div>
          </div>
          <div style="display: flex; gap: 32px;">
            <div style="flex: 1; background: rgba(5,150,105,0.15); border: 2px solid #10b981; border-radius: 20px; padding: 22px; text-align: center;">
              <div style="font-size: 32px; color: #34d399; font-weight: 900; margin-bottom: 8px;">✅ نـعـم (11%)</div>
              <div style="font-size: 18px; color: #6ee7b7; font-weight: bold; margin-bottom: 12px;">الأنماط A و B و C</div>
              <div style="background: rgba(15,23,42,0.8); padding: 12px; border-radius: 12px; color: #f8fafc; font-size: 16px; line-height: 1.6;">
                تطبيق الصيانة الوقائية بالتقويم الزمني (Time-Based PM) أو الاستبدال بعدد دورات التشغيل.
              </div>
            </div>
            <div style="flex: 1; background: rgba(2,132,199,0.15); border: 2px solid #38bdf8; border-radius: 20px; padding: 22px; text-align: center;">
              <div style="font-size: 32px; color: #38bdf8; font-weight: 900; margin-bottom: 8px;">❌ لا (89%)</div>
              <div style="font-size: 18px; color: #7dd3fc; font-weight: bold; margin-bottom: 12px;">الأنماط D و E و F</div>
              <div style="background: rgba(15,23,42,0.8); padding: 12px; border-radius: 12px; color: #f8fafc; font-size: 16px; line-height: 1.6;">
                الصيانة بالزمن ضارة وممنوعة! الحل: الصيانة المشروطة بالحالة (CBM) ومراقبة المؤشرات، أو RTF للمعدات غير الحرجة.
              </div>
            </div>
          </div>
        </div>
        '''

    elif vt == "outro_platform":
        inner_content = '''
        <div style="width: 1050px; background: rgba(15,23,42,0.95); border: 2px solid #f59e0b; border-radius: 24px; padding: 32px; text-align: center; box-shadow: 0 0 35px rgba(245,158,11,0.25);">
          <div style="font-size: 54px; margin-bottom: 12px;">🎓✨</div>
          <h2 style="font-size: 36px; color: #f8fafc; font-weight: 900; margin-bottom: 14px;">تابع المذاكرة والتطبيق العملي على المنصة</h2>
          <div style="font-size: 20px; color: #cbd5e1; max-width: 800px; margin: 0 auto 24px; line-height: 1.6;">
            شرح الدرس كاملاً + حاسبة مستكشف المنحنيات الستة التفاعلية + كويز سيناريوهات الامتحان مع تصحيح فوري متاح مجاناً على منصة GridFix Academy.
          </div>
          <div style="display: inline-flex; align-items: center; gap: 14px; background: linear-gradient(90deg, #0284c7, #38bdf8); color: #020617; font-size: 26px; font-weight: 900; padding: 12px 36px; border-radius: 999px; box-shadow: 0 4px 20px rgba(56,189,248,0.4);">
            <span>🌐</span>
            <span>academy.gridfix.net</span>
          </div>
          <div style="color: #94a3b8; font-size: 16px; margin-top: 18px;">الرابط المباشر موجود أسفل الفيديو في صندوق الوصف ⬇️</div>
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
    
    # Accurate elapsed-second progress bar (Reaches 100% only on final frame)
    bar_pct = max(2.5, min(98.5, (elapsed_before / total_dur) * 100))
    if idx == total_beats - 1:
        bar_pct = 95.0 # final slide starts around 95% and finishes at 100%

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
  /* Technical Blueprint Grid */
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
  /* Sleek smooth progress bar at bottom with ZERO text footer */
  .in-video-progress-bar {{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 7px;
    width: {bar_pct:.1f}%;
    background: linear-gradient(90deg, #0284c7, #38bdf8, #10b981, #f59e0b);
    box-shadow: 0 0 16px rgba(56,189,248,0.9);
    transition: width 0.3s ease;
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

  <!-- NO TEXT FOOTER, ONLY CLEAN PROGRESS ACCENT LINE -->
  <div class="in-video-progress-bar"></div>
</body>
</html>'''
    return html

def render_slides(total_dur):
    print("=== 2. Rendering High-Fidelity 1080p Slides via Playwright ===")
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
            print(f"   [Beat {idx+1}/{len(beats)}] Rendered: {b['title'][:40]}... ({b['duration']:.2f}s)")
            elapsed += b["duration"]
            
        browser.close()

def render_final_masterclass_video(audio_file):
    print("=== 3. Encoding Masterclass 1080p MP4 via FFmpeg with Zero Dead Silence ===")
    output_mp4 = os.path.join(OUTPUT_DIR, "masterclass_cmrp_1_1_full.mp4")
    
    concat_script = os.path.join(OUTPUT_DIR, "concat_slides.txt")
    with open(concat_script, "w", encoding="utf-8") as f:
        for idx, b in enumerate(beats):
            f.write(f"file '{os.path.abspath(b['slide_img'])}'\n")
            f.write(f"duration {b['duration']:.2f}\n")
        # FFmpeg concat demuxer requirement: duplicate last slide
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
    res = subprocess.run(cmd, capture_output=True, text=True, errors="ignore")
    if res.returncode != 0:
        print(f"FFmpeg error: {res.stderr}")
        raise RuntimeError("FFmpeg encoding failed")
        
    size_mb = os.path.getsize(output_mp4) / (1024 * 1024)
    print(f"=== Masterclass Video Successfully Produced! ===")
    print(f"   Output: {output_mp4}")
    print(f"   Size: {size_mb:.2f} MB")
    return output_mp4

def generate_youtube_metadata(total_dur):
    print("=== 4. Generating Official YouTube Metadata & Chapter Timestamps ===")
    metadata_file = os.path.join(OUTPUT_DIR, "YOUTUBE_METADATA.md")
    
    elapsed = 0.0
    chapters = []
    for idx, b in enumerate(beats):
        m = int(elapsed // 60)
        s = int(elapsed % 60)
        chapters.append(f"{m:02d}:{s:02d} - {b['title']}")
        elapsed += b["duration"]

    chapters_str = "\n".join(chapters)
    content = f"""# ميتاداتا فيديو يوتيوب — CMRP 1.1: أنماط الأعطال ونظرية التقادم

## 1. عنوان الفيديو (Video Title):
أنماط الأعطال ونظرية التقادم | كورس هندسة الصيانة والموثوقية CMRP (الماستر كلاس الشامل)

## 2. وصف الفيديو (Video Description):
كورس هندسة الصيانة والموثوقية (CMRP) معتمد من منصة GridFix Academy.
في هذا الدرس الشامل والمفصل، نقوم بتفكيك دراسة نولان وهيب التاريخية لعام 1978، ونسف أسطورة منحنى حوض الاستحمام (Bathtub Curve)، مع شرح تفصيلي للأنماط الستة للأعطال (الأنماط F, E, D, C, A, B) ومعادلة الاحتمال الشرطي للفشل λ(t) ومعايير اتخاذ القرار في صيانة الاعتمادية (RCM).

🌐 الرابط المباشر للدرس التفاعلي وحاسبة المنحنيات الستة:
https://academy.gridfix.net/cmrp/lessons/lesson-cmrp-1-1

⏱️ الفصول الزمنية الدقيقة (Chapters):
{chapters_str}

---
🎓 منصة GridFix Academy — المنصة العربية المتخصصة في هندسة وإدارة المنشآت والأصول والصيانة والموثوقية.
"""
    with open(metadata_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"   Metadata exported: {metadata_file}")

def main():
    audio_file, total_dur = generate_all_audio_beats()
    render_slides(total_dur)
    render_final_masterclass_video(audio_file)
    generate_youtube_metadata(total_dur)

if __name__ == "__main__":
    main()
