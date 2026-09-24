import type { QuizBank } from '../types';

export const quiz52: QuizBank = {
  id: 'quiz-5-2',
  questions: [
    {
      scenario: 'أظهر تقييم المخاطر أن احتمال حريق في مخزن المواد القابلة للاشتعال هو 4 من 5، وشدة الحريق لو وقع 5 من 5.',
      scenarioEn: 'A risk assessment shows that the likelihood of a fire in the flammable materials store is 4 of 5, and the severity of a fire if one occurred is 5 of 5.',
      question: 'ما درجة الخطر وما التصرف المناسب؟',
      questionEn: 'What is the risk score and the appropriate action?',
      difficulty: 'سهل',
      options: [
        {
          text: 'الدرجة 20 (حرج) — يُوقف العمل بالمخزن حتى تُزال الخطورة أو تُسيطر عليها',
          textEn: 'Score 20 (critical) — work in the store is suspended until the hazard is removed or controlled',
          isCorrect: true,
          explanation: '4 × 5 = 20، وهي في نطاق 15-25 الحرج: لا يُستأنف التشغيل قبل تدخل جوهري.',
          explanationEn: '4 × 5 = 20, which falls in the critical 15–25 range: operations must not resume before substantial intervention.',
        },
        {
          text: 'الدرجة 9 (متوسط) — يكفي تدريب العاملين وتحديث البطاقة',
          textEn: 'Score 9 (medium) — training the workers and updating the card suffices',
          isCorrect: false,
          explanation: 'حساب غير صحيح وتقليل خطير من شأن خطر باحتمال وشدة مرتفعين.',
          explanationEn: 'An incorrect calculation and a dangerous understatement of a hazard with high likelihood and severity.',
        },
        {
          text: 'الدرجة 5 (منخفض) — مجرد ملاحظة وتأجيل',
          textEn: 'Score 5 (low) — merely a note and postponement',
          isCorrect: false,
          explanation: 'الحساب خاطئ والتصرف غير مقبول لدرجة حرجة كهذه.',
          explanationEn: 'The calculation is wrong and the action is unacceptable for such a critical rating.',
        },
        {
          text: 'الدرجة 14 (مرتفع) — يكفي إجراء إداري بسيط',
          textEn: 'Score 14 (high) — a simple administrative measure suffices',
          isCorrect: false,
          explanation: 'الضرب الصحيح 4×5=20، وليس 14، وأقل من ذلك لا يكفي لموقف حرج.',
          explanationEn: 'The correct multiplication is 4×5=20, not 14, and anything less does not suffice for a critical situation.',
        },
      ],
    },
    {
      scenario: 'وجدت أن مولد الطوارئ الرئيسي يصدر ضوضاء تتجاوز الحد الآمن في غرفة تجاورها مكاتب.',
      scenarioEn: 'You find that the main emergency generator emits noise exceeding the safe limit in a room adjacent to offices.',
      question: 'أي أسلوب سيطرة يعدّ الأكثر فعالية من منظور هرم السيطرة؟',
      questionEn: 'Which control method is the most effective from the hierarchy of controls perspective?',
      difficulty: 'متوسط',
      options: [
        {
          text: 'تركيب عازل صوتي حول المولد أو نقله إلى غرفة منفصلة عازلة (سيطرة هندسية)',
          textEn: 'Install an acoustic enclosure around the generator or move it to a separate insulated room (engineering control)',
          isCorrect: true,
          explanation: 'الهندسة تعزل الأشخاص عن مصدر الخطر بدلاً من الاعتماد على سلوكهم أو وسائل حماية فردية.',
          explanationEn: 'Engineering isolates people from the hazard source instead of relying on their behavior or individual protective devices.',
        },
        {
          text: 'تزويد الموظفين بسدادات أذن (PPE)',
          textEn: 'Provide employees with earplugs (PPE)',
          isCorrect: false,
          explanation: 'PPE هو خط الدفاع الأخير، والأقل موثوقية لأنه يعتمد على الالتزام والاستخدام المستمر.',
          explanationEn: 'PPE is the last line of defense and the least reliable because it depends on compliance and consistent use.',
        },
        {
          text: 'تقصير دوام الموظفين في الغرفة المجاورة (إجراء إداري)',
          textEn: 'Shorten employees\u2019 shifts in the adjacent room (administrative control)',
          isCorrect: false,
          explanation: 'الإجراءات الإدارية متوسطة الفعالية، تبقى الخطورة موجودة ويعتمد تطبيقها على الانضباط.',
          explanationEn: 'Administrative measures are moderately effective; the hazard remains present and their application depends on discipline.',
        },
        {
          text: 'نشر لافتة تنصح بارتداء الحماية السمعية',
          textEn: 'Post a sign advising the wearing of hearing protection',
          isCorrect: false,
          explanation: 'اللافتة إجراء إداري ضعيف لا يزيل الخطر ولا يضمن الامتثال.',
          explanationEn: 'A sign is a weak administrative measure that neither removes the hazard nor guarantees compliance.',
        },
      ],
    },
    {
      scenario: 'رصدت مخاطر أربع: أ (درجة 18)، ب (درجة 7)، جـ (درجة 3)، د (درجة 12). الميزانية محدودة لمرحلة واحدة.',
      scenarioEn: 'You identified four risks: A (score 18), B (score 7), C (score 3), D (score 12). The budget is limited to one phase.',
      question: 'كيف ترتب الأولوية في المعالجة؟',
      questionEn: 'How do you prioritize treatment?',
      difficulty: 'صعب',
      options: [
        {
          text: 'أ ثم د ثم ب ثم جـ (تنازلياً حسب الدرجة)',
          textEn: 'A, then D, then B, then C (descending by score)',
          isCorrect: true,
          explanation: 'المصفوفة تحول التقدير إلى أرقام متجانسة، والترتيب التنازلي للدرجة هو بمثابة سلم الأولويات.',
          explanationEn: 'The matrix turns estimation into homogeneous numbers, and descending order by score acts as the priority ladder.',
        },
        {
          text: 'جـ ثم ب ثم د ثم أ لأن الأخف أسرع معالجة',
          textEn: 'C, then B, then D, then A because the lightest is fastest to treat',
          isCorrect: false,
          explanation: 'معالجة الأسهل أولاً يتجاهل تركيز أعظم الخسائر، والحادث الحرج يبقى قائماً.',
          explanationEn: 'Treating the easiest first ignores where the greatest losses are concentrated, and the critical hazard remains.',
        },
        {
          text: 'اختيار المخاطر التي تثير ضجة أكبر في الصحافة',
          textEn: 'Choose the risks that make the biggest stir in the press',
          isCorrect: false,
          explanation: 'الاهتمام الإعلامي ليس مقياساً موضوعياً؛ الأرقام من التقييم هي المرجع.',
          explanationEn: 'Media attention is not an objective measure; the numbers from the assessment are the reference.',
        },
        {
          text: 'معالجة كل المخاطر معاً من دون ترتيب',
          textEn: 'Treat all the risks together with no ordering',
          isCorrect: false,
          explanation: 'الموارد محدودة والترتيب بالدرجة يضمن أفضل عائد لكل وحدة جهد وميزانية.',
          explanationEn: 'Resources are limited, and ordering by score ensures the best return per unit of effort and budget.',
        },
      ],
    },
  ],
};