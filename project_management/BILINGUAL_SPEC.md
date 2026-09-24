# مواصفة ثنائية اللغة للدروس (Bilingual Lessons)

الهدف: كل درس يعرض محتواه بالعربية أو الإنجليزية، والمتعلّم يبدّل بينهما بزر اللغة في الهيدر (المفتاح `cfm-lang` في المتصفح). التقنية القائمة توفر الميكانيكا تلقائياً:

- `SiteHeader` يضبط `document.documentElement.lang = ar|en` وينشر حدث `cfm-lang-changed`.
- CSS العام: `html[lang="ar"] [data-lang="en"], html[lang="en"] [data-lang="ar"] { display:none }`.
- أي عنصر يحمل `data-lang="ar"` يظهر فقط عند العربية، و`data-lang="en"` يظهر فقط عند الإنجليزية.

## القاعدة الذهبية

لا تُكرَّر المكونات التفاعلية (الأدوات `client:load` و `ScenarioQuiz`)؛ تُعرَض مرة واحدة خارج كتل اللغة. النصوص والرسوم الثابتة (`Callout`، `FlowChart`، `Hierarchy`، `Infographic`، `Timeline`، `StatGrid`، `Comparison`) تُكرَّر داخل كل كتلة بترجمة لإنجليزي عند الحاجة.

## الهيكل القياسي لكل درس (بعد الاستيرادات)

اكتب المحتوى العربي داخل `<LangSection lang="ar">…</LangSection>` والمقابل الإنجليزي داخل `<LangSection lang="en">…</LangSection>`، مع استيراد المكوّن:

```mdx
import LangSection from '../../../components/ui/LangSection.astro';
```

الترتيب في ملف MDX الواحد:

1. `<LangSection lang="ar">` كل النص حتى نهاية آخر قسم (الافتتاحية + الأقسام المرقمة + الرسوم + Callout) + `<LangSection lang="en">` للمقابل نفسه.
2. زوج كتل لعنوان الأداة اليوم ومقدّمتها، ثم `<ToolComponent client:load />` مرة واحدة (خارج الكتل).
3. زوج كتل لعنوان قاموس المصطلحات، ثم `<GlossaryCard … />` مرة واحدة.
4. زوج كتل لعنوان «راجع ما تعلمته» ومقدمته، ثم `<ScenarioQuiz … client:load />` مرة واحدة.
5. زوج كتل لقسم «خلاصة».

## قواعد الترجمة الإنجليزية

- ترجمة علمية دقيقة بمصطلحات إنجليزية فعلية (HVAC، chiller، preventive maintenance، SLA، LCC…) كما هي في مصادر IFMA/ISO/ASHRAE.
- عناوين الأقسام مرقمة نفس الترقيم العربي: `## 1. …`.
- صيغة المصطلح المزدوجة تنعكس: في العربية «الصيانة الوقائية (Preventive Maintenance)»، وفي الإنجليزية مصطلح واحد مباشر.
- CSS داخل الكتل الإنجليزية: «Summary» بدل «خلاصة»، «Glossary» بدل «قاموس المصطلحات»، «Review what you learned» بدل «راجع ما تعلمته»، «Today's tool» بدل «أداة اليوم».
- العناوين داخل كتلة EN لا تُكتب بحروف عربية إطلاقاً (حتى لا تُحصى من قبل قواعد qa:ar ولا تُربك TOC).

## كويزات

املأ الحقول الإنجليزية الاختيارية في نفس ملف `src/data/quiz/*`:

- `scenarioEn` و `questionEn`
- داخل كل خيار: `textEn` و `explanationEn`

`ScenarioQuiz` يقرأها تلقائياً ويُظهرها عند الإنجليزية، ويسقط إلى العربي إن غاب الحقل (تجنب الغياب).

## التحقق

بعد كل مجموعة دروس: `npm run qa:ar` ثم `npm run check` ثم `npm run build` — ومراجعة يدوية لأن السكربت لا يلتقط كل «كلمة آلة» (راجع AGENTS.md).