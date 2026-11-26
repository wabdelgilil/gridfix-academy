import type { QuizBank } from '../types';

export const quizPmp44: QuizBank = {
  id: 'quiz-pmp-4-4',
  questions: [
    {
      scenario:
        'تقرير الحالة يظهر اتجاه انحراف متزايد في الجدول لثلاثة أسابيع.',
      question: 'ما أفضل قراءة؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الاتجاه مهم لأنه ينبئ بتفاقم التأخر ما لم يتدخل.',
          isCorrect: true,
          explanation: 'القيم المطلقة أقل أهمية من الاتجاه أحياناً.',
        },
        {
          text: 'لا أهمية للاتجاه.',
          isCorrect: false,
          explanation: 'الاتجاه أساسي في التنبؤ.',
        },
        {
          text: 'المشروع انتهى فوراً.',
          isCorrect: false,
          explanation: 'الانحراف لا يعني الإنهاء.',
        },
        {
          text: 'يجب تغيير مدير المشروع.',
          isCorrect: false,
          explanation: 'المشكلة في الأداء تحتاج إجراءً تصحيحياً.',
        },
      ],
    },
    {
      scenario: 'انحراف في التكلفة ناتج عن ارتفاع مؤقت في سعر مادة واحدة.',
      question: 'ما الإجراء المناسب؟',
      difficulty: 'سهل',
      options: [
        {
          text: 'توثيق السبب ومراقبته قبل تعديل أي خط أساس.',
          isCorrect: true,
          explanation: 'ليس كل انحراف يستدعي تغيير الخطة.',
        },
        {
          text: 'تعديل خط الأساس فوراً.',
          isCorrect: false,
          explanation: 'التعديل يحتاج تحليلاً واعتماداً.',
        },
        {
          text: 'تجاهل الانحراف تماماً.',
          isCorrect: false,
          explanation: 'التوثيق والمراقبة ضروريان.',
        },
        {
          text: 'إيقاف المورد.',
          isCorrect: false,
          explanation: 'الإيقاف قرار متسرع دون تحليل بدائل.',
        },
      ],
    },
    {
      scenario: 'أصحاب المصلحة يطلبون صورة واضحة عن الحالة والتوقعات.',
      question: 'ما الذي يجب أن يتضمنه التقرير؟',
      difficulty: 'متوسط',
      options: [
        {
          text: 'الحالة الحالية والانحرافات والتوقعات والقرارات المطلوبة.',
          isCorrect: true,
          explanation: 'التقرير الجيد يدعم القرار لا مجرد عرض أرقام.',
        },
        {
          text: 'الأرقام فقط.',
          isCorrect: false,
          explanation: 'الأرقام دون تفسير لا تكفي.',
        },
        {
          text: 'رأي مدير المشروع الشخصي فقط.',
          isCorrect: false,
          explanation: 'الرأي يجب أن يستند إلى بيانات.',
        },
        {
          text: 'قائمة بالأخطاء الشخصية.',
          isCorrect: false,
          explanation: 'التركيز على الأشخاص لا على الأداء.',
        },
      ],
    },
    {
      scenario: 'خطة تصحيحية مقترحة ستؤخر تسليماً مهماً.',
      question: 'ما الذي يجب فعله قبل اعتمادها؟',
      difficulty: 'صعب',
      options: [
        {
          text: 'تقييم أثرها على النطاق والجدول والمخاطر ومواءمة أصحاب المصلحة.',
          isCorrect: true,
          explanation: 'القرار المتكامل يمنع حل مشكلة بخلق أخرى.',
        },
        {
          text: 'اعتمادها فوراً لأنها تصحيحية.',
          isCorrect: false,
          explanation: 'التصحيح الجيد يحتاج تقييماً للأثر.',
        },
        {
          text: 'رفضها دون تقييم.',
          isCorrect: false,
          explanation: 'الرفض الآلي يترك المشكلة.',
        },
        {
          text: 'تنفيذها في الخفاء.',
          isCorrect: false,
          explanation:
            'تنفيذ التصحيح في الخفاء يحرم أصحاب المصلحة من مواءمة أثره؛ التقييم والإعلان قبل الاعتماد جزء من الحوكمة.',
        },
      ],
    },
  ],
};

export default quizPmp44;
