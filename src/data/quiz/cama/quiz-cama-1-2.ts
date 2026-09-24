import type { QuizBank } from '../types';

export const quizCama12: QuizBank = {
  id: 'quiz-cama-1-2',
  questions: [
  {
    scenario: 'تخطط شركة تكرير نفط لتطبيق نظام إدارة أصول وفق ISO 55001. المدير المالي يطلب قائمة بالمتطلبات الإلزامية التي يجب أن يحققها النظام قبل الاعتماد الخارجي.',
    scenarioEn: 'An oil refining company plans to implement an asset management system according to ISO 55001. The finance manager requests a list of the mandatory requirements the system must meet before external certification.',
    question: 'ما هي المكونات الأساسية لنظام إدارة الأصول وفق ISO 55001 التي يجب أن يتضمنها التقييم؟',
    questionEn: 'What are the core components of an asset management system according to ISO 55001 that the assessment must include?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'السياق المؤسسي، القيادة والتزام الإدارة، التخطيط، الدعم التشغيلي، الأداء التشغيلي، المراجعة، والتحسين المستمر.',
        textEn: 'Organizational context, leadership and management commitment, planning, operational support, operational performance, review, and continual improvement.',
        isCorrect: true,
        explanation: 'ISO 55001 يتبع هيكل Annex SL ويحدد متطلبات: فهم السياق (4)، القيادة (5)، التخطيط (6)، الدعم (7)، الأداء التشغيلي (8)، المراجعة (9)، والتحسين (10).',
        explanationEn: 'ISO 55001 follows the Annex SL structure and defines requirements for: understanding the context (4), leadership (5), planning (6), support (7), operational performance (8), review (9), and improvement (10).',
      },
      {
        text: 'شراء نظام CMMS متطور وتدريب جميع الموظفين عليه.',
        textEn: 'Purchasing an advanced CMMS and training all employees on it.',
        isCorrect: false,
        explanation: 'نظام CMMS أداة تقنية داعمة لكنه ليس المتطلب الأساسي لـ ISO 55001.',
        explanationEn: 'A CMMS is a supporting technical tool, but it is not the core requirement of ISO 55001.',
      },
      {
        text: 'توظيف خبراء خارجيين لإعداد جميع الوثائق.',
        textEn: 'Hiring external experts to prepare all the documentation.',
        isCorrect: false,
        explanation: 'الاعتماد يتطلب التزاماً مؤسسياً حقيقياً لا مجرد وثائق مكتوبة من طرف ثالث.',
        explanationEn: 'Certification requires genuine organizational commitment, not merely documents written by a third party.',
      },
      {
        text: 'تطبيق النظام على جميع الأصول دفعة واحدة.',
        textEn: 'Applying the system to all assets at once.',
        isCorrect: false,
        explanation: 'يمكن البدء بمجموعة أصول نموذجية ثم التوسع تدريجياً.',
        explanationEn: 'You can start with a pilot asset group and then expand gradually.',
      }
    ]
  },
  {
    scenario: 'بعد مرور 6 أشهر من تطبيق نظام إدارة الأصول، لاحظ مدير الجودة أن بعض العمليات لا تتم وفق الإجراءات الموثقة في دليل ISO 55001، لكن النتائج تبدو مقبولة.',
    scenarioEn: 'Six months after the implementation of the asset management system, the quality manager noticed that some operations are not performed according to the documented procedures in the ISO 55001 manual, but the results appear acceptable.',
    question: 'هل يجوز تجاوز الإجراءات الموثقة إذا كانت النتائج مقبولة؟ وكيف يتعامل معيار ISO 55001 مع هذا الموقف؟',
    questionEn: 'Is it permissible to bypass the documented procedures when the results are acceptable? And how does ISO 55001 handle this situation?',
    difficulty: 'صعب',
    options: [
      {
        text: 'لا يجوز؛ ISO 55001 يشترط الالتزام بالإجراءات الموثقة كجزء من الامتثال، والتنصل منها حتى مع نتائج مقبولة يشكل عدم مطابقة (Non-conformity) يستوجب اتخاذ إجراء تصحيحي.',
        textEn: 'It is not permissible; ISO 55001 requires adherence to the documented procedures as part of compliance, and deviating from them even with acceptable results constitutes a non-conformity that requires corrective action.',
        isCorrect: true,
        explanation: 'الامتثال للإجراءات الموثقة شرط أساسي في ISO 55001. التنصل من الإجراءات يخلق فجوة في التحكم الداخلي وقد ينتج عنه نتائج سلبية غير متوقعة في المستقبل.',
        explanationEn: 'Compliance with the documented procedures is a fundamental requirement in ISO 55001. Deviating from the procedures creates a gap in internal control and may produce unexpected negative outcomes in the future.',
      },
      {
        text: 'نعم يجوز؛ المعيار يهتم بالنتائج لا بالإجراءات.',
        textEn: 'Yes it is permissible; the standard cares about results, not procedures.',
        isCorrect: false,
        explanation: 'هذا غير صحيح؛ المعيار يهتم بالنتيجة الإجرائية والفعلية معاً.',
        explanationEn: 'This is incorrect; the standard cares about the procedural and the actual outcomes together.',
      },
      {
        text: 'يجب تغيير الإجراءات لتتناسب مع الممارسة الفعلية فقط.',
        textEn: 'The procedures should be changed to match the actual practice only.',
        isCorrect: false,
        explanation: 'تغيير الإجراءات لتطابق الممارسة الحالية قد يخفي أخطاء جوهرية ويضعف نظام الحوكمة.',
        explanationEn: 'Changing the procedures to match the current practice may hide fundamental errors and weaken the governance system.',
      },
      {
        text: 'لا علاقة لهذا الموقف بمعيار ISO 55001.',
        textEn: 'This situation has no relation to ISO 55001.',
        isCorrect: false,
        explanation: 'الالتزام بالإجراءات الموثقة من متطلبات ISO 55001 الصريحة.',
        explanationEn: 'Adherence to the documented procedures is an explicit requirement of ISO 55001.',
      }
    ]
  },
  {
    scenario: 'يواجه قسم إدارة الأصول صعوبة في قياس أداء نظامه مقارنة بالمعيار ISO 55001. المدير يريد مؤشراً واحداً يلخص مدى فعالية النظام.',
    scenarioEn: 'The asset management department faces difficulty in measuring the performance of its system compared to ISO 55001. The manager wants a single indicator that summarizes how effective the system is.',
    question: 'ما هو المؤشر الرئيسي الذي يعكس فعالية نظام إدارة الأصول وفق ISO 55001؟',
    questionEn: 'What is the main indicator that reflects the effectiveness of an asset management system according to ISO 55001?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'معدل تحقيق الأهداف الاستراتيجية المرتبطة بالأصول مقارنة بالخطة الموضوعة (Goal Attainment Rate).',
        textEn: 'The rate of achieving the asset-related strategic objectives compared to the established plan (Goal Attainment Rate).',
        isCorrect: true,
        explanation: 'ISO 55001 يقيس فعالية النظام من خلال مدى تحقيق الأهداف الموضوعة في SAMP. هذا المؤشر يعكس الربط بين الاستراتيجية والتنفيذ.',
        explanationEn: 'ISO 55001 measures the effectiveness of the system through how well the objectives set in the SAMP are achieved. This indicator reflects the link between strategy and execution.',
      },
      {
        text: 'عدد ساعات تدريب الموظفين على النظام.',
        textEn: 'The number of training hours for employees on the system.',
        isCorrect: false,
        explanation: 'التدريب مؤشر دعم (Input) لا مؤشر أداء (Outcome).',
        explanationEn: 'Training is a support indicator (Input), not a performance indicator (Outcome).',
      },
      {
        text: 'عدد الأصول المدورة في النظام.',
        textEn: 'The number of assets registered in the system.',
        isCorrect: false,
        explanation: 'إدخال الأصول في النظام خطوة إدارية لا تقيس فعالية النظام.',
        explanationEn: 'Entering assets into the system is an administrative step that does not measure the effectiveness of the system.',
      },
      {
        text: 'نسبة التزام الموظفين بفتح أوامر الشغل.',
        textEn: 'The rate of employee compliance with opening work orders.',
        isCorrect: false,
        explanation: 'هذا مؤشر سلوكي جزئي لا يعكس فعالية النظام الكاملة.',
        explanationEn: 'This is a partial behavioral indicator that does not reflect the full effectiveness of the system.',
      }
    ]
  }
  ],
};

export default quizCama12;