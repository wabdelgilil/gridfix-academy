import type { QuizBank } from '../types';

export const quiz71: QuizBank = {
  id: 'quiz-7-1',
  questions: [
    {
      scenario: 'شركة تروج لمسؤوليتها البيئية وتريد الاعتماد الأعلى في نظام LEED لمشروع مبنى إداري جديد.',
      scenarioEn: 'A company promotes its environmental responsibility and wants the highest certification in the LEED system for a new office building project.',
      question: 'ما أعلى مستوى في شهادة LEED والمطلوب للوصول إليه؟',
      questionEn: 'What is the highest LEED certification level and what is required to reach it?',
      difficulty: 'سهل',
      options: [
        {
          text: 'البلاتينيوم (Platinum) — ويتطلب 80 نقطة فأكثر من أصل 110',
          textEn: 'Platinum — requiring 80 points or more out of 110',
          isCorrect: true,
          explanation: 'مستويات LEED v4: معتمد 40–49، فضي 50–59، ذهبي 60–79، وبلاتينيوم 80 فأكثر من أصل 110 نقاط.',
          explanationEn: 'The LEED v4 levels: Certified 40–49, Silver 50–59, Gold 60–79, and Platinum 80 and above out of 110 points.',
        },
        {
          text: 'الذهبي (Gold) — ويتطلب 60 نقطة فقط',
          textEn: 'Gold — requiring only 60 points',
          isCorrect: false,
          explanation: 'الذهبي مرحلة عالية نعم، لكن الأعلى في السلم هو البلاتينيوم بشرط 80 نقطة.',
          explanationEn: 'Gold is indeed a high level, but the top of the ladder is Platinum with the 80-point requirement.',
        },
        {
          text: 'الماسي (Diamond) — شهادة خاصة للمواد عالية الأداء',
          textEn: 'Diamond — a special certification for high-performance materials',
          isCorrect: false,
          explanation: 'لا يوجد مستوى «ماسي» في نظام LEED؛ المستويات أربعة: معتمد، فضي، ذهبي، بلاتينيوم.',
          explanationEn: 'There is no "Diamond" level in the LEED system; the levels are four: Certified, Silver, Gold, Platinum.',
        },
        {
          text: 'الفضي (Silver) — لأن معظم المشاريع تكتفي به',
          textEn: 'Silver — because most projects settle for it',
          isCorrect: false,
          explanation: 'الفضي 50–59 نقطة متوسط جيد لكنه ليس الأعلى، والسؤال عن الأعلى تحديداً.',
          explanationEn: 'Silver, 50–59 points, is a good mid-level but not the highest, and the question asks specifically for the highest.',
        },
      ],
    },
    {
      scenario: 'يقترح بعض المختصين تقليص الاستثمار في فئة الطاقة والغلاف الجوي (EA) لأن نقاطها مكلفة.',
      scenarioEn: 'Some specialists suggest cutting the investment in the Energy and Atmosphere (EA) category because its points are costly.',
      question: 'لماذا تُعدّ فئة الطاقة والغلاف الجوي أهم فئات لييد نقاطاً بنفسها؟',
      questionEn: 'Why is the Energy and Atmosphere category the most important LEED category in points itself?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'لأن الطاقة أكبر أثر بيئي وتشغيلي مالي في دورة حياة المبنى، ولهذا جُعلت أكبر حصص النقاط (33/110)',
          textEn: 'Because energy has the greatest environmental and financial operating impact in a building\u2019s life cycle, which is why it was given the largest point share (33/110)',
          isCorrect: true,
          explanation: 'طاقة المبنى هي أكبر كلفة تشغيلية وأثر انبعاثات؛ لذلك منحتها USGBC أكبر حصة نقاط وأولويتها على غيرها.',
          explanationEn: 'Building energy is the largest operating cost and emissions impact; that is why USGBC gave it the largest point share and priority over the others.',
        },
        {
          text: 'لأنها الأسهل إدارةً ولا تحتاج تحسينات خاصة',
          textEn: 'Because it is the easiest to manage and needs no special improvements',
          isCorrect: false,
          explanation: 'الطاقة تتطلب تحسينات هندسية وقياساً فعلية، وصعوبتها هي سبب حجم حصتها لا سهولتها.',
          explanationEn: 'Energy requires real engineering improvements and measurement; its difficulty is the reason for the size of its share, not its ease.',
        },
        {
          text: 'لأنها فئة واحدة لا تنقسم لبوابات عملية إلزامية',
          textEn: 'Because it is a single category that does not divide into mandatory prerequisites',
          isCorrect: false,
          explanation: 'EA تتضمن متطلبات أساسية إلزامية (أداء طاقي أدنى، وقياس) قبل أي نقاط أخرى.',
          explanationEn: 'EA includes mandatory prerequisites (minimum energy performance and metering) before any other points.',
        },
        {
          text: 'لأن نقاطها المتاحة قليلة مقارنة بالفئات الأخرى',
          textEn: 'Because its available points are few compared with the other categories',
          isCorrect: false,
          explanation: 'بالعكس: EA أكبر فئة في السجل (33 من 110) وهي الأثقل أثراً وليس الأقل نقاطاً.',
          explanationEn: 'On the contrary: EA is the largest category in the scorecard (33 of 110) and the heaviest in impact, not the fewest in points.',
        },
      ],
    },
    {
      scenario: 'فريق مشروع يريد 60 نقطة (ذهبي) لكن تركيزه كله على جمع النقاط من كل فئة، دون فحص المتطلبات الأساسية (Prerequisites).',
      scenarioEn: 'A project team wants 60 points (Gold) but its entire focus is collecting points from every category without checking the prerequisites.',
      question: 'ما الخطأ الجوهري في هذا التوجه؟',
      questionEn: 'What is the fundamental flaw in this approach?',
      difficulty: 'صعب',
      options: [
        {
          text: 'المتطلبات الأساسية إلزامية ولا تُحصى نقاطاً؛ فشل واحد فيها يسقط المشروع مهما بلغ مجموع النقاط',
          textEn: 'The prerequisites are mandatory and earn no points; a single failure among them fails the project no matter how high the total',
          isCorrect: true,
          explanation: 'التمييز حاسم: يجب تحقيق كل prerequisite قبل احتساب أي نقطة؛ النتيجة النهائية «معتمدة» لا «مرشحة».',
          explanationEn: 'The distinction is decisive: every prerequisite must be met before any point is counted; the final result is certified, not merely "eligible".',
        },
        {
          text: 'المتطلبات الأساسية تحسب كأقل فئة نقاط في النهاية',
          textEn: 'The prerequisites are counted as the smallest point category at the end',
          isCorrect: false,
          explanation: 'المتطلبات الأساسية لا تمنح نقاطاً إطلاقاً — هي الشرط المسبق الوجوب، ومحاور السلم أربع لغيرها.',
          explanationEn: 'The prerequisites award no points at all — they are a mandatory precondition, and points are earned through the other tiers.',
        },
        {
          text: 'يمكن التفاوض على إسقاطها وتحقيق نقاط أكثر بدلاً منها',
          textEn: 'They can be negotiated away in exchange for earning more points instead',
          isCorrect: false,
          explanation: 'ليست قابلة للتفاوض في إطار الاعتماد؛ الاستثناءات محدودة جداً وبشروط صارمة من USGBC.',
          explanationEn: 'They are not negotiable within the certification framework; the exceptions are very limited and strictly conditioned by USGBC.',
        },
        {
          text: 'يكفي تحقيقها بعد الحصول على الشهادة بعام كامل',
          textEn: 'Fulfilling them a full year after earning the certificate is enough',
          isCorrect: false,
          explanation: 'التوثيق الالتزامي يسبق الشهادة ولا يُقبل التأجيل؛ المراجعة الرسمية توثقها ضمن الملف.',
          explanationEn: 'Compliance documentation precedes the certificate and delay is not accepted; the official review documents it within the file.',
        },
      ],
    },
  ],
};