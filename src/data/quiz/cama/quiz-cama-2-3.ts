import type { QuizBank } from '../types';

export const quizCama23: QuizBank = {
  id: 'quiz-cama-2-3',
  questions: [
  {
    scenario: 'أصدر مجلس إدارة شركة شبكات مياه سياسة إدارة أصول من صفحة واحدة، ثم طلب من الأقسام وضع أهداف قابلة للقياس قبل إعداد خطة عمل تنفيذية.',
    scenarioEn: 'The board of directors of a water networks company issued a one-page asset management policy, then asked the departments to set measurable objectives before preparing an executive action plan.',
    question: 'ما الفارق الجوهري بين "سياسة إدارة الأصول" (Policy) و"أهداف إدارة الأصول" (Objectives) في هذا السياق؟',
    questionEn: 'What is the fundamental difference between the "asset management policy" and the "asset management objectives" in this context?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'السياسة تعلن الالتزام والتوجه العام للمنشأة، والأهداف كميات قابلة للقياس تُستمد من تلك السياسة.',
        textEn: 'The policy declares the commitment and the general direction of the organization, and the objectives are measurable quantities derived from that policy.',
        isCorrect: true,
        explanation: 'السياسة وثيقة إعلانية عليا تحدد التزام الإدارة ومبادئ العمل، بينما الأهداف تحول هذا الالتزام إلى نتائج محددة قابلة للقياس والمراجعة.',
        explanationEn: 'The policy is a top-level declarative document that defines the management commitment and the principles of work, while the objectives turn this commitment into specific, measurable, and reviewable results.',
      },
      {
        text: 'الأهداف والثيقة العامة والمرجعية والسياسة قائمة بالتفصيل لكل معدات المنشأة.',
        textEn: 'The objectives are the general reference document, and the policy is a detailed list of all the equipment of the organization.',
        isCorrect: false,
        explanation: 'الأهداف ليست وثيقة مرجعية جامعة، والسياسة ليست قائمة تفصيلية بمعدات، فالمفهومان معكوسان في هذا الخيار.',
        explanationEn: 'The objectives are not a comprehensive reference document, and the policy is not a detailed list of equipment; the two concepts are reversed in this option.',
      },
      {
        text: 'السياسة تُفرض من الخارج والأهداف يقررها المراجع الخارجي وحده.',
        textEn: 'The policy is imposed from outside and the objectives are decided by the external auditor alone.',
        isCorrect: false,
        explanation: 'السياسة والأهداف قرارات داخلية تصدر من المنشأة، وليس من جهة خارجية.',
        explanationEn: 'The policy and objectives are internal decisions issued by the organization, and not by an external party.',
      },
      {
        text: 'لا فرق عملي بينهما وكلاهما يعبر عن رغبات عامة دون التزام.',
        textEn: 'There is no practical difference between them, and both express general wishes without commitment.',
        isCorrect: false,
        explanation: 'الفرق جوهري؛ السياسة التزام بالتوجه، والأهداف التزام بنتائج رقمية ملموسة.',
        explanationEn: 'The difference is fundamental; the policy is a commitment to direction, and the objectives are a commitment to tangible numeric results.',
      }
    ]
  },
  {
    scenario: 'طلبت إدارة منطقة صناعية من فريق الأصول كتابة أهداف إدارة الأصول بطريقة SMART، فعرض الفريق ثلاثة نصوص للنظر فيها.',
    scenarioEn: 'The management of an industrial zone asked the asset team to write the asset management objectives in a SMART way, and the team presented three texts for consideration.',
    question: 'أي من الأهداف الآتية يُكتب بطريقة SMART سليمة؟',
    questionEn: 'Which of the following objectives is written in a sound SMART way?',
    difficulty: 'سهل',
    options: [
      {
        text: 'تقليل أعطال مضخات الري غير المخطط لها بنسبة 20% خلال سنة مالية واحدة.',
        textEn: 'Reduce unplanned failures of the irrigation pumps by 20% within one fiscal year.',
        isCorrect: true,
        explanation: 'الهدف محدد (أعطال مضخات الري)، قابل للقياس (20%)، قابل للتحقيق، ذو صلة (أعطال المضخات)، ومحدد زمنياً (سنة مالية واحدة).',
        explanationEn: 'The objective is specific (irrigation pump failures), measurable (20%), achievable, relevant (pump failures), and time-bound (one fiscal year).',
      },
      {
        text: 'تحسين الأداء العام لنظام إدارة الأصول قدر الإمكان.',
        textEn: 'Improve the overall performance of the asset management system as much as possible.',
        isCorrect: false,
        explanation: 'هذا الهدف عام ولا يحدد مقياساً كمياً أو زمناً محدداً، لذلك لا يحقق شروط SMART.',
        explanationEn: 'This objective is general and does not define a quantitative measure or a specific time, so it does not meet the SMART criteria.',
      },
      {
        text: 'أن تكون الصيانة أفضل من كل الشركات المنافسة دائماً.',
        textEn: 'Maintenance should always be better than all competing companies.',
        isCorrect: false,
        explanation: 'المقارنة العامة "الأفضل دائماً" غير قابلة للقياس الكمي ولا تحدد المؤشر ولا الأفق الزمني.',
        explanationEn: 'The general comparison "always the best" is not quantitatively measurable and does not define the indicator or the time horizon.',
      },
      {
        text: 'شراء خمسة أجهزة قياس اهتزازات بحلول نهاية الربع الأول فقط.',
        textEn: 'Purchase five vibration measurement devices by the end of the first quarter only.',
        isCorrect: false,
        explanation: 'العمل (شراء أجهزة) وسيلة وليس هدفاً تحسينياً قابلاً للقياس في الأداء، ولا يشمل نتيجة تشغيلية مقاسة.',
        explanationEn: 'The action (purchasing devices) is a means and not a measurable improvement objective in performance, and it does not include a measured operational outcome.',
      }
    ]
  },
  {
    scenario: 'يراجع فريق الجودة في شركة تغليف مؤشرات نظام إدارة الأصول بعد ربع سنة، ويلاحظ أن مؤشرات الصيانة تغطي الجانب المالي والتشغيلي بشكل كبير بينما لا توجد مؤشرات على سلامة الأصول أو أثرها البيئي أو رضا المستخدمين.',
    scenarioEn: 'The quality team in a packaging company reviews the indicators of the asset management system after a quarter, and notices that the maintenance indicators heavily cover the financial and operational side, while there are no indicators for asset safety, its environmental impact, or user satisfaction.',
    question: 'ما النقد الصحيح لاختيار مؤشرات الأداء (KPIs) في هذا الموقف؟',
    questionEn: 'What is the correct criticism of the selection of key performance indicators (KPIs) in this situation?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'اختيار المؤشرات اقتصر على بُعدين وتجاهل التوازن المطلوب بين الأداء المالي والتشغيلي والسلامة والبيئة والعملاء.',
        textEn: 'The selection of indicators was limited to two dimensions and ignored the required balance between financial and operational performance, safety, environment, and customers.',
        isCorrect: true,
        explanation: 'نظام مؤشرات متوازن يغطي أبعاد الأداء المالي والاعتمادية والسلامة والأثر البيئي ورضا الأطراف، فالأصل التوازن لا الحصر في محور واحد.',
        explanationEn: 'A balanced indicator system covers financial performance, reliability, safety, environmental impact, and stakeholder satisfaction; the principle is balance, not confinement to one axis.',
      },
      {
        text: 'المشكلة أن المؤشرات كثيرة ويجب تقليصها إلى مؤشر واحد عام.',
        textEn: 'The problem is that the indicators are many and should be reduced to one general indicator.',
        isCorrect: false,
        explanation: 'المشكلة في غياب التوازن بين الأبعاد لا في الكثرة، وتقليصها إلى مؤشر واحد يفقد الرؤية.',
        explanationEn: 'The problem is the lack of balance between the dimensions, not their number, and reducing them to one indicator loses the vision.',
      },
      {
        text: 'المؤشرات المالية غير ضرورية إطلاقاً في إدارة الأصول.',
        textEn: 'The financial indicators are completely unnecessary in asset management.',
        isCorrect: false,
        explanation: 'البعد المالي ركن أصيل في القيمة، والنقد الحقيقي هو إغفال بقية الأبعاد لا استبعاد المالي.',
        explanationEn: 'The financial dimension is an essential pillar of value, and the real criticism is overlooking the other dimensions, not excluding the financial one.',
      },
      {
        text: 'مؤشرات رضا المستخدمين خارج نطاق إدارة الأصول ولا حاجة لقياسها.',
        textEn: 'User satisfaction indicators are outside the scope of asset management and there is no need to measure them.',
        isCorrect: false,
        explanation: 'رضا المستفيدين من المرافق جزء من مفهوم القيمة الذي تقدمه إدارة الأصول للمنشأة.',
        explanationEn: 'The satisfaction of facility beneficiaries is part of the concept of value that asset management delivers to the organization.',
      }
    ]
  }
  ],
};

export default quizCama23;