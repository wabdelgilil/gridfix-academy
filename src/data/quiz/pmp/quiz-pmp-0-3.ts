import type { QuizBank } from '../types';

export const quizPmp03: QuizBank = {
  id: 'quiz-pmp-0-3',
  questions: [
    {
      scenario: 'دارس يسأل عن توزيع أسئلة امتحان PMP وفق إصدار يوليو 2026.',
      question: 'ما الوزن الصحيح لمجال الأفراد (People)؟',
      difficulty: 'سهل',
      options: [
        {
          text: '33%.',
          isCorrect: true,
          explanation: 'مجال الأفراد يمثل ثلث الأسئلة في ECO 2026.',
        },
        {
          text: '8%.',
          isCorrect: false,
          explanation: '8% كان وزناً قديماً في إصدار سابق.',
        },
        {
          text: '41%.',
          isCorrect: false,
          explanation: '41% وزن مجال العمليات.',
        },
        {
          text: '26%.',
          isCorrect: false,
          explanation: '26% وزن بيئة الأعمال.',
        },
      ],
    },
    {
      scenario: 'دارس يريد معرفة عدد مهام مخطط محتوى الامتحان (ECO) الحالي.',
      question: 'كم مهمة في ECO يوليو 2026؟',
      difficulty: 'متوسط',
      options: [
        {
          text: '26 مهمة.',
          isCorrect: true,
          explanation: 'ECO 2026 يتكون من 26 مهمة موزعة على ثلاثة مجالات.',
        },
        {
          text: '35 مهمة.',
          isCorrect: false,
          explanation: 'كانت 35 مهمة في إصدار سابق.',
        },
        {
          text: '20 مهمة.',
          isCorrect: false,
          explanation:
            'ECO يوليو 2026 يشمل 26 مهمة؛ الرقم 20 يخص قائمة فرعية وليس إجمالي مهام المحتوى، لذا لا يطابق السؤال.',
        },
        {
          text: '49 مهمة.',
          isCorrect: false,
          explanation: 'هذا العدد غير صحيح لإصدار 2026.',
        },
      ],
    },
    {
      scenario: 'مدرب يشرح مزيج الأسئلة بين النُهج التنبؤية والرشيقة.',
      question: 'ما التوزيع التقريبي في الامتحان؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'نحو 40% تنبؤي و60% رشيق أو هجين.',
          isCorrect: true,
          explanation:
            'الامتحان يغلب عليه الطابع الرشيق والهجين مع وجود تنبؤي مهم.',
        },
        {
          text: '100% تنبؤي.',
          isCorrect: false,
          explanation: 'الامتحان لم يعد تنبؤياً بالكامل.',
        },
        {
          text: '50% تنبؤي و50% رشيق فقط.',
          isCorrect: false,
          explanation: 'التوزيع التقريبي ليس متساوياً، وهناك هجين أيضاً.',
        },
        {
          text: '20% تنبؤي و80% رشيق.',
          isCorrect: false,
          explanation: 'النسبة التنبؤية أعلى من 20%.',
        },
      ],
    },
    {
      scenario: 'دارس يفاجأ بأسئلة تعرض موقفاً ثم تطرح عدة أسئلة عليه.',
      question: 'ما المقصود بمجموعة الحالات (Case study set)؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'موقف واحد تُناقش فيه عدة أسئلة متصلة.',
          isCorrect: true,
          explanation:
            'مجموعات الحالات تختبر تحليل الموقف وتطبيق المفاهيم عبر أكثر من سؤال.',
        },
        {
          text: 'سؤال واحد بصورة فقط.',
          isCorrect: false,
          explanation: 'الصور قد تُستخدم، لكن مجموعة الحالات أوسع.',
        },
        {
          text: 'قائمة مصطلحات للحفظ.',
          isCorrect: false,
          explanation: 'الحفظ وحده لا يكفي في الأسئلة القائمة على المواقف.',
        },
        {
          text: 'امتحان عملي على أداة برمجية.',
          isCorrect: false,
          explanation: 'لا يوجد امتحان عملي على أداة ضمن PMP.',
        },
      ],
    },
  ],
};

export default quizPmp03;
