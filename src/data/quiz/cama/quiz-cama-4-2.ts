import type { QuizBank } from '../types';

export const quizCama42: QuizBank = {
  id: 'quiz-cama-4-2',
  questions: [
  {
    scenario: 'تُشغّل شركة أسمنت فرناً صناعياً حرجاً يتوقف تكلفة إنتاجه عالية جداً، ولديه أعطال تظهر تدريجياً عبر ارتفاع درجة الحرارة وزيادة الاهتزاز يمكن قياسهما.',
    scenarioEn: 'A cement company operates a critical industrial kiln whose downtime cost is very high, and it has failures that appear gradually through rising temperature and increasing vibration, both measurable.',
    question: 'أي استراتيجية صيانة أكثر ملاءمة لهذا الأصل؟',
    questionEn: 'Which maintenance strategy is most suitable for this asset?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الصيانة التنبؤية (Predictive) القائمة على مراقبة الاهتزاز ودرجة الحرارة للتنبؤ بالعطل قبل حدوثه.',
        textEn: 'Predictive maintenance based on vibration and temperature monitoring to predict the failure before it occurs.',
        isCorrect: true,
        explanation: 'عندما تظهر للعطل دلائل مترقية قابلة للقياس وكان الأصل حرجاً ذا كلفة توقف عالية، تتفوق الصيانة التنبؤية وتتجنب الإيقاف المفاجئ.',
        explanationEn: 'When a failure shows progressive, measurable indicators and the asset is critical with a high downtime cost, predictive maintenance prevails and avoids sudden stoppage.',
      },
      {
        text: 'الصيانة التفاعلية (Reactive) بالانتظار حتى يتوقف الفرن ثم الإصلاح.',
        textEn: 'Reactive maintenance, waiting until the kiln stops, then repairing.',
        isCorrect: false,
        explanation: 'الأصل الحرج ذو كلفة توقف عالية يمتنع التشغيل التفاعلي فيه لأنه يضاعف الخسائر بالإيقاف المفاجئ',
        explanationEn: 'For a critical asset with a high downtime cost, reactive operation is inadmissible because it multiplies the losses through sudden stoppage.',
      },
      {
        text: 'الصيانة الوقائية بجدول زمني ثابت لا يستخدم أياً من المؤشرات المقيسة.',
        textEn: 'Preventive maintenance on a fixed schedule that uses none of the measured indicators.',
        isCorrect: false,
        explanation: 'الوقائية بالجدول الثابت تغفل تحذيرات الاهتزاز والحرارة وتُصان حسب الزمن لا حسب الحالة الفعلية.',
        explanationEn: 'Fixed-schedule preventive maintenance ignores the vibration and heat warnings and maintains by time rather than by actual condition.',
      },
      {
        text: 'إهمال الصيانة والاعتماد على الاحتياطي من الفرق.',
        textEn: 'Neglecting maintenance and relying on the teams\u2019 standby capacity.',
        isCorrect: false,
        explanation: 'إهمال الصيانة في أصل حرج يرفع احتمال العطل المفاجئ بشكل غير مقبول.',
        explanationEn: 'Neglecting maintenance on a critical asset raises the probability of sudden failure to an unacceptable level.',
      }
    ]
  },
  {
    scenario: 'لدى مصنع أغذية فرن تبخير، ومعدل أعطاله منخفض وأثره محدود وخطة توقف مخططة متاحة ربع سنوياً، بينما لديه أيضاً مضخة رئيسية حساسة تتعطل فجأة ويترتب عليها إيقاف فوري للخط.',
    scenarioEn: 'A food plant has an evaporation oven with a low failure rate, limited impact, and a planned outage available quarterly, while it also has a sensitive main pump that fails suddenly and causes an immediate line stoppage.',
    question: 'كيف تُختار استراتيجية الصيانة المناسبة لكل أصل وفق مصفوفة الاستراتيجيات الأربع؟',
    questionEn: 'How is the appropriate maintenance strategy chosen for each asset according to the four-strategy matrix?',
    difficulty: 'صعب',
    options: [
      {
        text: 'الانتقال للصيانة التفاعلية المخططة للفرن منخفض الأثر، والصيانة التنبؤية أو الوقائية المركبة المضخة الرئيسية الحساسة.',
        textEn: 'Moving the low-impact oven to planned reactive maintenance, and applying predictive or preventive maintenance to the sensitive main pump.',
        isCorrect: true,
        explanation: 'الأصول ذات الأثر المنخفض تتحمل الصيانة التفاعلية المخططة ضمن الفرص المجدولة، أما الأصول الحساسة للخطأ فتحتاج تنبؤاً محسوباً أو وقاية موثوقة.',
        explanationEn: 'Low-impact assets tolerate planned reactive maintenance within scheduled opportunities, while failure-sensitive assets need calculated prediction or reliable prevention.',
      },
      {
        text: 'تطبيق الصيانة التفاعلية على كل الأصول بلا استثناء لتبسيط العمل.',
        textEn: 'Applying reactive maintenance to all assets without exception to simplify the work.',
        isCorrect: false,
        explanation: 'التسطيح على خيار واحد يضر بالأصول الحساسة التي تحتاج رصداً بالمراقبة المستمرة.',
        explanationEn: 'Flattening everything onto one option harms the sensitive assets that need monitoring through continuous surveillance.',
      },
      {
        text: 'تطبيق الصيانة التنبؤية القياسية على الفرن رغم محدودية أثره بدلاً من التفاعلية المخططة.',
        textEn: 'Applying standard predictive maintenance to the oven despite its limited impact instead of planned reactive maintenance.',
        isCorrect: false,
        explanation: 'حمل أصل منخفض الأثر بتقنيات مراقبة مكلفة يضيع موارد كان الأجدى توجيهها للأصل الحساس.',
        explanationEn: 'Loading a low-impact asset with costly monitoring techniques wastes resources that would be better directed to the sensitive asset.',
      },
      {
        text: 'استبعاد المضخة الرئيسية من خطة الصيانة لأنها تعمل غالباً دون مشاكل.',
        textEn: 'Excluding the main pump from the maintenance plan because it usually works without problems.',
        isCorrect: false,
        explanation: 'حساسية الأصل تعني وجوب الحماية بالمراقبة، واستبعادها يفتح باب العطل المفاجئ.',
        explanationEn: 'The sensitivity of the asset means it must be protected by monitoring, and excluding it opens the door to sudden failure.',
      }
    ]
  },
  {
    scenario: 'يُخطط مهندس الموثوقية في شركة بتروكيماويات لجدولة توقف شامل سنوي للوحدة، ويريد تقليل إجمالي وقت التوقف وتحقيق أعلى عائد للإنتاج.',
    scenarioEn: 'The reliability engineer at a petrochemical company plans to schedule an annual full outage of the unit and wants to minimize the total downtime and achieve the highest return for production.',
    question: 'ما المسؤولية الأساسية لإدارة التوقفات المخططة في هذا السيناريو؟',
    questionEn: 'What is the primary responsibility of planned outage management in this scenario?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'توليد جدول زمني مبني على فحص حالة الأصول، ثم تنسيق الفرق والمواد والموارد لإنهاء التوقف في أقصر نافذة آمنة.',
        textEn: 'Producing a schedule built on asset condition inspection, then coordinating teams, materials, and resources to finish the outage in the shortest safe window.',
        isCorrect: true,
        explanation: 'التوقف المخطط يُدار كعملية متكاملة: تحديد نطاق العمل من حالة الأصول التنبؤية، تجهيز المواد والأطقم، وتنفيذ مضغوط في نافذة زمنية آمنة ومحددة.',
        explanationEn: 'A planned outage is managed as an integrated process: defining the work scope from the predicted asset condition, preparing the materials and crews, and executing a compressed plan within a safe, defined time window.',
      },
      {
        text: 'ترك المواعيد تحكمها رغبة المشغلين دون مرجعية فنية.',
        textEn: 'Leaving the dates controlled by the operators\u2019 wishes without a technical reference.',
        isCorrect: false,
        explanation: 'الجدولة تُبنى على حالة الأصول وأولويات الخطر، وليس على مزاج التشغيل.',
        explanationEn: 'Scheduling is built on asset condition and risk priorities, not on operational mood.',
      },
      {
        text: 'توسيع نافذة التوقف دون سقف زمني لضمان راحة الفرق.',
        textEn: 'Extending the outage window without a time limit to ensure the teams\u2019 comfort.',
        isCorrect: false,
        explanation: 'التوقف يعني خسارة إنتاج، فلا تصور خطة تتمدد دون أفق زمني مدروس.',
        explanationEn: 'An outage means lost production, so no plan should stretch without a considered time horizon.',
      },
      {
        text: 'الاقتصار على أعمال الإصلاح الآخذة التي رصدت في السنة السابقة فقط.',
        textEn: 'Restricting the work to the repair jobs that were tracked in the previous year only.',
        isCorrect: false,
        explanation: 'إهمال أعمال الفحص والوقاية المخططة يجعل التوقف ضائعاً ويعيد العيوب مجدداً.',
        explanationEn: 'Neglecting the planned inspection and prevention work makes the outage wasted and brings the defects back again.',
      }
    ]
  }
  ],
};