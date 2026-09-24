import type { QuizBank } from '../types';

export const quiz32: QuizBank = {
  id: 'quiz-3-2',
  questions: [
    {
      scenario: 'أظهر أحد الأشهر انحرافاً موجباً +18% بين الفعلي والمخطط في بند عقود الصيانة.',
      scenarioEn: 'A month shows a positive variance of +18% between actual and planned in the maintenance contracts line.',
      question: 'ما أول إجراء صحيح في التعامل مع هذا الانحراف؟',
      questionEn: 'What is the first correct action in handling this variance?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحليل السبب: هل طلبات إضافية، تعاقد أعلى، أم خطأ احتساب؟ ثم تصحيح المسار',
          textEn: 'Analyze the cause: extra requests, higher contracting, or a calculation error? Then correct the course',
          isCorrect: true,
          explanation: 'الانحراف أداة كنت وليس عقاباً؛ يبدأ بفهم السبب ثم قرار التصحيح أو إعادة التوزيع.',
          explanationEn: 'Variance is a diagnostic tool, not a punishment; it starts by understanding the cause, then a correction or reallocation decision.',
        },
        {
          text: 'تجاهله والانتظار لنهاية العام',
          textEn: 'Ignore it and wait until the end of the year',
          isCorrect: false,
          explanation: 'التجاهل يحوّل انحرافاً صغيراً إلى عجز تراكمي كبير في نهاية السنة.',
          explanationEn: 'Ignoring it turns a small variance into a large accumulated deficit by year-end.',
        },
        {
          text: 'قص البند كاملاً دون تحليل',
          textEn: 'Cut the line entirely without analysis',
          isCorrect: false,
          explanation: 'القصف العشوائي يقطع خدمات جوهرية دون أن يصل للجذر الحقيقي.',
          explanationEn: 'Random cuts slash essential services without reaching the real root.',
        },
        {
          text: 'طلب تمويل زائد دائماً لحظياً',
          textEn: 'Always request immediate extra funding',
          isCorrect: false,
          explanation: 'التمويل الزائد التلقائي يضعف الانضباط والحاجة لأي تحليل مستقبلاً.',
          explanationEn: 'Automatic extra funding weakens discipline and the need for any future analysis.',
        },
      ],
    },
    {
      scenario: 'في شهر معين انخفضت المصاريف الفعلية أقل من المخططة بــ 12% في بند التدريب.',
      scenarioEn: 'In a given month, actual expenses fell 12% below the plan in the training line.',
      question: 'كيف تُقرأ هذه الظاهرة؟',
      questionEn: 'How should this phenomenon be read?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'انحراف موفر (Favorable)، لكن يُستقصى: تأجيل تدريب ضروري أم كفاءة فعلية؟',
          textEn: 'A favorable variance, but it must be investigated: deferring necessary training or real efficiency?',
          isCorrect: true,
          explanation: 'التوفير قد يعني تأجيل تدريب حيوي؛ السؤال السياقي يمنع تحويل الادخار إلى خسارة مهارات.',
          explanationEn: 'Savings may mean deferring vital training; the contextual question prevents turning savings into a loss of skills.',
        },
        {
          text: 'خبر جيد لا يحتاج أي سؤال',
          textEn: 'Good news requiring no questions',
          isCorrect: false,
          explanation: 'الاحتفال النائم قد يخفي إلغاء تدريبات التزامية (سلامة) — هذا قرار مخاطر.',
          explanationEn: 'A sleepy celebration may hide the cancellation of mandatory (safety) training — this is a risk decision.',
        },
        {
          text: 'تحويل الفرق فوراً لعلاوات',
          textEn: 'Immediately convert the difference into bonuses',
          isCorrect: false,
          explanation: 'إعادة توزيع أموال البنود قرار مالي يحتاج موافقة رسمية وأثراً لا هوى.',
          explanationEn: 'Reallocating line funds is a financial decision requiring formal approval and impact, not whim.',
        },
        {
          text: 'إضافة الإنفاق لاحقاً بنفس الفرق عشوائياً',
          textEn: 'Add the spending later by the same difference, randomly',
          isCorrect: false,
          explanation: 'إنفاق تعويضي فوضي يضيع الانضباط الرقابي.',
          explanationEn: 'Chaotic compensatory spending destroys control discipline.',
        },
      ],
    },
    {
      scenario: 'ظهر في مراجعة منتصف العام انحراف سلبي بنسبة -4% فقط (توفير طفيف) في بند الطاقة.',
      scenarioEn: 'A mid-year review shows a negative variance of only −4% (a slight saving) in the energy line.',
      question: 'ما المستوى الأنسب للاستجابة؟',
      questionEn: 'What is the most appropriate level of response?',
      difficulty: 'صعب',
      options: [
        {
          text: 'مراقبة دورية عادية ضمن الحدود: لا إجراء استعجالي، مع استمرار الرصد',
          textEn: 'Regular periodic monitoring within limits: no urgent action, with continued tracking',
          isCorrect: true,
          explanation: 'في حدود ±5% الوضع طبيعي والممارسة "رصد مستمر" لا استجابات مثيرة.',
          explanationEn: 'Within ±5% the situation is normal and the practice is "continuous monitoring", not dramatic responses.',
        },
        {
          text: 'إيقاف كل استهلاك الطاقة فوراً',
          textEn: 'Immediately stop all energy consumption',
          isCorrect: false,
          explanation: 'مبالغة قاتلة تربك تشغيل النظام وتكسر جدول الأعمال.',
          explanationEn: 'A fatal exaggeration that disrupts system operation and breaks the work schedule.',
        },
        {
          text: 'اعتماد إنفاق لتطوع بند الطاقة المتبقية',
          textEn: 'Adopt spending to burn off the remaining energy line',
          isCorrect: false,
          explanation: 'انحراف مقبول لا يبرر إنفاقاً عشوائياً حرقاً لرصيد البند دون هدف.',
          explanationEn: 'An acceptable variance does not justify random spending just to burn the line balance with no purpose.',
        },
        {
          text: 'إعلان فشل الميزانية كلياً',
          textEn: 'Declare the budget a total failure',
          isCorrect: false,
          explanation: 'تقرير قدرة على الإدارة لا فشل؛ الحدود المرجعية موجودة لهذا الغرض.',
          explanationEn: 'It indicates management capability, not failure; reference thresholds exist for exactly this purpose.',
        },
      ],
    },
  ],
};

export default quiz32;