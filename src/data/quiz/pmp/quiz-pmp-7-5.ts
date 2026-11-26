import type { QuizBank } from '../types';

export const quizPmp75: QuizBank = {
  id: 'quiz-pmp-7-5',
  questions: [
    {
      scenario: 'CPI = 0.92 وSPI = 1.05 في تقرير أداء.',
      question: 'ما القراءة الصحيحة؟',
      difficulty: 'متوسط',
      caseSetId: 'case-pmp-7-5-evm-trend',
      sharedStem:
        'مشروع تطوير منصة بدأ بخط أساس تكلفة وجدول معتمدين، ويصدر تقرير أداء كل أسبوع.\n\nسلسلة مؤشرات الأداء:\n\n| الأسبوع | CPI | SPI | EAC مقابل BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | أقل من BAC |\n| 2 | 0.97 | 1.03 | قريب من BAC |\n| 3 | 0.92 | 1.05 | أعلى من BAC |\n\nتُطرح الأسئلة الأربعة التالية على هذا التقرير نفسه: اقرأ المؤشرات، فسر التوقع، اختر مقياس العمل المتبقي، ثم قرر الإجراء التصحيحي.',
      sharedStemEn:
        'A platform project tracks an approved cost and schedule baseline with a weekly performance report.\n\nPerformance series:\n\n| Week | CPI | SPI | EAC vs BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | below BAC |\n| 2 | 0.97 | 1.03 | near BAC |\n| 3 | 0.92 | 1.05 | above BAC |\n\nThe following four questions use this same report: read the indexes, interpret the forecast, pick the remaining-work metric, and decide the corrective action.',
      options: [
        {
          text: 'تجاوز تكلفة بسيط مع تقدم زمني جيد.',
          isCorrect: true,
          explanation: 'CPI أقل من 1 وSPI أكبر من 1.',
        },
        {
          text: 'وفور في التكلفة وتأخر في الجدول.',
          isCorrect: false,
          explanation:
            'CPI = 0.92 يعني تجاوز تكلفة، وSPI = 1.05 يعني تقدماً زمنياً؛ قراءة الوفور والتأخر معكوسة تماماً.',
        },
        {
          text: 'المشروع متوقف تماماً.',
          isCorrect: false,
          explanation: 'المؤشرات لا تدل على توقف.',
        },
        {
          text: 'لا حاجة لأي إجراء.',
          isCorrect: false,
          explanation: 'تجاوز التكلفة يستدعي المراقبة.',
        },
      ],
    },
    {
      scenario: 'EAC يشير إلى تجاوز متوقع كبير في نهاية المشروع.',
      question: 'ما الذي يجب فعله أولاً؟',
      difficulty: 'صعب',
      caseSetId: 'case-pmp-7-5-evm-trend',
      sharedStem:
        'مشروع تطوير منصة بدأ بخط أساس تكلفة وجدول معتمدين، ويصدر تقرير أداء كل أسبوع.\n\nسلسلة مؤشرات الأداء:\n\n| الأسبوع | CPI | SPI | EAC مقابل BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | أقل من BAC |\n| 2 | 0.97 | 1.03 | قريب من BAC |\n| 3 | 0.92 | 1.05 | أعلى من BAC |\n\nتُطرح الأسئلة الأربعة التالية على هذا التقرير نفسه: اقرأ المؤشرات، فسر التوقع، اختر مقياس العمل المتبقي، ثم قرر الإجراء التصحيحي.',
      sharedStemEn:
        'A platform project tracks an approved cost and schedule baseline with a weekly performance report.\n\nPerformance series:\n\n| Week | CPI | SPI | EAC vs BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | below BAC |\n| 2 | 0.97 | 1.03 | near BAC |\n| 3 | 0.92 | 1.05 | above BAC |\n\nThe following four questions use this same report: read the indexes, interpret the forecast, pick the remaining-work metric, and decide the corrective action.',
      options: [
        {
          text: 'تحليل أسباب الانحراف والتوقع قبل اقتراح إجراء تصحيحي.',
          isCorrect: true,
          explanation: 'التوقع أداة إنذار، والقرار يحتاج فهماً للسبب.',
        },
        {
          text: 'طلب زيادة ميزانية فوراً.',
          isCorrect: false,
          explanation: 'الزيادة تحتاج مبرراً واعتماداً.',
        },
        {
          text: 'تجاهل التوقع.',
          isCorrect: false,
          explanation: 'التوقع جزء أساسي من الرقابة.',
        },
        {
          text: 'إيقاف المشروع.',
          isCorrect: false,
          explanation:
            'إنهاء المشروع قرار جذري لا يبرره إنذار EAC؛ تحليل سبب التجاوز يسبق اقتراح الميزانية أو التصحيح.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يحتاج معرفة التكلفة المتوقعة للعمل المتبقي.',
      question: 'أي مؤشر يستخدم؟',
      difficulty: 'سهل',
      caseSetId: 'case-pmp-7-5-evm-trend',
      sharedStem:
        'مشروع تطوير منصة بدأ بخط أساس تكلفة وجدول معتمدين، ويصدر تقرير أداء كل أسبوع.\n\nسلسلة مؤشرات الأداء:\n\n| الأسبوع | CPI | SPI | EAC مقابل BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | أقل من BAC |\n| 2 | 0.97 | 1.03 | قريب من BAC |\n| 3 | 0.92 | 1.05 | أعلى من BAC |\n\nتُطرح الأسئلة الأربعة التالية على هذا التقرير نفسه: اقرأ المؤشرات، فسر التوقع، اختر مقياس العمل المتبقي، ثم قرر الإجراء التصحيحي.',
      sharedStemEn:
        'A platform project tracks an approved cost and schedule baseline with a weekly performance report.\n\nPerformance series:\n\n| Week | CPI | SPI | EAC vs BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | below BAC |\n| 2 | 0.97 | 1.03 | near BAC |\n| 3 | 0.92 | 1.05 | above BAC |\n\nThe following four questions use this same report: read the indexes, interpret the forecast, pick the remaining-work metric, and decide the corrective action.',
      options: [
        {
          text: 'ETC (Estimate to Complete).',
          isCorrect: true,
          explanation: 'يقدّر تكلفة إنهاء العمل المتبقي.',
        },
        {
          text: 'BAC.',
          isCorrect: false,
          explanation: 'الميزانية عند الإكمال.',
        },
        {
          text: 'PV.',
          isCorrect: false,
          explanation:
            'PV هي القيمة المخططة للعمل، أما تكلفة إنهاء العمل المتبقي فتُقدَّر بـ ETC.',
        },
        {
          text: 'AC.',
          isCorrect: false,
          explanation: 'التكلفة الفعلية حتى الآن.',
        },
      ],
    },
    {
      scenario: 'فريق يقترح إجراءً تصحيحياً سيؤثر على المخاطر.',
      question: 'ما الذي يلزم قبل التنفيذ؟',
      difficulty: 'متوسط',
      caseSetId: 'case-pmp-7-5-evm-trend',
      sharedStem:
        'مشروع تطوير منصة بدأ بخط أساس تكلفة وجدول معتمدين، ويصدر تقرير أداء كل أسبوع.\n\nسلسلة مؤشرات الأداء:\n\n| الأسبوع | CPI | SPI | EAC مقابل BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | أقل من BAC |\n| 2 | 0.97 | 1.03 | قريب من BAC |\n| 3 | 0.92 | 1.05 | أعلى من BAC |\n\nتُطرح الأسئلة الأربعة التالية على هذا التقرير نفسه: اقرأ المؤشرات، فسر التوقع، اختر مقياس العمل المتبقي، ثم قرر الإجراء التصحيحي.',
      sharedStemEn:
        'A platform project tracks an approved cost and schedule baseline with a weekly performance report.\n\nPerformance series:\n\n| Week | CPI | SPI | EAC vs BAC |\n| --- | --- | --- | --- |\n| 1 | 1.02 | 1.01 | below BAC |\n| 2 | 0.97 | 1.03 | near BAC |\n| 3 | 0.92 | 1.05 | above BAC |\n\nThe following four questions use this same report: read the indexes, interpret the forecast, pick the remaining-work metric, and decide the corrective action.',
      options: [
        {
          text: 'تقييم الأثر المتكامل ومواءمة أصحاب المصلحة.',
          isCorrect: true,
          explanation: 'الرقابة لا تخلق مشكلة جديدة بغير حساب.',
        },
        {
          text: 'تنفيذه فوراً.',
          isCorrect: false,
          explanation: 'التحليل يسبق التنفيذ.',
        },
        {
          text: 'إخفاء أثره.',
          isCorrect: false,
          explanation:
            'إخفاء أثر الإجراء التصحيحي يمنع مواءمة أصحاب المصلحة؛ تقييم الأثر المتكامل وإظهاره هو التصرف الصحيح.',
        },
        {
          text: 'تعديل TCPI فقط.',
          isCorrect: false,
          explanation: 'تعديل رقم لا يعالج التأثير.',
        },
      ],
    },
  ],
};

export default quizPmp75;
