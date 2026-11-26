import type { QuizBank } from '../types';

export const quizPmp21: QuizBank = {
  id: 'quiz-pmp-2-1',
  questions: [
    {
      scenario:
        'دخل فريق مشروع تحول رقمي دون فهم سبب المشروع، فنفّذ المهام آلياً.',
      question: 'ما أول إجراء لمدير المشروع؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'يصوغ مع الفريق رؤية مشتركة (Common vision) واضحة.',
          isCorrect: true,
          explanation: 'الرؤية تُبنى مع الفريق لا له، وتصنع فهماً للغاية.',
        },
        {
          text: 'يصدر أوامر تنفيذية فورية.',
          isCorrect: false,
          explanation: 'الأوامر تنتج امتثالاً لا التزاماً.',
        },
        {
          text: 'يستبدل أعضاء الفريق.',
          isCorrect: false,
          explanation: 'الاستبدال قبل توضيح المعنى لا يعالج السبب.',
        },
        {
          text: 'يتجاهل السؤال ويركز على الجدول.',
          isCorrect: false,
          explanation: 'تجاهل المعنى يضعف جودة القرار لاحقاً.',
        },
      ],
    },
    {
      scenario:
        'مدير مشروع يزيل العوائق عن الفريق ويوفر له الموارد بدل إملاء الحلول.',
      question: 'أي أسلوب قيادة يطبّق؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'القيادة الخادمة (Servant leadership).',
          isCorrect: true,
          explanation: 'القائد الخادم يخدم احتياجات الفريق ويمكّنه.',
        },
        {
          text: 'القيادة الاستبدادية (Autocratic).',
          isCorrect: false,
          explanation: 'القيادة الاستبدادية تفرض القرار من الأعلى.',
        },
        {
          text: 'الإدارة الدقيقة (Micromanagement).',
          isCorrect: false,
          explanation: 'الإدارة الدقيقة تتحكم في التفاصيل لا تزيل العوائق.',
        },
        {
          text: 'اللامبالاة.',
          isCorrect: false,
          explanation: 'اللامبالاة تعني غياب الدور القيادي.',
        },
      ],
    },
    {
      scenario: 'فريق ملتزم بالقواعد لكنه غير مقتنع بالهدف.',
      question: 'ما الفرق بين التوجيه والتحكم؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التوجيه (Direction) يصنع الالتزام، والتحكم (Control) يصنع الامتثال.',
          isCorrect: true,
          explanation: 'التوجيه يبني المعنى، والتحكم يراقب القواعد.',
        },
        {
          text: 'لا فرق بينهما.',
          isCorrect: false,
          explanation: 'كلاهما موجود لكنهما يخدمان غايتين مختلفتين.',
        },
        {
          text: 'التوجيه يعني المراقبة فقط.',
          isCorrect: false,
          explanation: 'المراقبة جزء من التحكم.',
        },
        {
          text: 'التحكم يعني شرح الرؤية.',
          isCorrect: false,
          explanation: 'شرح الرؤية جزء من التوجيه.',
        },
      ],
    },
    {
      scenario: 'بعد إشراك الفريق في التخطيط تحسنت مقترحات التحسين.',
      question: 'لماذا حدث ذلك؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'المشاركة تبني الالتزام (Commitment) وتستفيد من معرفة الفريق.',
          isCorrect: true,
          explanation: 'الملكية جزء من الالتزام، وتنوع الخبرة يحسن الحلول.',
        },
        {
          text: 'لأن الضغط زاد.',
          isCorrect: false,
          explanation: 'الضغط لا يفسر تحسن المقترحات.',
        },
        {
          text: 'لأن الاجتماعات أصبحت أطول.',
          isCorrect: false,
          explanation: 'طول الاجتماع ليس دليلاً على الجودة.',
        },
        {
          text: 'لأن الراعي ألغى الرؤية.',
          isCorrect: false,
          explanation: 'إلغاء الرؤية يضعف المعنى.',
        },
      ],
    },
  ],
};

export default quizPmp21;
