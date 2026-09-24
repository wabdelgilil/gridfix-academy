import type { QuizBank } from '../types';

export const quizCama53: QuizBank = {
  id: 'quiz-cama-5-3',
  questions: [
  {
    scenario: 'أعدت شركة طاقة لوحة قياس أداء قسم الأصول بمركزين: أحدهما عدد زيارات فحص الصيانة المجدولة الشهرية، والآخر نسبة السلامة التشغيلية من الحوادث في نفس الشهر.',
    scenarioEn: 'An energy company prepared a performance dashboard for its asset department with two indicators: one is the number of scheduled monthly maintenance inspection visits, and the other is the operational safety percentage of incidents in the same month.',
    question: 'أي المصطلح الصحيح لتصنيف هذين المؤشرين؟',
    questionEn: 'Which is the correct term for classifying these two indicators?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'عدد زيارات الفحص مؤشر قيادي (Leading) يفعل الفعل قبل النتيجة، ونسبة الحوادث مؤشر تأخيري (Lagging) يوثق ما حدث بعد وقوعه.',
        textEn: 'The number of inspection visits is a leading indicator that acts before the result, and the incident percentage is a lagging indicator that documents what happened after its occurrence.',
        isCorrect: true,
        explanation: 'المؤشر القيادي يراقب الأنشطة التي تمنع الحدث وتبنئ بالنتيجة قبلها، بينما التأخيري يقيس النتيجة النهائية المتحققة كالحوادث والإنتاجية بعد وقوعها.',
        explanationEn: 'The leading indicator monitors the activities that prevent the event and predicts the result before it, while the lagging indicator measures the final achieved outcome such as incidents and productivity after its occurrence.',
      },
      {
        text: 'كلاهما مؤشر تأخيري لأنهما يعتمدان على بيانات تاريخية.',
        textEn: 'Both are lagging indicators because they depend on historical data.',
        isCorrect: false,
        explanation: 'فحص الصيانة المجدولة نشاط وقائي قيادي يحدث قبل النتيجة، وليس وثيقة تاريخية تأخيرية.',
        explanationEn: 'Scheduled maintenance inspection is a leading preventive activity that occurs before the result, not a lagging historical record.',
      },
      {
        text: 'كلاهما مؤشر قيادي لأنهما يتعلقان بقطاع الطاقة.',
        textEn: 'Both are leading indicators because they relate to the energy sector.',
        isCorrect: false,
        explanation: 'نسبة الحوادث هي نتيجة فعلية وقعت، فتصنيفها قيادياً خلط للمفهومين.',
        explanationEn: 'The incident percentage is an actual result that occurred, so classifying it as leading confounds the two concepts.',
      },
      {
        text: 'هذان المؤشران لا يمكن تصنيفهما في بطاقة أداء متوازنة.',
        textEn: 'These two indicators cannot be classified in a balanced scorecard.',
        isCorrect: false,
        explanation: 'بطاقة الأداء المتوازن تقبل مؤشرات قيادية وتأخيرية معاً عبر المنظورات المالية والتشغيلية والعملاء والتعلم.',
        explanationEn: 'The balanced scorecard accepts leading and lagging indicators together across the financial, operational, customer, and learning perspectives.',
      }
    ]
  },
  {
    scenario: 'تريد شركة مرافق مقارنة جودة عمليات صيانتها بمعيار خارجي، فقارنت بياناتها مع مدينة مماثلة في الحجم والمناخ في بلد مجاور أظهرت نتائج أفضل من شركتها في الاعتمادية والتكلفة.',
    scenarioEn: 'A utilities company wants to compare the quality of its maintenance operations against an external benchmark, so it compared its data with a city of similar size and climate in a neighboring country that showed better results than the company in reliability and cost.',
    question: 'ما الاستخدام الأمثل لنتيجة هذه المقارنة المرجعية (Benchmarking)؟',
    questionEn: 'What is the optimal use of the result of this benchmarking comparison?',
    difficulty: 'سهل',
    options: [
      {
        text: 'اعتماد الفجوة المكتشفة أساساً لتحديد مجالات التحسين وبناء خطط عمل تستهدف الوصول لمستوى الأفضل.',
        textEn: 'Adopting the discovered gap as a basis for determining improvement areas and building action plans that target reaching the level of the best performer.',
        isCorrect: true,
        explanation: 'الغرض من المقارنة المرجعية ليس الإدانة بل استخلاص الفجوات وتحويلها إلى أهداف تحسين محددة وقابلة للتنفيذ للوصول للتميز.',
        explanationEn: 'The purpose of benchmarking is not condemnation but extracting the gaps and converting them into specific, achievable improvement goals to reach excellence.',
      },
      {
        text: 'استخدام النتيجة كتبرير لخفض ميزانية الصيانة فوراً.',
        textEn: 'Using the result as justification to cut the maintenance budget immediately.',
        isCorrect: false,
        explanation: 'الخفض السريع دون خطة تحسين جذرية يضاعف الفجوة بدلاً من إغلاقها.',
        explanationEn: 'Rapid cutting without a fundamental improvement plan doubles the gap instead of closing it.',
      },
      {
        text: 'التكتم على النتيجة لأنها قد تُحرج الإدارة.',
        textEn: 'Keeping the result confidential because it may embarrass management.',
        isCorrect: false,
        explanation: 'المقارنة المرجعية أداة تعلم مؤسسي، والكتمان يفقدها قيمتها التحسينية.',
        explanationEn: 'Benchmarking is an organizational learning tool, and secrecy deprives it of its improvement value.',
      },
      {
        text: 'الادعاء بأن المقارنة غير صالحة لأن البيئة ليست مطابقة تماماً.',
        textEn: 'Claiming that the comparison is invalid because the environment is not completely identical.',
        isCorrect: false,
        explanation: 'مع اختلاف البيئات تبقى الفجوات إنذاراً ثميناً، والتحقق من مدى التطابق جزء من المنهجية لا سبباً للرفض الكلي.',
        explanationEn: 'Even with different environments, the gaps remain a valuable alert, and verifying the degree of matching is part of the methodology, not a reason for total rejection.',
      }
    ]
  },
  {
    scenario: 'تبنت شركة لوجستية دورة التحسين المستمر (Kaizen) في محطة فرز الطرود، واكتشفت بعد ثلاث دورات متتالية أن خطة قطع معدات الفرز انخفضت بنسبة النصف.',
    scenarioEn: 'A logistics company adopted the continuous improvement cycle (Kaizen) at its parcel sorting station, and after three consecutive cycles it discovered that the downtime of the sorting equipment dropped by half.',
    question: 'ما الذي يميز ثقافة التحسين المستمر الناجحة في هذا المثال؟',
    questionEn: 'What distinguishes a successful continuous improvement culture in this example?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'التحسين المتتابع الدائم عبر جولات قصيرة متكررة بالتزام كل الفرق، لا قفزة إصلاح واحدة كبيرة.',
        textEn: 'The permanent successive improvement through short repeated cycles with the commitment of all teams, not one big repair leap.',
        isCorrect: true,
        explanation: 'Kaizen ينهض على دورات صغيرة مستمرة تراكمية تشاركية، فيتجمع أثرها تدريجياً ويستدام بخلاف الإصلاحات المفاجئة المنفردة.',
        explanationEn: 'Kaizen is built on small, continuous, cumulative, participatory cycles, so their effect accumulates gradually and is sustained, unlike isolated sudden repairs.',
      },
      {
        text: 'التوقف بعد بلوغ النتيجة الأولى كسباً لإتاحة استقرار الفريق.',
        textEn: 'Stopping after reaching the first result as a gain to allow the team to settle.',
        isCorrect: false,
        explanation: 'روح الكايزن هي الاستمرار الدائم، والتوقف عند نتيجة يقطع أثر التحسين التراكمي.',
        explanationEn: 'The spirit of Kaizen is permanent continuation, and stopping at a result cuts off the cumulative improvement effect.',
      },
      {
        text: 'قصر الاهتمام على القسم الفني دون إشراك المشغلين اليوميين.',
        textEn: 'Restricting attention to the technical department without involving the daily operators.',
        isCorrect: false,
        explanation: 'التحسين المستمر يشرك المشغلين وكافة الأطراف لن أثر مستدام في البيئة العمل اليومي.',
        explanationEn: 'Continuous improvement involves the operators and all parties for a sustainable effect in the daily work environment.',
      },
      {
        text: 'اعتباره مشروعاً أكبر من دورات قصيرة وإنما عقداً طويلاً واحداً.',
        textEn: 'Treating it as a larger project than short cycles, rather as one long engagement.',
        isCorrect: false,
        explanation: 'التمييز الجوهري للكايزن في صغر الدورات وتواترها المستمر لا في المشاريع الموسعة القليلة.',
        explanationEn: 'The essential distinction of Kaizen lies in the smallness of the cycles and their continuous frequency, not in a few expanded projects.',
      }
    ]
  }
  ],
};