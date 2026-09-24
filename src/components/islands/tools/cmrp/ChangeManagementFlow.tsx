import { useState } from 'react';

const steps = [
  {
    n: 1,
    title: 'خلق الإحساس بالإلحاح',
    desc: 'كسر الاطمئنان الكاذب بإظهار خسائر التوقف ومقارنة المنافسين وإثبات أن ثقافة رد الفعل تهدد الوظائف.',
    action: 'اعرض بيانات مالية موثقة لهدر الأعطال التفاعلية على الإدارة والفنيين معاً.',
    pitfall: 'الادعاء بأن المصنع يعمل هكذا منذ سنوات ولا داعي للتغيير.',
    check: 'هل يدرك غالبية الفريق أن البقاء على الوضع الراهن خطر حقيقي؟',
  },
  {
    n: 2,
    title: 'تشكيل التحالف القيادي',
    desc: 'فريق نواة يضم قادة مؤثرين من الصيانة والتشغيل والسلامة والإمداد يتمتعون بالسلطة والمصداقية.',
    action: 'اختر مدير الإنتاج ومهندس الاعتمادية ومشرفاً مخضرماً محبوباً لقيادة المبادرة معاً.',
    pitfall: 'قصر الفريق على مهندسي الصيانة فيبدو المشروع شأناً خاصاً بالورشة.',
    check: 'هل يضم الفريق قائداً مسموع الكلمة من كل إدارة معنية؟',
  },
  {
    n: 3,
    title: 'بناء الرؤية',
    desc: 'صياغة هدف بسيط وجذاب يُشرح في دقائق ويربط صحة المعدات بالأمان الوظيفي وراحة البال.',
    action: 'اكتب ميثاق اعتمادية من صفحة واحدة يحدد الهدف والموعد والمكسب للجميع.',
    pitfall: 'خطط ضخمة معقدة بلغة أكاديمية لا يفهمها الفنيون والمشغلون.',
    check: 'هل يستطيع أي فني شرح الرؤية بكلماته الخاصة؟',
  },
  {
    n: 4,
    title: 'توصيل الرؤية وحشد الدعم',
    desc: 'تكرار الرؤية عبر كل قناة: الطوابير الصباحية واللوحات البصرية والاجتماعات وقصص النجاح.',
    action: 'خصص عشر دقائق في بداية كل وردية لمناقشة تقدم الاعتمادية.',
    pitfall: 'الاكتفاء ببريد رسمي واحد وتوقع تغير السلوك تلقائياً.',
    check: 'هل سمع كل موظف بالرؤية أكثر من مرة ومن أكثر من مصدر؟',
  },
  {
    n: 5,
    title: 'تمكين العاملين وإزالة العقبات',
    desc: 'توفير الأدوات الدقيقة والتمويل وتبسيط السياسات التي تعاقب المبلِّغ عن العيوب.',
    action: 'جهز الحواسيب اللوحية المرتبطة بالنظام وبسّط إجراءات صرف قطع الغيار.',
    pitfall: 'مطالبة الفني بالعمل الدقيق مع رفض شراء مفاتيح العزم وأجهزة القياس.',
    check: 'هل يملك الفني كل ما يحتاجه للعمل الاستباقي فعلاً؟',
  },
  {
    n: 6,
    title: 'تحقيق المكاسب السريعة',
    desc: 'نتائج ملموسة خلال 60 إلى 90 يوماً على معدة حرجة بتكلفة منخفضة لإثبات الجدوى.',
    action: 'اقضِ على عطل متكرر في مضخة مزمنة بالمحاذاة الدقيقة ومانع تسرب ممتاز.',
    pitfall: 'انتظار الوفورات الكبرى بعد سنوات دون الاحتفال بالنجاحات الأولى.',
    check: 'هل لديك نصر واحد موثق بالأرقام تعرضه على الإدارة العليا؟',
  },
  {
    n: 7,
    title: 'ترسيخ المكتسبات',
    desc: 'استغلال الزخم لتوسيع التخطيط والجدولة على باقي الخطوط دون إعلان نصر مبكر.',
    action: 'حدّث خطط الصيانة القديمة ودرّب الدفعة الثانية من الفنيين والمشغلين.',
    pitfall: 'إعلان النصر بعد أول نجاح فيعود الجميع لثقافة إطفاء الحرائق.',
    check: 'هل توسع التطبيق بدل الاحتفال بالتوقف؟',
  },
  {
    n: 8,
    title: 'تثبيت الثقافة الجديدة',
    desc: 'ربط الترقية والمكافآت والتوظيف بالسلوك الاستباقي حتى تصبح الموثوقية طريقة العمل الطبيعية.',
    action: 'اجعل تقييم المشرفين مبنياً على غياب الأعطال وزمن المفتاح لا على بطولات الطوارئ الليلية.',
    pitfall: 'ضياع كل شيء برحيل الراعي الأول ما لم تُدوَّن الثقافة سياسة رسمية.',
    check: 'هل تستمر الممارسات الجديدة حتى لو تغير المدير؟',
  },
];

