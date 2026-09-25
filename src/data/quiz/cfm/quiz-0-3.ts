import type { QuizBank } from '../types';

export const quiz03: QuizBank = {
  id: 'quiz-0-3',
  questions: [
    {
      scenario: 'مدير منشأة جديد يبني خطة تعلمه وفق مواصفة CFM الحالية (عشرة مجالات متساوية الوزن).',
      scenarioEn: 'A new facility manager is building a study plan according to the current CFM specification (ten equally weighted domains).',
      question: 'كيف يرتب أولوياته في مسار التعلم على نحو صحيح؟',
      questionEn: 'How should he correctly order his priorities in the learning path?',
      difficulty: 'سهل',
      options: [
        {
          text: 'يبدأ بالمجالات ذات الحرجية العملية العالية (عمليات المنشأة والماليات) مع تغطية عادلة لباقي المجالات',
          textEn: 'Starts with the high-criticality domains (facility operations and finance) while covering all the others fairly',
          isCorrect: true,
          explanation: 'مع تساوي الأوزان، يقود ترتيب التعلم الحرجية العملية وترابط المعرفة لا ثقل مفترض؛ والبقية تُغطى كاملة.',
          explanationEn: 'With equal weights, the learning order is driven by practical criticality and knowledge interdependence, not by an assumed heaviness; the rest is fully covered.',
        },
        {
          text: 'التواصل وحده لأنه مهارة عامة',
          textEn: 'Communication alone because it is a general skill',
          isCorrect: false,
          explanation: 'التواصل مجال مهم لكنه يدعم المجالات التشغيلية ولا يقوم مقامها في الممارسة.',
          explanationEn: 'Communication is an important domain, but it supports the operational domains and does not replace them in practice.',
        },
        {
          text: 'مجال واحد فقط لأنه الأعلى وزناً في المواصفة',
          textEn: 'Only one domain because it has the highest weight in the specification',
          isCorrect: false,
          explanation: 'لا يوجد مجال أعلى وزناً في مواصفة 2026؛ المجالات العشرة متساوية (10 أسئلة محسوبة لكل مجال).',
          explanationEn: 'No domain has a higher weight in the 2026 specification; the ten domains are equal (10 scored questions each).',
        },
        {
          text: 'لا أهمية ترتيب على الإطلاق',
          textEn: 'Ordering matters not at all',
          isCorrect: false,
          explanation: 'الحرجية العملية وترابط المعرفة يقودان ترتيب الاستثمار في التعلم — إذن للترتيب قيمة فعلية.',
          explanationEn: 'Practical criticality and knowledge interdependence drive the order of learning investment — so ordering has real value.',
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
      scenario: 'بعد إتمام مجالات التشغيل والعقارات والماليات، تريد ترتيب بقية تعلّمك بهامش أكبر.',
      scenarioEn: 'After completing the operations, real estate, and finance domains, you want to order the rest of your learning with more leeway.',
      question: 'ما القاعدة الذكية لترتيب بقية التعلّم؟',
      questionEn: 'What is the smart rule for ordering the rest of your learning?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التتابع الطبيعي: اكتمل الجذر ثم أطيب أسانيده وتكامله (سلامة، مخاطر، قيادة، بيانات)',
          textEn: 'Natural sequencing: complete the core, then its best supports and integration (safety, risk, leadership, data)',
          isCorrect: true,
          explanation: 'بعد أساس المنشأة، يكسب البناء المعرفي من التسلسل الذي يبني كل مجال على سابقه وظل منسجمه.',
          explanationEn: 'After the facility foundation, knowledge building benefits from a sequence in which each domain builds on its predecessor coherently.',
        },
        {
          text: 'دراسة كل شيء دفعة واحدة بلا تسلسل',
          textEn: 'Studying everything at once without sequence',
          isCorrect: false,
          explanation: 'الازدحام بلا بناء يضعف البقاء والتذكر ويخرب الحلقة التعليمية.',
          explanationEn: 'Cramming without building weakens retention and memory and disrupts the learning loop.',
        },
        {
          text: 'تجاهل المجالات التي تراها داعمة تماماً',
          textEn: 'Completely ignoring the domains you see as supportive',
          isCorrect: false,
          explanation: 'كل المجالات العشرة تغطيها المواصفة؛ الالتزام بالتغطية الكاملة بأهمية عملية لا إهمال.',
          explanationEn: 'All ten domains are covered by the official exam; commit to full coverage with practical importance, not total neglect.',
        },
        {
          text: 'وقف التعلم بعد أول ثلاثة',
          textEn: 'Stopping learning after the first three',
          isCorrect: false,
          explanation: 'الشهادة تغطي 10 مجالات؛ عدم المضي لا يكمّل الكفاءة المطلوبة للامتحان والممارسة.',
          explanationEn: 'The credential covers 10 domains; stopping short does not complete the competence required for the exam and practice.',
        },
      ],
    },
  ],
};

export default quiz03;