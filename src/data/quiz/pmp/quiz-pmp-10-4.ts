import type { QuizBank } from '../types';

export const quizPmp104: QuizBank = {
  id: 'quiz-pmp-10-4',
  questions: [
    {
      scenario: 'مشروع يدمج بوابات تنظيمية صارمة مع تطوير متكرر للميزات.',
      question: 'أي نهج؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'هجين (Hybrid).',
          isCorrect: true,
          explanation: 'يجمع عناصر تنبؤية وعناصر رشيقة حسب الحاجة.',
        },
        {
          text: 'تنبؤي خالص.',
          isCorrect: false,
          explanation: 'التطوير المتكرر ليس تنبؤياً خالصاً.',
        },
        {
          text: 'رشيق خالص.',
          isCorrect: false,
          explanation: 'البوابات التنظيمية عنصر تنبؤي.',
        },
        {
          text: 'عشوائي.',
          isCorrect: false,
          explanation: 'الاختيار مقصود.',
        },
      ],
    },
    {
      scenario: 'فريق يعمل في بيئة خاضعة لتدقيق خارجي ويريد تسليماً متكرراً.',
      question: 'ما التوصية؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تخصيص الممارسات بنهج هجين موثق.',
          isCorrect: true,
          explanation: 'التخصيص يوازن الامتثال مع التكرار.',
        },
        {
          text: 'إلغاء كل التوثيق.',
          isCorrect: false,
          explanation: 'التدقيق يحتاج سجلاً.',
        },
        {
          text: 'إلغاء التسليم المتكرر.',
          isCorrect: false,
          explanation: 'التكرار مفيد إذا أمكن.',
        },
        {
          text: 'فرض نموذج واحد على كل المشاريع.',
          isCorrect: false,
          explanation: 'السياق مختلف.',
        },
      ],
    },
    {
      scenario: 'منظومة تضم عدة فرق رشيقة تعمل على منتج واحد.',
      question: 'ما التحدي الأساسي؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'مواءمة التبعيات والأولويات عبر الفرق.',
          isCorrect: true,
          explanation: 'التوسع يتطلب تنسيقاً دون قتل الاستقلالية.',
        },
        {
          text: 'زيادة عدد الاجتماعات فقط.',
          isCorrect: false,
          explanation: 'العدد لا يحل التبعيات.',
        },
        {
          text: 'إلغاء أدوار الفرق.',
          isCorrect: false,
          explanation: 'الأدوار ما زالت تحتاج وضوحاً.',
        },
        {
          text: 'تكرار نفس النهج دون تكييف.',
          isCorrect: false,
          explanation: 'التوسع يحتاج تخصيصاً.',
        },
      ],
    },
    {
      scenario: 'مدير مشروع يختار أطرافاً وعادات عمل تناسب حجم الفريق.',
      question: 'ما العملية؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'التخصيص (Tailoring).',
          isCorrect: true,
          explanation: 'اختيار الممارسات المناسبة لسياق المشروع.',
        },
        {
          text: 'التقييم الأسبوعي فقط.',
          isCorrect: false,
          explanation: 'التقييم جزء، لكن العملية أوسع.',
        },
        {
          text: 'الاعتماد على الصدفة.',
          isCorrect: false,
          explanation: 'الاختيار مقصود.',
        },
        {
          text: 'تعديل القوانين.',
          isCorrect: false,
          explanation: 'القوانين ليست ما يُخصص.',
        },
      ],
    },
  ],
};

export default quizPmp104;
