import type { QuizBank } from '../types';

export const quiz23: QuizBank = {
  id: 'quiz-2-3',
  questions: [
    {
      scenario: 'طلب الإدارة "استغلال المساحات أفضل" — وأظهر المسح أن معدل إشغال المكاتب (نسبة المقاعد المشغولة لحظياً) منخفض.',
      scenarioEn: 'Management asks for "better space utilization" — and a survey shows a low office occupancy rate (the share of seats occupied at a given moment).',
      question: 'ما التقديم الأرشد لتحسين الاستغلال؟',
      questionEn: 'What is the most sound approach to improving utilization?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تقليص المساحة فوراً وتأجير الجزء الزائد',
          textEn: 'Down-size the space immediately and rent out the surplus',
          isCorrect: false,
          explanation: 'التقليص قرار كبير: يُبنى على دراسة أنماط الحضور وتكلفة الانتقال والتزامات الإيجار.',
          explanationEn: 'Down-sizing is a major decision: it must rest on studying attendance patterns, relocation cost, and lease obligations.',
        },
        {
          text: 'قياس ديناميكية الحضور أولاً (معدلات الإشغال لحظياً حسب اليوم/الفصل) وتصميم حل داخلي قبل تغيير العقود',
          textEn: 'First measure attendance dynamics (instant occupancy rates by day/season) and design an internal solution before changing contracts',
          isCorrect: true,
          explanation: 'فرز أنماط الاستخدام (أيام وتوقيتات الحضور، وفصول السنة) يصمم الحل الأنسب قبل أي تحرك تعاقدي.',
          explanationEn: 'Sorting usage patterns (attendance days and times across seasons) designs the best solution before any contractual move.',
        },
        {
          text: 'توسيع المكاتب ليكون الموظفون أكثر راحة',
          textEn: 'Expand the offices so employees are more comfortable',
          isCorrect: false,
          explanation: 'التوسعة تصرف وإن لم يثبت انسجامها مع أنماط الاستخدام واحتياجات الفريق.',
          explanationEn: 'Expansion spends money without proving alignment with usage patterns and team needs.',
        },
        {
          text: 'لا يوجد مجال للتحسين أصلاً',
          textEn: 'There is no room for improvement at all',
          isCorrect: false,
          explanation: 'الاستغلال قابل للتحسين دائماً بتقنيات ومقاييس — القول "لا شيء" توقف عن الأداء.',
          explanationEn: 'Utilization can always be improved with techniques and metrics — saying "nothing" is a halt to performance.',
        },
      ],
    },
    {
      scenario: 'مبنى موظفيه يبدأ العمل من الساعة 8:00 فقط، لكن بيانات العدّاد أظهرت استهلاكاً عالياً جداً من الساعة 5:00 صباحاً.',
      scenarioEn: 'A building whose employees start work only at 8:00, yet meter data shows very high consumption from 5:00 in the morning.',
      question: 'ما أول خطوة في تشخيص هذا الشذوذ؟',
      questionEn: 'What is the first step in diagnosing this anomaly?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'فحص جداول التحكم وإعدادات التشغيل المسبقة (Pre-cool/Pre-heat) للتكييف',
          textEn: 'Check the HVAC control schedules and the pre-cool/pre-heat operating settings',
          isCorrect: true,
          explanation: 'جداول التشغيل والتهيئة المسبقة (Pre-cool/Pre-heat) للمكيفات قبل ساعات العمل من أكبر أسباب الاستهلاك الصباحي المرتفع.',
          explanationEn: 'Operating schedules and pre-cooling/pre-heating of HVAC systems before working hours are among the biggest causes of high morning consumption.',
        },
        {
          text: 'افتراض أن الأصل عطل في العداد',
          textEn: 'Assume the meter itself is faulty',
          isCorrect: false,
          explanation: 'العداد قلّما يكذب بانتظام؛ يراجع بعد استبعاد لتشغيل الشاذ.',
          explanationEn: 'Meters rarely lie consistently; they are reviewed only after ruling out abnormal operation.',
        },
        {
          text: 'توقيف نظام التكييف كاملاً حتى دوام',
          textEn: 'Shut down the whole HVAC system until working hours',
          isCorrect: false,
          explanation: 'الإيقاف القصير منع بسيط؛ الحل الصحيح يعالج الجدولة والضبط، لا يقطع الخدمة.',
          explanationEn: 'A short shutdown is a superficial fix; the right solution addresses scheduling and control, not cutting the service.',
        },
        {
          text: 'لا يمكن معرفة السبب من البيانات وحدها',
          textEn: 'The cause cannot be known from data alone',
          isCorrect: false,
          explanation: 'البيانات أقوى سند؛ جدول استهلاك بعامة + جولات تحقق يعزل السبب خلال ساعة.',
          explanationEn: 'Data is the strongest evidence; a consumption profile plus verification rounds isolates the cause within an hour.',
        },
      ],
    },
    {
      scenario: 'تريد قياس الاستخدام الحقيقي لمساحات الاجتماعات خلال الشهر لمعرفة ما إذا كانت كثيرة أو زائدة.',
      scenarioEn: 'You want to measure the real use of meeting spaces over a month to determine whether they are adequate or surplus.',
      question: 'ما مجموعة البيانات الأدق لهذا القرار؟',
      questionEn: 'Which data set is the most accurate for this decision?',
      difficulty: 'صعب',
      options: [
        {
          text: 'جدول الحجوزات + عدد حضارات الفعلي + مدة الاجتماعات + نسبة الشغور',
          textEn: 'Booking schedule + actual attendance count + meeting durations + vacancy ratio',
          isCorrect: true,
          explanation: 'حجز موروث قد لا يُفيد؛ الحضور الفعلي وما احتُجز دون حضور يكشف الاستغلال الحقيقي.',
          explanationEn: 'An inherited booking may be meaningless; actual attendance and what was booked but unattended reveal the true utilization.',
        },
        {
          text: 'عدد كراسي كل غرفة فقط',
          textEn: 'The number of chairs in each room only',
          isCorrect: false,
          explanation: 'سعة الكراسي تصف القدرة، لا الاستغلال الفعلي في جوانب القرار.',
          explanationEn: 'Chair capacity describes capability, not actual utilization, in the aspects of the decision.',
        },
        {
          text: 'عدد الاجتماعات الأسبوع المجدولة فقط',
          textEn: 'The number of scheduled weekly meetings only',
          isCorrect: false,
          explanation: 'المجدول دون الفعلي يبالغ في تقدير الاستخدام.',
          explanationEn: 'Scheduled figures without actual ones overestimate usage.',
        },
        {
          text: 'رأي المستخدمين وحسب',
          textEn: "Only the users' opinion",
          isCorrect: false,
          explanation: 'رأي المستخدمين مساعد، لكنه لا يغني عن بيانات الاستخدام الحقيقية.',
          explanationEn: 'User opinion helps, but it does not replace real usage data.',
        },
      ],
    },
  ],
};

export default quiz23;