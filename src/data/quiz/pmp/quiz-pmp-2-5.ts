import type { QuizBank } from '../types';

export const quizPmp25: QuizBank = {
  id: 'quiz-pmp-2-5',
  questions: [
    {
      scenario: 'صاحب مصلحة يتوقع تسليماً مبكراً خلافاً للخطة المعتمدة.',
      question: 'ما أفضل طريقة لإدارة توقعه؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'توضيح الأساس المنطقي والقيود وتفق معه على بديل.',
          isCorrect: true,
          explanation: 'إدارة التوقعات تعني الفهم والتفاوض لا الوعد الكاذب.',
        },
        {
          text: 'الوعد بالتسليم المبكر لإرضائه.',
          isCorrect: false,
          explanation: 'الوعد غير الواقعي يضر بالمصداقية.',
        },
        {
          text: 'رفض حديثه نهائياً.',
          isCorrect: false,
          explanation: 'الرفض دون حوار يزيد التوتر.',
        },
        {
          text: 'إحالته إلى المورد.',
          isCorrect: false,
          explanation: 'المورد ليس طرفاً في إدارة توقعات العمل.',
        },
      ],
    },
    {
      scenario: 'تظهر معلومة جديدة تغير أولويات أصحاب المصلحة.',
      question: 'ما الإجراء الصحيح؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'تحديث تحليل أصحاب المصلحة وخطة المشاركة.',
          isCorrect: true,
          explanation: 'التحليل حيّ ويتغير مع السياق.',
        },
        {
          text: 'الاستمرار بالخطة القديمة.',
          isCorrect: false,
          explanation: 'الخطة القديمة لم تعد تعكس الواقع.',
        },
        {
          text: 'إلغاء المشروع.',
          isCorrect: false,
          explanation: 'التغيير لا يعني الإلغاء.',
        },
        {
          text: 'عدم إبلاغ الفريق.',
          isCorrect: false,
          explanation: 'الفريق يحتاج المعلومة لأداء عمله.',
        },
      ],
    },
    {
      scenario: 'صاحب مصلحة ذو اهتمام منخفض وسلطة منخفضة.',
      question: 'كيف تُدار المشاركة معه؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مراقبته (Monitor) وإبلاغه عند الحاجة.',
          isCorrect: true,
          explanation: 'لا يحتاج مشاركة مكثفة لكنهقد يتأثر لاحقاً.',
        },
        {
          text: 'إشراكه في كل قرار.',
          isCorrect: false,
          explanation: 'مشاركته الكاملة تهدر الوقت.',
        },
        {
          text: 'حذفه من السجل.',
          isCorrect: false,
          explanation: 'السجل يجب أن يبقى شاملاً.',
        },
        {
          text: 'منحه سلطة قرار.',
          isCorrect: false,
          explanation: 'السلطة تُمنح وفق الحوكمة لا عشوائياً.',
        },
      ],
    },
    {
      scenario: 'قرار يرضي مجموعة ويغضب أخرى، وليس هناك خيار يرضي الجميع.',
      question: 'ما المعيار الأفضل؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'العودة إلى أهداف الأعمال ومعايير النجاح المعتمدة.',
          isCorrect: true,
          explanation: 'الموازنة تتم وفق معايير مشتركة لا وفق الأصوات فقط.',
        },
        {
          text: 'اختيار من يصرخ أعلى.',
          isCorrect: false,
          explanation: 'الضجيج ليس معياراً مهنياً.',
        },
        {
          text: 'سحب القرار نهائياً.',
          isCorrect: false,
          explanation: 'تجنب القرار يترك المشكلة مفتوحة.',
        },
        {
          text: 'توزيع القرار بالقرعة.',
          isCorrect: false,
          explanation: 'القرعة لا تحقق المواءمة.',
        },
      ],
    },
  ],
};

export default quizPmp25;
