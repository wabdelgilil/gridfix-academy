import type { QuizBank } from '../types';

export const quiz12: QuizBank = {
  id: 'quiz-1-2',
  questions: [
    {
      scenario: 'تحليل توقف أصول منشأة أظهر أن مروحة تهوية رخيصة وقابلة للاستبدال خلال ساعات تفشل بين الحين والآخر دون أثر كبير.',
      scenarioEn: 'An asset-downtime analysis shows that a cheap ventilation fan, replaceable within hours, fails from time to time with no major impact.',
      question: 'ما استراتيجية الصيانة الأنسب اقتصادياً؟',
      questionEn: 'Which maintenance strategy is the most economical fit?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'Run-to-Failure (تشغيل حتى العطل)',
          textEn: 'Run-to-Failure',
          isCorrect: true,
          explanation: 'أصل منخفض القيمة/المخاطر وتكلفة الإصلاح هينة — الإنفاق الوقائي الدائم لا يبرر نفسه.',
          explanationEn: 'A low-value/low-risk asset with a negligible repair cost — permanent preventive spending does not justify itself.',
        },
        {
          text: 'صيانة تنبؤية بحساسات اهتزاز',
          textEn: 'Predictive maintenance with vibration sensors',
          isCorrect: false,
          explanation: 'تركيب حساسات وتطوير نماذج على مروحة رخيصة تكلفة أعلى من قيمة الأصل نفسه.',
          explanationEn: 'Installing sensors and developing models on a cheap fan costs more than the asset itself.',
        },
        {
          text: 'صيانة وقائية يومية مكثفة',
          textEn: 'Intensive daily preventive maintenance',
          isCorrect: false,
          explanation: 'الوقائية اليومية المفرطة مضيعة للوقت والمال مقارنة بقيمة وتكلفة فشل الأصل.',
          explanationEn: 'Excessive daily prevention wastes time and money relative to the asset\u2019s value and failure cost.',
        },
        {
          text: 'ترقية الأصل الضخمة فوراً',
          textEn: 'Immediately undertaking a major asset upgrade',
          isCorrect: false,
          explanation: 'الترقية الرأسمالية قرار منفصل لا يتطابق مع منخفض الأثر الحالي.',
          explanationEn: 'A capital upgrade is a separate decision that does not match the current low impact.',
        },
      ],
    },
    {
      scenario: 'لديك وحدة تبريد حرجة (Chiller) تخدم مركز بيانات، وفشلها خلال يوم واحد مكلف جداً ومتاح قياس حالتها بحساسات.',
      scenarioEn: 'You have a critical chiller serving a data center; its failure within a day would be very costly, and its condition can be measured with sensors.',
      question: 'ما الاستراتيجية الأنسب؟',
      questionEn: 'What is the most suitable strategy?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الصيانة التنبؤية (Condition-Based)',
          textEn: 'Predictive (condition-based) maintenance',
          isCorrect: true,
          explanation: 'أصل حرج باهظ الفشل وقابل للقياس: التنبؤية تمنع الانهيار وتوفّر على التوقفات.',
          explanationEn: 'A critical asset with costly failure that is measurable: predictive maintenance prevents collapse and saves on downtime.',
        },
        {
          text: 'Run-to-Failure لتقليل المهام',
          textEn: 'Run-to-Failure to reduce tasks',
          isCorrect: false,
          explanation: 'هذا أسوأ اختيار هنا: الفشل الكارثي يهدد مركز البيانات بالكامل.',
          explanationEn: 'This is the worst choice here: a catastrophic failure threatens the entire data center.',
        },
        {
          text: 'إهمال الصيانة لتوفير الميزانية',
          textEn: 'Neglecting maintenance to save the budget',
          isCorrect: false,
          explanation: 'نتيجته الحتمية فشل مكلف أوقات الذروة.',
          explanationEn: 'Its inevitable result is a costly failure at peak times.',
        },
        {
          text: 'استبدال دوري بدون معاينة',
          textEn: 'Periodic replacement without inspection',
          isCorrect: false,
          explanation: 'الاستبدال المبكر يهدر العمر الاقتصادي؛ القرار بالحالة أفضل من القرار بالزمن فقط.',
          explanationEn: 'Early replacement wastes economic life; deciding by condition is better than deciding by time alone.',
        },
      ],
    },
    {
      scenario: 'لاحظت أن نفس الوحدة الحرارية تتعطل كل عام تقريباً في موسم الصيف بنمط متشابه.',
      scenarioEn: 'You notice that the same thermal unit fails almost every year during the summer season in a similar pattern.',
      question: 'كيف تتصرف كمدير منشأة يبحث عن السبب الجذري؟',
      questionEn: 'How do you act as a facility manager pursuing the root cause?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تكثيف الإصلاحات في كل عطل دون دراسة النمط',
          textEn: 'Intensifying repairs at every failure without studying the pattern',
          isCorrect: false,
          explanation: 'إصلاح الأعراض بلا تحليل السبب الجذري يعيد المشكلة موسمياً.',
          explanationEn: 'Repairing symptoms without root-cause analysis brings the problem back seasonally.',
        },
        {
          text: 'تحليل بيانات الأعطال (حمل الذروة، حالة الفلاتر، كفاءة المبرد) وتحديد المحفز المباشر ثم استهدافه',
          textEn: 'Analyze the failure data (peak load, filter condition, chiller efficiency), identify the direct trigger, then target it',
          isCorrect: true,
          explanation: 'RCA يعتمد البيانات: الأحمال الغير مثبطة صيفاً غالباً هي المحفز، فيُعالج الجذر لا العرض.',
          explanationEn: 'RCA relies on data: unmitigated summer loads are often the trigger, so the root is treated, not the symptom.',
        },
        {
          text: 'افتراض أن السبب هو عامل الاحتيال وقسري',
          textEn: 'Assuming that the cause is a deceptive and forced factor',
          isCorrect: false,
          explanation: 'الافتراض بلا سند لا يحل المشكلة المتكررة الموثقة.',
          explanationEn: 'An assumption without evidence does not solve the documented recurring problem.',
        },
        {
          text: 'إلقاء اللوم على مقاول الصيانة ونقض العقد فوراً',
          textEn: 'Blaming the maintenance contractor and immediately terminating the contract',
          isCorrect: false,
          explanation: 'القرار التعاقدي يُبنى على بيانات المواصفات، لا على انطباع وقت العطل.',
          explanationEn: 'A contractual decision is built on specification data, not on an impression at the time of failure.',
        },
      ],
    },
  ],
};

export default quiz12;