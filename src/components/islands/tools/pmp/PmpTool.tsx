import { useMemo, useState } from 'react';
import useLang from '../../../../lib/useLang';
import {
  pmpEcoTasks,
  pmpEcoTasksByDomain,
  type PmpEcoDomain,
} from '../../../../data/pmpEcoTasks';

export type PmpToolKind =
  | 'eligibility'
  | 'eco'
  | 'pacing'
  | 'studyplan'
  | 'lifecycle'
  | 'value'
  | 'approach'
  | 'governance'
  | 'vision'
  | 'raci'
  | 'stakeholder'
  | 'conflict'
  | 'communication'
  | 'wbs'
  | 'scope'
  | 'cpm'
  | 'budget'
  | 'evm'
  | 'resources'
  | 'makebuy'
  | 'quality'
  | 'closure'
  | 'handover'
  | 'qualitycheck'
  | 'govcheck'
  | 'compliance'
  | 'risk'
  | 'riskmatrix'
  | 'issues'
  | 'plan'
  | 'status'
  | 'changelog'
  | 'kpi'
  | 'pdca'
  | 'changemap'
  | 'pestle'
  | 'ai'
  | 'scrum'
  | 'kanban'
  | 'agile'
  | 'metrics'
  | 'diagnostic'
  | 'exam';

interface Props {
  kind: PmpToolKind;
}

const pct = (n: number) => `${Math.round(n)}%`;
const num = (n: number) =>
  Number.isFinite(n) ? Math.round(n).toLocaleString('en-US') : '—';

function Panel({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
      <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 dark:border-slate-700 dark:bg-brand-950/40">
        <p className="text-sm font-bold text-brand-900 dark:text-brand-200">
          🛠️ {title}
        </p>
        {hint && (
          <p className="mt-0.5 text-xs text-brand-700 dark:text-brand-300">
            {hint}
          </p>
        )}
      </div>
      <div className="space-y-4 p-5">{children}</div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  step = 1,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
  step?: number;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
        {label}
      </span>
      <span className="flex items-center gap-2">
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
        {suffix && (
          <span className="text-xs text-ink-400" dir="ltr">
            {suffix}
          </span>
        )}
      </span>
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
        {label}
      </span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
      />
    </label>
  );
}

function AreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
        {label}
      </span>
      <textarea
        value={value}
        rows={3}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
      />
    </label>
  );
}

function Progress({ value, max = 100 }: { value: number; max?: number }) {
  const w = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
      <div
        className="h-full rounded-full bg-brand-500 transition-all duration-500"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (b: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 accent-teal-600"
      />
      <span
        className={
          checked
            ? 'text-ink-500 line-through'
            : 'text-ink-800 dark:text-slate-100'
        }
      >
        {label}
      </span>
    </label>
  );
}

function Result({
  tone = 'brand',
  children,
}: {
  tone?: 'brand' | 'warn' | 'good' | 'bad';
  children: React.ReactNode;
}) {
  const cls = {
    brand:
      'bg-brand-50 text-brand-900 dark:bg-brand-950/40 dark:text-brand-100',
    warn: 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-100',
    good: 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100',
    bad: 'bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-100',
  }[tone];
  return (
    <div className={`rounded-xl p-4 text-sm font-semibold ${cls}`}>
      {children}
    </div>
  );
}

function EligibilityTool({ isEn }: { isEn: boolean }) {
  const [degree, setDegree] = useState<'bachelor' | 'associate' | 'secondary'>(
    'bachelor'
  );
  const [months, setMonths] = useState(36);
  const [hours, setHours] = useState(35);
  const required = degree === 'bachelor' ? 36 : 60;
  const okMonths = months >= required;
  const okHours = hours >= 35;
  return (
    <Panel
      title={isEn ? 'PMP eligibility calculator' : 'حاسبة أهلية PMP'}
      hint={
        isEn
          ? 'Change the inputs to see your eligibility instantly.'
          : 'غيّر المدخلات لتظهر الأهلية فوراً.'
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
            {isEn ? 'Education' : 'المؤهل'}
          </span>
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value as typeof degree)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="bachelor">
              {isEn ? "Bachelor's or higher" : 'بكالوريوس فأعلى'}
            </option>
            <option value="associate">
              {isEn ? 'Associate degree' : 'دبلوم'}
            </option>
            <option value="secondary">
              {isEn ? 'Secondary school' : 'ثانوية عامة'}
            </option>
          </select>
        </label>
        <NumberField
          label={isEn ? 'Project experience (months)' : 'خبرة المشاريع (شهراً)'}
          value={months}
          onChange={setMonths}
          suffix="mo"
        />
        <NumberField
          label={isEn ? 'Contact hours' : 'ساعات التدريب'}
          value={hours}
          onChange={setHours}
          suffix="h"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-ink-500">
          <span>{isEn ? 'Experience' : 'الخبرة'}</span>
          <span dir="ltr">
            {months} / {required}
          </span>
        </div>
        <Progress value={months} max={required} />
        <div className="flex justify-between text-xs text-ink-500">
          <span>{isEn ? 'Training' : 'التدريب'}</span>
          <span dir="ltr">{hours} / 35</span>
        </div>
        <Progress value={hours} max={35} />
      </div>
      <Result tone={okMonths && okHours ? 'good' : 'warn'}>
        {okMonths && okHours
          ? isEn
            ? '✅ You meet the PMI eligibility prerequisites. Focus now on the exam application and study plan.'
            : '✅ تستوفي متطلبات PMI الأساسية. انتقل الآن إلى طلب التسجيل وخطة الدراسة.'
          : isEn
            ? `⚠️ Still needed: ${!okMonths ? `${required - months} months of project experience` : ''}${!okMonths && !okHours ? ' and ' : ''}${!okHours ? `${35 - hours} contact hours` : ''}.`
            : `⚠️ المتبقي: ${!okMonths ? `${required - months} شهراً من خبرة المشاريع` : ''}${!okMonths && !okHours ? ' و' : ''}${!okHours ? `${35 - hours} ساعة تدريب` : ''}.`}
      </Result>
    </Panel>
  );
}

const ecoDomains: { domain: PmpEcoDomain; nameAr: string; weight: number }[] = [
  { domain: 'People', nameAr: 'الأفراد', weight: 33 },
  { domain: 'Process', nameAr: 'العمليات', weight: 41 },
  { domain: 'Business Environment', nameAr: 'بيئة الأعمال', weight: 26 },
];