const adkar = [
  { id: 'awareness', letter: 'A', name: 'الوعي', hint: 'هل يعي الموظف لماذا يجب إنهاء ثقافة الطوارئ؟' },
  { id: 'desire', letter: 'D', name: 'الرغبة', hint: 'هل لديه دافع شخصي وما مكسبه من التغيير؟' },
  { id: 'knowledge', letter: 'K', name: 'المعرفة', hint: 'هل يعرف نظرياً كيف يستخدم الأدوات والنظام الجديد؟' },
  { id: 'ability', letter: 'A', name: 'القدرة', hint: 'هل يستطيع التطبيق عملياً دون خوف من الخطأ؟' },
  { id: 'reinforcement', letter: 'R', name: 'التعزيز', hint: 'هل يُكافأ على السلوك الجديد حتى لا ينتكس؟' },
];

export default function ChangeManagementFlow() {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<'kotter' | 'adkar'>('kotter');
  const [scores, setScores] = useState<Record<string, number>>({
    awareness: 4,
    desire: 3,
    knowledge: 2,
    ability: 2,
    reinforcement: 1,
  });

  const step = steps[index];
  const lowest = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];
  const lowestName = adkar.find((a) => a.id === lowest[0])?.name ?? lowest[0];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🎯 مسار إدارة التغيير — خطوات كوتر الثماني مع فحص أدكار
      </div>
      <div className="space-y-4 p-5">
        <div className="flex gap-2 rounded-xl bg-slate-50 p-1.5 text-xs font-bold">
          <button
            type="button"
            onClick={() => setMode('kotter')}
            className={`flex-1 cursor-pointer rounded-lg px-3 py-2 transition ${mode === 'kotter' ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-white'}`}
          >
            نموذج كوتر (8 مراحل)
          </button>
          <button
            type="button"
            onClick={() => setMode('adkar')}
            className={`flex-1 cursor-pointer rounded-lg px-3 py-2 transition ${mode === 'adkar' ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-white'}`}
          >
            نموذج أدكار (الفرد)
          </button>
        </div>

        {mode === 'kotter' ? (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8">
              {steps.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`cursor-pointer rounded-lg border px-1 py-2 text-center text-[11px] font-bold transition ${
                    i === index
                      ? 'border-amber-500 bg-amber-50 text-amber-800 ring-2 ring-amber-400'
                      : i < index
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                        : 'border-slate-200 bg-white text-ink-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-mono">0{s.n}</div>
                  <div className="mt-0.5 line-clamp-1">{s.title}</div>
                </button>
              ))}
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold text-amber-700">المرحلة {step.n} من 8</p>
              <h3 className="mt-0.5 text-base font-black text-ink-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.desc}</p>
              <div className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
                <div className="rounded-lg bg-white p-3 ring-1 ring-emerald-200">
                  <p className="font-bold text-emerald-700">✔ الإجراء النموذجي</p>
                  <p className="mt-1 leading-relaxed text-ink-600">{step.action}</p>
                </div>
                <div className="rounded-lg bg-white p-3 ring-1 ring-rose-200">
                  <p className="font-bold text-rose-700">✘ الفخ القاتل</p>
                  <p className="mt-1 leading-relaxed text-ink-600">{step.pitfall}</p>
                </div>
                <div className="rounded-lg bg-white p-3 ring-1 ring-amber-200">
                  <p className="font-bold text-amber-700">؟ سؤال التحقق</p>
                  <p className="mt-1 leading-relaxed text-ink-600">{step.check}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIndex(Math.max(0, index - 1))}
                  disabled={index === 0}
                  className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-ink-700 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  السابق
                </button>
                <p className="text-xs text-ink-500" dir="ltr">{index + 1} / 8</p>
                <button
                  type="button"
                  onClick={() => setIndex(Math.min(steps.length - 1, index + 1))}
                  disabled={index === steps.length - 1}
                  className="cursor-pointer rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  المرحلة التالية ←
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="rounded-xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
              قيّم الموظف من 1 إلى 5 في كل حلقة لاكتشاف نقطة الاختناق: التدريب لا يجدي إن كان الخلل في الوعي أو الرغبة، والمكاسب تضيع دون تعزيز.
            </p>
            {adkar.map((a) => (
              <div key={a.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-bold text-ink-800">
                    <span className="font-mono text-amber-600">{a.letter}</span> — {a.name}
                  </p>
                  <p className="font-mono text-sm font-black text-ink-800" dir="ltr">{scores[a.id]} / 5</p>
                </div>
                <p className="mt-0.5 text-xs text-ink-500">{a.hint}</p>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={scores[a.id]}
                  onChange={(e) => setScores({ ...scores, [a.id]: Number(e.target.value) })}
                  className="mt-2 w-full accent-amber-500"
                />
              </div>
            ))}
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-ink-700">
              <p className="font-bold text-ink-800">نقطة الاختناق الحالية: {lowestName} ({lowest[1]} من 5)</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-500">
                عالج هذه الحلقة أولاً: وعي غائب يحتاج حقائق وخسائر موثقة، ورغبة غائبة تحتاج مصلحة واضحة، ومعرفة أو قدرة ناقصة تحتاج تدريباً فردياً صبوراً، وتعزيز غائب يحتاج تقديراً ومكافأة مستمرة.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
