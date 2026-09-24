import type { QuizBank } from '../types';

export const quiz72: QuizBank = {
  id: 'quiz-7-2',
  questions: [
    {
      scenario: 'يُناقش مجلس المبنى تخصيص ميزانية لتحسين الأثر البيئي، وأنت توضح التدرج في إدارة النفايات.',
      scenarioEn: 'The building board discusses allocating a budget to improve the environmental impact, and you are explaining the waste management hierarchy.',
      question: 'ما الترتيب الصحيح لتسلسل إدارة النفايات من الأفضل بيئياً إلى الأقل؟',
      questionEn: 'What is the correct order of the waste management sequence from environmentally best to least?',
      difficulty: 'سهل',
      options: [
        {
          text: 'تقليل → إعادة استخدام → إعادة تدوير → استرداد الطاقة → تخلّص آمن',
          textEn: 'Reduce → Reuse → Recycle → Energy recovery → Safe disposal',
          isCorrect: true,
          explanation: 'السلم التدرجي (Waste Hierarchy) العرفي: منع التقليل أولاً، ثم إعادة الاستخدام، ثم التدوير، ثم الاسترداد، وأخيراً ردم التخلص الآمن.',
          explanationEn: 'The conventional waste hierarchy: reduction first, then reuse, then recycling, then recovery, and finally safe disposal landfill.',
        },
        {
          text: 'إعادة تدوير → تقليل → تخلّص → إعادة استخدام → استرداد',
          textEn: 'Recycle → Reduce → Disposal → Reuse → Recovery',
          isCorrect: false,
          explanation: 'الترتيب معكوس جزئياً: التقليل قبل التدوير، والتخلّص آخر الخيارات لا وسطه.',
          explanationEn: 'The order is partially reversed: reduction comes before recycling, and disposal is the last option, not in the middle.',
        },
        {
          text: 'التخلّص → الاسترداد → التدوير → التقليل → إعادة الاستخدام',
          textEn: 'Disposal → Recovery → Recycling → Reduction → Reuse',
          isCorrect: false,
          explanation: 'هذا الترتيب العكسي الكامل — التخلص آخر الرغبات وهو الأكثر أثراً وأغلاها.',
          explanationEn: 'This is the complete reverse order — disposal is the least preferred and the most harmful and costly of all.',
        },
        {
          text: 'حرق النفايات أولاً ثم إعادة تدوير الرماد المتبقي',
          textEn: 'Burn the waste first, then recycle the remaining ash',
          isCorrect: false,
          explanation: 'الاسترداد الطاقي يأتي بعد التدوير لا مكانه؛ والأفضل يبدأ بتقليل النفايات من المصدر أصلاً.',
          explanationEn: 'Energy recovery comes after recycling, not in its place; the best practice starts by reducing waste at the source in the first place.',
        },
      ],
    },
    {
      scenario: 'برنامج إعادة التدوير في مكتبك يعمل منذ عام، لكن معدل الفصل فيه منخفض والملاصقات ترسل معظم الشحنات كثاني ثانوية.',
      scenarioEn: 'Your office recycling program has been running for a year, but the segregation rate is low and contaminants send most shipments back as rejected/secondary loads.',
      question: 'ما الخطوة المهنية الأولى لرفع حقيقية الأداء؟',
      questionEn: 'What is the first professional step to genuinely raise performance?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إجراء تفتيش نفايات (Waste Audit) يفحص التركيبة الفعلية والملوثات قبل تعديل البرنامج',
          textEn: 'Run a waste audit that examines the actual composition and the contaminants before changing the program',
          isCorrect: true,
          explanation: 'القياس قبل الإصلاح: يبين التدقيق ماذا تولد المنشأة فعلاً من نفايات وأين الخلط، فيُعالج من المنبع.',
          explanationEn: 'Measure before fixing: the audit shows what the facility actually generates and where the mixing occurs, so the problem is treated at the source.',
        },
        {
          text: 'شراء حاويات أكثر وألوان أكثر على أمل زيادة الالتزام',
          textEn: 'Buy more bins and more colors hoping to increase compliance',
          isCorrect: false,
          explanation: 'الحاويات وحدها لا تصحح سلوكاً أو نوعية؛ التحليل ينير المشكلة الحقيقية في معالجتها.',
          explanationEn: 'Bins alone do not fix behavior or quality; the analysis illuminates the real problem for addressing it.',
        },
        {
          text: 'اعتماد الشحنات الملوثة كلها ودفع غراماتها بهدوء',
          textEn: 'Accept all the contaminated shipments and quietly pay their fines',
          isCorrect: false,
          explanation: 'غرامة الشحنة الملوثة بنية مالية؛ والتدقيق يوفر فرصة تصحيح أبسط وأرخص قبل العقوبات.',
          explanationEn: 'The contaminated-shipment fine is a financial burden; the audit offers a simpler, cheaper correction opportunity before the penalties.',
        },
        {
          text: 'إيقاف الفصل كلياً حتى تستقر مؤسسات إعادة التدوير',
          textEn: 'Stop the segregation entirely until the recycling facilities stabilize',
          isCorrect: false,
          explanation: 'وقف البرنامج يهجر المنفعة البيئية ذاتها؛ المشكلة معالَجة حزماً بالتشخيص لا بالانسحاب.',
          explanationEn: 'Stopping the program abandons the environmental benefit itself; the problem is handled firmly through diagnosis, not withdrawal.',
        },
      ],
    },
    {
      scenario: 'شركة تقنية تخزن عدداً كبيراً من الشاشات والبطاريات القديمة احتياطاً، وتفكر في إرسالها مع النفايات العامة.',
      scenarioEn: 'A technology company keeps a large stockpile of old monitors and batteries as a backup and considers sending them with the general waste.',
      question: 'ما المعاملة الصحيحة لهذه النفايات الإلكترونية والخاصة؟',
      questionEn: 'What is the correct handling of this electronic and special waste?',
      difficulty: 'صعب',
      options: [
        {
          text: 'فصلها عن النفايات العامة وتسليمها لمقاول معتمد لإعادة التدوير مع توثيق النقل للجهات الرقابية',
          textEn: 'Separate it from the general waste and hand it to a certified recycler with documented transfer for the regulatory authorities',
          isCorrect: true,
          explanation: 'النفايات الإلكترونية والخاصة تتبع مساراً منفصلاً: فصلها عن العامة وتسليمها لمقاول مرخص مع توثيق نقل، وربما تُدار بمسؤولية المنتج الممتدة (EPR).',
          explanationEn: 'Electronic and special waste follows a separate path: segregation from the general waste, delivery to a licensed contractor with documented transfer, and possibly managed under extended producer responsibility (EPR).',
        },
        {
          text: 'خلطها مع القمامة العامة لأن أحجامها صغيرة',
          textEn: 'Mix it with the general trash because of its small size',
          isCorrect: false,
          explanation: 'خلط مواد خاصة بشحنة عامة يلوث مسار الاسترداد ويخالف التنظيم — العزل شرط حماية الناس والبيئة.',
          explanationEn: 'Mixing special materials into a general shipment contaminates the recovery stream and violates regulations — isolation is required to protect people and the environment.',
        },
        {
          text: 'تخزينها مفتوحة في المخزن إلى حين «حل مناسب»',
          textEn: 'Store it openly in the warehouse until a "suitable solution" comes',
          isCorrect: false,
          explanation: 'التخزين بلا تخطيط يرهن السلامة (انبعاثات، حريق) ويراكم مسؤولية — القرار الآن لا التسويف.',
          explanationEn: 'Unplanned storage risks safety (emissions, fire) and accumulates liability — the decision is now, not procrastination.',
        },
        {
          text: 'بيعها لأي مشترٍ فوري سواء كان مرخصاً أم لا',
          textEn: 'Sell it to any immediate buyer whether licensed or not',
          isCorrect: false,
          explanation: 'تسليم النفايات الخطرة لجهة غير معتمدة ينقل المسؤولية والمساءلة؛ الوجهة الموثقة هي الإطار الآمن الوحيد.',
          explanationEn: 'Handing hazardous waste to an unauthorized party transfers the responsibility and liability; the documented destination is the only safe framework.',
        },
      ],
    },
  ],
};