function EcoExplorer({ isEn }: { isEn: boolean }) {
  const [active, setActive] = useState<PmpEcoDomain>('People');
  return (
    <Panel
      title={isEn ? 'ECO 2026 explorer' : 'مستكشف ECO 2026'}
      hint={
        isEn
          ? `All ${pmpEcoTasks.length} July 2026 ECO tasks, mapped to lessons and quizzes.`
          : `جميع مهام ECO ليوليو 2026 وعددها ${pmpEcoTasks.length}، مرتبطة بالدروس والكويزات.`
      }
    >
      <div className="grid gap-2 sm:grid-cols-3">
        {ecoDomains.map((d) => {
          const tasks = pmpEcoTasksByDomain[d.domain];
          return (
            <button
              key={d.domain}
              type="button"
              onClick={() => setActive(d.domain)}
              className={`rounded-xl border p-3 text-right text-sm transition ${active === d.domain ? 'border-brand-500 bg-brand-50 text-brand-900 dark:bg-brand-950/40 dark:text-brand-100' : 'border-slate-200 text-ink-600 dark:border-slate-700 dark:text-slate-300'}`}
            >
              <p className="font-bold">{isEn ? d.domain : d.nameAr}</p>
              <p className="mt-1 text-xs" dir="ltr">
                {d.weight}% · {tasks.length} tasks
              </p>
            </button>
          );
        })}
      </div>
      <div className="space-y-3">
        {ecoDomains.map((d) => {
          const tasks = pmpEcoTasksByDomain[d.domain];
          return (
            <section
              key={d.domain}
              className={`rounded-xl border p-4 transition dark:border-slate-700 ${active === d.domain ? 'border-brand-500 bg-brand-50/40 dark:bg-brand-950/30' : 'border-slate-200'}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-bold text-ink-900 dark:text-slate-100">
                  {isEn ? d.domain : d.nameAr}
                </p>
                <p className="text-xs text-ink-500" dir="ltr">
                  {d.weight}% · {tasks.length} tasks
                </p>
              </div>
              <Progress value={d.weight} />
              <ul className="mt-3 space-y-2 text-sm text-ink-600 dark:text-slate-300">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="rounded-lg border border-slate-200 p-2 dark:border-slate-700"
                  >
                    <p className="flex flex-wrap items-center gap-2">
                      <span
                        className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-bold text-brand-700 dark:bg-slate-700 dark:text-brand-200"
                        dir="ltr"
                      >
                        {task.id}
                      </span>
                      <span>{isEn ? task.titleEn : task.titleAr}</span>
                    </p>
                    <p className="mt-1 text-[11px] text-ink-400" dir="ltr">
                      {isEn ? 'Lessons' : 'الدروس'}:{' '}
                      {task.lessonIds.join(' · ')} ·{' '}
                      {isEn ? 'Quizzes' : 'الكويزات'}:{' '}
                      {task.quizIds.join(' · ')}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <Result>
        {isEn
          ? 'Exam mix: ~40% predictive and ~60% agile/hybrid, woven through every one of the 26 ECO tasks.'
          : 'مزيج الامتحان: نحو 40% تنبؤي و60% رشيق/هجين، متداخل في كل مهام ECO الـ26.'}
      </Result>
    </Panel>
  );
}

function PacingTool({ isEn }: { isEn: boolean }) {
  const [questions, setQuestions] = useState(180);
  const [minutes, setMinutes] = useState(240);
  const [breaks, setBreaks] = useState(20);
  const sec = Math.max(1, ((minutes - breaks) * 60) / questions);
  const checkpoints = [30, 60, 90, 120, 150, 180].filter((n) => n <= questions);
  return (
    <Panel
      title={isEn ? 'Exam pacing calculator' : 'حاسبة إيقاع الامتحان'}
      hint={
        isEn
          ? '220 minutes of answering time, two 10-minute breaks.'
          : '220 دقيقة إجابة، واستراحتان 10 دقائق.'
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <NumberField
          label={isEn ? 'Questions' : 'عدد الأسئلة'}
          value={questions}
          onChange={setQuestions}
          min={1}
        />
        <NumberField
          label={isEn ? 'Exam minutes' : 'دقائق الامتحان'}
          value={minutes}
          onChange={setMinutes}
          min={1}
        />
        <NumberField
          label={isEn ? 'Break minutes' : 'دقائق الاستراحات'}
          value={breaks}
          onChange={setBreaks}
          min={0}
        />
      </div>
      <Result tone="brand">
        {isEn ? 'Average time per question' : 'متوسط الوقت للسؤال'}:{' '}
        <span dir="ltr">{sec.toFixed(1)} s</span>
      </Result>
      <div className="grid gap-2 sm:grid-cols-3">
        {checkpoints.map((n) => (
          <div
            key={n}
            className="rounded-xl border border-slate-200 p-3 text-xs dark:border-slate-700"
          >
            <p className="font-bold text-ink-900 dark:text-slate-100" dir="ltr">
              {n} / {questions}
            </p>
            <p className="mt-1 text-ink-500" dir="ltr">
              {Math.round((n * sec) / 60)} min
            </p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function StudyPlanTool({ isEn }: { isEn: boolean }) {
  const [hours, setHours] = useState(10);
  const [checked, setChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const items = isEn
    ? [
        'Read the ECO and set a baseline',
        'Study concept lessons',
        'Complete section quizzes',
        'Run the 180-question mock exam',
      ]
    : [
        'اقرأ الـ ECO وحدد نقطة البداية',
        'ادرس دروس المفاهيم',
        'أكمل كويزات المحطات',
        'نفّذ محاكي الـ 180 سؤالاً',
      ];
  const weeks = Math.ceil(100 / Math.max(1, hours));
  return (
    <Panel
      title={isEn ? 'Study plan builder' : 'باني خطة الدراسة'}
      hint={
        isEn
          ? 'About 100 focused hours for a first PMP pass.'
          : 'نحو 100 ساعة تركيز للمرة الأولى.'
      }
    >
      <NumberField
        label={isEn ? 'Study hours per week' : 'ساعات الدراسة أسبوعياً'}
        value={hours}
        onChange={setHours}
        min={1}
        suffix="h"
      />
      <Result>
        ⏳{' '}
        {isEn
          ? `Estimated duration: ${weeks} weeks`
          : `المدة التقديرية: ${weeks} أسبوعاً`}
      </Result>
      <div className="space-y-2">
        {items.map((it, i) => (
          <CheckRow
            key={it}
            label={it}
            checked={checked[i]}
            onChange={(b) =>
              setChecked((prev) => prev.map((v, j) => (j === i ? b : v)))
            }
          />
        ))}
      </div>
      <p className="text-xs text-ink-500" dir="ltr">
        {checked.filter(Boolean).length} / {items.length}
      </p>
    </Panel>
  );
}

const phases = [
  {
    name: 'Initiating',
    nameAr: 'البدء',
    goal: 'Authorize the project',
    goalAr: 'إجازة المشروع',
    out: 'Project charter, stakeholder register',
    outAr: 'ميثاق المشروع، سجل أصحاب المصلحة',
  },
  {
    name: 'Planning',
    nameAr: 'التخطيط',
    goal: 'Define how value will be delivered',
    goalAr: 'تحديد كيفية تسليم القيمة',
    out: 'Baselines, plans, registers',
    outAr: 'الخطوط الأساسية، الخطط، السجلات',
  },
  {
    name: 'Executing',
    nameAr: 'التنفيذ',
    goal: 'Complete the work',
    goalAr: 'إنجاز العمل',
    out: 'Deliverables, work results',
    outAr: 'المخرجات، نتائج العمل',
  },
  {
    name: 'Monitoring & Controlling',
    nameAr: 'المراقبة والتحكم',
    goal: 'Compare actual vs plan',
    goalAr: 'مقارنة الفعلي بالخطة',
    out: 'Change requests, forecasts',
    outAr: 'طلبات التغيير، التوقعات',
  },
  {
    name: 'Closing',
    nameAr: 'الإغلاق',
    goal: 'Release benefits and close',
    goalAr: 'إطلاق الفوائد والإغلاق',
    out: 'Final report, lessons learned',
    outAr: 'التقرير النهائي، الدروس المستفادة',
  },
];

function LifecycleTool({ isEn }: { isEn: boolean }) {
  const [i, setI] = useState(0);
  const p = phases[i];
  return (
    <Panel
      title={isEn ? 'Project lifecycle map' : 'خريطة دورة حياة المشروع'}
      hint={
        isEn
          ? 'Click a phase to see what it produces.'
          : 'اضغط على مرحلة لترى مخرجاتها.'
      }
    >
      <div className="flex flex-wrap gap-2">
        {phases.map((ph, idx) => (
          <button
            key={ph.name}
            type="button"
            onClick={() => setI(idx)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${i === idx ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-600 dark:bg-slate-700 dark:text-slate-200'}`}
          >
            {isEn ? ph.name : ph.nameAr}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 p-4 text-sm dark:border-slate-700">
        <p className="font-bold text-ink-900 dark:text-slate-100">
          {isEn ? p.goal : p.goalAr}
        </p>
        <p className="mt-2 text-ink-600 dark:text-slate-300">
          <span className="font-semibold text-brand-700 dark:text-brand-300">
            {isEn ? 'Outputs: ' : 'المخرجات: '}
          </span>
          {isEn ? p.out : p.outAr}
        </p>
      </div>
    </Panel>
  );
}

interface ValueRow {
  name: string;
  type: string;
  metric: string;
  weight: number;
}
function ValueTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<ValueRow[]>([
    { name: 'Go-live date', type: 'output', metric: 'date', weight: 20 },
    { name: 'Adoption rate', type: 'outcome', metric: '%', weight: 50 },
    { name: 'Cost saving', type: 'benefit', metric: '$', weight: 30 },
  ]);
  const outcomeWeight = rows
    .filter((r) => r.type !== 'output')
    .reduce((s, r) => s + r.weight, 0);
  const update = (i: number, patch: Partial<ValueRow>) =>
    setRows((prev) => prev.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <Panel
      title={isEn ? 'Value map builder' : 'باني خريطة القيمة'}
      hint={
        isEn
          ? 'Shift weight from outputs to outcomes and benefits.'
          : 'انقل الوزن من المخرجات إلى النتائج والفوائد.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-[1fr_110px_90px_80px] dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Item' : 'العنصر'}
            value={r.name}
            onChange={(s) => update(i, { name: s })}
          />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
              {isEn ? 'Type' : 'النوع'}
            </span>
            <select
              value={r.type}
              onChange={(e) => update(i, { type: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="output">{isEn ? 'Output' : 'مخرج'}</option>
              <option value="outcome">{isEn ? 'Outcome' : 'نتيجة'}</option>
              <option value="benefit">{isEn ? 'Benefit' : 'فائدة'}</option>
            </select>
          </label>
          <TextField
            label={isEn ? 'Metric' : 'المقياس'}
            value={r.metric}
            onChange={(s) => update(i, { metric: s })}
          />
          <NumberField
            label={isEn ? 'Weight' : 'الوزن'}
            value={r.weight}
            onChange={(n) => update(i, { weight: n })}
            suffix="%"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [
            ...p,
            { name: '', type: 'outcome', metric: '', weight: 10 },
          ])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add measure' : '+ أضف مقياساً'}
      </button>
      <Result tone={outcomeWeight >= 60 ? 'good' : 'warn'}>
        {isEn
          ? `Outcome/benefit weight: ${outcomeWeight}% — aim for at least 60%.`
          : `وزن النتائج والفوائد: ${outcomeWeight}% — استهدف 60% على الأقل.`}
      </Result>
    </Panel>
  );
}

function ApproachTool({ isEn }: { isEn: boolean }) {
  const [traits, setTraits] = useState<boolean[]>([
    true,
    false,
    false,
    true,
    false,
  ]);
  const labels = isEn
    ? [
        'Stable requirements',
        'High uncertainty',
        'Hardware / fixed constraints',
        'Need frequent feedback',
        'Heavy regulatory gates',
      ]
    : [
        'متطلبات مستقرة',
        'عدم يقين عالٍ',
        'عتاد/قيود ثابتة',
        'حاجة لملاحظات متكررة',
        'بوابات تنظيمية صارمة',
      ];
  const toggle = (i: number, b: boolean) =>
    setTraits((p) => p.map((v, j) => (j === i ? b : v)));
  const agile =
    (traits[1] ? 2 : 0) + (traits[3] ? 2 : 0) + (traits[0] ? -1 : 0);
  const predictive =
    (traits[0] ? 2 : 0) +
    (traits[2] ? 2 : 0) +
    (traits[4] ? 2 : 0) +
    (traits[1] ? -1 : 0);
  const hybrid =
    traits.filter(Boolean).length >= 3 && agile > 0 && predictive > 0;
  const rec = hybrid ? 'Hybrid' : agile > predictive ? 'Agile' : 'Predictive';
  const recAr = hybrid
    ? 'هجين (Hybrid)'
    : agile > predictive
      ? 'رشيق (Agile)'
      : 'تنبؤي (Predictive)';
  return (
    <Panel
      title={isEn ? 'Approach comparator' : 'مقارن النُهج'}
      hint={
        isEn
          ? 'Select the traits that match your project.'
          : 'اختر الخصائص التي تناسب مشروعك.'
      }
    >
      <div className="space-y-2">
        {labels.map((l, i) => (
          <CheckRow
            key={l}
            label={l}
            checked={traits[i]}
            onChange={(b) => toggle(i, b)}
          />
        ))}
      </div>
      <Result tone="good">
        {isEn
          ? `Recommended approach: ${rec} — scores: predictive ${predictive}, agile ${agile}.`
          : `النهج المقترح: ${recAr} — الدرجات: تنبؤي ${predictive}، رشيق ${agile}.`}
      </Result>
      <div className="grid gap-2 text-xs sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="font-bold">{isEn ? 'Predictive' : 'تنبؤي'}</p>
          <p className="mt-1 text-ink-500">
            {isEn
              ? 'Plan once, deliver to baseline'
              : 'خطط مرة، وسلّم وفق الأساس'}
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="font-bold">{isEn ? 'Agile' : 'رشيق'}</p>
          <p className="mt-1 text-ink-500">
            {isEn ? 'Inspect and adapt frequently' : 'تفقد وتكيّف باستمرار'}
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="font-bold">{isEn ? 'Hybrid' : 'هجين'}</p>
          <p className="mt-1 text-ink-500">
            {isEn ? 'Fixed frame, adaptive inside' : 'إطار ثابت وتكيّف داخله'}
          </p>
        </div>
      </div>
    </Panel>
  );
}

const govRoles = [
  {
    role: 'Sponsor',
    roleAr: 'الراعي',
    power: 'Charter, funding, benefits',
    powerAr: 'الميثاق، التمويل، الفوائد',
  },
  {
    role: 'Steering Committee',
    roleAr: 'لجنة التوجيه',
    power: 'Strategic decisions',
    powerAr: 'القرارات الاستراتيجية',
  },
  {
    role: 'Project Manager',
    roleAr: 'مدير المشروع',
    power: 'Day-to-day integration',
    powerAr: 'التكامل اليومي',
  },
  {
    role: 'Team',
    roleAr: 'الفريق',
    power: 'Execution and estimates',
    powerAr: 'التنفيذ والتقديرات',
  },
];
function GovernanceTool({ isEn }: { isEn: boolean }) {
  const [level, setLevel] = useState(0);
  return (
    <Panel
      title={isEn ? 'Governance structure' : 'هيكل الحوكمة'}
      hint={
        isEn
          ? 'Escalate only when authority exceeds the PM role.'
          : 'التصعيد عندما تتجاوز القرارات صلاحية مدير المشروع.'
      }
    >
      {govRoles.map((r, i) => (
        <button
          key={r.role}
          type="button"
          onClick={() => setLevel(i)}
          className={`w-full rounded-xl border p-3 text-right text-sm ${level === i ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40' : 'border-slate-200 dark:border-slate-700'}`}
        >
          <p className="font-bold text-ink-900 dark:text-slate-100" dir="ltr">
            {isEn ? r.role : r.roleAr}
          </p>
          <p className="mt-0.5 text-xs text-ink-500">
            {isEn ? r.power : r.powerAr}
          </p>
        </button>
      ))}
      <Result>
        {isEn
          ? `Decision authority at this level: ${govRoles[level].power}.`
          : `صلاحية القرار على هذا المستوى: ${govRoles[level].powerAr}.`}
      </Result>
    </Panel>
  );
}

function VisionTool({ isEn }: { isEn: boolean }) {
  const [purpose, setPurpose] = useState(
    isEn
      ? 'Deliver a reliable service customers trust'
      : 'تقديم خدمة موثوقة يثق بها العملاء'
  );
  const [principles, setPrinciples] = useState(
    isEn ? 'Transparency, quality, respect' : 'الشفافية، الجودة، الاحترام'
  );
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);
  const items = isEn
    ? [
        'Purpose written in one sentence',
        'Principles agreed with the team',
        'Commitments visible in daily work',
      ]
    : [
        'الغرض مكتوب في جملة واحدة',
        'المبادئ متفق عليها مع الفريق',
        'الالتزامات ظاهرة في العمل اليومي',
      ];
  return (
    <Panel
      title={isEn ? 'Vision & leadership board' : 'لوحة التوجيه والرؤية'}
      hint={
        isEn
          ? 'A shared vision turns compliance into commitment.'
          : 'الرؤية المشتركة تحوّل الامتثال إلى التزام.'
      }
    >
      <TextField
        label={isEn ? 'Shared purpose' : 'الغرض المشترك'}
        value={purpose}
        onChange={setPurpose}
      />
      <AreaField
        label={isEn ? 'Team principles' : 'مبادئ الفريق'}
        value={principles}
        onChange={setPrinciples}
      />
      <div className="space-y-2">
        {items.map((it, i) => (
          <CheckRow
            key={it}
            label={it}
            checked={checked[i]}
            onChange={(b) =>
              setChecked((p) => p.map((v, j) => (j === i ? b : v)))
            }
          />
        ))}
      </div>
      <Result tone={checked.every(Boolean) ? 'good' : 'warn'}>
        {isEn
          ? `${checked.filter(Boolean).length} of 3 alignment checks complete.`
          : `أُنجز ${checked.filter(Boolean).length} من 3 اختبارات للتوافق.`}
      </Result>
    </Panel>
  );
}

interface RaciRow {
  task: string;
  r: string;
  a: string;
  c: string;
  i: string;
}
function RaciTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<RaciRow[]>([
    {
      task: 'Approve design',
      r: 'Lead engineer',
      a: 'Sponsor',
      c: 'QA',
      i: 'Team',
    },
    {
      task: 'Build module',
      r: 'Developers',
      a: 'Lead engineer',
      c: 'QA',
      i: 'PM',
    },
  ]);
  const update = (i: number, patch: Partial<RaciRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const missingA = rows.filter((r) => !r.a.trim()).length;
  return (
    <Panel
      title={isEn ? 'RACI matrix' : 'مصفوفة RACI'}
      hint={
        isEn
          ? 'Exactly one Accountable person per task.'
          : 'شخص واحد مسؤول (Accountable) عن كل مهمة.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-5 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Task' : 'المهمة'}
            value={r.task}
            onChange={(s) => update(i, { task: s })}
          />
          <TextField
            label="R"
            value={r.r}
            onChange={(s) => update(i, { r: s })}
          />
          <TextField
            label="A"
            value={r.a}
            onChange={(s) => update(i, { a: s })}
          />
          <TextField
            label="C"
            value={r.c}
            onChange={(s) => update(i, { c: s })}
          />
          <TextField
            label="I"
            value={r.i}
            onChange={(s) => update(i, { i: s })}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [...p, { task: '', r: '', a: '', c: '', i: '' }])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add task' : '+ أضف مهمة'}
      </button>
      <Result tone={missingA ? 'warn' : 'good'}>
        {missingA
          ? isEn
            ? `${missingA} task(s) have no Accountable owner.`
            : `${missingA} مهمة بلا مالك مسؤول (Accountable).`
          : isEn
            ? 'Every task has an Accountable owner. ✅'
            : 'كل مهمة لها مالك مسؤول. ✅'}
      </Result>
    </Panel>
  );
}

interface GridItem {
  name: string;
  x: number;
  y: number;
}
function GridTool({
  isEn,
  mode,
}: {
  isEn: boolean;
  mode: 'stakeholder' | 'riskmatrix' | 'scope' | 'resources';
}) {
  const config = {
    stakeholder: {
      title: isEn
        ? 'Stakeholder power / interest grid'
        : 'مصفوفة قوة/اهتمام أصحاب المصلحة',
      x: isEn ? 'Interest' : 'الاهتمام',
      y: isEn ? 'Power' : 'القوة',
      initial: [
        { name: isEn ? 'Sponsor' : 'الراعي', x: 4, y: 5 },
        { name: isEn ? 'End user' : 'المستخدم النهائي', x: 5, y: 2 },
        { name: isEn ? 'Vendor' : 'المورد', x: 2, y: 4 },
      ],
    },
    riskmatrix: {
      title: isEn ? 'Probability / impact matrix' : 'مصفوفة الاحتمال والأثر',
      x: isEn ? 'Impact' : 'الأثر',
      y: isEn ? 'Probability' : 'الاحتمال',
      initial: [
        { name: isEn ? 'Supplier delay' : 'تأخر المورد', x: 4, y: 4 },
        { name: isEn ? 'Requirement churn' : 'تغيّر المتطلبات', x: 3, y: 5 },
      ],
    },
    scope: {
      title: isEn ? 'Scope priority matrix' : 'مصفوفة أولويات النطاق',
      x: isEn ? 'Business value' : 'القيمة التجارية',
      y: isEn ? 'Effort' : 'الجهد',
      initial: [
        { name: isEn ? 'Core feature' : 'الميزة الأساسية', x: 5, y: 3 },
        { name: isEn ? 'Nice-to-have' : 'ميزة إضافية', x: 2, y: 4 },
      ],
    },
    resources: {
      title: isEn ? 'Resource allocation matrix' : 'مصفوفة توزيع الموارد',
      x: isEn ? 'Availability' : 'التوافر',
      y: isEn ? 'Skill criticality' : 'حساسية الدور',
      initial: [
        { name: isEn ? 'Lead developer' : 'مطور رئيسي', x: 3, y: 5 },
        { name: isEn ? 'QA analyst' : 'محلل جودة', x: 4, y: 3 },
      ],
    },
  }[mode];
  const [items, setItems] = useState<GridItem[]>(config.initial);
  const update = (i: number, patch: Partial<GridItem>) =>
    setItems((p) => p.map((v, j) => (j === i ? { ...v, ...patch } : v)));
  const quadrant = (x: number, y: number) =>
    x >= 3 && y >= 3
      ? 'high'
      : x < 3 && y >= 3
        ? 'watch'
        : x >= 3
          ? 'support'
          : 'low';
  const counts = ['high', 'watch', 'support', 'low'].map(
    (q) => items.filter((it) => quadrant(it.x, it.y) === q).length
  );
  return (
    <Panel
      title={config.title}
      hint={
        isEn
          ? 'Move each item on both axes (1–5).'
          : 'حرّك كل عنصر على المحورين (1–5).'
      }
    >
      {items.map((it, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-[1fr_80px_80px] dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Item' : 'العنصر'}
            value={it.name}
            onChange={(s) => update(i, { name: s })}
          />
          <NumberField
            label={config.x}
            value={it.x}
            onChange={(n) => update(i, { x: Math.max(1, Math.min(5, n)) })}
            min={1}
          />
          <NumberField
            label={config.y}
            value={it.y}
            onChange={(n) => update(i, { y: Math.max(1, Math.min(5, n)) })}
            min={1}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => setItems((p) => [...p, { name: '', x: 3, y: 3 }])}
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add item' : '+ أضف عنصراً'}
      </button>
      <Result>
        {isEn
          ? `High priority: ${counts[0]} · Manage closely: ${counts[1]} · Keep informed: ${counts[2]} · Monitor: ${counts[3]}`
          : `أولوية عالية: ${counts[0]} · إدارة عن كثب: ${counts[1]} · إبقاء على inform: ${counts[2]} · مراقبة: ${counts[3]}`}
      </Result>
    </Panel>
  );
}

function ConflictTool({ isEn }: { isEn: boolean }) {
  const [stakes, setStakes] = useState('high');
  const [urgency, setUrgency] = useState('low');
  const [relation, setRelation] = useState(true);
  const [expert, setExpert] = useState(false);
  let style = 'Collaborating';
  let styleAr = 'تعاوني (Collaborating)';
  if (urgency === 'high' && stakes === 'high') {
    style = 'Competing';
    styleAr = 'تنافسي (Competing)';
  } else if (expert) {
    style = 'Accommodating';
    styleAr = 'استيعابي (Accommodating)';
  } else if (urgency === 'high') {
    style = 'Compromising';
    styleAr = 'توافقي (Compromising)';
  } else if (stakes === 'low') {
    style = 'Avoiding';
    styleAr = 'تجنبي (Avoiding)';
  }
  return (
    <Panel
      title={isEn ? 'Conflict decision tree' : 'شجرة قرار الصراع'}
      hint={
        isEn
          ? 'The right style depends on stakes, urgency, and expertise.'
          : 'الأسلوب المناسب يعتمد على الخطورة والوقت والخبرة.'
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
            {isEn ? 'Stakes' : 'خطورة القرار'}
          </span>
          <select
            value={stakes}
            onChange={(e) => setStakes(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="high">{isEn ? 'High' : 'عالية'}</option>
            <option value="low">{isEn ? 'Low' : 'منخفضة'}</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
            {isEn ? 'Urgency' : 'الاستعجال'}
          </span>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="low">{isEn ? 'Time available' : 'يوجد وقت'}</option>
            <option value="high">{isEn ? 'Immediate' : 'فوري'}</option>
          </select>
        </label>
      </div>
      <CheckRow
        label={isEn ? 'Relationship matters' : 'العلاقة مهمة'}
        checked={relation}
        onChange={setRelation}
      />
      <CheckRow
        label={
          isEn ? 'Other party has stronger expertise' : 'الطرف الآخر أكثر خبرة'
        }
        checked={expert}
        onChange={setExpert}
      />
      <Result tone="good">
        {isEn
          ? `Recommended: ${style} — then document the decision and follow up.`
          : `المقترح: ${styleAr} — ثم وثّق القرار وتابع أثره.`}
      </Result>
    </Panel>
  );
}

interface CommRow {
  audience: string;
  message: string;
  channel: string;
  frequency: string;
}
function CommunicationTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<CommRow[]>([
    {
      audience: 'Sponsor',
      message: 'Value & decisions',
      channel: 'Steering deck',
      frequency: 'Monthly',
    },
    {
      audience: 'Team',
      message: 'Daily blockers',
      channel: 'Stand-up',
      frequency: 'Daily',
    },
  ]);
  const update = (i: number, patch: Partial<CommRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <Panel
      title={isEn ? 'Communication plan builder' : 'باني خطة التواصل'}
      hint={
        isEn
          ? 'Audience → message → channel → frequency.'
          : 'الجمهور ← الرسالة ← القناة ← التكرار.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-4 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Audience' : 'الجمهور'}
            value={r.audience}
            onChange={(s) => update(i, { audience: s })}
          />
          <TextField
            label={isEn ? 'Message' : 'الرسالة'}
            value={r.message}
            onChange={(s) => update(i, { message: s })}
          />
          <TextField
            label={isEn ? 'Channel' : 'القناة'}
            value={r.channel}
            onChange={(s) => update(i, { channel: s })}
          />
          <TextField
            label={isEn ? 'Frequency' : 'التكرار'}
            value={r.frequency}
            onChange={(s) => update(i, { frequency: s })}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [
            ...p,
            { audience: '', message: '', channel: '', frequency: '' },
          ])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add audience' : '+ أضف جمهوراً'}
      </button>
      <Result>
        {isEn
          ? `${rows.length} communication lines defined.`
          : `${rows.length} خط تواصل مُعرَّف.`}
      </Result>
    </Panel>
  );
}

interface WbsRow {
  task: string;
  level: number;
  hours: number;
}
function WbsTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<WbsRow[]>([
    { task: 'Discovery', level: 1, hours: 40 },
    { task: 'Interviews', level: 2, hours: 16 },
    { task: 'Workshop', level: 2, hours: 24 },
    { task: 'Build', level: 1, hours: 120 },
    { task: 'Deployment', level: 2, hours: 30 },
  ]);
  const update = (i: number, patch: Partial<WbsRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));

  // A row's parent is the nearest earlier row at a lower level.
  const parentIndex = rows.map((row, i) => {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (rows[j].level < row.level) return j;
    }
    return -1;
  });
  const hasChildren = rows.map((_, i) => parentIndex.includes(i));
  const childTotals = rows.map((_, i) =>
    rows.reduce(
      (sum, child, j) => sum + (parentIndex[j] === i ? child.hours : 0),
      0
    )
  );
  const violations = rows
    .map((row, i) => ({ i, row }))
    .filter(({ i, row }) => hasChildren[i] && childTotals[i] !== row.hours);
  const total = rows.reduce((s, r) => s + r.hours, 0);
  // Only leaves belong in a rolled-up estimate: counting a parent and its
  // children together double counts the same work.
  const leafTotal = rows.reduce(
    (s, r, i) => (hasChildren[i] ? s : s + r.hours),
    0
  );
  const doubleCounted = total !== leafTotal;
  const ok = violations.length === 0 && !doubleCounted;

  return (
    <Panel
      title={
        isEn
          ? 'WBS builder (100% rule)'
          : 'باني هيكل تجزئة العمل (WBS) — قاعدة 100%'
      }
      hint={
        isEn
          ? 'Child hours must equal the parent, and parents must never be added to their children.'
          : 'مجموع ساعات الأبناء يجب أن يساوي الأب، ولا يُضاف الأب إلى أبنائه مرتين.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-[1fr_80px_90px] dark:border-slate-700"
          style={{ marginInlineStart: `${(r.level - 1) * 18}px` }}
        >
          <TextField
            label={isEn ? 'Work package' : 'حزمة العمل'}
            value={r.task}
            onChange={(s) => update(i, { task: s })}
          />
          <NumberField
            label={isEn ? 'Level' : 'المستوى'}
            value={r.level}
            onChange={(n) => update(i, { level: Math.max(1, Math.min(4, n)) })}
            min={1}
          />
          <NumberField
            label={isEn ? 'Hours' : 'ساعات'}
            value={r.hours}
            onChange={(n) => update(i, { hours: n })}
            min={0}
          />
          {hasChildren[i] && (
            <p
              className={`col-span-full text-[11px] font-semibold ${childTotals[i] === r.hours ? 'text-emerald-600' : 'text-rose-600'}`}
              dir="ltr"
            >
              Σ children {childTotals[i]} / parent {r.hours} h
              {childTotals[i] === r.hours
                ? ' · 100% ✓'
                : ' · 100% rule violated ✗'}
            </p>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() => setRows((p) => [...p, { task: '', level: 2, hours: 8 }])}
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add work package' : '+ أضف حزمة عمل'}
      </button>
      <Result tone={ok ? 'good' : 'bad'}>
        {ok
          ? isEn
            ? `✅ 100% rule holds. Leaf estimate: ${num(leafTotal)} h; no parent hours double counted.`
            : `✅ قاعدة 100% محققة. تقدير الأوراق: ${num(leafTotal)} ساعة؛ لا تكرار لساعات الآباء.`
          : isEn
            ? `⚠️ ${violations.length} parent(s) do not balance (${violations.map(({ i, row }) => `${row.task || i + 1}: ${childTotals[i]}/${row.hours} h`).join('; ')})${doubleCounted ? ` · Double counting: ${num(total - leafTotal)} h of parent effort is inside the ${num(total)} h total.` : ''}`
            : `⚠️ ${violations.length} أب(اء) غير متوازنين (${violations.map(({ i, row }) => `${row.task || i + 1}: ${childTotals[i]}/${row.hours} ساعة`).join('؛ ')})${doubleCounted ? ` · احتساب مزدوج: ${num(total - leafTotal)} ساعة من عمل الآباء داخل إجمالي ${num(total)} ساعة.` : ''}`}
      </Result>
    </Panel>
  );
}

function ScopeTool({ isEn }: { isEn: boolean }) {
  const [checked, setChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const items = isEn
    ? [
        'Scope statement approved',
        'WBS matches the statement',
        'Change control threshold agreed',
        'Acceptance criteria measurable',
      ]
    : [
        'بيان النطاق معتمد',
        'هيكل WBS مطابق للبيان',
        'حد التحكم بالتغيير متفق عليه',
        'معايير القبول قابلة للقياس',
      ];
  const [impact, setImpact] = useState(0);
  return (
    <Panel
      title={isEn ? 'Scope control checklist' : 'قائمة التحكم في النطاق'}
      hint={
        isEn
          ? 'Detect creep before it reaches the baseline.'
          : 'اكتشف زحف النطاق قبل أن يصل إلى الخط الأساسي.'
      }
    >
      <div className="space-y-2">
        {items.map((it, i) => (
          <CheckRow
            key={it}
            label={it}
            checked={checked[i]}
            onChange={(b) =>
              setChecked((p) => p.map((v, j) => (j === i ? b : v)))
            }
          />
        ))}
      </div>
      <NumberField
        label={isEn ? 'Unapproved changes requested' : 'تغييرات غير معتمدة'}
        value={impact}
        onChange={setImpact}
        min={0}
      />
      <Result tone={impact > 0 || checked.some((v) => !v) ? 'warn' : 'good'}>
        {isEn
          ? `${checked.filter(Boolean).length}/4 controls complete; ${impact} unapproved change(s) need a change request.`
          : `أُنجز ${checked.filter(Boolean).length}/4 من الضوابط؛ هناك ${impact} تغيير غير معتمد يحتاج طلب تغيير.`}
      </Result>
    </Panel>
  );
}

interface CpmRow {
  name: string;
  duration: number;
  preds: string;
}
function CpmTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<CpmRow[]>([
    { name: 'A', duration: 3, preds: '' },
    { name: 'B', duration: 4, preds: 'A' },
    { name: 'C', duration: 2, preds: 'A' },
    { name: 'D', duration: 5, preds: 'B,C' },
  ]);
  const result = useMemo(() => {
    const predIdx = rows.map((r) =>
      r.preds
        .split(',')
        .map((s) => rows.findIndex((x) => x.name === s.trim()))
        .filter((i) => i >= 0 && i < rows.length)
    );
    const succIdx: number[][] = rows.map(() => []);
    predIdx.forEach((preds, i) => preds.forEach((p) => succIdx[p].push(i)));
    const es: number[] = [];
    const ef: number[] = [];
    for (let i = 0; i < rows.length; i += 1) {
      es[i] = predIdx[i].length ? Math.max(...predIdx[i].map((p) => ef[p])) : 0;
      ef[i] = es[i] + rows[i].duration;
    }
    const end = Math.max(0, ...ef);
    const lf: number[] = [];
    const ls: number[] = [];
    for (let i = rows.length - 1; i >= 0; i -= 1) {
      lf[i] = succIdx[i].length
        ? Math.min(...succIdx[i].map((s) => ls[s]))
        : end;
      ls[i] = lf[i] - rows[i].duration;
    }
    return rows.map((r, i) => ({
      ...r,
      es: es[i],
      ef: ef[i],
      ls: ls[i],
      lf: lf[i],
      float: ls[i] - es[i],
      critical: ls[i] - es[i] === 0,
    }));
  }, [rows]);
  const update = (i: number, patch: Partial<CpmRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <Panel
      title={isEn ? 'CPM & float calculator' : 'حاسبة CPM والوقت العائم'}
      hint={
        isEn
          ? 'Predecessors are activity names separated by commas.'
          : 'اكتب السوابق بأسماء الأنشطة مفصولة بفواصل.'
      }
    >
      {result.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-[80px_90px_1fr] dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'ID' : 'الرمز'}
            value={r.name}
            onChange={(s) => update(i, { name: s })}
          />
          <NumberField
            label={isEn ? 'Duration' : 'المدة'}
            value={r.duration}
            onChange={(n) => update(i, { duration: Math.max(0, n) })}
            min={0}
          />
          <TextField
            label={isEn ? 'Predecessors' : 'السوابق'}
            value={r.preds}
            onChange={(s) => update(i, { preds: s })}
          />
          <div
            className="col-span-full flex flex-wrap gap-3 text-xs text-ink-500"
            dir="ltr"
          >
            <span>ES {r.es}</span>
            <span>EF {r.ef}</span>
            <span>LS {r.ls}</span>
            <span>LF {r.lf}</span>
            <span
              className={
                r.critical ? 'font-bold text-rose-600' : 'text-brand-600'
              }
            >
              Float {r.float}
              {r.critical ? ' · CRITICAL' : ''}
            </span>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [
            ...p,
            {
              name: String.fromCharCode(65 + p.length),
              duration: 1,
              preds: '',
            },
          ])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add activity' : '+ أضف نشاطاً'}
      </button>
      <Result tone="bad">
        {isEn
          ? `Critical path: ${result
              .filter((r) => r.critical)
              .map((r) => r.name)
              .join(' → ')}`
          : `المسار الحرج: ${result
              .filter((r) => r.critical)
              .map((r) => r.name)
              .join(' → ')}`}
      </Result>
    </Panel>
  );
}

function BudgetTool({ isEn }: { isEn: boolean }) {
  const [costs, setCosts] = useState([120000, 80000, 45000]);
  const [reserve, setReserve] = useState(12);
  const labels = isEn
    ? ['Labor', 'Materials', 'Vendor']
    : ['العمالة', 'المواد', 'المورد'];
  const base = costs.reduce((s, c) => s + c, 0);
  return (
    <Panel
      title={isEn ? 'Budget simulator' : 'محاكي الميزانية'}
      hint={
        isEn
          ? 'Base cost plus contingency reserve builds the cost baseline.'
          : 'التكلفة الأساسية مضافاً إليها احتياطي الطوارئ = خط الأساس للتكلفة.'
      }
    >
      {costs.map((c, i) => (
        <NumberField
          key={labels[i]}
          label={labels[i]}
          value={c}
          onChange={(n) => setCosts((p) => p.map((v, j) => (j === i ? n : v)))}
          min={0}
        />
      ))}
      <NumberField
        label={isEn ? 'Contingency reserve (%)' : 'احتياطي الطوارئ (%)'}
        value={reserve}
        onChange={setReserve}
        min={0}
        suffix="%"
      />
      <Result>
        {isEn
          ? `Base: ${num(base)} · Reserve: ${num((base * reserve) / 100)} · BAC: ${num(base * (1 + reserve / 100))}`
          : `الأساس: ${num(base)} · الاحتياطي: ${num((base * reserve) / 100)} · خط الأساس للتكلفة: ${num(base * (1 + reserve / 100))}`}
      </Result>
    </Panel>
  );
}

function EvmTool({ isEn }: { isEn: boolean }) {
  const [pv, setPv] = useState(100000);
  const [ev, setEv] = useState(90000);
  const [ac, setAc] = useState(110000);
  const [bac, setBac] = useState(200000);
  const cv = ev - ac;
  const sv = ev - pv;
  const cpi = ac ? ev / ac : 0;
  const spi = pv ? ev / pv : 0;
  const eac = cpi ? bac / cpi : 0;
  const vac = bac - eac;
  const etc = Math.max(0, eac - ac);
  const tcpi = bac - ac ? (bac - ev) / (bac - ac) : 0;
  const formulas =
    'CV=EV−AC · SV=EV−PV · CPI=EV/AC · SPI=EV/PV · EAC=BAC/CPI · VAC=BAC−EAC';
  return (
    <Panel
      title={isEn ? 'EVM calculator' : 'حاسبة القيمة المكتسبة (EVM)'}
      hint={
        isEn
          ? 'PV, EV, AC and BAC drive every forecast.'
          : 'من PV و EV و AC و BAC تُشتق كل التوقعات.'
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField
          label="PV (Planned Value)"
          value={pv}
          onChange={setPv}
          min={0}
        />
        <NumberField
          label="EV (Earned Value)"
          value={ev}
          onChange={setEv}
          min={0}
        />
        <NumberField
          label="AC (Actual Cost)"
          value={ac}
          onChange={setAc}
          min={0}
        />
        <NumberField
          label="BAC (Budget)"
          value={bac}
          onChange={setBac}
          min={0}
        />
      </div>
      <p
        className="rounded-xl bg-slate-50 p-3 text-xs font-semibold text-ink-600 dark:bg-slate-800 dark:text-slate-300"
        dir="ltr"
      >
        {formulas}
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {[
          ['CV', cv, cv >= 0],
          ['SV', sv, sv >= 0],
          ['CPI', cpi, cpi >= 1],
          ['SPI', spi, spi >= 1],
          ['EAC', eac, eac <= bac],
          ['VAC', vac, vac >= 0],
          ['ETC', etc, true],
          ['TCPI', tcpi, tcpi <= 1],
        ].map(([label, value, ok]) => (
          <div
            key={String(label)}
            className="rounded-xl border border-slate-200 p-3 text-xs dark:border-slate-700"
          >
            <p className="font-bold" dir="ltr">
              {String(label)}
            </p>
            <p
              className={`mt-1 font-semibold ${ok ? 'text-brand-600' : 'text-rose-600'}`}
              dir="ltr"
            >
              {typeof value === 'number' ? value.toFixed(2) : value}
            </p>
          </div>
        ))}
      </div>
      <Result tone={cpi < 1 || spi < 1 ? 'warn' : 'good'}>
        {isEn
          ? `CPI ${cpi.toFixed(2)} ${cpi < 1 ? '(over budget)' : '(under budget)'} · SPI ${spi.toFixed(2)} ${spi < 1 ? '(behind schedule)' : '(ahead)'} · VAC ${num(vac)}`
          : `مؤشر CPI ${cpi.toFixed(2)} ${cpi < 1 ? '(تجاوز تكلفة)' : '(داخل الميزانية)'} · مؤشر SPI ${spi.toFixed(2)} ${spi < 1 ? '(تأخر جدول)' : '(متقدم)'} · VAC ${num(vac)}`}
      </Result>
    </Panel>
  );
}

interface ResRow {
  name: string;
  role: string;
  load: number;
}
function ResourceTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<ResRow[]>([
    { name: 'Lina', role: 'Developer', load: 80 },
    { name: 'Omar', role: 'Developer', load: 70 },
    { name: 'Sara', role: 'QA', load: 100 },
  ]);
  const update = (i: number, patch: Partial<ResRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const over = rows.filter((r) => r.load > 100);
  return (
    <Panel
      title={isEn ? 'Resource matrix' : 'مصفوفة الموارد'}
      hint={
        isEn
          ? 'Keep individual allocation at or below 100%.'
          : 'لا تتجاوز نسبة إشغال الفرد 100%.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-3 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Name' : 'الاسم'}
            value={r.name}
            onChange={(s) => update(i, { name: s })}
          />
          <TextField
            label={isEn ? 'Role' : 'الدور'}
            value={r.role}
            onChange={(s) => update(i, { role: s })}
          />
          <NumberField
            label={isEn ? 'Allocation %' : 'الإشغال %'}
            value={r.load}
            onChange={(n) => update(i, { load: n })}
            min={0}
            suffix="%"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => setRows((p) => [...p, { name: '', role: '', load: 50 }])}
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add resource' : '+ أضف مورداً'}
      </button>
      <Result tone={over.length ? 'bad' : 'good'}>
        {over.length
          ? isEn
            ? `Overallocated: ${over.map((r) => r.name).join(', ')} — level the schedule.`
            : `إشغال زائد: ${over.map((r) => r.name).join('، ')} — ساوِ الجدول.`
          : isEn
            ? 'No resource exceeds 100% allocation. ✅'
            : 'لا يتجاوز أي مورد 100% من إشغاله. ✅'}
      </Result>
    </Panel>
  );
}

interface BuyRow {
  criterion: string;
  weight: number;
  make: number;
  buy: number;
}
function MakeBuyTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<BuyRow[]>([
    { criterion: 'Core competency', weight: 40, make: 5, buy: 2 },
    { criterion: 'Cost', weight: 35, make: 3, buy: 4 },
    { criterion: 'Speed', weight: 25, make: 2, buy: 5 },
  ]);
  const update = (i: number, patch: Partial<BuyRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const totalW = rows.reduce((s, r) => s + r.weight, 0) || 1;
  const makeScore = rows.reduce((s, r) => s + r.weight * r.make, 0) / totalW;
  const buyScore = rows.reduce((s, r) => s + r.weight * r.buy, 0) / totalW;
  return (
    <Panel
      title={isEn ? 'Make / buy matrix' : 'مصفوفة اصنع/اشترِ'}
      hint={
        isEn ? 'Score each criterion from 1 to 5.' : 'قيّم كل معيار من 1 إلى 5.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-4 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Criterion' : 'المعيار'}
            value={r.criterion}
            onChange={(s) => update(i, { criterion: s })}
          />
          <NumberField
            label={isEn ? 'Weight %' : 'الوزن %'}
            value={r.weight}
            onChange={(n) => update(i, { weight: n })}
            min={0}
          />
          <NumberField
            label={isEn ? 'Make' : 'اصنع'}
            value={r.make}
            onChange={(n) => update(i, { make: Math.min(5, n) })}
            min={1}
          />
          <NumberField
            label={isEn ? 'Buy' : 'اشترِ'}
            value={r.buy}
            onChange={(n) => update(i, { buy: Math.min(5, n) })}
            min={1}
          />
        </div>
      ))}
      <Result tone="good">
        {isEn
          ? `Make ${makeScore.toFixed(2)} vs Buy ${buyScore.toFixed(2)} → ${makeScore >= buyScore ? 'MAKE' : 'BUY'}`
          : `اصنع ${makeScore.toFixed(2)} مقابل اشترِ ${buyScore.toFixed(2)} ← ${makeScore >= buyScore ? 'اصنع' : 'اشترِ'}`}
      </Result>
    </Panel>
  );
}

function QualityCostTool({ isEn }: { isEn: boolean }) {
  const [vals, setVals] = useState([30000, 20000, 25000, 60000]);
  const labels = isEn
    ? ['Prevention', 'Appraisal', 'Internal failure', 'External failure']
    : ['الوقاية', 'التقييم', 'الفشل الداخلي', 'الفشل الخارجي'];
  const total = vals.reduce((s, v) => s + v, 0);
  const failure = vals[2] + vals[3];
  return (
    <Panel
      title={isEn ? 'Cost of quality calculator' : 'حاسبة تكلفة الجودة'}
      hint={
        isEn
          ? 'Invest earlier to reduce failure costs later.'
          : 'الاستثمار المبكر يقلل تكاليف الفشل لاحقاً.'
      }
    >
      {vals.map((v, i) => (
        <NumberField
          key={labels[i]}
          label={labels[i]}
          value={v}
          onChange={(n) => setVals((p) => p.map((x, j) => (j === i ? n : x)))}
          min={0}
        />
      ))}
      <Result tone={failure / (total || 1) > 0.4 ? 'warn' : 'good'}>
        {isEn
          ? `Total CoQ ${num(total)} · Failure share ${pct((failure / (total || 1)) * 100)}`
          : `إجمالي تكلفة الجودة ${num(total)} · حصة الفشل ${pct((failure / (total || 1)) * 100)}`}
      </Result>
    </Panel>
  );
}

const checkItems: Record<string, string[]> = {
  closure: [
    'All deliverables accepted',
    'Contracts closed',
    'Final invoices settled',
    'Lessons learned recorded',
    'Benefits handed to owner',
    'Final report archived',
  ],
  handover: [
    'Asset list verified',
    'Documentation complete',
    'Training delivered',
    'Support owner assigned',
    'Warranty terms explained',
    'Access credentials transferred',
  ],
  qualitycheck: [
    'Acceptance criteria measurable',
    'Tests executed and recorded',
    'Defects resolved or accepted',
    'Audit findings closed',
    'Quality metrics reported',
  ],
  govcheck: [
    'Sponsor identified',
    'Decision rights documented',
    'Escalation path agreed',
    'Steering cadence set',
    'Benefits owner named',
  ],
  compliance: [
    'Regulations identified',
    'Legal review complete',
    'Privacy impact assessed',
    'Security controls verified',
    'Evidence archived',
  ],
};
function ChecklistTool({
  isEn,
  mode,
}: {
  isEn: boolean;
  mode: keyof typeof checkItems;
}) {
  const itemsAr: Record<keyof typeof checkItems, string[]> = {
    closure: [
      'استلام كل المخرجات',
      'إغلاق العقود',
      'تسوية الفواتير النهائية',
      'توثيق الدروس المستفادة',
      'تسليم الفوائد للمالك',
      'أرشفة التقرير النهائي',
    ],
    handover: [
      'التحقق من قائمة الأصول',
      'اكتمال الوثائق',
      'تنفيذ التدريب',
      'تعيين مالك الدعم',
      'شرح شروط الضمان',
      'نقل بيانات الدخول',
    ],
    qualitycheck: [
      'معايير القبول قابلة للقياس',
      'تنفيذ الاختبارات وتوثيقها',
      'معالجة العيوب أو قبولها',
      'إغلاق ملاحظات التدقيق',
      'الإبلاغ عن مقاييس الجودة',
    ],
    govcheck: [
      'تحديد الراعي',
      'توثيق صلاحيات القرار',
      'الاتفاق على مسار التصعيد',
      'تحديد إيقاع لجنة التوجيه',
      'تسمية مالك الفوائد',
    ],
    compliance: [
      'تحديد اللوائح المنطبقة',
      'اكتمال المراجعة القانونية',
      'تقييم أثر الخصوصية',
      'التحقق من ضوابط الأمن',
      'أرشفة الأدلة',
    ],
  };
  const items: string[] = isEn ? checkItems[mode] : itemsAr[mode];
  const titlesAr: Record<keyof typeof checkItems, string> = {
    closure: 'قائمة إغلاق المشروع',
    handover: 'قائمة التسليم',
    qualitycheck: 'قائمة التحقق من الجودة',
    govcheck: 'قائمة امتثال الحوكمة',
    compliance: 'قائمة الامتثال',
  };
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  const done = checked.filter(Boolean).length;
  return (
    <Panel
      title={isEn ? `${mode} checklist` : titlesAr[mode]}
      hint={
        isEn
          ? 'Tick only what has written evidence.'
          : 'ضع علامة فقط على ما له دليل مكتوب.'
      }
    >
      <div className="space-y-2">
        {items.map((it, i) => (
          <CheckRow
            key={it}
            label={it}
            checked={checked[i]}
            onChange={(b) =>
              setChecked((p) => p.map((v, j) => (j === i ? b : v)))
            }
          />
        ))}
      </div>
      <Progress value={done} max={items.length} />
      <Result tone={done === items.length ? 'good' : 'warn'}>
        {isEn
          ? `${done} of ${items.length} items evidenced.`
          : `${done} من ${items.length} عنصراً له دليل.`}
      </Result>
    </Panel>
  );
}

type RiskKind = 'threat' | 'opportunity';

interface RiskRow {
  risk: string;
  kind: RiskKind;
  prob: number;
  impact: number;
  response: string;
  owner: string;
  trigger: string;
  status: string;
}

const riskResponses: Record<RiskKind, string[]> = {
  threat: ['Avoid', 'Mitigate', 'Transfer', 'Accept'],
  opportunity: ['Exploit', 'Enhance', 'Share', 'Accept'],
};

function RiskTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<RiskRow[]>([
    {
      risk: 'Vendor delay',
      kind: 'threat',
      prob: 4,
      impact: 4,
      response: 'Mitigate',
      owner: 'Procurement lead',
      trigger: 'No shipping confirmation 10 days before the need date',
      status: 'Open',
    },
    {
      risk: 'Early vendor discount',
      kind: 'opportunity',
      prob: 3,
      impact: 3,
      response: 'Exploit',
      owner: 'Buyer',
      trigger: 'Quote below the cost baseline',
      status: 'Open',
    },
  ]);
  const update = (i: number, patch: Partial<RiskRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const unowned = rows.filter((r) => !r.owner.trim()).length;
  const top = [...rows].sort(
    (a, b) => b.prob * b.impact - a.prob * a.impact
  )[0];
  return (
    <Panel
      title={
        isEn
          ? 'Risk & opportunity register'
          : 'باني سجل المخاطر والفرص (Risk register)'
      }
      hint={
        isEn
          ? 'Score = probability × impact (1–25). Threats and opportunities need different responses.'
          : 'الدرجة = الاحتمال × الأثر (1–25). للتهديدات والفرص استجابات مختلفة.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-4 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Risk / opportunity' : 'الخطر / الفرصة'}
            value={r.risk}
            onChange={(s) => update(i, { risk: s })}
          />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
              {isEn ? 'Type' : 'النوع'}
            </span>
            <select
              value={r.kind}
              onChange={(e) => {
                const kind = e.target.value as RiskKind;
                update(i, { kind, response: riskResponses[kind][0] });
              }}
              className="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="threat">{isEn ? 'Threat' : 'تهديد'}</option>
              <option value="opportunity">
                {isEn ? 'Opportunity' : 'فرصة'}
              </option>
            </select>
          </label>
          <NumberField
            label={isEn ? 'Probability' : 'الاحتمال'}
            value={r.prob}
            onChange={(n) => update(i, { prob: Math.max(1, Math.min(5, n)) })}
            min={1}
          />
          <NumberField
            label={isEn ? 'Impact' : 'الأثر'}
            value={r.impact}
            onChange={(n) => update(i, { impact: Math.max(1, Math.min(5, n)) })}
            min={1}
          />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
              {isEn ? 'Response' : 'الاستجابة'}
            </span>
            <select
              value={r.response}
              onChange={(e) => update(i, { response: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              {riskResponses[r.kind].map((response) => (
                <option key={response} value={response}>
                  {response}
                </option>
              ))}
            </select>
          </label>
          <TextField
            label={isEn ? 'Owner' : 'المالك'}
            value={r.owner}
            onChange={(s) => update(i, { owner: s })}
            placeholder={isEn ? 'Named person' : 'شخص محدد'}
          />
          <TextField
            label={isEn ? 'Trigger / warning signal' : 'المحفز / إشارة الإنذار'}
            value={r.trigger}
            onChange={(s) => update(i, { trigger: s })}
            placeholder={isEn ? 'What to watch for' : 'ما الذي يجب مراقبته'}
          />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
              {isEn ? 'Status' : 'الحالة'}
            </span>
            <select
              value={r.status}
              onChange={(e) => update(i, { status: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="Open">{isEn ? 'Open' : 'مفتوح'}</option>
              <option value="Actioned">
                {isEn ? 'Actioned' : 'قيد التنفيذ'}
              </option>
              <option value="Closed">{isEn ? 'Closed' : 'مغلق'}</option>
            </select>
          </label>
          <p className="col-span-full text-xs text-ink-500" dir="ltr">
            Score {r.prob * r.impact} / 25 · {r.kind} · {r.response}
          </p>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [
            ...p,
            {
              risk: '',
              kind: 'threat',
              prob: 3,
              impact: 3,
              response: 'Mitigate',
              owner: '',
              trigger: '',
              status: 'Open',
            },
          ])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add risk or opportunity' : '+ أضف خطراً أو فرصة'}
      </button>
      <Result tone={unowned ? 'warn' : 'good'}>
        {unowned
          ? isEn
            ? `${unowned} entry(ies) have no owner — assign one before the next review. Top: ${top?.risk || '—'}`
            : `${unowned} سجل بلا مالك — عيّن مالكاً قبل المراجعة القادمة. الأعلى: ${top?.risk || '—'}`
          : isEn
            ? `All entries have an owner. Top score: ${top?.risk || '—'} (${top ? top.prob * top.impact : 0}/25).`
            : `كل السجلات لها مالك. أعلى درجة: ${top?.risk || '—'} (${top ? top.prob * top.impact : 0}/25).`}
      </Result>
    </Panel>
  );
}

interface IssueRow {
  issue: string;
  severity: string;
  owner: string;
  status: string;
}
function IssueTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<IssueRow[]>([
    {
      issue: 'API credentials missing',
      severity: 'High',
      owner: 'IT lead',
      status: 'Open',
    },
  ]);
  const update = (i: number, patch: Partial<IssueRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const open = rows.filter((r) => r.status !== 'Closed').length;
  return (
    <Panel
      title={isEn ? 'Issue log' : 'سجل المشكلات'}
      hint={
        isEn
          ? 'Issues are problems happening now; risks may happen later.'
          : 'المشكلة تقع الآن، والخطر قد يقع لاحقاً.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-4 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Issue' : 'المشكلة'}
            value={r.issue}
            onChange={(s) => update(i, { issue: s })}
          />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
              {isEn ? 'Severity' : 'الخطورة'}
            </span>
            <select
              value={r.severity}
              onChange={(e) => update(i, { severity: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>
          <TextField
            label={isEn ? 'Owner' : 'المالك'}
            value={r.owner}
            onChange={(s) => update(i, { owner: s })}
          />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
              {isEn ? 'Status' : 'الحالة'}
            </span>
            <select
              value={r.status}
              onChange={(e) => update(i, { status: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option>Open</option>
              <option>In progress</option>
              <option>Closed</option>
            </select>
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [
            ...p,
            { issue: '', severity: 'Medium', owner: '', status: 'Open' },
          ])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add issue' : '+ أضف مشكلة'}
      </button>
      <Result tone={open ? 'warn' : 'good'}>
        {isEn ? `${open} open issue(s)` : `${open} مشكلة مفتوحة`}
      </Result>
    </Panel>
  );
}

function PlanTool({ isEn }: { isEn: boolean }) {
  const [sections, setSections] = useState([
    isEn ? 'Scope baseline' : 'خط الأساس للنطاق',
    isEn ? 'Schedule baseline' : 'خط الأساس للجدول',
    isEn ? 'Cost baseline' : 'خط الأساس للتكلفة',
    isEn ? 'Risk plan' : 'خطة المخاطر',
  ]);
  const [texts, setTexts] = useState<string[]>(sections.map(() => ''));
  const done = texts.filter((t) => t.trim()).length;
  return (
    <Panel
      title={
        isEn ? 'Integrated project plan builder' : 'باني خطة المشروع المتكاملة'
      }
      hint={
        isEn
          ? 'A plan is integrated when its baselines agree.'
          : 'التكامل يعني اتفاق الخطوط الأساسية مع بعضها.'
      }
    >
      {sections.map((s, i) => (
        <AreaField
          key={s}
          label={s}
          value={texts[i] ?? ''}
          onChange={(v) => setTexts((p) => p.map((x, j) => (j === i ? v : x)))}
        />
      ))}
      <button
        type="button"
        onClick={() => {
          setSections((p) => [...p, '']);
          setTexts((p) => [...p, '']);
        }}
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add section' : '+ أضف قسماً'}
      </button>
      <Result tone={done === sections.length ? 'good' : 'warn'}>
        {isEn
          ? `${done}/${sections.length} plan sections drafted.`
          : `صيغ ${done}/${sections.length} قسماً من أقسام الخطة.`}
      </Result>
    </Panel>
  );
}

function StatusTool({ isEn }: { isEn: boolean }) {
  const areas = isEn
    ? ['Scope', 'Schedule', 'Cost', 'Quality']
    : ['النطاق', 'الجدول', 'التكلفة', 'الجودة'];
  const [states, setStates] = useState(['green', 'amber', 'red', 'green']);
  const reds = states.filter((s) => s === 'red').length;
  return (
    <Panel
      title={isEn ? 'Project status dashboard' : 'لوحة حالة المشروع'}
      hint={
        isEn
          ? 'Report status with evidence, not adjectives.'
          : 'أبلغ الحالة بالدليل لا بالصفات.'
      }
    >
      {areas.map((a, i) => (
        <div
          key={a}
          className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700"
        >
          <span className="text-sm font-semibold text-ink-900 dark:text-slate-100">
            {a}
          </span>
          <div className="flex gap-1">
            {['green', 'amber', 'red'].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() =>
                  setStates((p) => p.map((v, j) => (j === i ? s : v)))
                }
                aria-label={s}
                className={`h-7 w-7 rounded-full ${states[i] === s ? (s === 'green' ? 'bg-emerald-500' : s === 'amber' ? 'bg-amber-400' : 'bg-rose-500') : 'bg-slate-200 dark:bg-slate-700'}`}
              />
            ))}
          </div>
        </div>
      ))}
      <Result tone={reds ? 'bad' : 'good'}>
        {isEn
          ? `${reds} red area(s) need corrective action and a forecast.`
          : `${reds} مجال أحمر يحتاج إجراءً تصحيحياً وتوقعاً.`}
      </Result>
    </Panel>
  );
}

interface ChangeRow {
  request: string;
  days: number;
  cost: number;
  decision: string;
}
function ChangeTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<ChangeRow[]>([
    {
      request: 'Add reporting export',
      days: 5,
      cost: 12000,
      decision: 'Approved',
    },
  ]);
  const update = (i: number, patch: Partial<ChangeRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const approved = rows.filter((r) => r.decision === 'Approved');
  return (
    <Panel
      title={isEn ? 'Change log tool' : 'سجل التغييرات'}
      hint={
        isEn
          ? 'Never change a baseline without an approved change request.'
          : 'لا تعديل على الخط الأساس بلا طلب تغيير معتمد.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-4 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Request' : 'الطلب'}
            value={r.request}
            onChange={(s) => update(i, { request: s })}
          />
          <NumberField
            label={isEn ? 'Days' : 'أيام'}
            value={r.days}
            onChange={(n) => update(i, { days: n })}
            min={0}
          />
          <NumberField
            label={isEn ? 'Cost' : 'تكلفة'}
            value={r.cost}
            onChange={(n) => update(i, { cost: n })}
            min={0}
          />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-ink-600 dark:text-slate-300">
              {isEn ? 'Decision' : 'القرار'}
            </span>
            <select
              value={r.decision}
              onChange={(e) => update(i, { decision: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [
            ...p,
            { request: '', days: 0, cost: 0, decision: 'Pending' },
          ])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add change' : '+ أضف تغييراً'}
      </button>
      <Result>
        {isEn
          ? `Approved impact: ${approved.reduce((s, r) => s + r.days, 0)} days · ${num(approved.reduce((s, r) => s + r.cost, 0))} cost`
          : `أثر المعتمد: ${approved.reduce((s, r) => s + r.days, 0)} يوم · ${num(approved.reduce((s, r) => s + r.cost, 0))} تكلفة`}
      </Result>
    </Panel>
  );
}

interface KpiRow {
  name: string;
  target: number;
  actual: number;
}
function KpiTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<KpiRow[]>([
    { name: 'Schedule adherence', target: 95, actual: 88 },
    { name: 'Defect escape rate', target: 5, actual: 7 },
  ]);
  const update = (i: number, patch: Partial<KpiRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <Panel
      title={isEn ? 'KPI dashboard' : 'لوحة مؤشرات الأداء'}
      hint={
        isEn
          ? 'Every KPI needs a target, an owner, and a decision trigger.'
          : 'كل مؤشر يحتاج هدفاً ومالكاً ومحفز قرار.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-3 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'KPI' : 'المؤشر'}
            value={r.name}
            onChange={(s) => update(i, { name: s })}
          />
          <NumberField
            label={isEn ? 'Target' : 'الهدف'}
            value={r.target}
            onChange={(n) => update(i, { target: n })}
          />
          <NumberField
            label={isEn ? 'Actual' : 'الفعلي'}
            value={r.actual}
            onChange={(n) => update(i, { actual: n })}
          />
          <div className="col-span-full">
            <Progress value={r.target ? (r.actual / r.target) * 100 : 0} />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [...p, { name: '', target: 100, actual: 0 }])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add KPI' : '+ أضف مؤشراً'}
      </button>
    </Panel>
  );
}

const pdca = [
  {
    name: 'Plan',
    nameAr: 'خطط',
    ar: 'حدد المشكلة، اجمع البيانات، واكتب هدفاً قابلاً للقياس.',
    en: 'Define the problem, collect data, and write a measurable target.',
  },
  {
    name: 'Do',
    nameAr: 'نفّذ',
    ar: 'جرّب التحسين على نطاق صغير وسجّل ما حدث.',
    en: 'Trial the improvement on a small scale and record what happened.',
  },
  {
    name: 'Check',
    nameAr: 'تحقق',
    ar: 'قارن النتيجة بالهدف وافهم أسباب الانحراف.',
    en: 'Compare results with the target and understand variance.',
  },
  {
    name: 'Act',
    nameAr: 'تكيّف',
    ar: 'اعتمد ما نجح، وعدّل ما لم ينجح، ووثّق الدرس.',
    en: 'Standardize what worked, adjust what did not, and document the lesson.',
  },
];
function PdcaTool({ isEn }: { isEn: boolean }) {
  const [i, setI] = useState(0);
  return (
    <Panel
      title={isEn ? 'PDCA explorer' : 'مستكشف PDCA'}
      hint={
        isEn
          ? 'Continuous improvement is a loop, not a one-off meeting.'
          : 'التحسين المستمر حلقة وليس اجتماعاً لمرة واحدة.'
      }
    >
      <div className="flex flex-wrap gap-2">
        {pdca.map((p, idx) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setI(idx)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${i === idx ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-600 dark:bg-slate-700 dark:text-slate-200'}`}
          >
            {isEn ? p.name : p.nameAr}
          </button>
        ))}
      </div>
      <Result>{isEn ? pdca[i].en : pdca[i].ar}</Result>
    </Panel>
  );
}

interface MapRow {
  stakeholder: string;
  impact: number;
  readiness: number;
  action: string;
}
function ChangeMapTool({ isEn }: { isEn: boolean }) {
  const [rows, setRows] = useState<MapRow[]>([
    {
      stakeholder: 'Operations team',
      impact: 5,
      readiness: 2,
      action: 'Early training + champion',
    },
    {
      stakeholder: 'Finance',
      impact: 3,
      readiness: 4,
      action: 'Monthly business case',
    },
  ]);
  const update = (i: number, patch: Partial<MapRow>) =>
    setRows((p) => p.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <Panel
      title={isEn ? 'Organizational change map' : 'خريطة التغيير المؤسسي'}
      hint={
        isEn
          ? 'High impact + low readiness = highest resistance risk.'
          : 'أثر عالٍ وجاهزية منخفضة = أعلى خطر مقاومة.'
      }
    >
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-4 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Stakeholder' : 'الطرف'}
            value={r.stakeholder}
            onChange={(s) => update(i, { stakeholder: s })}
          />
          <NumberField
            label={isEn ? 'Impact' : 'الأثر'}
            value={r.impact}
            onChange={(n) => update(i, { impact: Math.min(5, n) })}
            min={1}
          />
          <NumberField
            label={isEn ? 'Readiness' : 'الجاهزية'}
            value={r.readiness}
            onChange={(n) => update(i, { readiness: Math.min(5, n) })}
            min={1}
          />
          <TextField
            label={isEn ? 'Action' : 'الإجراء'}
            value={r.action}
            onChange={(s) => update(i, { action: s })}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setRows((p) => [
            ...p,
            { stakeholder: '', impact: 3, readiness: 3, action: '' },
          ])
        }
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add stakeholder' : '+ أضف طرفاً'}
      </button>
      <Result tone="warn">
        {isEn
          ? `Highest resistance risk: ${[...rows].sort((a, b) => b.impact - b.readiness - (a.impact - a.readiness))[0]?.stakeholder || '—'}`
          : `أعلى خطر مقاومة: ${[...rows].sort((a, b) => b.impact - b.readiness - (a.impact - a.readiness))[0]?.stakeholder || '—'}`}
      </Result>
    </Panel>
  );
}

const pestleKeys = [
  'Political',
  'Economic',
  'Social',
  'Technological',
  'Legal',
  'Environmental',
];
function PestleTool({ isEn }: { isEn: boolean }) {
  const [scores, setScores] = useState([2, 4, 3, 5, 4, 3]);
  return (
    <Panel
      title={isEn ? 'PESTLE analysis' : 'تحليل PESTLE'}
      hint={
        isEn
          ? 'Score each external force from 1 to 5.'
          : 'قيّم كل قوة خارجية من 1 إلى 5.'
      }
    >
      {pestleKeys.map((k, i) => (
        <div key={k}>
          <div className="flex justify-between text-xs text-ink-600 dark:text-slate-300">
            <span dir="ltr">{k}</span>
            <span dir="ltr">{scores[i]}</span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            value={scores[i]}
            onChange={(e) =>
              setScores((p) =>
                p.map((v, j) => (j === i ? Number(e.target.value) : v))
              )
            }
            className="w-full accent-teal-600"
          />
        </div>
      ))}
      <Result>
        {isEn
          ? `Strongest external force: ${pestleKeys[scores.indexOf(Math.max(...scores))]} — reflect it in the risk register.`
          : `أقوى قوة خارجية: ${pestleKeys[scores.indexOf(Math.max(...scores))]} — انعكس ذلك في سجل المخاطر.`}
      </Result>
    </Panel>
  );
}

function AiTool({ isEn }: { isEn: boolean }) {
  const [checked, setChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [risk, setRisk] = useState(55);
  const [threshold, setThreshold] = useState(60);
  const items = isEn
    ? [
        'Data provenance: sources, model and prompt logged',
        'Training and evaluation data quality reviewed',
        'Bias review by a diverse human panel',
        'Human-in-the-loop (HITL) owner and threshold agreed',
        'Generative output labelled and linked to its input',
        'Privacy, intellectual property and ESG impact assessed',
        'Drift monitoring and escalation path defined',
      ]
    : [
        'سلسلة المصدر (Data provenance): المصادر والنموذج والموجه موثقة',
        'مراجعة جودة بيانات التدريب والتقييم',
        'مراجعة التحيز (Bias review) بواسطة فريق بشري متنوع',
        'اتفاق على مالك وحد المراجعة البشرية (Human-in-the-loop)',
        'وسم المخرج التوليدي وربطه بمدخلاته',
        'تقييم أثر الخصوصية والملكية الفكرية والاستدامة (ESG)',
        'تعريف مراقبة الانحراف ومسار التصعيد',
      ];
  const done = checked.filter(Boolean).length;
  const coreControls = checked[0] && checked[1] && checked[2] && checked[3];
  const humanSignoff = risk >= threshold || !checked[3];
  const clamp = (n: number) => Math.max(1, Math.min(100, n));
  return (
    <Panel
      title={
        isEn
          ? 'Generative AI (GenAI) governance'
          : 'حوكمة الذكاء الاصطناعي التوليدي (GenAI)'
      }
      hint={
        isEn
          ? 'Generative AI (GenAI) can draft estimates and code, but every generative output needs provenance, bias review and a human-in-the-loop decision.'
          : 'الذكاء الاصطناعي التوليدي (GenAI) يمكنه صياغة التقديرات والكود، لكن كل مخرج generative يحتاج سلسلة مصدر ومراجعة تحيز وقراراً بشرياً (human-in-the-loop).'
      }
    >
      <div className="grid gap-2 text-xs sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="font-bold">
            {isEn ? 'Provenance' : 'سلسلة المصدر (Provenance)'}
          </p>
          <p className="mt-1 text-ink-500">
            {isEn
              ? 'Record data origin, model version and prompt so results are traceable.'
              : 'سجّل مصدر البيانات وإصدار النموذج والموجه لتكون النتائج قابلة للتتبع.'}
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="font-bold">{isEn ? 'Bias review' : 'مراجعة التحيز'}</p>
          <p className="mt-1 text-ink-500">
            {isEn
              ? 'Test outputs across groups before they influence estimates or people decisions.'
              : 'اختبر المخرجات عبر الفئات قبل أن تؤثر على التقديرات أو قرارات الأفراد.'}
          </p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="font-bold">
            {isEn ? 'Human-in-the-loop' : 'المراجعة البشرية'}
          </p>
          <p className="mt-1 text-ink-500">
            {isEn
              ? 'A named person signs off whenever risk meets the threshold.'
              : 'يوقّع شخص محدد عند بلوغ درجة الخطورة للحد المحدد.'}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((it, i) => (
          <CheckRow
            key={it}
            label={it}
            checked={checked[i]}
            onChange={(b) =>
              setChecked((p) => p.map((v, j) => (j === i ? b : v)))
            }
          />
        ))}
      </div>
      <Progress value={done} max={items.length} />
      <div className="grid gap-3 sm:grid-cols-2">
        <NumberField
          label={
            isEn
              ? 'Use-case risk score (1–100)'
              : 'درجة خطورة حالة الاستخدام (1–100)'
          }
          value={risk}
          onChange={(n) => setRisk(clamp(n))}
          min={1}
        />
        <NumberField
          label={
            isEn
              ? 'Human-in-the-loop review threshold (1–100)'
              : 'حد المراجعة البشرية (1–100)'
          }
          value={threshold}
          onChange={(n) => setThreshold(clamp(n))}
          min={1}
        />
      </div>
      <Result tone={coreControls ? 'good' : 'warn'}>
        {isEn
          ? `${done}/7 governance controls evidenced · risk ${risk} vs threshold ${threshold} → ${humanSignoff ? 'human sign-off REQUIRED' : 'accelerated path allowed by policy'}. ${coreControls ? 'Provenance, bias review and HITL threshold are in place.' : 'Close the provenance, bias-review and HITL gaps before a controlled pilot.'}`
          : `${done}/7 من ضوابط الحوكمة موثقة · الخطورة ${risk} مقابل الحد ${threshold} ← ${humanSignoff ? 'التوقيع البشري إلزامي' : 'مسار مختصر مسموح به حسب السياسة'}. ${coreControls ? 'سلسلة المصدر ومراجعة التحيز وحد المراجعة البشرية مكتملة.' : 'أغلق فجوات سلسلة المصدر ومراجعة التحيز والمراجعة البشرية قبل التجربة المضبوطة.'}`}
      </Result>
    </Panel>
  );
}

interface SprintRow {
  item: string;
  points: number;
}
function ScrumTool({ isEn }: { isEn: boolean }) {
  const [goal, setGoal] = useState(
    isEn ? 'Make checkout reliable' : 'جعل الدفع موثوقاً'
  );
  const [rows, setRows] = useState<SprintRow[]>([
    { item: 'Fix payment retry', points: 5 },
    { item: 'Add receipt email', points: 3 },
  ]);
  const [events, setEvents] = useState<boolean[]>([false, false, false, false]);
  const eventNames = isEn
    ? ['Sprint', 'Planning', 'Daily Scrum', 'Review + Retrospective']
    : [
        'السبرنت',
        'التخطيط',
        'الاجتماع اليومي',
        'المراجعة + المراجعة بأثر رجعي',
      ];
  const total = rows.reduce((s, r) => s + r.points, 0);
  return (
    <Panel
      title={isEn ? 'Scrum board' : 'لوحة Scrum'}
      hint={
        isEn
          ? 'One goal, a committed backlog, and four events.'
          : 'هدف واحد، قائمة التزامات، وأربعة أحداث.'
      }
    >
      <TextField
        label={isEn ? 'Sprint goal' : 'هدف السبرنت'}
        value={goal}
        onChange={setGoal}
      />
      <div className="grid gap-2 sm:grid-cols-2">
        {eventNames.map((e, i) => (
          <CheckRow
            key={e}
            label={e}
            checked={events[i]}
            onChange={(b) =>
              setEvents((p) => p.map((v, j) => (j === i ? b : v)))
            }
          />
        ))}
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-2 dark:border-slate-700"
        >
          <TextField
            label={isEn ? 'Backlog item' : 'عنصر القائمة'}
            value={r.item}
            onChange={(s) =>
              setRows((p) => p.map((v, j) => (j === i ? { ...v, item: s } : v)))
            }
          />
          <NumberField
            label={isEn ? 'Points' : 'النقاط'}
            value={r.points}
            onChange={(n) =>
              setRows((p) =>
                p.map((v, j) => (j === i ? { ...v, points: n } : v))
              )
            }
            min={1}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => setRows((p) => [...p, { item: '', points: 3 }])}
        className="btn-outline text-sm"
      >
        {isEn ? '+ Add item' : '+ أضف عنصراً'}
      </button>
      <Result tone="good">
        {isEn
          ? `Committed: ${total} points · ${events.filter(Boolean).length}/4 events scheduled.`
          : `الالتزام: ${total} نقطة · ${events.filter(Boolean).length}/4 أحداث مجدولة.`}
      </Result>
    </Panel>
  );
}

const kanbanCols = ['To do', 'In progress', 'Review', 'Done'];
function KanbanTool({ isEn }: { isEn: boolean }) {
  const [cards, setCards] = useState<Record<string, number>>({
    'To do': 5,
    'In progress': 3,
    Review: 2,
    Done: 4,
  });
  const [wip, setWip] = useState<Record<string, number>>({
    'To do': 8,
    'In progress': 3,
    Review: 2,
    Done: 20,
  });
  const overloaded = kanbanCols.filter((c) => cards[c] > wip[c]);
  return (
    <Panel
      title={
        isEn ? 'Kanban board with WIP limits' : 'لوحة Kanban بحدود العمل الجاري'
      }
      hint={
        isEn
          ? 'A column over its WIP limit is a flow problem.'
          : 'تجاوز حد العمل الجاري مشكلة تدفق.'
      }
    >
      <div className="grid gap-2 sm:grid-cols-4">
        {kanbanCols.map((c) => (
          <div
            key={c}
            className={`rounded-xl border p-3 dark:border-slate-700 ${cards[c] > wip[c] ? 'border-rose-400 bg-rose-50/60 dark:bg-rose-950/30' : 'border-slate-200'}`}
          >
            <p
              className="text-xs font-bold text-ink-900 dark:text-slate-100"
              dir="ltr"
            >
              {c}
            </p>
            <p
              className="mt-1 text-2xl font-extrabold text-brand-600"
              dir="ltr"
            >
              {cards[c]}
            </p>
            <div className="mt-2 flex gap-1">
              <button
                type="button"
                onClick={() => setCards((p) => ({ ...p, [c]: p[c] + 1 }))}
                className="rounded bg-slate-100 px-2 text-sm dark:bg-slate-700"
              >
                +
              </button>
              <button
                type="button"
                onClick={() =>
                  setCards((p) => ({ ...p, [c]: Math.max(0, p[c] - 1) }))
                }
                className="rounded bg-slate-100 px-2 text-sm dark:bg-slate-700"
              >
                −
              </button>
            </div>
            <input
              type="number"
              min={1}
              value={wip[c]}
              onChange={(e) =>
                setWip((p) => ({ ...p, [c]: Number(e.target.value) }))
              }
              className="mt-2 w-full rounded border border-slate-200 px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-800"
            />
            <p className="mt-1 text-[10px] text-ink-400" dir="ltr">
              WIP {wip[c]}
            </p>
          </div>
        ))}
      </div>
      <Result tone={overloaded.length ? 'bad' : 'good'}>
        {overloaded.length
          ? isEn
            ? `⛔ WIP overloaded in ${overloaded.join(', ')} (${overloaded.map((c) => `${cards[c]}>${wip[c]}`).join(' · ')}) — stop starting new work and finish or pull those cards forward.`
            : `⛔ تجاوز حد العمل الجاري في ${overloaded.join('، ')} (${overloaded.map((c) => `${cards[c]}>${wip[c]}`).join(' · ')}) — توقف عن بدء عمل جديد وأنهِ البطاقات الحالية أو اسحبها للأمام.`
          : isEn
            ? '✅ No column is over its WIP limit — keep pulling work smoothly; do not add pressure to start more.'
            : '✅ لا يوجد عمود تجاوز حد العمل الجاري — استمر في سحب العمل بسلاسة دون ضغط لبدء المزيد.'}
      </Result>
    </Panel>
  );
}

function AgileTool({ isEn }: { isEn: boolean }) {
  const [checked, setChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const items = isEn
    ? [
        'Individuals and interactions over processes',
        'Working deliverables over exhaustive docs',
        'Customer collaboration over contract negotiation',
        'Responding to change over following a fixed plan',
      ]
    : [
        'الأفراد والتفاعل قبل العمليات',
        'المخرجات العاملة قبل الوثائق المفرطة',
        'تعاون العميل قبل تفاوض العقد',
        'الاستجابة للتغيير قبل اتباع خطة ثابتة',
      ];
  const done = checked.filter(Boolean).length;
  return (
    <Panel
      title={isEn ? 'Agile principles board' : 'لوحة مبادئ Agile'}
      hint={
        isEn
          ? 'Mindset first, ceremonies second.'
          : 'العقلية أولاً، والطقوس ثانياً.'
      }
    >
      <div className="space-y-2">
        {items.map((it, i) => (
          <CheckRow
            key={it}
            label={it}
            checked={checked[i]}
            onChange={(b) =>
              setChecked((p) => p.map((v, j) => (j === i ? b : v)))
            }
          />
        ))}
      </div>
      <Result tone={done === 4 ? 'good' : 'warn'}>
        {isEn
          ? `${done}/4 manifesto values actively applied this sprint.`
          : `قيمة ${done}/4 من قيم الميثاق مطبقة فعلياً هذا السبرنت.`}
      </Result>
    </Panel>
  );
}

function MetricsTool({ isEn }: { isEn: boolean }) {
  const [velocity, setVelocity] = useState([20, 24, 22, 28]);
  const [cycle, setCycle] = useState(4);
  const [remaining, setRemaining] = useState(80);
  const avg = velocity.reduce((s, v) => s + v, 0) / velocity.length;
  const sprints = avg ? Math.ceil(remaining / avg) : 0;
  return (
    <Panel
      title={isEn ? 'Agile metrics dashboard' : 'لوحة مقاييس Agile'}
      hint={
        isEn
          ? 'Trends matter more than a single sprint.'
          : 'الاتجاه أهم من سبرنت واحد.'
      }
    >
      <div className="grid gap-2 sm:grid-cols-4">
        {velocity.map((v, i) => (
          <NumberField
            key={i}
            label={`${isEn ? 'Sprint' : 'سبرنت'} ${i + 1}`}
            value={v}
            onChange={(n) =>
              setVelocity((p) => p.map((x, j) => (j === i ? n : x)))
            }
            min={0}
          />
        ))}
      </div>
      <NumberField
        label={isEn ? 'Cycle time (days)' : 'زمن الدورة (أيام)'}
        value={cycle}
        onChange={setCycle}
        min={1}
      />
      <NumberField
        label={isEn ? 'Remaining story points' : 'النقاط المتبقية'}
        value={remaining}
        onChange={setRemaining}
        min={0}
      />
      <Result>
        {isEn
          ? `Average velocity ${avg.toFixed(1)} · forecast ${sprints} more sprints · cycle time ${cycle}d`
          : `متوسط السرعة ${avg.toFixed(1)} · التوقع ${sprints} سبرنتات إضافية · زمن الدورة ${cycle} يوم`}
      </Result>
    </Panel>
  );
}

function DiagnosticTool({ isEn }: { isEn: boolean }) {
  const [people, setPeople] = useState(70);
  const [process, setProcess] = useState(62);
  const [business, setBusiness] = useState(55);
  const weighted = people * 0.33 + process * 0.41 + business * 0.26;
  const weakest = [
    {
      n: isEn ? 'People' : 'الأفراد',
      v: people,
      a: isEn
        ? 'Practice conflict and stakeholder scenarios'
        : 'تمرّن على سيناريوهات الصراع وأصحاب المصلحة',
    },
    {
      n: isEn ? 'Process' : 'العمليات',
      v: process,
      a: isEn
        ? 'Drill EVM, CPM and change control'
        : 'تدرب على EVM و CPM والتحكم بالتغيير',
    },
    {
      n: isEn ? 'Business Environment' : 'بيئة الأعمال',
      v: business,
      a: isEn
        ? 'Review governance, ESG and benefits'
        : 'راجع الحوكمة والاستدامة والفوائد',
    },
  ].sort((a, b) => a.v - b.v)[0];
  return (
    <Panel
      title={isEn ? 'Diagnostic report' : 'التقرير التشخيصي'}
      hint={
        isEn
          ? 'Enter your mock-exam domain percentages.'
          : 'أدخل نسبك في مجالات محاكي الامتحان.'
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <NumberField
          label={isEn ? 'People %' : 'الأفراد %'}
          value={people}
          onChange={setPeople}
          min={0}
          suffix="%"
        />
        <NumberField
          label={isEn ? 'Process %' : 'العمليات %'}
          value={process}
          onChange={setProcess}
          min={0}
          suffix="%"
        />
        <NumberField
          label={isEn ? 'Business %' : 'بيئة الأعمال %'}
          value={business}
          onChange={setBusiness}
          min={0}
          suffix="%"
        />
      </div>
      <Result tone={weighted >= 70 ? 'good' : 'warn'}>
        {isEn
          ? `Weighted readiness ${pct(weighted)} · focus area: ${weakest.n} → ${weakest.a}`
          : `جاهزية مرجّحة ${pct(weighted)} · مجال التركيز: ${weakest.n} → ${weakest.a}`}
      </Result>
    </Panel>
  );
}

function ExamTool({ isEn }: { isEn: boolean }) {
  return (
    <Panel
      title={isEn ? 'PMP mock exam' : 'محاكي امتحان PMP'}
      hint={
        isEn
          ? '180 questions · 240 minutes · two 10-minute breaks.'
          : '180 سؤالاً · 240 دقيقة · استراحتان 10 دقائق.'
      }
    >
      <Result>
        {isEn
          ? 'Use the full simulator on the exam page: 70% or higher is a strong readiness signal.'
          : 'استخدم المحاكي الكامل في صفحة الامتحان: 70% فأكثر إشارة جاهزية قوية.'}
      </Result>
      <a href="/pmp/exam/" className="btn-primary inline-block text-sm">
        {isEn
          ? 'Open the 180-question simulator →'
          : 'افتح محاكي الـ 180 سؤالاً ←'}
      </a>
    </Panel>
  );
}

export default function PmpTool({ kind }: Props) {
  const lang = useLang();
  const isEn = lang === 'en';
  switch (kind) {
    case 'eligibility':
      return <EligibilityTool isEn={isEn} />;
    case 'eco':
      return <EcoExplorer isEn={isEn} />;
    case 'pacing':
      return <PacingTool isEn={isEn} />;
    case 'studyplan':
      return <StudyPlanTool isEn={isEn} />;
    case 'lifecycle':
      return <LifecycleTool isEn={isEn} />;
    case 'value':
      return <ValueTool isEn={isEn} />;
    case 'approach':
      return <ApproachTool isEn={isEn} />;
    case 'governance':
      return <GovernanceTool isEn={isEn} />;
    case 'vision':
      return <VisionTool isEn={isEn} />;
    case 'raci':
      return <RaciTool isEn={isEn} />;
    case 'stakeholder':
      return <GridTool isEn={isEn} mode="stakeholder" />;
    case 'conflict':
      return <ConflictTool isEn={isEn} />;
    case 'communication':
      return <CommunicationTool isEn={isEn} />;
    case 'wbs':
      return <WbsTool isEn={isEn} />;
    case 'scope':
      return <ScopeTool isEn={isEn} />;
    case 'cpm':
      return <CpmTool isEn={isEn} />;
    case 'budget':
      return <BudgetTool isEn={isEn} />;
    case 'evm':
      return <EvmTool isEn={isEn} />;
    case 'resources':
      return <ResourceTool isEn={isEn} />;
    case 'makebuy':
      return <MakeBuyTool isEn={isEn} />;
    case 'quality':
      return <QualityCostTool isEn={isEn} />;
    case 'closure':
      return <ChecklistTool isEn={isEn} mode="closure" />;
    case 'handover':
      return <ChecklistTool isEn={isEn} mode="handover" />;
    case 'qualitycheck':
      return <ChecklistTool isEn={isEn} mode="qualitycheck" />;
    case 'govcheck':
      return <ChecklistTool isEn={isEn} mode="govcheck" />;
    case 'compliance':
      return <ChecklistTool isEn={isEn} mode="compliance" />;
    case 'risk':
      return <RiskTool isEn={isEn} />;
    case 'riskmatrix':
      return <GridTool isEn={isEn} mode="riskmatrix" />;
    case 'issues':
      return <IssueTool isEn={isEn} />;
    case 'plan':
      return <PlanTool isEn={isEn} />;
    case 'status':
      return <StatusTool isEn={isEn} />;
    case 'changelog':
      return <ChangeTool isEn={isEn} />;
    case 'kpi':
      return <KpiTool isEn={isEn} />;
    case 'pdca':
      return <PdcaTool isEn={isEn} />;
    case 'changemap':
      return <ChangeMapTool isEn={isEn} />;
    case 'pestle':
      return <PestleTool isEn={isEn} />;
    case 'ai':
      return <AiTool isEn={isEn} />;
    case 'scrum':
      return <ScrumTool isEn={isEn} />;
    case 'kanban':
      return <KanbanTool isEn={isEn} />;
    case 'agile':
      return <AgileTool isEn={isEn} />;
    case 'metrics':
      return <MetricsTool isEn={isEn} />;
    case 'diagnostic':
      return <DiagnosticTool isEn={isEn} />;
    case 'exam':
      return <ExamTool isEn={isEn} />;
    default:
      return (
        <Panel
          title={isEn ? 'Tool unavailable' : 'الأداة غير متاحة'}
          hint={
            isEn
              ? `Unknown tool: ${String(kind)}`
              : `أداة غير معروفة: ${String(kind)}`
          }
        >
          <Result tone="warn">
            {isEn
              ? 'This tool kind is not registered. Choose a tool from the lesson page.'
              : 'هذا النوع من الأدوات غير مسجّل. اختر أداة من صفحة الدرس.'}
          </Result>
        </Panel>
      );
  }
}
