import type { QuizBank } from '../types';

export const quizPmp04: QuizBank = {
  id: 'quiz-pmp-0-4',
  questions: [
    {
      scenario: 'متقدم يريد تنظيم وقته في يوم الامتحان.',
      question: 'كم سؤالاً وكم دقيقة في امتحان PMP؟',
      difficulty: 'سهل',
      options: [
        {
          text: '180 سؤالاً في 240 دقيقة.',
          isCorrect: true,
          explanation: 'هذا هو الشكل الرسمي للامتحان.',
        },
        {
          text: '200 سؤال في 180 دقيقة.',
          isCorrect: false,
          explanation: 'العدد والمدة غير صحيحين.',
        },
        {
          text: '180 سؤالاً في 180 دقيقة.',
          isCorrect: false,
          explanation: 'المدة 240 دقيقة تشمل فترتي راحة.',
        },
        {
          text: '150 سؤالاً في 240 دقيقة.',
          isCorrect: false,
          explanation: 'عدد الأسئلة 180.',
        },
      ],
    },
    {
      scenario: 'دارس يحسب الوقت المتوسط للسؤال.',
      question: 'ما الوتيرة التقريبية المقترحة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'نحو 73 ثانية للسؤال قبل حساب فترات الراحة.',
          isCorrect: true,
          explanation:
            '240 دقيقة مطروحاً منها 20 دقيقة راحة ÷ 180 سؤال ≈ 73 ثانية.',
        },
        {
          text: '30 ثانية للسؤال.',
          isCorrect: false,
          explanation: 'هذه الوتيرة ضيقة جداً وتزيد التوتر.',
        },
        {
          text: 'دقيقتان للسؤال.',
          isCorrect: false,
          explanation: 'دقيقتان للسؤال تتجاوزان الوقت المتاح.',
        },
        {
          text: '10 ثوان للسؤال.',
          isCorrect: false,
          explanation: 'لا تكفي لقراءة السيناريو.',
        },
      ],
    },
    {
      scenario: 'متردد بين أخذ استراحة قصيرة أو مواصلة الأسئلة دون توقف.',
      question: 'ما الأفضل وفق تنظيم الامتحان؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'استخدام فترتي الراحة المددتين لاستعادة التركيز.',
          isCorrect: true,
          explanation: 'الاستراحة المخططة تقلل الإرهاق وتحافظ على دقة القرار.',
        },
        {
          text: 'الاستمرار دون توقف طوال الوقت.',
          isCorrect: false,
          explanation: 'الإرهاق يضعف جودة القرار في النصف الثاني.',
        },
        {
          text: 'أخذ عشر استراحات قصيرة.',
          isCorrect: false,
          explanation: 'عدد الاستراحات محدد في الامتحان.',
        },
        {
          text: 'تخطي نصف الأسئلة ثم العودة.',
          isCorrect: false,
          explanation: 'التخطي العشوائي يهدر الوقت ويضعف التسلسل.',
        },
      ],
    },
    {
      scenario: 'دارس يسأل عن أنواع الأسئلة التي قد تظهر.',
      question: 'أي مما يلي ليس نمطاً معتاداً في PMP؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'سؤال يتطلب كتابة برمجية من الصفر.',
          isCorrect: true,
          explanation: 'الامتحان يقيس الحكم المهني لا مهارات البرمجة.',
        },
        {
          text: 'سؤال موقف يسأل ما الذي تفعله أولاً.',
          isCorrect: false,
          explanation: 'هذا من أكثر أنماط الأسئلة شيوعاً.',
        },
        {
          text: 'مجموعة حالات مرتبطة بمشروع واحد.',
          isCorrect: false,
          explanation: 'مجموعات الحالات جزء من الامتحان.',
        },
        {
          text: 'سؤال يعرض رسمًا بيانيًا أو جدولاً بسيطاً.',
          isCorrect: false,
          explanation: 'قد تظهر رسوم وجداول بسيطة.',
        },
      ],
    },
  ],
};

export default quizPmp04;
