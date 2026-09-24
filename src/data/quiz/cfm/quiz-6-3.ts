import type { QuizBank } from '../types';

export const quiz63: QuizBank = {
  id: 'quiz-6-3',
  questions: [
    {
      scenario: 'زملاء من الإدارات خلطوا بين خطة الطوارئ التشغيلية وخطة استمرارية الأعمال في اجتماع تخطيط.',
      scenarioEn: 'Colleagues from various departments mixed up the emergency action plan and the business continuity plan in a planning meeting.',
      question: 'ما الصياغة الأدق للفرق بين الاثنتين؟',
      questionEn: 'Which statement most precisely captures the difference between the two?',
      difficulty: 'سهل',
      options: [
        {
          text: 'خطة الطوارئ تحمي الناس في لحظة الحدث؛ وخطة الاستمرارية تعيد الخدمات الحيوية خلال زمن مستهدف بعده',
          textEn: 'The emergency plan protects people at the moment of the incident; the continuity plan restores the critical services within a target time afterward',
          isCorrect: true,
          explanation: 'الأولى استجابة فورية تحمي الشاغلين، والثانية ترتيط بالوظائف الحيوية وأهداف الاسترداد بعد انتهاء الحظة الحرجة.',
          explanationEn: 'The first is an immediate response that protects occupants; the second concerns the critical functions and the recovery targets after the critical moment has passed.',
        },
        {
          text: 'خطة الطوارئ تغطي الحريق فقط وخطة الاستمرارية تغطي الأمور المالية فقط',
          textEn: 'The emergency plan covers fire only and the continuity plan covers financial matters only',
          isCorrect: false,
          explanation: 'خطة الطوارئ تغطي كل السيناريوهات، وخطة الاستمرارية تشمل الوظائف والأنظمة، لا المالية فقط.',
          explanationEn: 'The emergency plan covers all scenarios, and the continuity plan covers functions and systems, not finance only.',
        },
        {
          text: 'خطة الاستمرارية بديل لخطة الطوارئ ولا حاجة لكلتيهما معاً',
          textEn: 'The continuity plan replaces the emergency plan, and both are not needed together',
          isCorrect: false,
          explanation: 'النظام المتكامل: خطة لحظة الحدث (الطوارئ) وخطة العودة (الاستمرارية) تعملان معاً ومتكاملتان.',
          explanationEn: 'The integrated system: a plan for the moment of the incident (emergency) and a plan for the return (continuity) work together and complement each other.',
        },
        {
          text: 'خطة الطوارئ تُكتب مرة واحدة ولا تحدث وخطة الاستمرارية تُحدَّث سنوياً فقط',
          textEn: 'The emergency plan is written once and never updated, and the continuity plan is updated annually only',
          isCorrect: false,
          explanation: 'كلتاهما تخضعان للتمرين والمراجعة والتحديث المستمر مع تغير الأعمال والمخاطر.',
          explanationEn: 'Both are subject to drills, review, and continuous updating as the business and the risks change.',
        },
      ],
    },
    {
      scenario: 'شركة تجارية لا تستطيع تحمل توقف نظام البيع عن العمل أكثر من يوم واحد، وتقبل فقدان بيانات ساعة واحدة على الأكثر.',
      scenarioEn: 'A retail company cannot tolerate the sales system being down for more than one day and accepts losing at most one hour of data.',
      question: 'ما الأهداف التي يجب أن تحددها خطة الاستمرارية لهذا النظام؟',
      questionEn: 'What targets should the continuity plan set for this system?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'RTO يوم واحد كأقصى وقت استرداد، مع نسخ احتياطي متواصل (ساعة) يحقق RPO المطلوب',
          textEn: 'An RTO of one day as the maximum recovery time, with continuous hourly backup that meets the required RPO',
          isCorrect: true,
          explanation: 'القيود تُترجم مباشرة: الزمن الأقصى يُعرف بـ RTO، وفقد البيانات بأقصى ساعة يُدار بتواتر نسخ يقابله RPO.',
          explanationEn: 'The constraints translate directly: the maximum time is expressed as the RTO, and data loss of at most an hour is managed by a backup frequency matched by the RPO.',
        },
        {
          text: 'تحديد RTO بثلاثة أيام ونسخ أسبوعية لأنهما أرخص تنفيذاً',
          textEn: 'Set the RTO at three days with weekly backups because they are cheaper to implement',
          isCorrect: false,
          explanation: 'الأهداف تُحدد باحتياج الأعمال لا بالتكلفة الأسهل؛ ثم تُختار تقنية تحققها دون تجاوز الحدود.',
          explanationEn: 'The targets are set by business need, not by the cheapest approach; then the technology that meets them is selected without exceeding the limits.',
        },
        {
          text: 'الاكتفاء بشراء سيرفر جديد عند الكارثة دون تحديد أهداف',
          textEn: 'Simply buy a new server at the disaster without setting targets',
          isCorrect: false,
          explanation: 'المعدة دون أهداف زمنية لا تضمن العودة بالمدة المطلوبة — الأهداف تقاس على الخطة وليس على المشتريات.',
          explanationEn: 'Equipment without time targets does not guarantee return within the required period — the targets are measured against the plan, not the purchases.',
        },
        {
          text: 'تدوين خطط استرداد مشتركة لكل الأنظمة بلا تمييز الحرجية',
          textEn: 'Write shared recovery plans for all systems without distinguishing criticality',
          isCorrect: false,
          explanation: 'لكل عملية ظروفها: نفسا لأهدافها. التمييز بالحرجية يجعل موارد الاسترداد تذهب للأهم أولاً.',
          explanationEn: 'Each process has its own conditions and its own targets. Ranking by criticality sends the recovery resources to the most important first.',
        },
      ],
    },
    {
      scenario: 'انقطع مركز بيانات الشركة فجراً، وتخصص الشركة قاعدة كاملة لتفعيل الاسترداد في موقع بديل.',
      scenarioEn: 'The company data center goes down at dawn, and the company devotes a full team to activating the recovery at an alternative site.',
      question: 'ما الترتيب المهني الأصح للتعامل مع هذه الأزمة؟',
      questionEn: 'What is the correct professional approach to handling this crisis?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تفعيل خطة الاسترداد (DR) في الموقع البديل وفق RTO/RPO المحددين مسبقاً، وتتبّع النتائج بالوثائق المطلوبة',
          textEn: 'Activate the disaster recovery (DR) plan at the alternative site per the pre-defined RTO/RPO and track the results with the required documentation',
          isCorrect: true,
          explanation: 'الاستجابة المحتم تضبط بالنصوص: أهداف معلنة، خطوات معتمدة، وتتبّع يقيس الالتزام الدرامي بالزمن المحدد.',
          explanationEn: 'The emergency response is governed by the documented plan: declared targets, approved steps, and tracking that measures the commitment to the specified time.',
        },
        {
          text: 'انتظار اجتماع صباحي لمناقشة الخيارات وتحليلها من جديد',
          textEn: 'Wait for a morning meeting to discuss and re-analyze the options',
          isCorrect: false,
          explanation: 'القرارات المهمة تُتخذ مسبقاً في الخطة الطبيعية، فور وقوع الحدث يبدأ التنفيذ لا النقاش الاستشرافي.',
          explanationEn: 'The important decisions are made in advance in the plan; once the incident occurs, execution begins, not speculative discussion.',
        },
        {
          text: 'الاستعانة بمورد خارجي لبناء استرداد مؤقت من الصفر',
          textEn: 'Engage an external provider to build a temporary recovery from scratch',
          isCorrect: false,
          explanation: 'إذا لم تكن الخطة والموقع مبنيتين وتدربت عليهما مسبقاً، فالتجربة الارتجالية تُهدر الساعات الحاسمة.',
          explanationEn: 'If the plan and the site were not built and drilled in advance, improvised ad-hoc attempts waste the critical hours.',
        },
        {
          text: 'أخذ نسخة احتياطية من أمس وتحميلها على حاسوب مكتب تجاري',
          textEn: 'Take yesterday\u2019s backup and load it onto a commercial office computer',
          isCorrect: false,
          explanation: 'النسخة من تلقاء نفسها بلا عملية أهداف واسترداد مخططة لا تستوفي RTO ولا تحقق جاهزية الأنظمة والبيانات.',
          explanationEn: 'A backup by itself, without a process of targets and planned recovery, does not meet the RTO nor achieve the readiness of the systems and data.',
        },
      ],
    },
  ],
};