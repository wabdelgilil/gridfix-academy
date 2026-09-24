import type { QuizBank } from '../types';

export const quiz22: QuizBank = {
  id: 'quiz-2-2',
  questions: [
    {
      scenario: 'تكلف المبنى الإداري القائم حالياً في مرحلة متقدمة من عمره، وبدأ يتطلب استثمارات كبيرة تتجاوز قيمتها قيمته السوقية.',
      scenarioEn: 'The existing office building is at an advanced stage of its life and has begun to require major investments whose value exceeds its market value.',
      question: 'ما الخيار الاستراتيجي الأعمق في "دورة حياة العقار"؟',
      questionEn: 'What is the deepest strategic option within the "property lifecycle"?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مواصلة الإنفاق كل سنة لتمديد العمر بلا حدود',
          textEn: 'Keep spending every year to extend its life indefinitely',
          isCorrect: false,
          explanation: 'الإنفاق المستمر على أصل متقدم العمر فوق قيمته السوقية = قرار خامل يهدر المال.',
          explanationEn: 'Continuous spending on an aged asset above its market value is a passive decision that wastes money.',
        },
        {
          text: 'تحليل خيارات إعادة الهيكلة من بقاء/تجديد/بيع/تصفية مقابل التكلفة والقيمة',
          textEn: 'Analyze restructuring options — remain/renew/sell/liquidate — against cost and value',
          isCorrect: true,
          explanation: 'قرارات نهاية العمر تُبنى بإعادة تقييم شاملة تشمل القيمة السوقية وتكلفة الأثر.',
          explanationEn: 'End-of-life decisions are built on a comprehensive re-evaluation covering market value and the cost of impact.',
        },
        {
          text: 'التخلي الفوري عن المبنى دون احتياطي',
          textEn: 'Abandon the building immediately without a backup plan',
          isCorrect: false,
          explanation: 'التصرف قرار مدروس في وقته ضمن خطة، وليس هروباً عاجلاً بلا خطة.',
          explanationEn: 'Disposal is a studied decision made in time within a plan, not a hasty escape without one.',
        },
        {
          text: 'الاستمرار بالصيانة الدنيا فقط مهما طال',
          textEn: 'Continue with minimum maintenance alone no matter how long',
          isCorrect: false,
          explanation: 'الصيانة الدنيا تطيل العمر لكنها ترفع مخاطر الأداء والتكلفة الكلية البعيدة.',
          explanationEn: 'Minimum maintenance extends life but raises performance risks and long-term total cost.',
        },
      ],
    },
    {
      scenario: 'فريق ماليات يسأل: "لماذا ندرج حالة الأرضية والهيكل في أصولنا كل سنة مع أننا لا نبيعها؟"',
      scenarioEn: 'A finance team asks: "Why do we record the building and structure in our assets every year even though we do not sell it?"',
      question: 'ما التبرير الصحيح من زاوية إدارة العقار؟',
      questionEn: 'What is the correct justification from a property-management perspective?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'لا حاجة لإدراجها لأننا سنستخدمها مدى الحياة',
          textEn: 'There is no need to record it because we will use it for life',
          isCorrect: false,
          explanation: 'الإدراج لا يعني البيع؛ هو وعاء لقرارات التكلفة والإهلاك وصيانة الأصول.',
          explanationEn: 'Recording does not mean selling; it is the vessel for cost, depreciation, and asset-maintenance decisions.',
        },
        {
          text: 'قيمة المبنى أصل رأسمالي يدعم قرارات التجديد والتمويل والضمانات والتقويم المالي',
          textEn: "The building's value is a capital asset supporting renewal, financing, guarantee, and financial-valuation decisions",
          isCorrect: true,
          explanation: 'المبنى أصل على الميزانية يؤثر على التمويل والضمانات وقرارات الإهلاك والتجديد.',
          explanationEn: 'The building is a balance-sheet asset affecting financing, guarantees, and depreciation and renewal decisions.',
        },
        {
          text: 'لأن المعايير الدولية تفرض إدراج كل الأصول مهما كانت',
          textEn: 'Because international standards require recording every asset whatever it is',
          isCorrect: false,
          explanation: 'الإدراج غير المعبي حالة؛ المبرر اقتصادي/استراتيجي وليس شكلياً.',
          explanationEn: 'Recording is not aimless compliance; the justification is economic and strategic, not formal.',
        },
        {
          text: 'لوضع العقار في واجهة الموقع الإلكتروني',
          textEn: 'To put the property on the website front page',
          isCorrect: false,
          explanation: 'دور أصول العقار في الميزانية وتحليل القرار، لا مجرد إدراج شكلي بلا غرض.',
          explanationEn: 'The role of property assets is in the balance sheet and decision analysis, not a purposeless formal listing.',
        },
      ],
    },
    {
      scenario: 'خلال الـ 30 سنة القادمة، سيبلغ مبنى المكتب الذكر مرحلة الحاجة لاستثمار ضخم في مستوى التجديد الشامل.',
      scenarioEn: 'Within the next 30 years, the office building will reach a stage requiring a massive investment at the level of a comprehensive renewal.',
      question: 'ما الممارسة الأفضل التي تبني القرار الآن بدلاً من الأزمة لاحقاً؟',
      questionEn: 'What best practice builds the decision now rather than facing a crisis later?',
      difficulty: 'صعب',
      options: [
        {
          text: 'بناء نموذج تكلفة دورة الحياة (LCC) وقرارات جاهزة في نقاط القرار',
          textEn: 'Build a life-cycle cost (LCC) model with decisions ready at the decision points',
          isCorrect: true,
          explanation: 'علمك المبكر بالمحطات الحساسة يساعد على ترتيب التمويل وتجنب أزمة الإنفاق المفاجئ.',
          explanationEn: 'Early knowledge of the critical milestones helps arrange financing and avoid a sudden-spending crisis.',
        },
        {
          text: 'تأجيل أي تفكير للوقت الحرج نفسه',
          textEn: 'Defer any thinking until the critical moment itself',
          isCorrect: false,
          explanation: 'الوصول إلى الأزمة بدون خطة يضاعف التكلفة ويصعّب بدائل التنقل.',
          explanationEn: 'Reaching the crisis without a plan doubles the cost and makes relocation alternatives harder.',
        },
        {
          text: 'البناء تصميم متجدد فقط لأن الحياة كلها تجدد مستمر',
          textEn: 'Build only a "keep renewing" design because life is endless renewal',
          isCorrect: false,
          explanation: 'التجديد قرار دوري مخطط وفق نقاط قرار واضحة، لا استجابة عاطفية.',
          explanationEn: 'Renewal is a planned periodic decision based on clear decision points, not an emotional response.',
        },
        {
          text: 'ترك صيانة الأصول لقسم الميزانية وحده',
          textEn: 'Leave asset maintenance to the budget department alone',
          isCorrect: false,
          explanation: 'الإدارات تعمل معاً: بيانات الأصول تقود مقدمات الميزانية الرأسمالية.',
          explanationEn: 'Departments work together: asset data drives the inputs of the capital budget.',
        },
      ],
    },
  ],
};

export default quiz22;