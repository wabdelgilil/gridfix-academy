import type { QuizBank } from '../types';

export const quiz51: QuizBank = {
  id: 'quiz-5-1',
  questions: [
    {
      scenario: 'موظف جديد يبدأ عمله غداً في منطقة ورشة تتطلب خوذة ونظارات وقفازات.',
      scenarioEn: 'A new employee starts work tomorrow in a workshop area requiring a helmet, goggles, and gloves.',
      question: 'ما الخطوة الأولى الصحيحة قبل السماح له بالعمل في الموقع؟',
      questionEn: 'What is the correct first step before allowing them to work on site?',
      difficulty: 'سهل',
      options: [
        {
          text: 'تزويده بمعدات الوقاية الشخصية وإجراء تدريب سلامة إلزامي قبل بدء العمل',
          textEn: 'Provide personal protective equipment and mandatory safety training before starting work',
          isCorrect: true,
          explanation: 'السلامة تسبق العمل: المعدات يجب أن تكون متاحة، والتدريب إلزامي ومُوثَّق قبل دخول منطقة الخطر.',
          explanationEn: 'Safety precedes work: the equipment must be available, and training is mandatory and documented before entering the hazard area.',
        },
        {
          text: 'الاكتفاء بتوقيعه على نموذج انتساب والاعتماد على خبرة زملائه',
          textEn: 'Just have them sign an enrollment form and rely on their colleagues\u2019 experience',
          isCorrect: false,
          explanation: 'التوقيع لا يعوّض التدريب والتحقق. مسؤولية المدير توفير الحماية والمعرفة مسبقاً.',
          explanationEn: 'A signature does not replace training and verification. Providing protection and knowledge in advance is the manager\u2019s responsibility.',
        },
        {
          text: 'إعطاؤه نصائح شفهية سريعة واكتفاء بالمراقبة من بعيد',
          textEn: 'Give quick verbal advice and settle for monitoring from a distance',
          isCorrect: false,
          explanation: 'التوعية الشفهية غير موثقة ولا تضمن الالتزام، ويُشترط توثيق التدريب والتحقق الفعلي من الارتداء.',
          explanationEn: 'Verbal awareness is undocumented and does not guarantee compliance; the training must be documented with actual verification of wearing the equipment.',
        },
        {
          text: 'تأجيل كل شيء حتى مرور شهر من العمل',
          textEn: 'Postpone everything until a month on the job',
          isCorrect: false,
          explanation: 'لا وقت "تجربة" في مناطق الخطر — الإجراء الوقائي واجب من اليوم الأول.',
          explanationEn: 'There is no "trial period" in hazard areas — the preventive measure is mandatory from day one.',
        },
      ],
    },
    {
      scenario: 'أثناء جولة صباحية وجدت باب الطوارئ في الدور الثالث مسدوداً بكراتين تخزين.',
      scenarioEn: 'During a morning walk-through, you find the third-floor emergency exit blocked by storage cartons.',
      question: 'ما التصرف الأصح وفق ممارسات السلامة المعيارية؟',
      questionEn: 'What is the correct action according to standard safety practices?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إزالة العوائق فوراً وتسجيل ملاحظة وإنشاء إجراء يمنع التخزين أمام المخارج',
          textEn: 'Remove the obstructions immediately, log the finding, and establish a rule preventing storage in front of exits',
          isCorrect: true,
          explanation: 'مسار الهروب واجب البقاء مخلّياً دائماً؛ المعالجة الفورية مع تصحيح السبب (لا مجرد إزالة الكراتين) هي الممارسة السليمة.',
          explanationEn: 'The means of egress must always remain clear; immediate correction together with fixing the cause (not merely removing the cartons) is proper practice.',
        },
        {
          text: 'إضافة لافتة تطلب من الموظفين إبقاء الممر نظيفاً',
          textEn: 'Add a sign asking employees to keep the corridor clear',
          isCorrect: false,
          explanation: 'اللافتة لا تزيل العائق الحالي ولا تعالج سبب تكرر المشكلة — شكر جيد لكنه ليس تصرفاً معيارياً كافياً.',
          explanationEn: 'A sign removes neither the current obstruction nor the cause of the recurring problem — good intent but not an adequate standard action.',
        },
        {
          text: 'انتظار هيئة التفتيش القادمة لتقييم الوضع',
          textEn: 'Wait for the upcoming inspection authority to assess the situation',
          isCorrect: false,
          explanation: 'لا يجوز الانتظار في مسألة سلامة حرجة؛ التصرف الفوري واجب حتى قبل أي زيارة رسمية.',
          explanationEn: 'Waiting is not acceptable on a critical safety matter; immediate action is required even before any official visit.',
        },
        {
          text: 'نقل الكراتين إلى منطقة أقرب لمرفق المطافئ ليسهل الوصول إليها',
          textEn: 'Move the cartons to an area closer to the fire station facility for easier access',
          isCorrect: false,
          explanation: 'كل المواد القابلة للاشتعال يجب ألا تتراكم بالقرب من مخارج أو معدات إطفاء.',
          explanationEn: 'All flammable materials must never accumulate near exits or firefighting equipment.',
        },
      ],
    },
    {
      scenario: 'أبلغ موظف عن شبه حادثة: كادت عربة كهربائية تصطدم بزميل له في الممر سابقاً اليوم.',
      scenarioEn: 'An employee reports a near miss: an electric cart nearly struck a coworker in the corridor earlier today.',
      question: 'كيف تتعامل المنشأة الفاعلة مع هذا البلاغ؟',
      questionEn: 'How does an effective facility handle this report?',
      difficulty: 'صعب',
      options: [
        {
          text: 'توثيقها وتحليل السبب الجذري واتخاذ إجراء تصحيحي لمنع الحادث الفعلي',
          textEn: 'Document it, analyze the root cause, and take corrective action to prevent the actual incident',
          isCorrect: true,
          explanation: 'شبه الحادثة تنبيه مجاني: يذكر النقطة التي أوشك الفشل الواقع فيها. إهمالها يفقد فرصة منع حادث حقيقي.',
          explanationEn: 'A near miss is a free warning: it points to where failure almost happened. Ignoring it forfeits the chance to prevent a real incident.',
        },
        {
          text: 'اعتبارها غير مشمولة بالتقارير لأن أحداً لم يصب',
          textEn: 'Treat it as not covered by reporting because nobody was injured',
          isCorrect: false,
          explanation: 'شبه الحوادث تُسجَّل وتحلَّل، وهي من أهم مؤشرات السلامة المبكرة.',
          explanationEn: 'Near misses are recorded and analyzed; they are among the most important early safety indicators.',
        },
        {
          text: 'معاقبة سائق العربة لردعه عن السلوك الخطر',
          textEn: 'Punish the cart driver to deter the dangerous behavior',
          isCorrect: false,
          explanation: 'العقاب وحده يدفع للإخفاء ويطمر معلومات قيمة؛ يسبقه التحقيق والتصحيح.',
          explanationEn: 'Punishment alone drives concealment and buries valuable information; investigation and correction come first.',
        },
        {
          text: 'انتظار تكرار الحادثة للتأكد أنها ليست حالة معزولة',
          textEn: 'Wait for the incident to recur to confirm it is not an isolated case',
          isCorrect: false,
          explanation: 'الانتظار يقامر بسلامة الناس؛ التحويل الفوري للدرس إلى إجراء هو المطلوب.',
          explanationEn: 'Waiting gambles with people\u2019s safety; immediately turning the lesson into action is what is required.',
        },
      ],
    },
  ],
};