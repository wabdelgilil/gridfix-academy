import type { QuizBank } from '../types';

export const quiz123: QuizBank = {
  id: 'quiz-12-3',
  questions: [
    {
      scenario: 'مشروع على وشك التصميم يُدار بالطلب الشفهي — ومع كل تمرير سعر يرفع عشوائياً ويكتشف الفريق أخيراً.',
      scenarioEn: 'A project about to be designed is run on verbal request — and with every pass a price rises randomly, and the team finds out too late.',
      question: 'ما أداة الشراء الشفافة المناسبة لبداية هذا النطاق؟',
      questionEn: 'What transparent procurement tool suits the start of this scope?',
      difficulty: 'سهل',
      options: [
        {
          text: 'وثيقة طلب اقتراح (RFP) موحدة بنطاق ومواصفات ومعايير تقييم وتواريخ تقديم، تُقارن العروض على أساسها',
          textEn: 'A uniform request-for-proposal (RFP) document with a scope, specifications, evaluation criteria, and submission dates, against which proposals are compared',
          isCorrect: true,
          explanation: 'الطلب الرسمي يوحّد شروط المنافسة: مرجع قارن عليه العروض وفق النطاق والمواصفات والمعايير المعتمدة.',
          explanationEn: 'The formal request standardizes the competition terms: a reference for comparing proposals per the approved scope, specifications, and criteria.',
        },
        {
          text: 'تسعيرات شفهية متفرقة من مقاولين مختلفين في غير معيار',
          textEn: 'Scattered verbal quotes from different contractors with no standard',
          isCorrect: false,
          explanation: 'الأسعار المتفرقة بلا معيار لا تُقارن عادلاً؛ وثيقة موحدة تضمن تكافؤ العروض أمام نفس الشروط.',
          explanationEn: 'Scattered prices without a standard cannot be fairly compared; a uniform document ensures parity of proposals under the same conditions.',
        },
        {
          text: 'اعتماد مقاول الدائرة بدون أي منافسة مكتوبة',
          textEn: 'Appointing the usual circle\u2019s contractor with no written competition',
          isCorrect: false,
          explanation: 'التعامل الواحد يقلل التنافس ويضخم الأسعار؛ المنافسة الموثقة تحمي الكلفة والجودة معاً.',
          explanationEn: 'Single-dealer dealing reduces competition and inflates prices; documented competition protects both cost and quality.',
        },
        {
          text: 'التفاوض الشخصي على السعر بعد انتهاء الأعمال',
          textEn: 'Negotiating the price personally after the work is finished',
          isCorrect: false,
          explanation: 'التحكم بالسعر قبل الأعمال واجب؛ التفاوض بعد الإنجاز يجعلك أسير الكلفة الواقعة فوقها.',
          explanationEn: 'Controlling the price before the work is a duty; negotiating after completion makes you a captive of the cost already incurred.',
        },
      ],
    },
    {
      scenario: 'بعد الانتهاء المادي للمشروع، طلب من المشرف توقيع سند التسليم دون التحقق من قائمة النقص والضمانات.',
      scenarioEn: 'After the physical completion of the project, the supervisor is asked to sign the delivery certificate without checking the punch list and warranties.',
      question: 'ما قاعدة الإغلاق الصحيحة التي يخالفها هذا التوقيع؟',
      questionEn: 'What correct closeout rule does this signature violate?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الإغلاق يختم بفحص قبول شامل (قائمة نقص/متبقيات) وسجل ضمانات ومستندات تشغيلية قبل التوقيع النهائي',
          textEn: 'Closeout is sealed with a comprehensive acceptance inspection (punch list/outstanding items), a warranty register, and operational documents before the final signature',
          isCorrect: true,
          explanation: 'التسليم وثيقة ملزمة؛ الفحص الكامل يتحقق من كل بند ومستند تشغيل قبل إبرام الإغلاق.',
          explanationEn: 'Delivery is a binding document; the full inspection verifies every item and operational document before finalizing the closeout.',
        },
        {
          text: 'التوقيع الفوري ثم تحرير قائمة النقص بعد شهر استراحة',
          textEn: 'Signing immediately and then drafting the punch list after a month of rest',
          isCorrect: false,
          explanation: 'توقيع أول ثم فحص يجعلك بلا ضغط بعدها؛ الضبط الصحيح يسبق التوقيع لا يتبعه.',
          explanationEn: 'Signing first then inspecting leaves you powerless to apply pressure afterwards; proper control precedes the signature, it does not follow it.',
        },
        {
          text: 'اكتفاء بالمظهر العيني للمبنى دون وثائق',
          textEn: 'Relying on the visual appearance of the building without documents',
          isCorrect: false,
          explanation: 'العين تلمح والوثائق تثبت: الضمانات والرسومات والأدلة التشغيلية جزء من التسليم النافذ.',
          explanationEn: 'The eye hints and the documents prove: warranties, drawings, and operational evidence are part of an effective delivery.',
        },
        {
          text: 'بقاء أي خلل بسيط بلا ناقص لأنه «مره في الحسابات»',
          textEn: 'Leaving any minor defect unrecorded because it will be "settled in the accounts"',
          isCorrect: false,
          explanation: 'النقص الكبير أم الصغير يسجل ويكتوي منه؛ القاعدة إغلاق قوائم النقص قبل إقفال العقد.',
          explanationEn: 'A defect, big or small, is recorded and accounted for; the rule is closing punch lists before closing the contract.',
        },
      ],
    },
    {
      scenario: 'فجأة طلب نطاق وسط تنفيذ، ورفض المالك تمديد المدة أو زيادة الكلفة، وتمسك بنطاق جديد «بعد أن فتحنا التصميم».',
      scenarioEn: 'A scope request suddenly arrives mid-execution, the owner refuses to extend the duration or raise the cost, and insists on the new scope "now that we have opened the design".',
      question: 'ما الحماية التي كانت ستمنع هذا المأزق؟',
      questionEn: 'What protection would have prevented this deadlock?',
      difficulty: 'صعب',
      options: [
        {
          text: 'بند إدارة التغيير في العقد: يفرض لكل تغيير تقدير أثر وتعديل زمن وكلفة يعتمدان قبل التنفيذ',
          textEn: 'A change-management clause in the contract: it requires for every change an impact estimate and a time-and-cost adjustment that are approved before execution',
          isCorrect: true,
          explanation: 'العقد المُحكم شرط صحة التغيير: بند صريح يجعل التمديد والتكلفة حقاً مربوطاً بالتغيير لا مرهوناً بالموافقة.',
          explanationEn: 'A well-crafted contract is the condition for valid change: an explicit clause makes the extension and the cost a right tied to the change, not hostage to approval.',
        },
        {
          text: 'تفضيل كلمة العميل على كل عقد لأن المصلحة فوق الأوراق',
          textEn: 'Preferring the client\u2019s word over any contract because interest is above papers',
          isCorrect: false,
          explanation: 'اللفظية بلا سند عقدي تغرق في التقادم عند الخلاف؛ الضبط المكتوب يحمي الطرفين من الأزمة.',
          explanationEn: 'Pure verbalism without a contractual basis drowns in disputes when a conflict arises; written discipline protects both parties from the crisis.',
        },
        {
          text: 'رفض أي تغيير للنطاق مهما كان منصفاً',
          textEn: 'Rejecting any scope change however fair it is',
          isCorrect: false,
          explanation: 'بئر التغيير مشروع في البراعة عادة؛ الحل في صياغته بمعدل وآثاره لا في تحصين كل تبدل.',
          explanationEn: 'Scope change is usually legitimate in practice; the solution is in drafting it with its rate and impacts, not in sealing against every variation.',
        },
        {
          text: 'إبقاء تقدير الأثر سرياً حتى لا يتسلل العميل',
          textEn: 'Keeping the impact estimate secret so the client does not exploit it',
          isCorrect: false,
          explanation: 'الإخفاء يزعزع الثقة وينقلب أزمة؛ الشفافية في التقدير والاعتماد تبني توافقاً حقيقياً.',
          explanationEn: 'Concealment shakes trust and turns into a crisis; transparency in estimation and approval builds genuine alignment.',
        },
      ],
    },
  ],
};