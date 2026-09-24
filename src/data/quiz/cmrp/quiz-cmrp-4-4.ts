import type { QuizBank } from '../types';

export const quizCmrp44: QuizBank = {
  id: 'quiz-cmrp-4-4',
  questions: [
  {
    scenario: 'إن الفريق المعني بجدولة أسبوع أعمال الصيانة أمامه مضاعفة 12 طلب عمل مفتوحاً للتنفيذ، وتوفر الفنيين 6 لمنجزين، ووردية الإنتاج تسمح فقط بواحدة نافذتين توقف نهارية.',
    scenarioEn: 'The weekly scheduling team has 12 open work orders to execute, six available technicians, and the production shift allows only one daytime stoppage window.',
    question: 'ما الترتيب الأكثر احترافاً الذي يجب الاعتماد عليه لإرسال أوامر العمل للتنفيذ؟',
    questionEn: 'What is the most professional order to rely on when dispatching the work orders for execution?',
    difficulty: 'صعب',
    options: [
      {
        text: 'مراجعة قيد السلامة والأولوية الحرجة، مع أعمال الخمول المخططة في الشباك المتاح، ثم أعمال المنوبة مع الإنتاج في نافذتي التوقف.',
        textEn: 'Reviewing the safety and critical-priority queue, with the planned idle works in the available window, then the shift works with production in the stoppage window.',
        isCorrect: true,
        explanation: 'تحقيق الأسبوع الفعال يبدأ من قيد الصحة والسلامة (الصفر حرج لم يتبقى)، ثم الأصول الحرجة لإعادة الإنتاج، ثم نافذة الإنتاج المنسقة، وهكذا يتم عصر الطاقة المتاحة.',
        explanationEn: 'Effective week scheduling starts with the safety and health queue (zero critical remaining), then the critical assets to restore production, then the coordinated production window as the capacity is squeezed.',
      },
      {
        text: 'أسهل الطلبات أولاً بغض النظر عن أي حساسية.',
        textEn: 'The easiest requests first regardless of any criticality.',
        isCorrect: false,
        explanation: 'السهولة ليست هي الأثر، بل ينبغي خفض الأثر أولاً.',
        explanationEn: 'Ease is not the impact; reducing impact comes first.',
      },
      {
        text: 'توزيع كل الطلبات على المناوبة مباشرة دون أي وقت توقف استجابة.',
        textEn: 'Distributing all the orders to the shift directly with zero response time.',
        isCorrect: false,
        explanation: 'التوزيع العشوائي يتجاوز الحاجة الأساسية لتوافق نافذة التوقف مع أثر الأصل.',
        explanationEn: 'Random distribution bypasses the fundamental need to match the stoppage window with the asset impact.',
      },
      {
        text: 'القضية إلغاء الجدولة الأسبوعية بمجرد ورود أي طوارئ الأسبوع السابق.',
        textEn: 'The issue is to cancel the weekly schedule entirely when an emergency occurred the previous week.',
        isCorrect: false,
        explanation: 'الطوارئ تؤجل وتعيد ترتيب الأولويات وتنقيح المهارات، ولا تنسخ الأسبوع.',
        explanationEn: 'An emergency delays and re-orders the priorities and refines skills; it does not copy-paste the whole week.',
      }
    ]
  },
  {
    scenario: 'فني الاختبار (Test Technician) يقوم بأداء مهمة مزدوجة في توقيت واحد، فالأكاديمية الاستراتيجية تؤكد أن الموثوقية في المصانع تعتمد على شخصيات موثوقة مطلعة تنجز أعمالها والأخرى الجارية.',
    scenarioEn: 'The test technician performs a simultaneous dual task while the strategic academy insists that reliability in plants depends on informed, reliable personalities completing their assigned work alongside ongoing other works.',
    question: 'ما هي الطريقة المُثلى لضمان توافق الحياة الآمنة لعمليات الصيانة دون المساس بالمواصفات؟',
    questionEn: 'What is the optimal way to ensure alignment of the safe life of maintenance operations without compromising the specifications?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'رفع مستوى المعيار التكنولوجي: فحص الأبعاد بمؤشرات رقمية دقيقة، وضبط الالتزام بدليل معايرة الجهاز، والتحقق من عناصر تصحيح الخطأ في مختبر مخصص.',
        textEn: 'Raising the technological standard: measuring dimensions with precise digital indicators, aligning compliance with the device calibration manual, and verifying error-correction elements in a dedicated laboratory.',
        isCorrect: true,
        explanation: 'الوثوق بالحالة البشرية وحدها لا يكفي لقياس حرج، بل اللجوء لأدوات قراءة عالية الدقة في بيئة قياس مضمونة تحسم ما إذا كان التركيب مقبولا أم مرفوضاً هندسياً.',
        explanationEn: 'Trusting the human condition alone is not enough for a critical measurement; resorting to high-precision reading tools in a certified measurement environment decides whether the assembly is accepted or rejected by engineering.',
      },
      {
        text: 'الاعتماد على اختبار بسيط نتبعه دائماً دون أي معايرة للأجهزة.',
        textEn: 'Relying on a simple test we always follow with no device calibration.',
        isCorrect: false,
        explanation: 'معايرة الأدوات هي دفاع أساسي عن رقم القياس لا يمكن تخطيه.',
        explanationEn: 'Tool calibration is the fundamental defense of the measured number and cannot be skipped.',
      },
      {
        text: 'تفويض أي عابر سبيل للتحقق من الأبعاد بمجرد أنه "يرسم في الدفتر".',
        textEn: 'Delegating any passerby to verify the dimensions just because he "draws in the notebook".',
        isCorrect: false,
        explanation: 'تمييز موثوقية الشخص لا يعني ملء كتابة غير مختبرة للمواصفات الحرجة.',
        explanationEn: 'Marking a person\'s reliability does not mean filling a notebook with untested critical-spec writing.',
      },
      {
        text: 'كبر الأبعاد المقاسة والقيم استخدام السكك الحديدية للتفتيش فقط.',
        textEn: 'Enlarging the measured dimensions and using railway tracks for inspection only.',
        isCorrect: false,
        explanation: 'استخدام أسلوب مبالغ في التحقق الخاطئ يضر بالدقة الصحيحة.',
        explanationEn: 'Exaggerating the verification method harms the correct accuracy.',
      }
    ]
  },
  {
    scenario: 'طلب كبير من أبراج كهربائية عمل تصميم هندسي يفصل مراحل التنفيذ: مرحلة حاملة الامتداد، ثم مرحلة ملء الخلاطة، ثم مرحلة تشغيل زجاجات المياه.',
    scenarioEn: 'A large tower work order required an engineering design separating the execution stages: the span-carrying stage, then the mixer-filling stage, then the water-bottle filling operation stage.',
    question: 'ما هو أسلوب الجدولة المعتمد لمثل هذه المهام شديدة الاعتماد على التتابع الزمني المتكامل؟',
    questionEn: 'What is the adopted scheduling technique for such highly time-sequence-dependent tasks?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الجدولة الزمنية التسلسلية بالطريقة الحرجة (CPM / Critical Path Method) مع استخدام المسار الحرج والسباحة الراكدة (Float / Slack) في تخطيط أمر الشغل.',
        textEn: 'Critical Path Method (CPM) sequential time scheduling using the critical path and float/slack in the work order plan.',
        isCorrect: true,
        explanation: 'المهام المرتبطة بشروط تاقية (تتوقف نهايتها عند بداية سابقتها) تتطلب تحليلاً شبكياً يحسب أطول مسار وأقصى تأخير مقبول دون توقف التنفيذ.',
        explanationEn: 'Tasks with finish-to-start dependencies require network analysis computing the longest path and the maximum acceptable delay without halting execution.',
      },
      {
        text: 'توزيع المراحل أياما بدون أي تحليل مسارات أو علاقات ترابط.',
        textEn: 'Distributing the stages over days without any path or dependency analysis.',
        isCorrect: false,
        explanation: 'الترتيب بدون خرائط شبكية يقع سريعاً في الصدامات والفجوات.',
        explanationEn: 'Ordering without network maps quickly falls into clashes and gaps.',
      },
      {
        text: 'إلغاء الترتيب وتحويل كل ما هو مرحلي إلى مشروع مستقل منفصل بلا حدود.',
        textEn: 'Canceling the sequence and turning every staged item into a separate unbounded project.',
        isCorrect: false,
        explanation: 'التضخيم الإداري يكرر الجهد ولا يساعد على احترام التتابع الذي تفرضه الطبيعة الفنية.',
        explanationEn: 'Administrative inflation duplicates effort and does not respect the technical-nature sequence.',
      },
      {
        text: 'ربط التتابع برأي شخصي واحد كل أسبوع مرة مع إهمال الشبكة.',
        textEn: 'Tying the sequence to one personal opinion weekly while ignoring the network.',
        isCorrect: false,
        explanation: 'الرأي الفردي لا يصمد أمام معايير الحساب البرمجي للتعقيد التسلسلي.',
        explanationEn: 'A single opinion does not withstand the computation standards of serial complexity.',
      }
    ]
  },
  {
    scenario: 'سجلت مصفاة الفشل المتكرر لمزيد من المضخات (حمضية، ونفطية) في نظام أوامر العمل، واكتشفت فريقاً هندسياً أن الحشوات المطاطية تصفر عندما تُربط مع حلقات التحكم الذاتية.',
    scenarioEn: 'A refinery recorded recurring failures of more pumps (acidic and oil) in the work order systemcd and the engineering team discovered the rubber gaskets squeak when tightened together with the self-control rings.',
    question: 'ما هي إجراءات المصنع الأفضل لتعزيز هذه الحلقة الفنية؟',
    questionEn: 'What are the plant\'s best procedures to reinforce this technical loop?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'اعتماد معايير تصميم صريحة محددة للحشوات (المادة، السمك، درجة الحرارة القصوى، وجدول عزم الربط)، وتحديث مكتبة القطع في CMMS، وإضافة بند تدريب عملي للفنيين.',
        textEn: 'Adopting explicit design criteria for the gaskets (material, thickness, maximum temperature, and the torque tightening table), updating the CMMS parts library, and adding practical training modules for technicians.',
        isCorrect: true,
        explanation: 'تحلية الفشل تترجم إلى معايير ووثائق؛ يمنع انفراد كل فني بأذواقه الشخصية في التركيب، ويصبح الأمر قواعد مؤسسية موثقة للعزل وقطع الغيار الموحدة.',
        explanationEn: 'Reliability improvement translates into standards and documents; it prevents each technician\'s personal tastes from dominating installationsley and turns the matter into documented institutional rules for sealing and unified spare parts.',
      },
      {
        text: 'تغيير الحشوات كل شهر دون النظر لأي محددات تصميم أو قطع التسليح.',
        textEn: 'Changing the gaskets monthly with no regard for design limits or the armed cuts.',
        isCorrect: false,
        explanation: 'الاستبدال المتكرر دون معايير يجعل التكلفة ترتفع دون إغلاق السبب.',
        explanationEn: 'Frequent replacement with no standards raises the cost without closing the cause.',
      },
      {
        text: 'توزيع أنواع حشوات جديدة في كشف بدون أي مواصفات أو حفظ في CMMS.',
        textEn: 'Distributing new gasket types on a list without any specifications or CMMS storage.',
        isCorrect: false,
        explanation: 'النشرة الشفوية لا تحفظ ولا تحدث ولا يمكن تدقيقها لاحقاً.',
        explanationEn: 'An oral bulletin is not stored, updated, or auditable later.',
      },
      {
        text: 'الاكتفاء بمقابلة شفوية مع الفنيين ونشر الابتهاج بدون وثائق.',
        textEn: 'Settling for anoral meeting with the technicians and publishing cheer with no documents.',
        isCorrect: false,
        explanation: 'الاحتفال المعنوي لا يصنع نظام خبرة يحتذى دون توثيق للمعايير.',
        explanationEn: 'Moral celebration does not build a knowledge system to be emulated without documenting standards.',
      }
    ]
  }

  ],
};