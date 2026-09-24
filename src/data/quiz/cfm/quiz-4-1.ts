import type { QuizBank } from '../types';

export const quiz41: QuizBank = {
  id: 'quiz-4-1',
  questions: [
    {
      scenario: 'اشتكى فريق العمل من آلام الرقبة والكتف بعد ساعات طويلة أمام الشاشات.',
      scenarioEn: 'The work team complains of neck and shoulder pain after long hours in front of screens.',
      question: 'أول إجراء Ergonomics صحيح يبدأ به مدير المنشأة؟',
      questionEn: 'What is the first correct ergonomics action for the facility manager to take?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'فحص نقاط بيئة العمل الجماعية: ارتفاع الشاشة والكراسي والإضاءة والانعكاسات',
          textEn: 'Run a group workstation check: screen height, chairs, lighting, and reflections',
          isCorrect: true,
          explanation: 'آلام الشاشة تنبع من تكرار الوضعية الخاطئة — الفحص الجمعي يكشف السبب المشترك.',
          explanationEn: 'Screen-related pain stems from a repeated wrong posture — a group check reveals the common cause.',
        },
        {
          text: 'إرسال الموظفين لاستشارة طبية مباشرة فقط',
          textEn: 'Only send employees straight to a medical consultation',
          isCorrect: false,
          explanation: 'الطب يعالج العرض؛ بيئة العمل التي تنتج العرض تبقى مشكلة إدارية في المنشأة.',
          explanationEn: 'Medicine treats the symptom; the work environment that produces the symptom remains a management problem in the facility.',
        },
        {
          text: 'شراء كراسٍ باهظة لموظف واحد مرشح',
          textEn: 'Buy expensive chairs for one nominated employee',
          isCorrect: false,
          explanation: 'العلاج الذي يستهدف واحداً لا يحل نمط المشكلة المنتشرة عبر الجميع.',
          explanationEn: 'A fix aimed at one person does not solve the pattern of the problem spread across everyone.',
        },
        {
          text: 'تقليل فترات الراحة لضغط الإنتاج',
          textEn: 'Reduce break periods to push productivity',
          isCorrect: false,
          explanation: 'عكس الحل — الفترات القصيرة من الأعراض تفاقم المشاكل العضلية.',
          explanationEn: 'The opposite of a solution — fewer breaks than the symptoms demand worsens musculoskeletal problems.',
        },
      ],
    },
    {
      scenario: 'مدير قسم يطلب منك تسويق "الكراسي الأرخص" لأسباب ميزانية على رغم شكاوى الشهر السابق.',
      scenarioEn: 'A department manager asks you to push "the cheaper chairs" for budget reasons despite last month\u2019s complaints.',
      question: 'ما الرد المهني المتزن في صراع الميزانية مقابل Ergonomics؟',
      questionEn: 'What is the balanced professional response in the budget-versus-ergonomics conflict?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل التكلفة الكلية: كراسٍ جيدة مقابل تكاليف الغياب والألم وعدم الإنتاج',
          textEn: 'Full-cost analysis: good chairs versus the costs of absenteeism, pain, and lost productivity',
          isCorrect: true,
          explanation: 'بيئة العمل ليست بند جمال؛ تؤثر على الإنتاجية والغياب وتظهر آثارها في بيانات العمليات.',
          explanationEn: 'The workplace is not a cosmetic line item; it affects productivity and absenteeism and shows its effects in operational data.',
        },
        {
          text: 'الموافقة وتجنب الصدام مع الميزانية',
          textEn: 'Agree and avoid clashing with the budget',
          isCorrect: false,
          explanation: 'الشراء السيئ يوفر مبالغ صغيرة ويبددها غيابات وتكلفة طبية أكبر كامنة.',
          explanationEn: 'Poor purchasing saves small amounts and wastes them on absenteeism and larger hidden medical costs.',
        },
        {
          text: 'رفض أي طلب لأن الشركة تعمل بالحد الأدنى',
          textEn: 'Refuse any request because the company works on the minimum standard',
          isCorrect: false,
          explanation: 'الموقف الشامل المتشدد يخفي واقع الحاجة ويبني عداءً ولا يبني حلولاً.',
          explanationEn: 'A blanket rigid stance hides the real need and builds hostility rather than solutions.',
        },
        {
          text: 'شراء كراسٍ مستعملة رخيصة دون تقييم معايير',
          textEn: 'Buy cheap used chairs without evaluating criteria',
          isCorrect: false,
          explanation: 'المستعمل بلا معايير يكرر نفس مشاكل الجودة التي سعينا لإصلاحها.',
          explanationEn: 'Used chairs without criteria repeat the same quality problems we set out to fix.',
        },
      ],
    },
    {
      scenario: 'تحتاج وضع برنامج Ergonomics شامل للمنشأة: فحص، تدريب، ومتابعة.',
      scenarioEn: 'You need to build a comprehensive facility ergonomics program: screening, training, and follow-up.',
      question: 'ما العنصر الأكثر أهمية في استدامة هذا البرنامج؟',
      questionEn: 'What matters most for the sustainability of this program?',
      difficulty: 'صعب',
      options: [
        {
          text: 'دورة مستمرة: فحص دوري + تدريب + رصد شكاوى جديدة + تحديث دوري للإجراءات',
          textEn: 'A continuous cycle: periodic screening + training + monitoring new complaints + periodic procedure updates',
          isCorrect: true,
          explanation: 'البرنامج النشط يتحول من حدث لمرة واحدة إلى نظام تحسين مستمر.',
          explanationEn: 'An active program turns from a one-off event into a continuous improvement system.',
        },
        {
          text: 'ثبوت كتيب واحد يُوزع ولا يُحدث أبداً',
          textEn: 'A single booklet that is distributed and never updated',
          isCorrect: false,
          explanation: 'الورقة الثابتة بلا قياس أو متابعة تتحول إلى ديكور إداري.',
          explanationEn: 'A static paper with no measurement or follow-up becomes administrative decoration.',
        },
        {
          text: 'تكليف شخصاً واحداً وحده دون أدوات',
          textEn: 'Assign a single person alone, without tools',
          isCorrect: false,
          explanation: 'الفرد بلا أداة أو سلطة أو دورة عمل لا يبني نظاماً.',
          explanationEn: 'An individual without tools, authority, or a work cycle cannot build a system.',
        },
        {
          text: 'تطبيقه خارج ساعات العمل فقط',
          textEn: 'Apply it only outside working hours',
          isCorrect: false,
          explanation: 'نشاط خارج بيئة العمل الفعلية لا يلامس جدول الإنتاج المنتج للشكاوى.',
          explanationEn: 'An activity outside the actual work environment never touches the production schedule that produces the complaints.',
        },
      ],
    },
  ],
};

export default quiz41;