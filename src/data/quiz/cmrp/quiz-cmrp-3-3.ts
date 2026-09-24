import type { QuizBank } from '../types';

export const quizCmrp33: QuizBank = {
  id: 'quiz-cmrp-3-3',
  questions: [
  {
    scenario: 'تعرضت مضخة رئيسية لكسر مفاجئ في العمود الدوار (Shaft Breakage). كشف الفحص الميكانيكي الأولي أن العمود تعرض لإجهاد التواء حاد ناتج عن عدم محاذاة العمودين (Misalignment). قام الفني باستبدال العمود وتشغيل المضخة فوراً دون أي إجراء إضافي.',
    scenarioEn: 'A main pump experienced a sudden shaft breakage. The initial mechanical inspection revealed that the shaft suffered severe torsional stress caused by shaft misalignment. The technician replaced the shaft and restarted the pump immediately without any further action.',
    question: 'وفقاً لمبادئ تحليل الأسباب الجذرية (RCA) في معايير SMRP، في أي مستوى توقف هذا الإجراء ولماذا يُعد تحليلاً فاشلاً؟',
    questionEn: 'Per the principles of Root Cause Analysis (RCA) in SMRP standards, at what level did this action stop, and why is it considered a failed analysis?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'توقف عند مستوى "السبب المادي الفيزيائي (Physical Cause)" فقط دون البحث عن السبب الإجرائي والمؤسسي الكامن (Latent Cause)؛ وسيتكرر كسر العمود حتماً لأن الفنيين لم يدربوا على أجهزة المحاذاة بالليزر أو لا يمتلكون إجراء عمل قياسي مكتوب (SOP).',
        textEn: 'It stopped at the physical cause level only, without searching for the procedural and latent institutional cause; the shaft breakage will inevitably recur because technicians were not trained on laser alignment devices or lack a written standard operating procedure (SOP).',
        isCorrect: true,
        explanation: 'التحقيق الناجح لـ RCA لا يتوقف عند معرفة "ماذا انكسر" (السبب المادي)، بل يخترق للوصول إلى "السبب الكامن المؤسسي (Latent/System Cause)". معرفة أن هناك عدم محاذاة لا تمنع تكرار العطل إلا إذا عرفنا: لماذا لم يقم الفني بضبط المحاذاة؟ هل جهاز الليزر غير متوفر؟ هل تنعدم إجراءات العمل المكتوبة؟ هذا هو جوهر SMRP.',
        explanationEn: 'A successful RCA investigation does not stop at knowing "what broke" (the physical cause), but penetrates to the latent/system cause. Knowing that misalignment exists does not prevent failure recurrence unless we know: why did the technician not perform alignment? Is the laser device unavailable? Are written work procedures absent? This is the essence of SMRP.',
      },
      {
        text: 'إجراء ناجح ومكتمل 100% لأن استبدال القطعة المكسورة يعيد المضخة للعمل فوراً.',
        textEn: 'A successful, 100% complete action because replacing the broken part restores the pump immediately.',
        isCorrect: false,
        explanation: 'هذا علاج للأعراض السطحية يضمن تكرار نفس العطل في غضون أسابيع.',
        explanationEn: 'This treats surface symptoms and guarantees the same failure recurs within weeks.',
      },
      {
        text: 'توقف عند السبب البشري ويجب خصم جزء من راتب الفني فوراً.',
        textEn: 'It stopped at the human cause, and part of the technician\'s salary must be deducted immediately.',
        isCorrect: false,
        explanation: 'لوم وتوبيخ الأشخاص ممارسة خاطئة تحاربها SMRP وتخفي الأسباب النظامية الحقيقية.',
        explanationEn: 'Blaming and reprimanding people is a wrong practice that SMRP rejects and that hides the real systemic causes.',
      },
      {
        text: 'يجب استبدال العمود بآخر مصنوع من الخشب لتقليل وزن المضخة.',
        textEn: 'The shaft should be replaced with a wooden one to reduce the pump\'s weight.',
        isCorrect: false,
        explanation: 'اقتراح مضحك يخالف مبادئ الهندسة الميكانيكية.',
        explanationEn: 'A ridiculous suggestion violating mechanical engineering principles.',
      }
    ]
  },
  {
    scenario: 'عند تطبيق تقنية 5-Whys للتحقيق في تسرب كيميائي من صمام، وصل الفريق للنتيجة التالية:\n1. لماذا تسرب؟ لأن الحشوة تمزقت.\n2. لماذا تمزقت؟ لعدم ربط المسامير بعزم كافٍ.\n3. لماذا لم تربط؟ لأن الفني استخدم مفتاح ربط يدوي عادي.\n4. لماذا لم يستخدم مفتاح العزم (Torque Wrench)؟ لعدم توفره في الورشة.\n5. لماذا لم يتوفر؟ لعدم وجود سياسة شراء لأدوات الصيانة الدقيقة.',
    scenarioEn: 'When applying the 5-Whys technique to investigate a chemical leak from a valve, the team reached the following result:\n1. Why did it leak? Because the gasket tore.\n2. Why did it tear? Because the bolts were not tightened with sufficient torque.\n3. Why were they not tightened? Because the technician used an ordinary manual wrench.\n4. Why did he not use a torque wrench? Because it was unavailable in the workshop.\n5. Why was it unavailable? Because there is no purchasing policy for precision maintenance tools.',
    question: 'ما هو التصنيف الهندسي الصحيح لنتيجة السؤال رقم (5) وفقاً لأدبيات SMRP؟',
    questionEn: 'What is the correct engineering classification of the result of question (5) per SMRP literature?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'سبب كامن ومؤسسي (Latent / Organizational Root Cause) في نظام الإدارة والمشتريات، وحله يمنع تكرار التسرب في جميع صمامات المصنع وليس هذا الصمام فقط.',
        textEn: 'A latent organizational root cause in the management and procurement system; solving it prevents leak recurrence in all plant valves, not only this one.',
        isCorrect: true,
        explanation: 'السؤال الخامس كشف الخلل النظامي الكامن (Latent Root Cause) وهو غياب سياسة شراء أدوات العزم الدقيقة. معالجة هذا السبب الجذري المؤسسي عبر شراء مفاتيح عزم معتمدة وتدريب الجميع عليها يحمي المصنع بأكمله من تسرب الصمامات مستقبلاً.',
        explanationEn: 'The fifth question revealed the latent system weakness: the absence of a purchasing policy for precision torque tools. Treating this institutional root cause by purchasing certified torque wrenches and training everyone on them protects the entire plant from future valve leaks.',
      },
      {
        text: 'سبب فيزيائي مادي يخص نوعية الفولاذ المصنوع منه الصمام.',
        textEn: 'A physical cause concerning the quality of the steel the valve is made of.',
        isCorrect: false,
        explanation: 'غياب مفتاح العزم خلل إجرائي تنظيمي وليس خاصية مادية للصمام.',
        explanationEn: 'The absence of a torque wrench is an organizational procedural defect, not a physical property of the valve.',
      },
      {
        text: 'خطأ ناتج عن سوء الأحوال الجوية في بيئة المصنع.',
        textEn: 'An error caused by bad weather conditions in the plant environment.',
        isCorrect: false,
        explanation: 'لا علاقة للطقس بنقص أدوات الورشة.',
        explanationEn: 'Weather has nothing to do with missing workshop tools.',
      },
      {
        text: 'يجب الاكتفاء بنتيجة السؤال الأول واستبدال الحشوة التالفة فقط.',
        textEn: 'One should stop at the result of the first question and only replace the damaged gasket.',
        isCorrect: false,
        explanation: 'استبدال الحشوة دون ربطها بالعزم الصحيح سيؤدي إلى تمزقها مجدداً في أول تشغيل.',
        explanationEn: 'Replacing the gasket without tightening it to the correct torque will tear it again on first operation.',
      }
    ]
  },
  {
    scenario: 'في جلسة عصف ذهني لرسم مخطط عظمة السمكة (Ishikawa / Fishbone) لتحليل عطل متكرر لمكبس هيدروليكي، اقترح أحد المهندسين تصنيف الأسباب تحت تصنيفات الـ 6Ms الكلاسيكية.',
    scenarioEn: 'In a brainstorming session to draw an Ishikawa/fishbone diagram for a recurring hydraulic press failure, an engineer proposed classifying causes under the classic 6Ms categories.',
    question: 'ما هي العناصر الستة المعتمدة لفئات الـ 6Ms في مخطط عظمة السمكة الصناعي؟',
    questionEn: 'What are the six sanctioned elements of the 6Ms categories in the industrial fishbone diagram?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'الآلة (Machine)، الإنسان (Man/Operator)، المادة (Material)، الطريقة والإجراءات (Method)، القياس والمعايرة (Measurement)، والبيئة المحيطة (Mother Nature / Milieu).',
        textEn: 'Machine, Man/Operator, Material, Method, Measurement, and Mother Nature / Milieu.',
        isCorrect: true,
        explanation: 'الـ 6Ms هي التقسيم القياسي العالمي لمخطط إيشيكاوا الصناعي: الآلة (المعدات والقطع)، الإنسان (المهارات والتدريب)، المادة (الخامات والزيوت)، الطريقة (تعليمات التشغيل SOPs)، القياس (أجهزة الفحص والمعايرة)، والبيئة (الحرارة، الرطوبة، الأتربة).',
        explanationEn: 'The 6Ms are the world-standard classification of the industrial Ishikawa diagram: machine (equipment and parts), man (skills and training), material (raw materials and oils), method (SOP operating instructions), measurement (inspection and calibration instruments), and environment (heat, humidity, dust).',
      },
      {
        text: 'المال، التسويق، الإدارة، الصيانة، الأرباح، والمبيعات.',
        textEn: 'Money, marketing, management, maintenance, profits, and sales.',
        isCorrect: false,
        explanation: 'هذه مصطلحات تجارية لا تعبر عن فئات التحليل الميكانيكي لعظمة السمكة.',
        explanationEn: 'These are business terms that do not represent the mechanical analysis categories of the fishbone.',
      },
      {
        text: 'المحركات، المضخات، التروس، السيور، الفلاتر، والصمامات فقط.',
        textEn: 'Motors, pumps, gears, belts, filters, and valves only.',
        isCorrect: false,
        explanation: 'هذه مكونات مادية تتبع فئة واحدة فقط هي فئة (الآلة Machine).',
        explanationEn: 'These are physical components belonging to only one category: Machine.',
      },
      {
        text: 'الصباح، المساء، الليل، الشتاء، الصيف، والربيع.',
        textEn: 'Morning, evening, night, winter, summer, and spring.',
        isCorrect: false,
        explanation: 'تقسيم زمني عشوائي لا علاقة له بمنهجية إيشيكاوا الهندسية.',
        explanationEn: 'A random time division with no connection to the Ishikawa engineering methodology.',
      }
    ]
  },
  {
    scenario: 'لاحظ مدير الموثوقية أن مصنعه ينفذ تحقيقات RCA لأكثر من 50 عطلاً أسبوعياً بشكل عشوائي، مما أصاب المهندسين بالإرهاق وأدى لتقديم تحقيقات سطحية غير مفيدة.',
    scenarioEn: 'A reliability manager noticed that his plant conducts RCA investigations for more than 50 failures weekly in a random manner, exhausting the engineers and leading to superficial, useless investigations.',
    question: 'ما هي الممارسة الفضلى الموصى بها في معايير SMRP لتحديد متى يجب إطلاق تحقيق RCA متعمق؟',
    questionEn: 'What is the best practice recommended in SMRP standards for deciding when to launch an in-depth RCA investigation?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'وضع "معايير تحفيز محددة (RCA Trigger Criteria)" لإطلاق التحقيق، مثل: أي حادث يمس السلامة أو البيئة، أو أي عطل يسبب توقف إنتاج يتجاوز حداً مالياً معيناً، أو أي عطل متكرر للأصل المصنف فئة A.',
        textEn: 'Establishing specific RCA trigger criteria to launch an investigation, such as: any incident affecting safety or the environment, any failure causing a production stoppage exceeding a certain financial threshold, or any recurring failure of a tier-A asset.',
        isCorrect: true,
        explanation: 'لا يمكن عمل RCA لكل عطل صغير في المصنع؛ هذا يهدر طاقة الفريق (Analysis Paralysis). أفضل الممارسات في SMRP تقتضي وضع محفزات معلنة (Trigger Criteria) تبدأ عندها دراسة RCA فورية، مثل: كوارث السلامة، الخسائر المالية فوق 10 آلاف دولار، أو تكرار نفس العطل 3 مرات خلال شهر.',
        explanationEn: 'RCA cannot be performed for every minor failure in the plant; this wastes team energy (analysis paralysis). SMRP best practice requires declared trigger criteria at which an immediate RCA study begins, such as: safety catastrophes, financial losses above $10,000, or the same failure recurring 3 times within a month.',
      },
      {
        text: 'إجراء RCA إلزامي لكل مسمار ينكسر أو لمبة تحترق في المصنع.',
        textEn: 'Making RCA mandatory for every broken bolt or burned-out bulb in the plant.',
        isCorrect: false,
        explanation: 'هدر غير مبرر للوقت يصيب الكادر بالشلل التحليلي.',
        explanationEn: 'Unjustified time waste inflicting analysis paralysis on the staff.',
      },
      {
        text: 'إلغاء جميع تحقيقات RCA والاعتماد فقط على استبدال المعدات القديمة بجديدة.',
        textEn: 'Canceling all RCA investigations and relying only on replacing old equipment with new.',
        isCorrect: false,
        explanation: 'استبدال المعدات دون معرفة سبب الفشل سينقل نفس العيوب للمعدات الجديدة.',
        explanationEn: 'Replacing equipment without knowing the failure cause transfers the same defects to the new equipment.',
      },
      {
        text: 'تنفيذ RCA فقط إذا طلب العميل الخارجي ذلك كتابياً.',
        textEn: 'Executing RCA only if the external customer requests it in writing.',
        isCorrect: false,
        explanation: 'RCA أداة داخلية لتحسين الموثوقية والأرباح ولا تنتظر شكاوى العملاء.',
        explanationEn: 'RCA is an internal tool for improving reliability and profitability; it does not wait for customer complaints.',
      }
    ]
  },
  {
    scenario: 'بعد الانتهاء من تحقيق RCA لحادث توقف ضاغط هيدروجين، اقترح الفريق كتابة التقرير وأرشفته في ملفات الصيانة دون مشاركته مع المشغلين أو إدارات المصانع الأخرى التابعة للشركة.',
    scenarioEn: 'After completing an RCA investigation for a hydrogen compressor stoppage, the team proposed writing the report and filing it in the maintenance records without sharing it with the operators or the other plant departments of the company.',
    question: 'ما هي الخطوة الختامية الحاسمة لإغلاق دائرة التحسين المستمر وفقاً لفلسفة SMRP؟',
    questionEn: 'What is the decisive closing step to close the loop of continuous improvement per SMRP philosophy?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'مشاركة المعرفة والدروس المستفادة (Lessons Learned)، وتحديث إجراءات العمل القياسية (SOPs)، وتعديل خطة الصيانة الوقائية في الـ CMMS، وتطبيق الحلول على الآلات المماثلة في المنشأة لتعميم الفائدة.',
        textEn: 'Sharing knowledge and lessons learned, updating the standard operating procedures (SOPs), modifying the preventive maintenance plan in the CMMS, and applying the solutions to similar machines in the facility to generalize the benefit.',
        isCorrect: true,
        explanation: 'التحقيق الذي ينتهي بتقرير حبيس الأدراج هو جهد ضائع. معايير SMRP تشترط "المأسسة (Institutionalization)"؛ أي تحويل مخرجات التحقيق إلى تحديث فوري لكتيبات التشغيل، وتعديل بطاقات الصيانة الوقائية، ونشر الدروس المستفادة لمنع تكرار نفس السيناريو في أي وحدة أخرى.',
        explanationEn: 'An investigation that ends with a drawer-bound report is wasted effort. SMRP standards require "institutionalization": converting the investigation outputs into an immediate update of operating manuals, modifying the preventive maintenance cards, and publishing lessons learned to prevent the same scenario from recurring in any other unit.',
      },
      {
        text: 'حرق التقرير لضمان عدم وصوله إلى المفتشين الحكوميين.',
        textEn: 'Burning the report to ensure it never reaches government inspectors.',
        isCorrect: false,
        explanation: 'سلوك تضليلي خطير يخرق أخلاقيات المهنة ويعاقب عليه القانون.',
        explanationEn: 'A dangerous deceptive behavior violating professional ethics and punishable by law.',
      },
      {
        text: 'إغلاق التحقيق بمجرد توقيع مدير الصيانة دون أي تعديل في خطط الصيانة.',
        textEn: 'Closing the investigation once the maintenance manager signs, without any change to the maintenance plans.',
        isCorrect: false,
        explanation: 'التوقيع الشكلي دون تنفيذ الإجراءات التصحيحية يلغي قيمة الـ RCA تماماً.',
        explanationEn: 'A formal signature without implementing corrective actions completely nullifies the value of RCA.',
      },
      {
        text: 'مطالبة الشركة المصنعة بدفع تعويض مالي دون تغيير أي شيء في المصنع.',
        textEn: 'Demanding the manufacturer pay financial compensation without changing anything in the plant.',
        isCorrect: false,
        explanation: 'التعويض المالي لا يصلح أخطاء التشغيل والصيانة الداخلية.',
        explanationEn: 'Financial compensation does not fix internal operation and maintenance errors.',
      }
    ]
  }

  ],
};