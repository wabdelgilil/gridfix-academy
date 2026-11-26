import type { QuizBank } from '../types';

export const quizPmp72: QuizBank = {
  id: 'quiz-pmp-7-2',
  questions: [
    {
      scenario: 'تقرير حالة يوضح العمل المنجز مقابل المخطط والميزانية.',
      question: 'ما أفضل وصف لمؤشرات الأداء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مؤشرات تمكن من اتخاذ إجراء تصحيحي مبكراً.',
          isCorrect: true,
          explanation: 'الرقابة تهدف إلى الفهم والتحسين لا إلى التقرير فقط.',
        },
        {
          text: 'أرقام للعرض فقط.',
          isCorrect: false,
          explanation: 'العرض دون قرار لا يخدم الرقابة.',
        },
        {
          text: 'تقرير للإغلاق فقط.',
          isCorrect: false,
          explanation: 'المراقبة مستمرة أثناء التنفيذ.',
        },
        {
          text: 'بديل عن التخطيط.',
          isCorrect: false,
          explanation: 'الرقابة تعتمد على خطة معتمدة.',
        },
      ],
    },
    {
      scenario: 'أصحاب المصلحة يختلفون في فهم حالة المشروع.',
      question: 'ما أفضل معالجة؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'توحيد مصدر الحالة وتوضيح المعنى والقرارات المطلوبة.',
          isCorrect: true,
          explanation: 'الشفافية والمصدر المشترك يقللان الالتباس.',
        },
        {
          text: 'إرسال نسخ مختلفة لكل طرف.',
          isCorrect: false,
          explanation: 'التعدد يزيد الالتباس.',
        },
        {
          text: 'تأجيل التقرير.',
          isCorrect: false,
          explanation: 'التأجيل لا يحل الفهم.',
        },
        {
          text: 'الاعتماد على الشائعات.',
          isCorrect: false,
          explanation: 'الشائعات ليست مصدراً موثوقاً.',
        },
      ],
    },
    {
      scenario: 'انحراف بسيط ظهر في تقرير الأسبوع الحالي.',
      question: 'ما أفضل إجراء؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مراقبته وتحليل الاتجاه قبل التصعيد.',
          isCorrect: true,
          explanation: 'ليس كل انحراف يستدعي تصعيداً فورياً.',
        },
        {
          text: 'تصعيده فوراً.',
          isCorrect: false,
          explanation: 'التصعيد قبل التحليل يهدر وقت الإدارة.',
        },
        {
          text: 'حذفه من التقرير.',
          isCorrect: false,
          explanation: 'الشفافية تقتضي إظهاره.',
        },
        {
          text: 'تعديل الخط الأساس.',
          isCorrect: false,
          explanation: 'التعديل يحتاج مبرراً.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يريد تقريراً يلخص الأداء من وجهة نظر الأعمال.',
      question: 'ما الذي يضيفه؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'ربط المؤشرات بالفوائد والمخاطر والقرارات المتوقعة.',
          isCorrect: true,
          explanation: 'التقرير المهني يحول البيانات إلى معنى تجاري.',
        },
        {
          text: 'زيادة عدد الجداول.',
          isCorrect: false,
          explanation: 'الجداول وحدها لا تصنع معنى.',
        },
        {
          text: 'حذف التوقعات.',
          isCorrect: false,
          explanation:
            'حذف التوقعات يفقد التقرير قيمته للقرار؛ ربط المؤشرات بالفوائد والمخاطر المتوقعة هو ما يخدم وجهة الأعمال.',
        },
        {
          text: 'التركيز على الأفراد فقط.',
          isCorrect: false,
          explanation: 'الأداء أوسع من الأشخاص.',
        },
      ],
    },
  ],
};

export default quizPmp72;
