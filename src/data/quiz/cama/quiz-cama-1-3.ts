import type { QuizBank } from '../types';

export const quizCama13: QuizBank = {
  id: 'quiz-cama-1-3',
  questions: [
  {
    scenario: 'يترأس المدير التنفيذي لشركة صناعية لجنة الحوكمة العليا لإدارة الأصول. في اجتماعها الأول، طلب من جميع الأعضاء تحديد المسؤوليات والصلاحيات لضمان عدم تداخل القرارات.',
    scenarioEn: 'The CEO of an industrial company chairs the senior governance committee for asset management. In its first meeting, he asked all members to define the responsibilities and authorities to ensure that decisions do not overlap.',
    question: 'ما هو الأداة التنظيمية الأساسية التي توزع المسؤوليات والصلاحيات بوضوح في نظام إدارة الأصول وفق ISO 55001؟',
    questionEn: 'What is the essential organizational tool that clearly allocates responsibilities and authorities in an asset management system according to ISO 55001?',
    difficulty: 'سهل',
    options: [
      {
        text: 'مصفوفة RACI (Responsible, Accountable, Consulted, Informed) التي تحدد الدور لكل صاحب مصلحة في كل عملية.',
        textEn: 'The RACI matrix (Responsible, Accountable, Consulted, Informed) that defines the role of each stakeholder in every process.',
        isCorrect: true,
        explanation: 'مصفوفة RACI هي الأداة المعتمدة في معايير الحوكمة لتوزيع المسؤوليات: من ينفذ (R)، من يساءل (A)، من يُستشار (C)، ومن يُبلغ (I).',
        explanationEn: 'The RACI matrix is the tool adopted in governance standards to allocate responsibilities: who executes (R), who is accountable (A), who is consulted (C), and who is informed (I).',
      },
      {
        text: 'قائمة بأسماء الموظفين وأرقام هواتفهم.',
        textEn: 'A list of employee names and their phone numbers.',
        isCorrect: false,
        explanation: 'قائمة الاتصال لا تحدد المسؤوليات أو الصلاحيات.',
        explanationEn: 'A contact list does not define responsibilities or authorities.',
      },
      {
        text: 'هيكل تنظيمي يوضح التقارير الإدارية فقط.',
        textEn: 'An organizational structure that shows only the administrative reporting lines.',
        isCorrect: false,
        explanation: 'الهيكل التنظيمي يوضح التسلسل الإداري لكنه لا يوزع المسؤوليات العملية لكل مهمة.',
        explanationEn: 'The organizational structure shows the administrative hierarchy but does not allocate the operational responsibilities for each task.',
      },
      {
        text: 'قانون داخلي يمنع أي تدخل من خارج قسم الصيانة.',
        textEn: 'An internal regulation that prevents any intervention from outside the maintenance department.',
        isCorrect: false,
        explanation: 'العزل لا يعني الحوكمة؛ الحوكمة تعني المشاركة والتنسيق الفعال.',
        explanationEn: 'Isolation does not mean governance; governance means participation and effective coordination.',
      }
    ]
  },
  {
    scenario: 'اثناء مراجعة نظام الحوكمة، اكتشف فريق التدقيق الداخلي أن 3 مشاريع صيانة كبرى تنفذت دون موافقة لجنة إدارة الأصول، رغم أن السياسة تطالب بذلك.',
    scenarioEn: 'During a review of the governance system, the internal audit team discovered that 3 major maintenance projects were executed without the approval of the asset management committee, even though the policy requires that.',
    question: 'ما هو التأثير المحتمل لهذا الإخلال على نظام إدارة الأصول؟',
    questionEn: 'What is the potential impact of this breach on the asset management system?',
    difficulty: 'متوسط',
    options: [
      {
        text: 'انعدام المساءلة والرقابة على القرارات الكبرى، مما قد ينتج عنه استثمارات غير متوافقة مع الاستراتيجية وإهدار للموارد.',
        textEn: 'A lack of accountability and oversight over major decisions, which may result in investments that are not aligned with the strategy and a waste of resources.',
        isCorrect: true,
        explanation: 'غياب موافقة لجنة الحوكمة يعني انعدام الرقابة الاستراتيجية، وهذا يهدد اتساق القرارات مع أهداف المؤسسة ويرفع المخاطر المالية والتشغيلية.',
        explanationEn: 'The absence of the governance committee\u2019s approval means the absence of strategic oversight, which threatens the consistency of decisions with the organization\u2019s objectives and raises financial and operational risks.',
      },
      {
        text: 'لا تأثير لأن_projects أنجزت بنجاح.',
        textEn: 'There is no impact because the projects were completed successfully.',
        isCorrect: false,
        explanation: 'نجاح تنفيذ المشروع لا يبرر تجاوز إجراءات الحوكمة؛ المخاطر قد تظهر في مشاريع لاحقة.',
        explanationEn: 'The successful execution of a project does not justify bypassing the governance procedures; the risks may appear in later projects.',
      },
      {
        text: 'يجب إلغاء جميع المشاريع المنفذة وبدءها من الصفر.',
        textEn: 'All executed projects should be cancelled and started from scratch.',
        isCorrect: false,
        explanation: 'هذا رد فعل مفرط؛ المطلوب تطوير إجراءات الحوكمة وتطبيقها على المشاريع القادمة.',
        explanationEn: 'This is an excessive reaction; what is required is to improve the governance procedures and apply them to the coming projects.',
      },
      {
        text: 'يجب فصل العاملين على المشاريع الثلاثة.',
        textEn: 'The employees working on the three projects should be dismissed.',
        isCorrect: false,
        explanation: 'العقوبة لا تحل المشكلة الجذرية في ضعف الحوكمة والأنظمة.',
        explanationEn: 'Punishment does not solve the root problem of weak governance and systems.',
      }
    ]
  },
  {
    scenario: 'تريد إدارة شركة طاقة تعديل هيكلها التنظيمي لإدارة الأصول لتتوافق مع متطلبات ISO 55001. المدير يريد دمج أقسام الصيانة والإنتاج والجودة تحت هيكل واحد.',
    scenarioEn: 'The management of an energy company wants to modify its organizational structure for asset management to align with the ISO 55001 requirements. The manager wants to merge the maintenance, production, and quality departments under one structure.',
    question: 'ما هو المبدأ التنظيمي الذي يجب مراعاته عند إعادة هيكلة إدارة الأصول وفق ISO 55001؟',
    questionEn: 'What is the organizational principle that should be observed when restructuring asset management according to ISO 55001?',
    difficulty: 'صعب',
    options: [
      {
        text: 'يجب أن يراعي الهيكل الجديد السياق المؤسسي ويتضمن مسارات اتصال واضحة وصلاحيات محددة لضمان تنسيق الفعاليات المؤسسية.',
        textEn: 'The new structure must take the organizational context into account and include clear communication paths and defined authorities to ensure the coordination of organizational activities.',
        isCorrect: true,
        explanation: 'ISO 55001 يتطلب أن يكون الهيكل التنظيمي مناسباً لسياق المؤسسة ويتضمن مسارات اتصال واضحة وصلاحيات محددة. الدمج بدون تخطيط قد يخلق فوضى أكبر.',
        explanationEn: 'ISO 55001 requires the organizational structure to be appropriate to the organization\u2019s context and to include clear communication paths and defined authorities. Merging without planning may create greater chaos.',
      },
      {
        text: 'يجب نسخ الهيكل التنظيمي من أكبر شركة صناعية في العالم.',
        textEn: 'The organizational structure must be copied from the largest industrial company in the world.',
        isCorrect: false,
        explanation: 'الهيكل يجب أن يناسب سياق المؤسسة وpecific Needs لا يُنسخ من مؤسسة أخرى.',
        explanationEn: 'The structure must suit the organization\u2019s context and specific needs; it is not copied from another organization.',
      },
      {
        text: 'لا يمكن دمج الأقسام لأن كل قسم له طبيعة مختلفة.',
        textEn: 'The departments cannot be merged because each department has a different nature.',
        isCorrect: false,
        explanation: 'الدمج ممكن إذا أُعدّ بشكل صحيح مع تحديد واضح للمسؤوليات والصلاحيات.',
        explanationEn: 'Merging is possible if it is prepared correctly with a clear definition of responsibilities and authorities.',
      },
      {
        text: 'يجب الاحتفاظ بالهيكل الحالي وعدم أي تغيير.',
        textEn: 'The current structure should be kept without any change.',
        isCorrect: false,
        explanation: 'عدم التغيير قد يعني عدم الامتثال لمتطلبات ISO 55001.',
        explanationEn: 'Not changing may mean failing to comply with the ISO 55001 requirements.',
      }
    ]
  }
  ],
};

export default quizCama13;