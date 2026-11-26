import type { QuizBank } from '../types';

export const quizPmp83: QuizBank = {
  id: 'quiz-pmp-8-3',
  questions: [
    {
      scenario: 'مدير مشروع يريد جمع الدروس المستفادة في مشروع طويل.',
      question: 'ما أفضل وقت؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'بشكل مستمر عند كل مرحلة، مع جلسة ختامية.',
          isCorrect: true,
          explanation: 'الدروس تُجمع أثناء الحدوث قبل أن تبهت الذاكرة.',
        },
        {
          text: 'في آخر يوم فقط.',
          isCorrect: false,
          explanation: 'الانتظار يفقد تفاصيل مهمة.',
        },
        {
          text: 'بعد سنة من الإغلاق.',
          isCorrect: false,
          explanation: 'الوقت الطويل يضعف الدقة.',
        },
        {
          text: 'عند بدء المشروع فقط.',
          isCorrect: false,
          explanation:
            'تسجيل الدروس عند البدء فقط يفقد ما يظهر لاحقاً؛ الجمع المستمر مع جلسة ختامية يحفظ التفاصيل.',
        },
      ],
    },
    {
      scenario: 'أحد الأعضاء يقدم رأياً غير رسمي حول سبب تأخر.',
      question: 'كيف يتعامل مدير المشروع؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'يطلب أمثلة وتواريخ وأثراً ويحولها إلى درس قابل للتطبيق.',
          isCorrect: true,
          explanation: 'الملاحظة قد تفتح تحليلاً مفيداً إذا وثقت ببيانات.',
        },
        {
          text: 'يسجله كدرس نهائي فوراً.',
          isCorrect: false,
          explanation:
            'الرأي غير الرسمي يحتاج أمثلة وتواريخ وأثراً قبل تحويله لدرس؛ تسجيله فوراً كحقيقة نهائية يخالف الدقة.',
        },
        {
          text: 'يتجاهله لأنه غير رسمي.',
          isCorrect: false,
          explanation: 'الملاحظات غير الرسمية قد تكون قيمة.',
        },
        {
          text: 'يحوله إلى توصية عقابية.',
          isCorrect: false,
          explanation: 'العقاب دون تحليل لا يمنع التكرار.',
        },
      ],
    },
    {
      scenario: 'جلسة الدروس تحولت إلى إلقاء لوم على مورد.',
      question: 'ما الإجراء التصحيحي؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إعادة التركيز على الحقائق والأسباب والتوصيات.',
          isCorrect: true,
          explanation: 'الدروس المستفادة ليست أداة عقاب.',
        },
        {
          text: 'الاستمرار في اللوم.',
          isCorrect: false,
          explanation:
            'اللوم يحوّل الجلسة من تحليل الأسباب إلى توزيع المسؤولية، فيمنع التعلم؛ الحقائق والتوصيات هي المدخل.',
        },
        {
          text: 'إلغاء الجلسة نهائياً.',
          isCorrect: false,
          explanation: 'الإلغاء يهدر فرصة التحسين.',
        },
        {
          text: 'تقرير كتابي دون مناقشة.',
          isCorrect: false,
          explanation: 'التوثيق مهم لكن النقاش يحقق الفهم.',
        },
      ],
    },
    {
      scenario: 'الدرس المستفاد مكتوب كالتالي: "كان هناك تأخير".',
      question: 'ما التطوير المطلوب؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'إضافة ماذا حدث ولماذا والأثر وكيف نتجنبه لاحقاً.',
          isCorrect: true,
          explanation: 'الدرس القيم يصف السبب والإجراء لا مجرد الوصف.',
        },
        {
          text: 'تكرار العبارة عدة مرات.',
          isCorrect: false,
          explanation: 'التكرار لا يضيف معلومة.',
        },
        {
          text: 'حذفه لأنه بسيط.',
          isCorrect: false,
          explanation: 'التطوير أفضل من الحذف.',
        },
        {
          text: 'تحويله إلى شكوى.',
          isCorrect: false,
          explanation: 'الشكوى لا تصنع درساً.',
        },
      ],
    },
  ],
};

export default quizPmp83;
