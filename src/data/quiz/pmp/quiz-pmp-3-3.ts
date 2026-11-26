import type { QuizBank } from '../types';

export const quizPmp33: QuizBank = {
  id: 'quiz-pmp-3-3',
  questions: [
    {
      scenario: 'الفريق يناقش الفرق بين تسليم مخرج وتحقيق نتيجة.',
      question: 'أي أمثلة صحيحة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'المخرج: نظام مُركَّب؛ النتيجة: انخفاض زمن المعالجة.',
          isCorrect: true,
          explanation: 'المخرج ما تنتجه، والنتيجة الأثر الناتج.',
        },
        {
          text: 'المخرج والنتيجة نفس الشيء.',
          isCorrect: false,
          explanation:
            'المخرج هو ما ينتجه الفريق كنظام مُركَّب، والنتيجة هي أثره كخفض زمن المعالجة؛ هما ليسا نفس الشيء.',
        },
        {
          text: 'النتيجة هي ميزانية المشروع.',
          isCorrect: false,
          explanation: 'الميزانية مدخلات لا نتيجة.',
        },
        {
          text: 'المخرج هو رأي العميل فقط.',
          isCorrect: false,
          explanation: 'الرأي قد يقيس الأثر، لكنه ليس المخرج.',
        },
      ],
    },
    {
      scenario: 'الراعي يطلب إثباتاً على أن المشروع يخدم استراتيجية المؤسسة.',
      question: 'ما الذي يوضّح ذلك؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'سلسلة من الهدف الاستراتيجي إلى الفائدة إلى المخرج.',
          isCorrect: true,
          explanation: 'الربط المنطقي يظهر سبب وجود المشروع.',
        },
        {
          text: 'عدد الاجتماعات فقط.',
          isCorrect: false,
          explanation: 'الاجتماعات لا تثبت المواءمة.',
        },
        {
          text: 'لون شعار العرض التقديمي.',
          isCorrect: false,
          explanation: 'الشكل لا علاقة له بالاستراتيجية.',
        },
        {
          text: 'عدد أعضاء الفريق.',
          isCorrect: false,
          explanation: 'الحجم لا يدل على المواءمة.',
        },
      ],
    },
    {
      scenario: 'مؤشر الفائدة لا يتحسن بعد التسليم رغم جودة المخرج.',
      question: 'ما الاحتمال الأرجح؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'هناك فجوة في التبني أو في الظروف التشغيلية.',
          isCorrect: true,
          explanation: 'المخرج الجيد لا يكفي إذا لم يُستخدم أو تغير السياق.',
        },
        {
          text: 'المخرج بالتأكيد معيب.',
          isCorrect: false,
          explanation: 'الجودة ليست بالضرورة المشكلة.',
        },
        {
          text: 'المؤشر خاطئ دائماً.',
          isCorrect: false,
          explanation: 'قد يكون صحيحاً ويكشف فجوة حقيقية.',
        },
        {
          text: 'لا يمكن عمل شيء بعد الإغلاق.',
          isCorrect: false,
          explanation: 'يمكن دعم التحقق والتصحيح بالتعاون مع المالك.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد تضمين القيمة في ميثاق المشروع.',
      question: 'ما الذي يجب أن يكتبه؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'الفائدة المتوقعة ومؤشرها ومالكها وموعد قياسها.',
          isCorrect: true,
          explanation: 'القيمة تصبح قابلة للإدارة عندما تكون محددة ومقاسة.',
        },
        {
          text: 'اسم مدير المشروع فقط.',
          isCorrect: false,
          explanation: 'الاسم لا يحدد القيمة.',
        },
        {
          text: 'جدول الاجتماعات.',
          isCorrect: false,
          explanation: 'الجدول أداة تنفيذية.',
        },
        {
          text: 'قائمة الموردين المحتملين.',
          isCorrect: false,
          explanation: 'الموردون وسيلة لا غاية.',
        },
      ],
    },
  ],
};

export default quizPmp33;
