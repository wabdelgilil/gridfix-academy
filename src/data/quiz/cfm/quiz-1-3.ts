import type { QuizBank } from '../types';

export const quiz13: QuizBank = {
  id: 'quiz-1-3',
  questions: [
    {
      scenario: 'شركة تريد خفض فاتورة طاقة مبنى مكتبي دون مساس براحة الموظفين.',
      scenarioEn: 'A company wants to cut the energy bill of an office building without compromising employee comfort.',
      question: 'أي تدخل يُعطي أعلى عائد بأقل أثر على المستخدمين؟',
      questionEn: 'Which intervention gives the highest return with the least user impact?',
      difficulty: 'سهل',
      options: [
        {
          text: 'ضبط جداول تشغيل/إيقاف التكييف والإضاءة على ساعات الحضور الفعلية',
          textEn: 'Tuning HVAC and lighting start/stop schedules to the actual occupancy hours',
          isCorrect: true,
          explanation: 'تشغيل الأنظمة في فترات خالية (توقيت خاطئ) من أكبر هدر الطاقة — تعديل الجداول مجاني وذو أثر فوري.',
          explanationEn: 'Running systems in unoccupied periods (wrong timing) is among the largest energy wasters — adjusting the schedules is free and has an immediate impact.',
        },
        {
          text: 'خفض درجات الحرارة صيفاً لدرجات غير مريحة',
          textEn: 'Lowering summer temperatures to uncomfortable levels',
          isCorrect: false,
          explanation: 'التوفير على حساب الراحة يقلب إلى إنتاجية أقل وشكاوى — قرار متوازن أولاً.',
          explanationEn: 'Saving at the expense of comfort backfires into lower productivity and complaints — balance first.',
        },
        {
          text: 'إطفاء إضاءة المكاتب نهائياً حتى وقت الغداء',
          textEn: 'Turning office lighting off entirely until lunchtime',
          isCorrect: false,
          explanation: 'خفض الإضاءة لما دون حدود الراحة ضرر وظيفي ومخالف لمعايير IEQ.',
          explanationEn: 'Dropping lighting below comfort limits is a functional harm and violates IEQ standards.',
        },
        {
          text: 'شراء نظام جديد بالكامل دون قياس',
          textEn: 'Buying a whole new system without measurement',
          isCorrect: false,
          explanation: 'الانتقال الرأسمالي الكبير يسبقه دائماً تحليل عائد على الاستثمار.',
          explanationEn: 'A large capital move is always preceded by a return-on-investment analysis.',
        },
      ],
    },
    {
      scenario: 'مبنى به مقارنة سنوية ثابتة للطاقة لكن ظهر انحراف كبير الشهر الماضي دون تغيير في التشغيل.',
      scenarioEn: 'A building with a steady annual energy comparison shows a large deviation last month with no change in operation.',
      question: 'ما التفسير الأكثر ترجيحاً الذي يجب فحصه أولاً؟',
      questionEn: 'Which is the most likely explanation to check first?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تسجيل خاطئ للبيانات أو مشكلة في القياس',
          textEn: 'Erroneous data recording or a measurement problem',
          isCorrect: false,
          explanation: 'التحقق من صحة البيانات خطوة أولى مهمة، لكن غالبية القفزات المفاجئة أسبابها تشغيلية.',
          explanationEn: 'Validating the data is an important first step, but most sudden jumps have operational causes.',
        },
        {
          text: 'تسريب طاقة أو تشغيل خارج الجدول (معدات متروكة تعمل، تسريب ماء ساخن...)',
          textEn: 'An energy leak or off-schedule operation (left-on equipment, hot water leak...)',
          isCorrect: true,
          explanation: 'الانحراف المفاجئ مع ثبات إعدادات التشغيل يرتبط غالباً بسلوك تشغيل شاذ قابل للاكتشاف.',
          explanationEn: 'A sudden deviation with steady operating settings is usually linked to detectable abnormal operation.',
        },
        {
          text: 'ارتفاع أسعار الطاقة فقط ولا علاقة للاستهلاك',
          textEn: 'Only energy price rises, with no relation to consumption',
          isCorrect: false,
          explanation: 'ارتفاع السعر يظهر في التكلفة لا في كمية الاستهلاك التي يُقاس بها الانحراف.',
          explanationEn: 'A price rise shows in cost, not in the consumption quantity by which the deviation is measured.',
        },
        {
          text: 'من المستحيل تفسير الانحراف إحصائياً',
          textEn: 'It is impossible to explain the deviation statistically',
          isCorrect: false,
          explanation: 'البيانات تحكي قصة قابلة للتحليل؛ نفي التحليل خطأ.',
          explanationEn: 'The data tells an analyzable story; denying analysis is wrong.',
        },
      ],
    },
    {
      scenario: 'عرض عليك تنفيذ "توفير الطاقة" بمشروع تركيبات إضاءة LED باستثمار متوسط، وستحتاج مقارنة مع بديل الصيانة.',
      scenarioEn: 'An "energy saving" LED lighting retrofit project with a medium investment is offered to you, and you will need a comparison with the maintenance alternative.',
      question: 'ما الأداة التحليلية الصحيحة للحكم النهائي؟',
      questionEn: 'What is the correct analytical tool for the final judgment?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تكلفة دورة الحياة (LCC) وعائد الاستثمار (ROI) مقارنةً بعدم التنفيذ',
          textEn: 'Lifecycle cost (LCC) and return on investment (ROI) compared with not implementing',
          isCorrect: true,
          explanation: 'LCC يجمع التوفير التشغيلي والاستثمار معاً عبر عمر المشروع، وROI يبرز جاذبية الاستثمار.',
          explanationEn: 'LCC combines operating savings and investment together over the project\u2019s life, and ROI highlights the investment\u2019s attractiveness.',
        },
        {
          text: 'سعر الشراء المبدئي فقط',
          textEn: 'The initial purchase price only',
          isCorrect: false,
          explanation: 'سعر الشراء يتجاهل التوفير التشغيلي طويل الأمد، وهو جوهر مشروع الطاقة.',
          explanationEn: 'The purchase price ignores the long-term operating savings, which are the essence of an energy project.',
        },
        {
          text: 'عدد اللمبات الجديدة المركبة',
          textEn: 'The number of new lamps installed',
          isCorrect: false,
          explanation: 'الكمية ليست قراراً — الأثر المالي والوظيفي هو المقياس.',
          explanationEn: 'Quantity is not a decision — the financial and functional impact is the measure.',
        },
        {
          text: 'انطباع الفريق الفني الشخصي',
          textEn: 'The technical team\u2019s personal impression',
          isCorrect: false,
          explanation: 'القرار الاستثماري يُبنى على أرقام موثقة وليس انطباعاً.',
          explanationEn: 'An investment decision is built on documented numbers, not an impression.',
        },
      ],
    },
  ],
};

export default quiz13;