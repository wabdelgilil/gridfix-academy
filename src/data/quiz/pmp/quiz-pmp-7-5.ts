import type { QuizBank } from '../types';

export const quizPmp75: QuizBank = {
  id: 'quiz-pmp-7-5',
  questions: [
    {
      scenario: 'CPI = 0.92 وSPI = 1.05 في تقرير أداء.',
      question: 'ما القراءة الصحيحة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تجاوز تكلفة بسيط مع تقدم زمني جيد.',
          isCorrect: true,
          explanation: 'CPI أقل من 1 وSPI أكبر من 1.',
        },
        {
          text: 'وفور في التكلفة وتأخر في الجدول.',
          isCorrect: false,
          explanation: 'العكس هو الصحيح.',
        },
        {
          text: 'المشروع متوقف تماماً.',
          isCorrect: false,
          explanation: 'المؤشرات لا تدل على توقف.',
        },
        {
          text: 'لا حاجة لأي إجراء.',
          isCorrect: false,
          explanation: 'تجاوز التكلفة يستدعي المراقبة.',
        },
      ],
    },
    {
      scenario: 'EAC يشير إلى تجاوز متوقع كبير في نهاية المشروع.',
      question: 'ما الذي يجب فعله أولاً؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحليل أسباب الانحراف والتوقع قبل اقتراح إجراء تصحيحي.',
          isCorrect: true,
          explanation: 'التوقع أداة إنذار، والقرار يحتاج فهماً للسبب.',
        },
        {
          text: 'طلب زيادة ميزانية فوراً.',
          isCorrect: false,
          explanation: 'الزيادة تحتاج مبرراً واعتماداً.',
        },
        {
          text: 'تجاهل التوقع.',
          isCorrect: false,
          explanation: 'التوقع جزء أساسي من الرقابة.',
        },
        {
          text: 'إيقاف المشروع.',
          isCorrect: false,
          explanation: 'الإيقاف قرار جذري.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يحتاج معرفة التكلفة المتوقعة للعمل المتبقي.',
      question: 'أي مؤشر يستخدم؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'ETC (Estimate to Complete).',
          isCorrect: true,
          explanation: 'يقدّر تكلفة إنهاء العمل المتبقي.',
        },
        {
          text: 'BAC.',
          isCorrect: false,
          explanation: 'الميزانية عند الإكمال.',
        },
        {
          text: 'PV.',
          isCorrect: false,
          explanation: 'القيمة المخططة.',
        },
        {
          text: 'AC.',
          isCorrect: false,
          explanation: 'التكلفة الفعلية حتى الآن.',
        },
      ],
    },
    {
      scenario: 'فريق يقترح إجراءً تصحيحياً سيؤثر على المخاطر.',
      question: 'ما الذي يلزم قبل التنفيذ؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تقييم الأثر المتكامل ومواءمة أصحاب المصلحة.',
          isCorrect: true,
          explanation: 'الرقابة لا تخلق مشكلة جديدة بغير حساب.',
        },
        {
          text: 'تنفيذه فوراً.',
          isCorrect: false,
          explanation: 'التحليل يسبق التنفيذ.',
        },
        {
          text: 'إخفاء أثره.',
          isCorrect: false,
          explanation: 'الشفافية جزء من الحوكمة.',
        },
        {
          text: 'تعديل TCPI فقط.',
          isCorrect: false,
          explanation: 'تعديل رقم لا يعالج التأثير.',
        },
      ],
    },
  ],
};

export default quizPmp75;
