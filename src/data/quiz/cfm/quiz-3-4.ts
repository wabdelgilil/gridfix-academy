import type { QuizBank } from '../types';

export const quiz34: QuizBank = {
  id: 'quiz-3-4',
  questions: [
    {
      scenario: 'تجد أن عقود الصيانة المدفوعة لم تكتمل أعمالها المتفق عليها في الشهر الماضي رغم بقاء رصيد الدفعة كاملاً.',
      scenarioEn: 'You find that the paid maintenance contracts did not complete their agreed work last month even though the full payment balance was released.',
      question: 'ما الإجراء الرشيد لاكتشاف هذه الزيادة في الإنفاق؟',
      questionEn: 'What rational action detects this spending overcharge?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مراجعة إنجاز الأعمال مقابل العقد قبل صرف الدفعة الشهرية (رصد + إثبات إنجاز)',
          textEn: 'Review the completion of work against the contract before releasing the monthly payment (monitoring + verified completion)',
          isCorrect: true,
          explanation: 'الدقة في "الدابعة مقابل الإنجاز" — الأداة الحقيقية الوحيدة لضبط تسريب الإنفاق.',
          explanationEn: 'Precision in "payment against verified completion" — the only real tool for controlling spending leaks.',
        },
        {
          text: 'دفع الفاتورة تلقائياً دون فحصها',
          textEn: 'Pay the invoice automatically without checking it',
          isCorrect: false,
          explanation: 'الدفع الأعمى يحفز المقاول على استغلال التراخي ويضخم التكلفة.',
          explanationEn: 'Blind payment encourages the contractor to exploit leniency and inflates the cost.',
        },
        {
          text: 'الاستعلام الشفهي من المقاول وحده وعد',
          textEn: 'A verbal inquiry with the contractor only, a promise',
          isCorrect: false,
          explanation: 'المحادثة ليست دليلاً؛ الاعتماد على المصادر المكتوبة والقياس.',
          explanationEn: 'A conversation is not evidence; rely on written sources and measurement.',
        },
        {
          text: 'قص كل عقود الصيانة فوراً',
          textEn: 'Immediately cut all maintenance contracts',
          isCorrect: false,
          explanation: 'القطع الكامل يخسر جودة الخدمة التي قد تكون أقل تكلفة من فريق داخلي — الحل نظام للرصد لا حظر.',
          explanationEn: 'Full cuts lose service quality that may cost less than an in-house team — the solution is a monitoring system, not a ban.',
        },
      ],
    },
    {
      scenario: 'صدفة ظهر في مراجعة شهرية أن مقاول النظافة استمر في الورديات رغم غياب الأفراد في الصيف.',
      scenarioEn: 'A monthly review by chance reveals that the cleaning contractor kept billing the shifts despite absent staff in summer.',
      question: 'كيف تكتشف وتساوي التكاليف المرتبطة بغياب الإنجاز؟',
      questionEn: 'How do you detect and offset the costs related to absent performance?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'ربط المدفوعات بسحق التقارير (ورديا/يومي/إنجاز) والرصد الميداني المتقطع',
          textEn: 'Link payments to report reconciliation (shift/daily/completion) and intermittent field monitoring',
          isCorrect: true,
          explanation: 'نظام التقارير + التدقيق الذكي يكشف الغياب قبل أن يتحول تعويضاً خامداً.',
          explanationEn: 'A reporting system plus smart auditing reveals absence before it turns into idle compensation.',
        },
        {
          text: 'الاكتفاء بإدارة العلاقة مع المقاول شفهياً اعتقاداً أنها كافية',
          textEn: 'Rely only on verbal relationship management with the contractor, believing it is enough',
          isCorrect: false,
          explanation: 'العلاقة وحدها لا تصنع المحاسبة؛ النظام المكتوب يثبت الإنجاز قبل الدفع.',
          explanationEn: 'Relationship alone does not create accountability; the written system proves completion before payment.',
        },
        {
          text: 'الانتظار لنهاية السنة ثم محاسبتهم دفعة واحدة',
          textEn: 'Wait until year-end and then settle the accounts all at once',
          isCorrect: false,
          explanation: 'المحاسبة المؤجلة تتراكم وتتعقد وتلغى غالباً — الرصد الشهري أذكى.',
          explanationEn: 'Deferred accounting accumulates, gets complicated, and is often dropped — monthly monitoring is smarter.',
        },
        {
          text: 'التتضحية بالنظافة بمعزل عن أعمال أخرى',
          textEn: 'Sacrifice cleaning in isolation from other work',
          isCorrect: false,
          explanation: 'استبدال خدمة دون تصحيح نظام الرقابة يكرر السيناريو في العقود القادمة.',
          explanationEn: 'Replacing a service without fixing the control system repeats the scenario in future contracts.',
        },
      ],
    },
    {
      scenario: 'تنتهي السنة وتبقى زيادة 8% في تكلفة عقود الصيانة دون مصرح بموافقة عليها.',
      scenarioEn: 'The year ends with an 8% increase in maintenance contract costs remaining unauthorized.',
      question: 'ما الخطوة السليمة في إدارة تكاليف المرافق المهنية؟',
      questionEn: 'What is the proper step in professional facilities cost management?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحليل الاختلاف: هل طلبات تغيير موثقة، أم نطاق زائد غير مصرح به؟ ثم تصحيح الإجراءات',
          textEn: 'Analyze the difference: documented change requests, or unauthorized scope creep? Then correct the procedures',
          isCorrect: true,
          explanation: 'إغلاق السنة بتحليل السبب ويفصل بين الالتزام القانوني وقبضة الإجراء القادمة.',
          explanationEn: 'Closing the year by cause analysis distinguishes between the legal obligation and the upcoming procedural control.',
        },
        {
          text: 'دفن الزيادة في بند آخر دون إفصاح',
          textEn: 'Bury the increase in another line without disclosure',
          isCorrect: false,
          explanation: 'التحويليات الخفية تكسر الثقة وتزور دقة الميزانية القادمة.',
          explanationEn: 'Hidden transfers break trust and distort the accuracy of the next budget.',
        },
        {
          text: 'إنكار حدوث الزيادة نهائياً',
          textEn: 'Deny the increase entirely',
          isCorrect: false,
          explanation: 'الإنكار لا يمسح الالتزام المحاسبي — ويخفي مشكلة نظامية أكبر.',
          explanationEn: 'Denial does not erase the accounting obligation — and it hides a bigger systemic problem.',
        },
        {
          text: 'توقيف إصدار أي عقد جديد إلى الأبد',
          textEn: 'Stop issuing any new contract forever',
          isCorrect: false,
          explanation: 'ردة فعل جذرية تضر بالتشغيل؛ الحل هو الحوكمة الصحيحة للتغييرات.',
          explanationEn: 'A drastic reaction harms operations; the solution is proper governance of changes.',
        },
      ],
    },
  ],
};

export default quiz34;