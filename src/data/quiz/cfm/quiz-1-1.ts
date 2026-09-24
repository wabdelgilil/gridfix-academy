import type { QuizBank } from '../types';

export const quiz11: QuizBank = {
  id: 'quiz-1-1',
  questions: [
    {
      scenario: 'مبنى إداري تعمل به أنظمة HVAC بشكل جيد، لكن فواتير الكهرباء في صعود مستمر رغم ثبات أعداد الموظفين.',
      scenarioEn: 'An office building whose HVAC systems work well, but electricity bills keep rising despite a steady headcount.',
      question: 'ما الخطوة الأولى الأكثر منطقية لتشخيص السبب؟',
      questionEn: 'What is the most logical first step to diagnose the cause?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الانتقال فوراً لشراء وحدات تبريد جديدة',
          textEn: 'Immediately move to buying new chillers',
          isCorrect: false,
          explanation: 'الشراء الرأسمالي قبل التشخيص قرار مكلف. التشخيص بالبيانات أولاً.',
          explanationEn: 'A capital purchase before diagnosis is a costly decision. Diagnose with data first.',
        },
        {
          text: 'مراجعة جداول التشغيل والإيقاف في نظام أتمتة المبنى (BAS) ومقارنة الاستهلاك بالبيانات الشهرية',
          textEn: 'Review the start/stop schedules in the building automation system (BAS) and compare consumption with the monthly data',
          isCorrect: true,
          explanation: 'أغلب حالات صعود الطاقة أسبابها جداول تشغيل خاطئة أو حساسات تالفة — والبيانات تكشفها فوراً.',
          explanationEn: 'Most cases of rising energy are caused by wrong operating schedules or faulty sensors — and the data reveals them immediately.',
        },
        {
          text: 'مضاعفة عدد مرات تغيير الفلاتر فوراً بلا دراسة',
          textEn: 'Immediately doubling filter change frequency without study',
          isCorrect: false,
          explanation: 'تغيير الفلاتر جزء من الوقائية، لكنه لن يفسر وحده صعوداً كبيراً في الفواتير.',
          explanationEn: 'Filter changes are part of prevention, but alone they will not explain a large bill increase.',
        },
        {
          text: 'إلغاء صيانة وحدات التبريد لتوفير المصاريف',
          textEn: 'Canceling chiller maintenance to save costs',
          isCorrect: false,
          explanation: 'العكس تماماً: الأنظمة غير المصانة تكلف طاقة أكثر وتفشل في الذروة.',
          explanationEn: 'Quite the opposite: unmaintained systems consume more energy and fail at peak.',
        },
      ],
    },
    {
      scenario: 'في مبنى طبي، يجب ضمان استمرارية التغذية الكهربائية لغرف العمليات حتى عند انقطاع الشبكة.',
      scenarioEn: 'In a medical building, electrical supply continuity to the operating rooms must be guaranteed even when the grid fails.',
      question: 'ما المزيج الصحيح من الأنظمة لضمان ذلك؟',
      questionEn: 'What is the correct combination of systems to guarantee that?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'المولد الاحتياطي فقط يكفي لضمان الاستمرارية',
          textEn: 'The backup generator alone is enough to guarantee continuity',
          isCorrect: false,
          explanation: 'المولد يحتاج وقتاً للإقلاع (ثوانٍ/أيام) لا يتحمله جهاز حيوي — تحتاج طبقة وسطى.',
          explanationEn: 'A generator needs time to start (seconds/minutes) that a critical device cannot tolerate — you need an intermediate layer.',
        },
        {
          text: 'UPS (وحدات إمداد غير منقطع) لتغطية اللحظة الحرجة + مولد الطوارئ للتغذية الممتدة',
          textEn: 'A UPS (uninterruptible power supply) to cover the critical moment + an emergency generator for extended supply',
          isCorrect: true,
          explanation: 'UPS يسد فجوة اللحظات ثم يسلم الحِمل للمولد — هذا التسلسل هو المعيار الصحيح.',
          explanationEn: 'The UPS bridges the momentary gap, then hands the load to the generator — this sequence is the correct standard.',
        },
        {
          text: 'مضاعفة سعة الناقل الكهربائي من الشبكة فقط',
          textEn: 'Only doubling the grid feeder capacity',
          isCorrect: false,
          explanation: 'مضاعفة السعة لا تحمي من انقطاع الشبكة نفسه.',
          explanationEn: 'Doubling the capacity does not protect against a grid outage itself.',
        },
        {
          text: 'لا حاجة لأي استعداد لأن الشبكة مستقرة',
          textEn: 'No preparation is needed because the grid is stable',
          isCorrect: false,
          explanation: 'المباني الحيوية تبنى على افتراض أسوأ الحالات في الاستمرارية.',
          explanationEn: 'Critical buildings are designed on the worst-case assumption for continuity.',
        },
      ],
    },
    {
      scenario: 'قسم صيانة يلاحظ إنذارات حريق "كاذبة" متكررة في مطبخ المبنى، والموظفون بدأوا يتجاهلونها.',
      scenarioEn: 'A maintenance department notices repeated "false" fire alarms in the building kitchen, and employees have started ignoring them.',
      question: 'ما الإجراء الأصح؟',
      questionEn: 'What is the correct action?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إيقاف الكواشف في المطبخ لأنها مزعجة',
          textEn: 'Disabling the detectors in the kitchen because they are annoying',
          isCorrect: false,
          explanation: 'إيقاف الحماية في منطقة مخاطر يهدد سلامة الجميع — الحل في معالجة مصدر الإنذار الخاطئ.',
          explanationEn: 'Disabling protection in a risk area endangers everyone — the solution is addressing the source of the false alarm.',
        },
        {
          text: 'معالجة مصدر الإنذارات (بخار/دخان طبخ)، ومعايرة أو نقل الكواشف، والتدريب على أهمية عدم تجاهل الإنذار',
          textEn: 'Address the alarm source (cooking steam/smoke), calibrate or relocate the detectors, and train on why alarms must not be ignored',
          isCorrect: true,
          explanation: 'معالجة السبب الجذري + تحسين اختيار الكواشف + ثقافة الاستجابة = إنذارات أقل وموثوقية أعلى.',
          explanationEn: 'Tackling the root cause + better detector selection + a response culture = fewer alarms and higher reliability.',
        },
        {
          text: 'جعل الكواشف تنبه عبر البريد فقط بدلاً من الصوت',
          textEn: 'Make the detectors alert by email only instead of sound',
          isCorrect: false,
          explanation: 'الإنذار الصوتي مسار إخلاء حرج؛ إضعافه يهدد الاستجابة الحقيقية.',
          explanationEn: 'The audible alarm is a critical evacuation path; weakening it threatens real response.',
        },
        {
          text: 'تجاهل الأمر لأن جميعها كاذبة',
          textEn: 'Ignore the matter because they are all false',
          isCorrect: false,
          explanation: 'الإنذار الكاذب المتكرر هو إشارة فشل نظام يجب تشخيصه لا تجاهله.',
          explanationEn: 'A repeated false alarm is a symptom of a system failure that must be diagnosed, not ignored.',
        },
      ],
    },
  ],
};

export default quiz11;