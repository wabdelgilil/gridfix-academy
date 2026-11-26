import type { QuizBank } from '../types';

export const quizPmp92: QuizBank = {
  id: 'quiz-pmp-9-2',
  questions: [
    {
      scenario: 'مشروع في قطاع صحي يخضع للوائح حماية البيانات.',
      question: 'ما أثر ذلك على التخطيط؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إدراج متطلبات الامتثال في النطاق والاختبارات والسجلات.',
          isCorrect: true,
          explanation: 'الامتثال قيد حقيقي يؤثر على المخرجات والأدلة.',
        },
        {
          text: 'تجاهل اللوائح حتى نهاية المشروع.',
          isCorrect: false,
          explanation: 'الاكتشاف المتأخر مكلف.',
        },
        {
          text: 'افتراض أنها ليست مسؤولية المشروع.',
          isCorrect: false,
          explanation: 'المشروع مسؤول عن الالتزام بقوانين بيئته.',
        },
        {
          text: 'إلغاء مراجعة الجودة.',
          isCorrect: false,
          explanation: 'الامتثال يعزز المراجعة لا يلغيها.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يحتاج إثباتاً على الالتزام بمعيار معتمد.',
      question: 'أي سند أساسي؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'سجلات التدقيق والشواهد الموثقة.',
          isCorrect: true,
          explanation: 'الامتثال يُثبت بالأدلة لا بالأقوال.',
        },
        {
          text: 'رأي شفهي من المورد.',
          isCorrect: false,
          explanation: 'الرأي الشفهي لا يكفي.',
        },
        {
          text: 'لون التقرير.',
          isCorrect: false,
          explanation:
            'لون التقرير شكل فقط لا يثبت الالتزام؛ الامتثال يُثبت بسجلات التدقيق والشواهد الموثقة.',
        },
        {
          text: 'عدد سنوات الخبرة.',
          isCorrect: false,
          explanation: 'الخبرة لا تثبت امتثال مشروع بعينه.',
        },
      ],
    },
    {
      scenario: 'تعارض بين متطلب عميل ولائحة تنظيمية.',
      question: 'ما الأولوية؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الامتثال للوائح مع إدارة توقعات العميل.',
          isCorrect: true,
          explanation: 'اللوائح ملزمة، والتواصل يقلل الصدام.',
        },
        {
          text: 'طلب العميل دائماً.',
          isCorrect: false,
          explanation: 'طلب العميل لا يتجاوز القانون.',
        },
        {
          text: 'اللوائح دائماً دون توضيح للعميل.',
          isCorrect: false,
          explanation: 'التوضيح جزء من الاحتراف.',
        },
        {
          text: 'تأجيل القرار.',
          isCorrect: false,
          explanation: 'التأجيل يترك المخاطرة مفتوحة.',
        },
      ],
    },
    {
      scenario: 'مراجعة داخلية كشفت فجوة في التوثيق.',
      question: 'ما الإجراء؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تسجيل الفجوة وتحديد مالك وإجراء تصحيحي وموعد.',
          isCorrect: true,
          explanation: 'الامتثال يُدار بنظام تحسين مستمر.',
        },
        {
          text: 'إخفاء الفجوة.',
          isCorrect: false,
          explanation: 'الإخفاء يفاقم المخاطر.',
        },
        {
          text: 'حذف التقرير.',
          isCorrect: false,
          explanation:
            'حذف التقرير يخفي الفجوة ويمنع معالجتها؛ تسجيلها بمالك وإجراء وموعد هو ما يحوّل المراجعة لتحسين.',
        },
        {
          text: 'تغيير المعيار.',
          isCorrect: false,
          explanation: 'تغيير المعيار دون سبب لا يعالج الفجوة.',
        },
      ],
    },
  ],
};

export default quizPmp92;
