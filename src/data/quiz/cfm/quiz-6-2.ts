import type { QuizBank } from '../types';

export const quiz62: QuizBank = {
  id: 'quiz-6-2',
  questions: [
    {
      scenario: 'يعلن إنذار الحريق في مبنى مؤلف من 4 طوابق أثناء يوم عمل عادي.',
      scenarioEn: 'A fire alarm sounds in a 4-story building during a normal working day.',
      question: 'ما التصرف الصحيح الواجب على كل شاغل فور سماع الإنذار؟',
      questionEn: 'What is the correct action every occupant must take immediately upon hearing the alarm?',
      difficulty: 'سهل',
      options: [
        {
          text: 'التوقف عن العمل فوراً، ومسارات الهروب المعلنة، والنزول عبر الدرج دون مصاعد، ثم الوصول لنقطة التجمع',
          textEn: 'Stop work immediately, follow the announced escape routes, descend via the stairs without elevators, then reach the assembly point',
          isCorrect: true,
          explanation: 'الاستجابة السليمة تبدأ بالتوقف فوراً واتباع المسار الآمن: بلا مصاعد، وبزحف منظم لنقطة التجمع للتحقق من الجميع.',
          explanationEn: 'The correct response begins with an immediate stop and following the safe route: no elevators, and an orderly flow to the assembly point to account for everyone.',
        },
        {
          text: 'إنهاء المهمة الجارية الحالية أولاً ثم الخروج في وقت لاحق',
          textEn: 'Finish the current task first and then exit later',
          isCorrect: false,
          explanation: 'التأخير غير المجد (إنهاء رسالة أو مهمة) يقلب الميزة الزمنية للإخلاء — التوقف فوري واجب.',
          explanationEn: 'Needless delay (finishing a message or a task) destroys the time advantage of evacuation — stopping immediately is mandatory.',
        },
        {
          text: 'اصطحاب الحقيبة والممتلكات الشخصية أولاً للاحتفاظ بها',
          textEn: 'Take the bag and personal belongings first to keep them',
          isCorrect: false,
          explanation: 'الحياة أولاً: العودة لجمع المتاع تأخر مكلف وخطر، والعودة للمبنى بعد الخروج ممنوعة.',
          explanationEn: 'Life comes first: returning to collect belongings is costly, dangerous delay, and re-entering the building after exit is prohibited.',
        },
        {
          text: 'استخدام المصعد للنزول السريع حتى لا يزاحم الآخرون الدرج',
          textEn: 'Use the elevator for a quick descent so as not to crowd the stairs with others',
          isCorrect: false,
          explanation: 'المصاعد قد تنقطع كهرباؤها أو تصبح فخاً حرارياً — طرق الإخلاء المعتمدة درج، لا مصعد.',
          explanationEn: 'Elevators may lose power or become a thermal trap — the approved evacuation routes are stairs, not elevators.',
        },
      ],
    },
    {
      scenario: 'أصبحت نقطة التجمع القديمة مساحة بناء مغلقة، وأشخاص في طابقين ما زالوا يتجهون إليها في التمرين.',
      scenarioEn: 'The old assembly point has become a closed construction site, and people on two floors still head to it during the drill.',
      question: 'ما التصرف الأصح لإعادة الإخلاء لأدائه؟',
      questionEn: 'What is the correct action to restore the evacuation to proper performance?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تحديث خطة الإخلاء وتعيين نقطة تجمع بديلة، ثم إعادة التمرين والتحقق من معرفة الجميع بها',
          textEn: 'Update the evacuation plan, designate an alternative assembly point, then re-run the drill and verify everyone knows it',
          isCorrect: true,
          explanation: 'التغيير المادي يستلزم تحديث الخطة وإبلاغ الجميع وتمريناً يثبت المعرفة الجديدة، لا الاكتفاء بتعديل وثيقة.',
          explanationEn: 'A physical change requires updating the plan, informing everyone, and a drill that proves the new knowledge — not merely amending a document.',
        },
        {
          text: 'الاكتفاء بتوزيع خريطة جديدة ولافتة عند المخرج القديم',
          textEn: 'Merely distribute a new map and a sign at the old exit',
          isCorrect: false,
          explanation: 'المعرفة الحقيقية تثبت بالسلوك لا بالورق؛ يلزم تمرين عملي بعد أي تغيير على مسارات أو نقاط تجمع.',
          explanationEn: 'Real knowledge is proven by behavior, not paper; a practical drill is needed after any change to routes or assembly points.',
        },
        {
          text: 'السماح بالتوجه لأي مكان بعيد عن المبنى ما دام آمناً',
          textEn: 'Allow heading to any place away from the building as long as it is safe',
          isCorrect: false,
          explanation: 'نقطة التجمع غرضها الحصر (التحقق من اكتمال الجميع) — تبعثر الشاغلين يضيع هذا الغرض.',
          explanationEn: 'The assembly point exists for the headcount (verifying everyone is present) — scattering occupants defeats that purpose.',
        },
        {
          text: 'اعتبار التوجه لنقطة التجمع القديمة مقبولاً لهذا الموسم',
          textEn: 'Consider heading to the old assembly point acceptable for this season',
          isCorrect: false,
          explanation: 'استمرار سلوك خاطئ موثق فيتمرن عليه؛ التصحيح الفوري هو القاعدة عند أي تغيير بيئي.',
          explanationEn: 'Continuing a documented wrong behavior means training on it; immediate correction is the rule at any environmental change.',
        },
      ],
    },
    {
      scenario: 'جرى تمرين إخلاء الشهر الماضي، وسجل الزمن المستهدف، لكن 12 موظفاً تأخروا 6 دقائق بلا سبب مفهوم.',
      scenarioEn: 'An evacuation drill was run last month and met its target time, but 12 employees arrived 6 minutes late with no apparent reason.',
      question: 'كيف تُعالج هذه النتيجة مهنياً؟',
      questionEn: 'How should this result be handled professionally?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحليل أسباب التأخر في كل نقطة وتصحيحها (اتساع نقطة زحام، باب مقفل…) وتعديل الإجراء',
          textEn: 'Analyze the causes of the delay at each point and fix them (a crowding point, a locked door…), and adjust the procedure',
          isCorrect: true,
          explanation: 'التمرين اختبار حقيقي للنظام: قراءة السبب الجذري في التكوين المادي أو الإجرائي يصيبك حيث يعيش الخطأ.',
          explanationEn: 'The drill is a real test of the system: reading the root cause in the physical or procedural setup hits exactly where the error lives.',
        },
        {
          text: 'توجيه إنذار للاثني عشر وتوزيع جزاءات تثبت الجدية',
          textEn: 'Send a warning to the twelve and hand out penalties to show seriousness',
          isCorrect: false,
          explanation: 'اللوم لا يكشف خلل النظام الذي سبّب التأخر — يُحلل السبب أولاً ثم يُعالج ربما بعض الأفراد فعلياً.',
          explanationEn: 'Blame does not reveal the system defect that caused the delay — the cause is analyzed first, then some individuals are possibly dealt with afterward.',
        },
        {
          text: 'إخفاء النتيجة لتجنب إثارة النقد داخل الإدارة',
          textEn: 'Hide the result to avoid provoking criticism within the department',
          isCorrect: false,
          explanation: 'التمرين غرضه كشف الضعف ومعالجته؛ إخفاء النتيجة يبقي الخلل ساكناً إلى الطوارئ الحقيقية.',
          explanationEn: 'The drill exists to reveal and fix weakness; hiding the result leaves the defect dormant until the real emergency.',
        },
        {
          text: 'اختصار الزمن المستهدف ليطابق النتيجة القائمة',
          textEn: 'Shorten the target time to match the recorded result',
          isCorrect: false,
          explanation: 'الهدف ليس ورقياً يطوى على وضعه — المقارنة تكشف الفجوة الحقيقية وتوجّه الإصلاح.',
          explanationEn: 'The target is not paperwork folded onto itself — the comparison reveals the real gap and directs the fix.',
        },
      ],
    },
  ],
};