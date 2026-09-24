import type { QuizBank } from '../types';

export const quizCama31: QuizBank = {
  id: 'quiz-cama-3-1',
  questions: [
  {
    scenario: 'تدير شركة مياه شبكة واسعة من الخزانات والمحطات، وتتشتت بياناتها بين سجلات ورقية، جداول إلكترونية منفصلة، ونظام لاحق بمعرفات غير موحدة للمعدات نفسها.',
    scenarioEn: 'A water company operates a wide network of reservoirs and stations, and its data is scattered across paper records, separate spreadsheets, and a later system with non-standardized identifiers for the same equipment.',
    question: 'ما البنية الأولى التي يجب إقرارها قبل بناء استراتيجية معلومات الأصول الفعالة؟',
    questionEn: 'What is the first structure that must be established before building an effective asset information strategy?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'بنية معلومات موحدة تنشئ معرفات مشتركة للأصول وهرمية تصنيف واحدة وسجلاً مرجعياً واحداً معتمداً.',
        textEn: 'A unified information architecture that creates shared asset identifiers, a single classification hierarchy, and one authoritative reference register.',
        isCorrect: true,
        explanation: 'بنية معلومات الأصول توحد معرفات الأصول وهرميتها ومصدرها المرجعي قبل أي أنظمة لاحقة، فيختفي التشتت وتصبح البيانات متسقة وقابلة للمقارنة.',
        explanationEn: 'An asset information architecture unifies asset identifiers, their hierarchy, and their reference source before any later systems, eliminating fragmentation and making the data consistent and comparable.',
      },
      {
        text: 'الانتقال مباشرة لشراء نظام CMMS جديد لحل التشتت تلقائياً.',
        textEn: 'Moving directly to buy a new CMMS system to resolve the fragmentation automatically.',
        isCorrect: false,
        explanation: 'النظام بلا بنية تعريفية موحدة سيرث الفوضى من البيانات المتطفلة، فيعاد إنتاج المشكلة نفسها بصياغة مختلفة.',
        explanationEn: 'A system without a unified identifying structure will inherit the chaos of the stray data, reproducing the same problem in a different form.',
      },
      {
        text: 'تجصيص الوثائق الورقية وحدها وترك الإلكترونية كما هي.',
        textEn: 'Digitizing only the paper documents and leaving the electronic ones as they are.',
        isCorrect: false,
        explanation: 'التجصيص الجغرافي يعالج شكلاً واحداً من التشتت ويبقى التعارض بين المعرفات دون حل.',
        explanationEn: 'Geographic digitization addresses only one form of fragmentation, and the conflict between identifiers remains unresolved.',
      },
      {
        text: 'بناء النظام دون معايير تسمية بالاتفاق مع المورد.',
        textEn: 'Building the system without naming standards agreed with the vendor.',
        isCorrect: false,
        explanation: 'غياب معايير التسمية والهرمية يجعل أي نظام يتحول لمستودع أسماء متعارض غير قابل للتحليل.',
        explanationEn: 'The absence of naming and hierarchy standards turns any system into a repository of conflicting names that cannot be analyzed.',
      }
    ]
  },
  {
    scenario: 'أنشأت شركة غاز سجلاً إلكترونياً لأصولها يضم بيانات التركيب، والتشغيل، والتوقفات، والمعايرة، وكل معلومة تُحدث تلقائياً عند حدوثها وتوثيق مصدر ووقت كل تعديل.',
    scenarioEn: 'A gas company created an electronic register of its assets containing installation, operation, outage, and calibration data, where every item is updated automatically as it occurs and the source and time of each change are documented.',
    question: 'ما الميزة الجوهرية التي يوفرها هذا النمط من تدفق المعلومات وتدويرها في المثال؟',
    questionEn: 'What is the essential advantage this pattern of information flow and its cycle provides in the example?',
    difficulty: 'سهل',
    options: [
      {
        text: 'مصدر واحد موثوق (Single Source of Truth) يحفظ تاريخياً كل تغيير ورمزه ومبدئه الزمني للتدقيق والقرار.',
        textEn: 'A single source of truth that historically preserves every change, its code, and its timestamp for audit and decision-making.',
        isCorrect: true,
        explanation: 'تدوير المعلومات المدوَّر بموثوقية يخلق مصدراً مرجعياً واحداً وتاريخاً كاملاً للتغييرات، فيشكل قاعدة الثقة اللازمة لاتخاذ قرارات التشغيل والاعتمادية.',
        explanationEn: 'A reliably governed information cycle creates a single reference source and a complete history of changes, forming the trust base needed for operations and reliability decisions.',
      },
      {
        text: 'أرشفة جميلة للبيانات دون أثر عملي في التشغيل اليومي.',
        textEn: 'A neat archiving of data with no practical effect on daily operations.',
        isCorrect: false,
        explanation: 'النظام الموصوف يؤثر مباشرة على القرارات التشغيلية، فليس أرشيفاً زخرفياً.',
        explanationEn: 'The described system directly affects operational decisions; it is not a decorative archive.',
      },
      {
        text: 'استبدال المشغلين بأنظمة تقنية تلقائية بالكامل.',
        textEn: 'Fully replacing operators with automated technical systems.',
        isCorrect: false,
        explanation: 'الأنظمة تدعم المشغل وتوثق عمله ولا تستبدل الحكم البشري في القرارات الحرجة.',
        explanationEn: 'Systems support the operator and document their work; they do not replace human judgment in critical decisions.',
      },
      {
        text: 'منع أي طرف خارجي من قراءة بيانات إلا بعملية معقدة.',
        textEn: 'Preventing any external party from reading the data except through a complex process.',
        isCorrect: false,
        explanation: 'ميزة التدفق الموثوق إتاحة بيانات سليمة المنشأ للمتدخلين المؤهلين، ولا تعني تقييد الوصول التقني.',
        explanationEn: 'The advantage of a reliable flow is making well-sourced data available to qualified parties; it does not mean restricting technical access.',
      }
    ]
  },
  {
    scenario: 'سجّل مسؤول البيانات في شركة إسمنت أنّ نسبة كبيرة من ملفات الأصول في النظام القديم تحتوي حقولاً فارغة كتاريخ التركيب، أو وجود حالات مكررة لنفس الأصل تحت معرفات مختلفة.',
    scenarioEn: 'A data officer in a cement company recorded that a large share of the asset files in the legacy system contain empty fields such as the installation date, or that there are duplicate records of the same asset under different identifiers.',
    question: 'أي بعد من أبعاد جودة البيانات يتطلب المعالجة الفورية في هذا السيناريو؟',
    questionEn: 'Which dimension of data quality requires immediate treatment in this scenario?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الاكتمال (Completeness) والاتساق (Consistency) معاً؛ لغياب الحقول ووجود مكررات معرفية متناقضة.',
        textEn: 'Completeness and Consistency together, because of missing fields and conflicting identifier duplicates.',
        isCorrect: true,
        explanation: 'الاكتمال يفتقد حقولاً فارغة والاتساق يكسر توحيد معرفات الأصل، وكلاهما شرط مسبق لأي تحليل موثوق فتُعالج في الصلابة بشكل فوري.',
        explanationEn: 'Completeness is undermined by empty fields and consistency by non-unified asset identifiers; both are prerequisites for any reliable analysis and should be treated immediately in the foundation.',
      },
      {
        text: 'أمان البيانات فقط لأنه لا توجد خروق أمنية.',
        textEn: 'Data security only, because there are no security breaches.',
        isCorrect: false,
        explanation: 'الأمن بعد مغاير، والقضية هنا بنية واكتمال المعرفة لا الحماية.',
        explanationEn: 'Security is a different dimension; the issue here is the structure and completeness of the information, not its protection.',
      },
      {
        text: 'سرعة الوصول الراجع فقط لأن الملف ضخم.',
        textEn: 'Only the speed of reference access, because the file is huge.',
        isCorrect: false,
        explanation: 'السرعة المعينة لاحقة، وجذر المشكلة بيانات ناقصة ومتضاربة يجب تصحيحه أولا.',
        explanationEn: 'The stated speed is a later concern; the root problem is incomplete and conflicting data that must be corrected first.',
      },
      {
        text: 'تنسيق مظهر التقارير النهائية قبل معالجة البيانات.',
        textEn: 'Formatting the appearance of the final reports before processing the data.',
        isCorrect: false,
        explanation: 'التنسيق لا يعالج الجوهر؛ بيانات ناقصة مكررة ستُخرج تقارير خادعة على أي هيئة.',
        explanationEn: 'Formatting does not address the essence; incomplete, duplicated data will produce misleading reports in any form.',
      }
    ]
  }
  ],
};