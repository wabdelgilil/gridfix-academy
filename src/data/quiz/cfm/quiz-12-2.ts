import type { QuizBank } from '../types';

export const quiz122: QuizBank = {
  id: 'quiz-12-2',
  questions: [
    {
      scenario: 'مشروع متأخر شهرين، ويُجرى تتبعه بالاجتماعات الشفهية دون أداة مواعيد رقمية أو وثيقة مرجعية.',
      scenarioEn: 'A project is two months late, and it is tracked through verbal meetings with no digital scheduling tool or reference document.',
      question: 'ما المبدأ الذي يفتقده هذا التتبع ليصبح رقابة حقيقية؟',
      questionEn: 'Which principle does this tracking lack to become real control?',
      difficulty: 'سهل',
      options: [
        {
          text: 'خط أساس موثق (الجدول والميزانية المعتمدان) وتُقارن به المخرجات دورياً: فعلي مقابل مخطط',
          textEn: 'A documented baseline (the approved schedule and budget) against which outputs are compared periodically: actual versus planned',
          isCorrect: true,
          explanation: 'الرقابة مقارنة بالأصل: خط الأساس المرجع الذي يُقاس عليه كل انحراف ويُفهم دلالته.',
          explanationEn: 'Control is comparison to the reference: the baseline against which every deviation is measured and its meaning understood.',
        },
        {
          text: 'تخمين الخبراء عند كل اجتماع يحدّث صورة الأوضاع',
          textEn: 'Expert guesses at each meeting updating the picture of the situation',
          isCorrect: false,
          explanation: 'التخمين المتجدد انطباع لحظة؛ القياس الثابت مقابل الأساس هو ما يكشف حقيقة التأخر.',
          explanationEn: 'Renewed guessing is a moment\u2019s impression; steady measurement against the baseline is what reveals the real delay.',
        },
        {
          text: 'الاعتماد على روحة الفريق الطبيعية في الالتزام',
          textEn: 'Relying on the natural spirit of the team in commitment',
          isCorrect: false,
          explanation: 'الروح لا تغني عن وثيقة مواعيد؛ الانحراف يُرصد في وقته بالأداة لا بالإحساس الجماعي.',
          explanationEn: 'Spirit does not replace a schedule document; deviation is caught in time by the tool, not by collective feeling.',
        },
        {
          text: 'توزيع مسؤولية كل تأخير على العوامل الخارجية',
          textEn: 'Allocating the blame for every delay to external factors',
          isCorrect: false,
          explanation: 'إلقاء اللوم الظاهر لا يصنع رقابة؛ التمييز بين أسباب داخلية وخارجية يُثبت بأدلة مقارنة.',
          explanationEn: 'Outward blame does not create control; distinguishing internal from external causes is proven with comparative evidence.',
        },
      ],
    },
    {
      scenario: 'بعد مرور 30% من مدة مشروع، كانت التكلفة المنصرفة 25%، فاعتبر البعض الأداء ممتازاً.',
      scenarioEn: 'After 30% of a project\u2019s duration, the cost spent was 25%, and some considered the performance excellent.',
      question: 'أي قراءة تمنع إصدار هذا الحكم المبكر؟',
      questionEn: 'Which reading prevents issuing this early judgment?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'ربط الكلفة بالإنجاز الفعلي، لا بالمدة: تكلفة فعلية مقابل تكلفة مخططة لِما أُنجز فعلاً',
          textEn: 'Tying the cost to actual accomplishment, not to duration: actual cost versus planned cost for what was actually completed',
          isCorrect: true,
          explanation: 'الاستهلاك يبرر بإنجاز: إن وافق الصرفُ الحجمَ المنجز فهو سليم، وإن تقدم عليه بلا إنجاز يظهر أثر مبالغة.',
          explanationEn: 'Spending is justified by accomplishment: if the expenditure matches the completed volume it is sound, and if it runs ahead with no completion, an overspend effect appears.',
        },
        {
          text: 'مقارنة المصروف الكلي ببداية المشروع فقط',
          textEn: 'Comparing the total spending with the project start only',
          isCorrect: false,
          explanation: 'المقارنة الزمنية وحدها تجهل حجم الأعمال؛ الربط بالإنجاز هو معيار صحة الميزانية دون غيره.',
          explanationEn: 'A time-only comparison ignores the volume of work; tying to accomplishment is the sole standard of budget health.',
        },
        {
          text: 'تأجيل النظر في الميزانية حتى نهاية المشروع',
          textEn: 'Postponing any look at the budget until the end of the project',
          isCorrect: false,
          explanation: 'المراجعة الدورية بالربط بالإنجاز شرط؛ تأجيلها يحول الانحراف المبكر إلى فجوة أخيرة مكلفة.',
          explanationEn: 'Periodic review tied to accomplishment is a condition; postponing it turns an early deviation into a costly final gap.',
        },
        {
          text: 'تحميل أي زيادة للتكاليف على ظروف السوق مباشرة',
          textEn: 'Blames any cost increase directly on market conditions',
          isCorrect: false,
          explanation: 'عذر السوق مشروط بالدليل، لكن الربط بالإنجاز أولاً يفصل المبرر الحقيقي عن فقدان السيطرة.',
          explanationEn: 'The market excuse is conditional on evidence, but tying to accomplishment first separates the real justification from loss of control.',
        },
      ],
    },
    {
      scenario: 'مطر غزير مفاجئ أوقف أعمال بناء مكشوفة، ويهدد موعد التسليم ويرفع التكلفة.',
      scenarioEn: 'A sudden heavy rain stopped open-air construction work, threatening the delivery date and raising the cost.',
      question: 'ما المعالجة المهنية الشاملة للتعامل مع الأزمة؟',
      questionEn: 'What is the comprehensive professional handling of the crisis?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تقدير سريع للأثر (زمن/كلفة/جودة)، واستكشاف بدائل الجدولة، وتحديث الخطة بموافقة الأطراف',
          textEn: 'A quick impact estimate (time/cost/quality), exploring scheduling alternatives, and updating the plan with the parties\u2019 approval',
          isCorrect: true,
          explanation: 'الأزمة تُدار بإطار: قياس الأثر، بدائل، خط أساس محدَّث بالتعاون لا بإجراء انفرادي عابر.',
          explanationEn: 'The crisis is managed within a framework: measuring impact, alternatives, and an updated baseline collaboratively, not through a transient unilateral action.',
        },
        {
          text: 'منح مقاول إضافي المال فوراً دون دراسة بدائل أعمال',
          textEn: 'Giving an additional contractor money immediately without studying work alternatives',
          isCorrect: false,
          explanation: 'التشغيل الإضافي العاجل بلا مقارنة قد يفوت خيار تسريع أرخص أو إعادة ترتيب الأعمال.',
          explanationEn: 'Urgent extra capacity without comparison may miss a cheaper acceleration option or a work resequencing.',
        },
        {
          text: 'تحميل تأثير الطقس كأنه خطأ الطرف المقابل تحميلاً جزائياً',
          textEn: 'Charging the weather impact to the other party as if it were a penalized fault',
          isCorrect: false,
          explanation: 'الانقسامات بلا تحليل السبب تأجج نزاعاً وتعرّقل التسليم؛ تحليل العقد والواقع يقيمان التصرف.',
          explanationEn: 'Splits without cause analysis fuel disputes and block delivery; analyzing the contract and the facts assesses the behavior.',
        },
        {
          text: 'تجميد أعمال الموقع كافة حتى يتحسن الجو مهما طال أمد',
          textEn: 'Freezing all site work until the weather improves no matter how long it takes',
          isCorrect: false,
          explanation: 'التجميد الكلي يضاعف التأخير والتكلفة؛ إعادة جدولة الأعمال الممكنة تحت سقف الأبواب استجابة أكثر واقعية.',
          explanationEn: 'A total freeze multiplies delay and cost; rescheduling the possible indoor work is a more realistic response.',
        },
      ],
    },
  ],
};