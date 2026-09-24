import type { QuizBank } from '../types';

export const quiz14: QuizBank = {
  id: 'quiz-1-4',
  questions: [
    {
      scenario: 'شركة تدرس إسناد خدمة التنظيف لمقاول خارجي بدل فريقها الداخلي.',
      scenarioEn: 'A company considers awarding its cleaning service to an external contractor instead of its in-house team.',
      question: 'أي عنصر أساسي يجب أن يحدده عقد مستوى الخدمة (SLA)؟',
      questionEn: 'Which essential element should the service level agreement (SLA) define?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تفاصيل قياس الأداء القابل للتحقق (تردد التنظيف، زمن الاستجابة، معايير الجودة)',
          textEn: 'Verifiable performance-measurement details (cleaning frequency, response time, quality standards)',
          isCorrect: true,
          explanation: 'SLA بلا مقاييس قابلة للتحقق ورقة بلا قيمة؛ الأداء يُقاس بالمعايير المتفق عليها.',
          explanationEn: 'An SLA without verifiable metrics is a worthless document; performance is measured by the agreed standards.',
        },
        {
          text: 'اسم ومكان المكتب الإداري للمقاول فقط',
          textEn: 'Only the contractor\u2019s office name and location',
          isCorrect: false,
          explanation: 'العنوان لا يضمن مستوى خدمة؛ القابلية للقياس هي العمود الفقري للعقد.',
          explanationEn: 'An address does not guarantee a service level; measurability is the backbone of the contract.',
        },
        {
          text: 'الوعد الشفهي بخدمة ممتازة',
          textEn: 'A verbal promise of excellent service',
          isCorrect: false,
          explanation: 'الالتزامات تُوثق في العقد قابلة للتدقيق، لا بالفم.',
          explanationEn: 'Obligations are documented in the contract and auditable, not by word of mouth.',
        },
        {
          text: 'لا حاجة لأي بنود قياس لأن الثقة كافية',
          textEn: 'No measurement clauses are needed because trust is enough',
          isCorrect: false,
          explanation: 'القرار التعاقدي يُدار ببيانات الأداء لا بالثقة وحدها.',
          explanationEn: 'A contractual relationship is managed by performance data, not trust alone.',
        },
      ],
    },
    {
      scenario: 'مقاول صيانة يطالبك بتجديد عقده السنوي بسعر أقل، لكن في المقابل انخفضت جودة تقارير المتابعة اليومية ولم تُحل الأعطال في وقتها.',
      scenarioEn: 'A maintenance contractor asks you to renew their annual contract at a lower price, but in return the quality of the daily follow-up reports has dropped and failures were not resolved on time.',
      question: 'ما الإجراء المهني الصحيح؟',
      questionEn: 'What is the correct professional action?',
      difficulty: 'صعب',
      options: [
        {
          text: 'استخدام آلية العقد: تفعيل بنود الأداء والعقوبات مع إنذار كتابي ومتابعة مصححة',
          textEn: 'Use the contract mechanism: activate the performance and penalty clauses with a written notice and corrective follow-up',
          isCorrect: true,
          explanation: 'عقد منشأة حقيقية متضمن لعقوبات SLA ومراجعة أداء دورية — يُدار طبقاً للنص.',
          explanationEn: 'A real facility contract includes SLA penalties and periodic performance reviews — it is managed per the text.',
        },
        {
          text: 'فسخ العقد فوراً دون إجراءات تعاقدية',
          textEn: 'Terminating the contract immediately without contractual procedures',
          isCorrect: false,
          explanation: 'إنهاء العقد له إجراءات قانونية واجبة؛ تُدار الخطوات تعاقدياً أولاً.',
          explanationEn: 'Contract termination has due legal procedures; handle the steps contractually first.',
        },
        {
          text: 'رفع الأجر كي "يتحسن" المقاول',
          textEn: 'Raising the fee so the contractor "improves"',
          isCorrect: false,
          explanation: 'رفع الأجر قبل تصحيح الأداء مكافأة للتراجع لا حل.',
          explanationEn: 'Raising the fee before correcting performance rewards the decline; it is not a solution.',
        },
        {
          text: 'تجاهل الأداء بداعي أن العقد سنوي',
          textEn: 'Ignoring the performance because the contract is annual',
          isCorrect: false,
          explanation: 'إهمال المتابعة يجعل العقد بلا قيمة عملية بمرور الوقت.',
          explanationEn: 'Neglecting follow-up makes the contract practically worthless over time.',
        },
      ],
    },
    {
      scenario: 'أنت بصدد تجديد عقد مقاول أمن. ما المعيار الأفضل لاختيار المقاول الجديد؟',
      scenarioEn: 'You are about to renew a security contractor\u2019s contract. What is the best criterion for choosing the new contractor?',
      question: 'كيف تقارن العروض المقبلة مع معيار؟',
      questionEn: 'How do you compare the incoming proposals against one standard?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'أقل سعر إجمالي فوراً',
          textEn: 'The lowest total price immediately',
          isCorrect: false,
          explanation: 'السعر الأدنى غالباً المقايضة خفية في الجودة أو التغطية — التقارير الدورية تكشفها.',
          explanationEn: 'A lower price often means a hidden trade-off in quality or coverage — periodic reports reveal it.',
        },
        {
          text: 'التكلفة الإجمالية مع معايير الأداء والخبرة والامتثال (Total Cost of Ownership)',
          textEn: 'Total cost along with performance, experience, and compliance criteria (Total Cost of Ownership)',
          isCorrect: true,
          explanation: 'المفاضلة تدرس السعر + مستوى الخدمة + المخاطر التعاقدية عبر كامل العقد.',
          explanationEn: 'The comparison weighs the price + service level + contractual risk across the whole contract.',
        },
        {
          text: 'الشكل المرئي للعروض التقديمية فقط',
          textEn: 'Only the visual look of the presentations',
          isCorrect: false,
          explanation: 'التقديم قد يُخفي أوجه قصور حقيقية في التشغيل.',
          explanationEn: 'A presentation may hide real operational shortcomings.',
        },
        {
          text: 'الاختيار بالقرعة لضمان الحيادية',
          textEn: 'Choosing by lottery to guarantee neutrality',
          isCorrect: false,
          explanation: 'الحيادية تُبنى على معايير مرجحة مقننة، لا على الصدفة.',
          explanationEn: 'Neutrality is built on weighted codified criteria, not on chance.',
        },
      ],
    },
  ],
};

export default quiz14;