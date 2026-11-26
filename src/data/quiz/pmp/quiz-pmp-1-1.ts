import type { QuizBank } from '../types';

export const quizPmp11: QuizBank = {
  id: 'quiz-pmp-1-1',
  questions: [
    {
      scenario:
        'سلم الفريق المخرجات في الموعد والميزانية، لكن العميل لم يستخدم النظام الجديد.',
      question: 'ما أفضل تقييم لنجاح المشروع؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التسليم تم، لكن القيمة (Value) لم تتحقق بعد.',
          isCorrect: true,
          explanation: 'النجاح في PMP يقاس بالأثر لا بالتسليم وحده.',
        },
        {
          text: 'المشروع ناجح بالكامل لأنه التزم بالجدول.',
          isCorrect: false,
          explanation: 'الالتزام بالجدول شرط مهم لكنه غير كاف.',
        },
        {
          text: 'المشروع فشل بالتأكيد ويجب إلغاؤه.',
          isCorrect: false,
          explanation:
            'الفجوة في الاستخدام تستدعي تحليلاً وتدخلاً، لا إلغاءً فورياً.',
        },
        {
          text: 'يجب أن يدفع الطرف الذي أخطأ غرامة.',
          isCorrect: false,
          explanation: 'العقوبات لا تعالج سبب عدم الاستخدام.',
        },
      ],
    },
    {
      scenario: 'ظهر خلاف بين مدير المشروع والراعي حول معنى النجاح.',
      question: 'ما الذي يجب توضيحه أولاً؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'معايير النجاح (Success criteria) المتفق عليها.',
          isCorrect: true,
          explanation: 'بدون معايير واضحة ستختلف التفسيرات حول النجاح.',
        },
        {
          text: 'رأي الفريق فقط.',
          isCorrect: false,
          explanation: 'الفريق مهم، لكن الراعي ومعايير الأعمال حاسمة أيضاً.',
        },
        {
          text: 'عدد الاجتماعات المنعقدة.',
          isCorrect: false,
          explanation: 'عدد الاجتماعات لا يقيس النجاح.',
        },
        {
          text: 'لون تقرير الحالة.',
          isCorrect: false,
          explanation: 'الشكل لا يحدد النجاح.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يريد معرفة من يملك القرار النهائي عند تعارض المصالح.',
      question: 'من المسؤول عادة عن ذلك؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الراعي (Sponsor) ضمن حدود الحوكمة المعتمدة.',
          isCorrect: true,
          explanation:
            'الراعي يملك سلطة القرار الاستراتيجي ومواءمة المشروع مع الأعمال.',
        },
        {
          text: 'أي عضو في الفريق يصل أولاً.',
          isCorrect: false,
          explanation: 'القرار لا يُتخذ بالأسبقية.',
        },
        {
          text: 'المورد الخارجي.',
          isCorrect: false,
          explanation: 'المورد ينفّذ وفق العقد ولا يملك قرار الأعمال.',
        },
        {
          text: 'مدير المشروع منفرداً دون الرجوع لأحد.',
          isCorrect: false,
          explanation: 'تجاوز الحوكمة يضعف المواءمة والمساءلة.',
        },
      ],
    },
    {
      scenario:
        'في مراجعة منتصف المشروع تبيّن أن مؤشرات الأداء لا تقيس الأثر الحقيقي.',
      question: 'ما الإجراء الصحيح؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحديث مؤشرات القيمة بالتعاون مع الراعي وأصحاب المصلحة.',
          isCorrect: true,
          explanation: 'المؤشرات يجب أن تعكس النتيجة والفائدة لا مجرد النشاط.',
        },
        {
          text: 'الاستمرار كما هي لأنها معتمدة سابقاً.',
          isCorrect: false,
          explanation: ' الاعتماد السابق لا يمنع التحديث عند اكتشاف الفجوة.',
        },
        {
          text: 'إيقاف جميع التقارير.',
          isCorrect: false,
          explanation: 'إيقاف التقارير يفقد الشفافية.',
        },
        {
          text: 'تغيير مدير المشروع.',
          isCorrect: false,
          explanation: 'المشكلة في تصميم القياس لا في الأشخاص بالضرورة.',
        },
      ],
    },
  ],
};

export default quizPmp11;
