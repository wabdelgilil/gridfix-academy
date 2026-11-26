import type { QuizBank } from '../types';

export const quizPmp42: QuizBank = {
  id: 'quiz-pmp-4-2',
  questions: [
    {
      scenario:
        'مدير مشروع يقدّر تكلفة حزمة عمل بناءً على بيانات مشاريع مشابهة سابقة.',
      question: 'أي تقنية يستخدم؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التقدير التناظري (Analogous estimating).',
          isCorrect: true,
          explanation:
            'يعتمد على بيانات مشاريع مشابهة ويستخدم عندما تكون البيانات محدودة.',
        },
        {
          text: 'التقدير من الأسفل للأعلى.',
          isCorrect: false,
          explanation: 'يجمع تفاصيل كل عنصر، لا بيانات مشابهة.',
        },
        {
          text: 'التقدير المعاملاتي.',
          isCorrect: false,
          explanation: 'يستخدم معاملات إحصائية بين المتغيرات.',
        },
        {
          text: 'التقدير الخبيري الفردي.',
          isCorrect: false,
          explanation: 'ليس مصطلحاً رسمياً هنا.',
        },
      ],
    },
    {
      scenario:
        'احتياطي يُخصّص لأعمال غير مخططة ضمن نطاق المشروع ولم تُحدد مسبقاً.',
      question: 'ما اسمه؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'الاحتياطي الإداري (Management reserve).',
          isCorrect: true,
          explanation:
            'يغطي أعمالاً غير مخططة ضمن النطاق، ولا يدخل في خط أساس التكلفة.',
        },
        {
          text: 'احتياطي الطوارئ (Contingency reserve).',
          isCorrect: false,
          explanation: 'يُخصّص للمخاطر المحددة والمحللة.',
        },
        {
          text: 'الربح فقط.',
          isCorrect: false,
          explanation: 'الربح ليس احتياطياً.',
        },
        {
          text: 'ميزانية التشغيل.',
          isCorrect: false,
          explanation: 'ميزانية التشغيل مستمرة وليست احتياطي مشروع.',
        },
      ],
    },
    {
      scenario: 'خط الأساس للتكلفة (Cost baseline) تم اعتماده.',
      question: 'ما الذي يقارن به خط الأساس؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مقابلته بالمبلغ الفعلي والمنفق لاكتشاف الانحراف.',
          isCorrect: true,
          explanation: 'خط الأساس هو المرجع المعتمد لقياس أداء التكلفة.',
        },
        {
          text: 'مقابلته بعدد الاجتماعات.',
          isCorrect: false,
          explanation: 'الاجتماعات لا ترتبط بخط الأساس للتكلفة.',
        },
        {
          text: 'مقابلته برأي المورد.',
          isCorrect: false,
          explanation: 'الرأي ليس مرجعاً محاسبياً.',
        },
        {
          text: 'مقابلته بالمزاد فقط.',
          isCorrect: false,
          explanation: 'المزاد وسيلة تعاقد لا مرجع رقابة.',
        },
      ],
    },
    {
      scenario: 'ظهر تجاوز في تكلفة مرحلة دون تغيير في النطاق.',
      question: 'ما أول إجراء؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحليل سبب الانحراف وأثره قبل اتخاذ إجراء تصحيحي.',
          isCorrect: true,
          explanation: 'الفهم يسبق القرار ويمنع معالجة العرض لا الجوهر.',
        },
        {
          text: 'زيادة الميزانية فوراً.',
          isCorrect: false,
          explanation: 'زيادة الميزانية تحتاج مبرراً واعتماداً.',
        },
        {
          text: 'تجاهل الانحراف.',
          isCorrect: false,
          explanation: 'التجاهل يسمح بتراكمه.',
        },
        {
          text: 'إيقاف كل العمل.',
          isCorrect: false,
          explanation:
            'إيقاف كل العمل مبالغة إذ النطاق لم يتغير؛ يبدأ التحليل من سبب تجاوز التكلفة وأثره قبل أي قرار.',
        },
      ],
    },
  ],
};

export default quizPmp42;
