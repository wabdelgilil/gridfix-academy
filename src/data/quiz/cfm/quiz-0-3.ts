import type { QuizBank } from '../types';

export const quiz03: QuizBank = {
  id: 'quiz-0-3',
  questions: [
    {
      scenario: 'مدير منشأة جديد يحاول أولويات تعلمه وفق أثرها العملي ووزنها في امتحان CFM.',
      scenarioEn: 'A new facility manager is trying to prioritize their learning by practical impact and weight in the CFM exam.',
      question: 'أي المجالات يُعطى الأولوية الأقوى في مسار التعلم؟',
      questionEn: 'Which domain should be given the strongest priority in the learning path?',
      difficulty: 'سهل',
      options: [
        {
          text: 'التشغيل والصيانة — الأكبر وزناً في حالة الممارسة والامتحان',
          textEn: 'Operations and maintenance — the largest weight in both practice and the exam',
          isCorrect: true,
          explanation: 'تشغيل وصيانة المنشأة قلب مهنة إدارة المنشآت وأثقل ركن في امتحان IFMA.',
          explanationEn: 'Facility operations and maintenance are the heart of the FM profession and the heaviest pillar in the IFMA exam.',
        },
        {
          text: 'التواصل وحده لأنه مهارة عامة',
          textEn: 'Communication alone because it is a general skill',
          isCorrect: false,
          explanation: 'التواصل ركن مهم لكنه يدعم الأركان التشغيلية ولا يقوم مقامها في الممارسة.',
          explanationEn: 'Communication is an important pillar, but it supports the operational pillars and does not replace them in practice.',
        },
        {
          text: 'الاستدامة وحدها لأنها حديثة',
          textEn: 'Sustainability alone because it is new',
          isCorrect: false,
          explanation: 'الاستدامة ركن متنامٍ من أركان مهمة، لكنها ضمن مسار تشغيلٍ أرحب من "وحدها".',
          explanationEn: 'Sustainability is a growing and important pillar, but it sits within a broader operational path than "alone".',
        },
        {
          text: 'لا أهمية ترتيب على الإطلاق',
          textEn: 'Ordering matters not at all',
          isCorrect: false,
          explanation: 'الوزن والحرجية يقودان ترتيب الاستثمار في التعلم — إذن للترتيب قيمة فعلية.',
          explanationEn: 'Weight and criticality drive the order of learning investment — so ordering has real value.',
        },
      ],
    },
    {
      scenario: 'تريد التأكد أن توزيع وقتك الدراسي يغطي الأركان بتناسب مع أهميتها في امتحان CFM.',
      scenarioEn: 'You want to make sure your study-time allocation covers the pillars in proportion to their importance in the CFM exam.',
      question: 'ما المصدر الصحيح لهذا التوزيع؟',
      questionEn: 'What is the correct source for this allocation?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'وثائق IFMA الرسمية: كتيب الاستعداد للامتحان ونطاق الوظيفة الحديث بالامتحان',
          textEn: 'Official IFMA documents: the exam preparation handbook and the updated job task analysis for the exam',
          isCorrect: true,
          explanation: 'الانتساب الرسمي وثيقة الوزن الحديثة مصدرها الأم المعتمد — لا التقدير الشائع.',
          explanationEn: 'The official credential and the current weight document are the authoritative primary source — not common estimates.',
        },
        {
          text: 'آراء منتدي ليك المتداولة فقط',
          textEn: 'Only circulating forum opinions',
          isCorrect: false,
          explanation: 'خبرات الأفراد قيمة لكنها مكملة ولا تغني الوثيقة الرسمية الحالية في التفاصيل.',
          explanationEn: 'Individual experiences are valuable but supplementary; they do not replace the current official document in details.',
        },
        {
          text: 'خطة منشأة قريبة بأهداف مختلفة',
          textEn: 'A similar facility\u2019s plan with different goals',
          isCorrect: false,
          explanation: 'منشأتك لها سياقها؛ تركوز متناسب مع امتحان CFM يبدأ من مرجع التوافق الرسمي.',
          explanationEn: 'Your facility has its own context; study focus proportional to the CFM exam starts from the official alignment reference.',
        },
        {
          text: 'ذاكرة الدراسة القديمة قبل التحديثات',
          textEn: 'Old study memory from before the updates',
          isCorrect: false,
          explanation: 'الأوزان والمحتوى يتحدّث بتدريات IFMA الدورية — الرجوع لآخر تحديث ضروري.',
          explanationEn: 'Weights and content update with IFMA\u2019s periodic revisions — referring to the latest update is necessary.',
        },
      ],
    },
    {
      scenario: 'بعد إتمام أركان التشغيل والعقارات والماليات، تريد ترتيب بقية تعلّمك بهامش أكبر.',
      scenarioEn: 'After completing the operations, real estate, and finance pillars, you want to order the rest of your learning with more leeway.',
      question: 'ما القاعدة الذكية لترتيب بقية التعلّم؟',
      questionEn: 'What is the smart rule for ordering the rest of your learning?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التتابع الطبيعي: اكتمل الجذر ثم أطيب أسانيده وتكامله (سلامة، مخاطر، قيادة، بيانات)',
          textEn: 'Natural sequencing: complete the core, then its best supports and integration (safety, risk, leadership, data)',
          isCorrect: true,
          explanation: 'بعد أساس المنشأة، يكسب البناء المعرفي من التسلسل الذي يبني كل ركن على سابقه وظل منسجمه.',
          explanationEn: 'After the facility foundation, knowledge building benefits from a sequence in which each pillar builds on its predecessor coherently.',
        },
        {
          text: 'دراسة كل شيء دفعة واحدة بلا تسلسل',
          textEn: 'Studying everything at once without sequence',
          isCorrect: false,
          explanation: 'الازدحام بلا بناء يضعف البقاء والتذكر ويخرب الحلقة التعليمية.',
          explanationEn: 'Cramming without building weakens retention and memory and disrupts the learning loop.',
        },
        {
          text: 'تجاهل الأركان ذات الوزن المتناقص تماماً',
          textEn: 'Completely ignoring the lower-weight pillars',
          isCorrect: false,
          explanation: 'كل الأركان أحد عشر تغطيها الإجابة الرسمية فارض الالتزام بأهمية نسبية لا الإهمال الكامل.',
          explanationEn: 'All eleven pillars are covered by the official exam; commit to relative importance, not total neglect.',
        },
        {
          text: 'وقف التعلم بعد أول ثلاثة',
          textEn: 'Stopping learning after the first three',
          isCorrect: false,
          explanation: 'الشهادة مناخ 11 ركناً؛ عدم المضي لا يكمّل الكفاءة المطلوبة للامتحان والممارسة.',
          explanationEn: 'The credential covers 11 pillars; stopping short does not complete the competence required for the exam and practice.',
        },
      ],
    },
  ],
};

export default quiz03;