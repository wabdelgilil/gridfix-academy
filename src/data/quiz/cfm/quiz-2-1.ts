import type { QuizBank } from '../types';

export const quiz21: QuizBank = {
  id: 'quiz-2-1',
  questions: [
    {
      scenario: 'عقدان مقترحان لنفس المساحة: الأول إيجار شهري أعلى لكن بدون تصعيد، والثاني إيجار أدنى بتصعيد سنوي 7%.',
      scenarioEn: 'Two leases proposed for the same space: the first has a higher monthly rent but no escalation, and the second has a lower rent with 7% annual escalation.',
      question: 'ما الطريقة الصحيحة للمقارنة العادلة بينهما؟',
      questionEn: 'What is the correct way to compare the two fairly?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مقارنة الإيجار الشهري الحالي فقط',
          textEn: 'Comparing only the current monthly rent',
          isCorrect: false,
          explanation: 'التصعيد المستقبلي يغير الصورة كلياً — المقارنة بالإيجار اللحظي خطأ كلاسيكي.',
          explanationEn: 'Future escalation changes the picture entirely — comparing by the immediate rent is a classic mistake.',
        },
        {
          text: 'خصم التدفقات النقدية المستقبلية (NPV) لكامل مدتهما بمعدل خصم مناسب',
          textEn: 'Discounting the future cash flows (NPV) of their full terms at a suitable discount rate',
          isCorrect: true,
          explanation: 'NPV يجعل أموال الغد قابلة للمقارنة بأموال اليوم مهما اختلف شكل العقدين.',
          explanationEn: 'NPV makes tomorrow\u2019s money comparable to today\u2019s money no matter how different the two leases look.',
        },
        {
          text: 'اختيار الأطول دائماً مهما كان',
          textEn: 'Always choosing the longer term whatever it is',
          isCorrect: false,
          explanation: 'المدة وحدها ليست معياراً؛ التكلفة والمخاطرة والتزامات الطرفين أهم.',
          explanationEn: 'Term alone is not a criterion; cost, risk, and both parties\u2019 obligations matter more.',
        },
        {
          text: 'المقارنة البصرية بنوع الأثاث في المبنى',
          textEn: 'A visual comparison by the building\u2019s furniture type',
          isCorrect: false,
          explanation: 'جودة اللمسة الظاهرية لا تعوّض تحليل الأرقام.',
          explanationEn: 'Apparent finish quality does not replace number analysis.',
        },
      ],
    },
    {
      scenario: 'عقد الإيجار الحالي يشمل الإيجار الأساسي فقط، والمالك يطالب بدفع مرافق حصة من صيانة المناطق المشتركة (CAM).',
      scenarioEn: 'The current lease includes only the base rent, and the landlord demands payment of utilities and a share of the common area maintenance (CAM).',
      question: 'كيف تتحقق من خلال مدارسة منطقية لمسؤولية الطرفين؟',
      questionEn: 'How do you verify, through a logical assessment of both parties\u2019 responsibilities?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'مراجعة شروط العقد: هل نوع الإيجار Gross أم Triple-Net؟ ومن يتحمل CAM والضرائب والتأمين؟',
          textEn: 'Review the lease terms: is it a Gross or Triple-Net lease? And who bears CAM, taxes, and insurance?',
          isCorrect: true,
          explanation: 'توزيع التكاليف (إيجار فقط أم خدمات كلها NNN) محدد في العقد — القراءة الدقيقة أولاً.',
          explanationEn: 'Cost allocation (rent only or all-inclusive NNN services) is defined in the lease — read carefully first.',
        },
        {
          text: 'الافتراض أن كل المطالب صحيحة وتدفع فوراً',
          textEn: 'Assuming every demand is valid and paying immediately',
          isCorrect: false,
          explanation: 'الدفع بلا مراجعة يفتح باب مطالبات غير مبررة لاحقاً.',
          explanationEn: 'Paying without review opens the door to unjustified claims later.',
        },
        {
          text: 'التفاوض فقط زمنياً دون النظر للعقد',
          textEn: 'Only negotiating over time without looking at the lease',
          isCorrect: false,
          explanation: 'الالتزامات التعاقدية هي أرضية التفاوض؛ تجاهلها يجعل جولات التفاوض ظلامية.',
          explanationEn: 'Contractual obligations are the negotiation ground; ignoring them makes the negotiation rounds blind.',
        },
        {
          text: 'إنهاء الإيجار فوراً',
          textEn: 'Terminating the lease immediately',
          isCorrect: false,
          explanation: 'الإنهاء المبكر قرار كبير يُحكَّم بالعقد ومواعيد الإنهاء وأرباحه.',
          explanationEn: 'Early termination is a major decision governed by the lease, its termination dates, and its returns.',
        },
      ],
    },
    {
      scenario: 'مبنى مستأجر يطلب المالك تجديداً لمدّة أطول، والشركة تقيس حاجتها الحالية للمساحة وتفكر في خيار الانتقال إلى مبنى أصغر.',
      scenarioEn: 'For a leased building, the landlord asks for a longer renewal, and the company is sizing its current space needs and considering moving to a smaller building.',
      question: 'ما المدخل الصحيح لقرار التجديد/الانتقال؟',
      questionEn: 'What is the correct input for the renewal/move decision?',
      difficulty: 'صعب',
      options: [
        {
          text: 'تحليل "Stay vs Move": تكلفة التجديد الممتدة مقابل تكلفة الانتقال والتأثيث والمساحة الأنسب',
          textEn: 'A "Stay vs Move" analysis: extended renewal cost versus the relocation, furnishing, and the most suitable space',
          isCorrect: true,
          explanation: 'قرار المساحة يكون بتقييم مالي ووظيفي متكامل: بقاء مقابل انتقال مع كل ما يترتب.',
          explanationEn: 'A space decision is made with an integrated financial and functional assessment: staying versus moving, with everything that follows.',
        },
        {
          text: 'البقاء دائماً لأن الانتقال صعب',
          textEn: 'Always stay because moving is hard',
          isCorrect: false,
          explanation: 'الانتقال صعب لكنه قد يكون الأوفر مالياً عند الحاجة لمهاصلة أصغر أو موقع أفضل.',
          explanationEn: 'Moving is hard, but it may be the financially better option when a smaller footprint or a better location is needed.',
        },
        {
          text: 'الانتقال دائماً لأن المكاتب الأصغر أوفر',
          textEn: 'Always move because smaller offices are cheaper',
          isCorrect: false,
          explanation: 'المسألة توازن كامل: التوفير المساحي مقابل تكلفة الانتقال والاضطراب.',
          explanationEn: 'It is a full balance: space savings versus the cost of moving and disruption.',
        },
        {
          text: 'اتخاذ قرار سريع ليكونون انطباع أخير',
          textEn: 'Making a quick decision for a final impression',
          isCorrect: false,
          explanation: 'هذا قرار رأسمالي يندم عليه؛ يقرأ بالبيانات لا بالانطباع.',
          explanationEn: 'This is a capital decision you would regret; it is read with data, not impressions.',
        },
      ],
    },
  ],
};

export default quiz21;