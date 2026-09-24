import type { QuizBank } from '../types';

export const quiz61: QuizBank = {
  id: 'quiz-6-1',
  questions: [
    {
      scenario: 'أوكلت إليك مسؤولية إعداد خطة طوارئ تشغيلية لمنشأة تتسع لمئات الموظفين.',
      scenarioEn: 'You are tasked with preparing an emergency action plan for a facility housing hundreds of employees.',
      question: 'ما الخطوة الأولى الصحيحة لبناء خطة يلتزم بها الناس فعلاً؟',
      questionEn: 'What is the correct first step for building a plan people will actually follow?',
      difficulty: 'سهل',
      options: [
        {
          text: 'تحديد السيناريوهات الواردة (حريق، زلزال، انقطاع كهرباء…) والاستجابة المناسبة لكل منها',
          textEn: 'Identify the plausible scenarios (fire, earthquake, power outage…) and the appropriate response for each',
          isCorrect: true,
          explanation: 'الخطة تبدأ بمعرفة ما قد يحدث؛ كل سيناريو له استجابة تختلف عن الآخر (إخلاء، احتماء، إغلاق).',
          explanationEn: 'The plan starts with knowing what may happen; each scenario has a response different from the others (evacuation, sheltering, lockdown).',
        },
        {
          text: 'طباعة الوثيقة وتوزيعها على المديرين قبل كل شيء',
          textEn: 'Print the document and distribute it to the managers before anything else',
          isCorrect: false,
          explanation: 'الوثيقة بلا سيناريوهات وأدوار وتدريب تبقى ورقة معلقة لا تعمل عند الحاجة.',
          explanationEn: 'A document without scenarios, roles, and training remains a paper pinned on a wall that does not work when needed.',
        },
        {
          text: 'شراء أنظمة إنذار متقدمة واعتبارها هي الخطة',
          textEn: 'Buy advanced alarm systems and consider them the plan',
          isCorrect: false,
          explanation: 'التقنية وسيلة لا خطة؛ تكتمل العناصر: سيناريوهات، أدوار، مسارات، تدريب.',
          explanationEn: 'Technology is a means, not a plan; the elements must be complete: scenarios, roles, routes, training.',
        },
        {
          text: 'الانتظار حتى تتعرف على مخاطر المنشأة خلال شهور التشغيل',
          textEn: 'Wait until you learn the facility risks during the first months of operation',
          isCorrect: false,
          explanation: 'الجاهزية تُبنى بالتخطيط المسبق المعتمد على أفضل تقدير متاح، لا بالتجربة والخطأ بعد الطوارئ.',
          explanationEn: 'Preparedness is built with advance planning based on the best available estimate, not by trial and error after an emergency.',
        },
      ],
    },
    {
      scenario: 'بعد انقطاع كهرباء أمس، اكتشفت أن نصف الموظفين لا يعرفون من يتلقى البلاغ ولا ماذا يفعلون.',
      scenarioEn: 'After a power outage yesterday, you discovered that half the employees do not know who receives the report or what to do.',
      question: 'ما الإجراء الأصح لتصحيح هذا الخلل في الجاهزية؟',
      questionEn: 'What is the correct action to fix this gap in preparedness?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'إسناد قائدة حادثة وحدها بوحدة القيادة، وتوزيع أدوار مكتوبة، وتدريب دوري يلزم الجميع',
          textEn: 'Assign a single incident commander in a unified command, distribute written roles, and run periodic training that includes everyone',
          isCorrect: true,
          explanation: 'الاستجابة الفاعلة تقوم على قيادة موحدة وأدوار متفق عليها وممارسة دورية تحولها إلى سلوك.',
          explanationEn: 'Effective response rests on unified command, agreed roles, and periodic practice that turns them into behavior.',
        },
        {
          text: 'توزيع رقم هاتف عام واحد والاكتفاء بإعلان في المنتدى الداخلي',
          textEn: 'Distribute one general phone number and suffice with an announcement on the internal forum',
          isCorrect: false,
          explanation: 'إعلان واحد دون أدوار ودون تدريب يترك الفوضى قائمة عند الطوارئ نفسها.',
          explanationEn: 'A single announcement without roles or training leaves the chaos standing when the emergency itself arrives.',
        },
        {
          text: 'توجيه اللوم لموظفين لم يقرأوا الخطة الموزعة سابقاً',
          textEn: 'Blame employees who did not read the previously distributed plan',
          isCorrect: false,
          explanation: 'المسؤولية أولاً على النظام: الأدوار والتدريب والتحديث، لا على إهمال الفرد دون بناء نظام.',
          explanationEn: 'Responsibility lies first with the system: roles, training, and updates — not on individual negligence without building a system.',
        },
        {
          text: 'تعليق خطة جديدة على لوحات الممرات فقط',
          textEn: 'Only hang a new plan on corridor boards',
          isCorrect: false,
          explanation: 'التعليق لا يقدم تدريباً ولم يثبت — الجاهزية تُثبت بالتمارين والدروس المستفادة منها.',
          explanationEn: 'Hanging provides no training and proves nothing — preparedness is proven through drills and the lessons learned from them.',
        },
      ],
    },
    {
      scenario: 'أثناء أزمة عاصفة، بدأت رسائل متضاربة تتحرك بين الموظفين، وتأخر قرار غلق المبنى ساعة كاملة.',
      scenarioEn: 'During a storm crisis, conflicting messages began circulating among employees, and the decision to close the building was delayed a full hour.',
      question: 'ما الأداة التي كانت ستمنع هذا الارتباك لو وُجدت من قبل؟',
      questionEn: 'What mechanism would have prevented this confusion had it existed beforehand?',
      difficulty: 'صعب',
      options: [
        {
          text: 'وحدة قيادة حادثة موحدة، وقناة تواصل رسمية واحدة، ومسؤول إعلان واحد واضح',
          textEn: 'A unified incident command, one official communication channel, and one clear announcement authority',
          isCorrect: true,
          explanation: 'التواصل الناجح في الأزمات يمر بقناة واحدة موثوقة وقيادة محددة؛ تُقتل الشائعات بمعلومات سريعة وصحيحة.',
          explanationEn: 'Successful crisis communication flows through one trusted channel and defined command; rumors are killed with fast, accurate information.',
        },
        {
          text: 'تفويض كل قسم بإعلان ما يراه في حسابه الرسمي',
          textEn: 'Delegate each department to announce what it sees fit on its official account',
          isCorrect: false,
          explanation: 'تعدد مصادر الإعلان سبب الارتباك نفسه — تُوحَّد الرسالة وتحدَّث لتُثق بها القاعدة.',
          explanationEn: 'Multiple announcement sources are the cause of the confusion itself — the message must be unified and updated so the audience trusts it.',
        },
        {
          text: 'الاعتماد على التواصل الشفهي بين الموظفين الموجودين في المبنى',
          textEn: 'Rely on verbal communication among the employees present in the building',
          isCorrect: false,
          explanation: 'الشفهي يتقرقر مع التوتر ويغيب عنه من ليس في ذات الغرفة؛ المعلومة الدقيقة المكتوبة ضرورة.',
          explanationEn: 'Verbal communication breaks down under stress and misses those not in the same room; accurate written information is essential.',
        },
        {
          text: 'إعداد هاتف مخصص للأزمة دون تحديد من يجيب عنه',
          textEn: 'Prepare a dedicated crisis phone without specifying who answers it',
          isCorrect: false,
          explanation: 'الحاجة إلى ملكية واضحة للمعلومة: من يقرر، ومن يعلن، ومن يتحدث للجميع وبأي مصداقية.',
          explanationEn: 'The need is clear ownership of information: who decides, who announces, and who speaks to everyone and with what credibility.',
        },
      ],
    },
  ],
};