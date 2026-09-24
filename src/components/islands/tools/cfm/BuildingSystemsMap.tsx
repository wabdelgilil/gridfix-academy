import { useState } from 'react';

interface SystemInfo {
  id: string;
  name: string;
  icon: string;
  components: string[];
  watch: string[];
  failures: string[];
  pm: string[];
}

const systems: SystemInfo[] = [
  {
    id: 'hvac',
    name: 'HVAC — التدفئة والتهوية والتكييف',
    icon: '❄️',
    components: ['وحدات التبريد (Chiller)', 'أبراج التبريد', 'مجاري الهواء', 'وحدات المناولة AHU', 'فلاتر الهواء', 'أنظمة التحكم'],
    watch: ['درجات حرارة متطابقة مع المتطلبات', 'جودة الهواء وثاني أكسيد الكربون', 'استهلاك الطاقة', 'تسريبات ماء مبرّد'],
    failures: ['انخفاض كفاءة التبريد', 'تراكم الأوساخ في الفلاتر', 'توقف وحدات التبريد وقت الذروة', 'تسرب فريون'],
    pm: ['تغيير الفلاتر دورياً', 'تنظيف ملفات التبريد', 'تدقيق مبردات (Refrigerant)', 'معايرة حساسات التحكم'],
  },
  {
    id: 'elec',
    name: 'الأنظمة الكهربائية',
    icon: '⚡',
    components: ['محولات', 'لوحات التوزيع', 'مولدات الطوارئ', 'UPS (وحدات إمداد غير منقطع)', 'إضاءة', 'الحمايات (قواطع)'],
    watch: ['الاستقرار وعدم انقطاع التغذية', 'أحمال التوزيع (Load Balance)', 'جاهزية المولد الاحتياطي', 'زمن عمر البطاريات'],
    failures: ['انقطاع كهرباء يؤثر على الاستمرارية', 'تسخين التوصيلات', 'تعطل UPS لحظي', 'فشل المولد عند الحاجة'],
    pm: ['اختبار المولد أسبوعياً بتحميل', 'قياس حرارة التوصيلات بالتصوير الحراري', 'استبدال بطاريات UPS دورياً', 'ربط وتثبيت القواطع'],
  },
  {
    id: 'plumb',
    name: 'السباكة والمياه',
    icon: '🚰',
    components: ['شبكة المياه الباردة والساخنة', 'المضخات', 'خزانات المياه', 'الصرف الصحي', 'معالجة المياه'],
    watch: ['ضغط وتدفق المياه', 'تسريبات مخفية', 'نظافة وجودة المياه', 'حرارة المياه الساخنة'],
    failures: ['تمدد وانقطاع المياه عن حمامات المستخدمين', 'تلوث ماء الشرب', 'فيضانات من الأنابيب المكسورة'],
    pm: ['فحص تسريبات دوري', 'عينة مياه للجودة', 'تنظيف الطلمبات', 'معايرة سخانات'],
  },
  {
    id: 'fire',
    name: 'الحماية من الحريق',
    icon: '🧯',
    components: ['كاشفات دخان وحرارة', 'نظام إنذار (Fire Alarm)', 'رشاشات (Sprinklers)', 'طفايات', 'نظام ضخ الحريق (Fire Pump)', 'أبواب إغلاق'],
    watch: ['جاهزية النظام واستمرارية الرصد', 'صيانة أجهزة الاستجابة للإنذار', 'إضاءة الطوارئ ومسارات الإخلاء'],
    failures: ['إنذار خاطئ', 'انخفاض ضغط نظام الرش', 'طفايات منتهية الصلاحية', 'انقطاع تغذية نظام الإنذار يخرجه عن الخدمة'],
    pm: ['اختبار إنذار شهري', 'فحص ضغط الرشاشات', 'استبدال الطفايات', 'تدريب الإخلاء'],
  },
  {
    id: 'vert',
    name: 'النقل الرأسي — المصاعد والسلالم المتحركة',
    icon: '🛗',
    components: ['غرفة الآلات', 'الكابينة', 'الأنظمة الهيدروليكية/الجر', 'أبواب المصاعد', 'حساسات الأمان'],
    watch: ['جاهزية المصاعد أوقات الذروة', 'زمن الاستجابة للبلاغ', 'أمان الأبواب', 'نظافة وصورة الصيانة'],
    failures: ['توقف مصعد، أخطر ما في المباني الإدارية', 'إصابة أو حبس ركاب', 'إغلاق طويل للصيانة'],
    pm: ['عقود صيانة متخصصة إلزامية', 'فحص أسبوعي وصيانة شهرية', 'استبدال الحبال والحد الأقصى للحمولة'],
  },
  {
    id: 'bas',
    name: 'أتمتة المبنى (BAS)',
    icon: '🤖',
    components: ['وحدات تحكم (BACnet)', 'حساسات', 'جداول تشغيل وإيقاف', 'لوحة مراقبة مركزية', 'إنترنت الأشياء IoT'],
    watch: ['بيانات الأداء لحظياً', 'جداول الإيقاف التشغيلية لترشيد الطاقة', 'إنذارات المعدات مبكراً', 'جيل تقارير الأداء'],
    failures: ['فقدان الاتصال بالحساسات', 'جداول خاطئة ترفع الطاقة', 'تعطل لوحة التحكم', 'أخطاء القراءة'],
    pm: ['تحديث البرمجيات', 'معايرة الحساسات', 'نسخ احتياطي للإعدادات', 'مراجعة سجلات الطاقة'],
  },
];

export default function BuildingSystemsMap() {
  const [active, setActive] = useState(systems[0]);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🗺️ خريطة مبنى تفاعلية — أنظمة المنشأة وأولوياتها
      </div>

      <div className="flex flex-wrap gap-2 p-4">
        {systems.map((s) => (
          <button
            type="button"
            key={s.id}
            onClick={() => setActive(s)}
            className={`rounded-xl px-3.5 py-2 text-sm font-medium transition ${
              active.id === s.id ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-600 hover:bg-slate-200 cursor-pointer'
            }`}
          >
            {s.icon} {s.id === 'bas' ? 'BAS' : s.id === 'vert' ? 'مصاعد' : s.id === 'fire' ? 'حريق' : s.id === 'plumb' ? 'مياه' : s.id === 'hvac' ? 'HVAC' : 'كهرباء'}
          </button>
        ))}
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-sm font-bold text-ink-900">🧩 مكونات النظام</p>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
            {active.components.map((c) => (
              <li key={c} className="flex items-center gap-2"><span className="text-brand-600">◈</span>{c}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-sm font-bold text-ink-900">👁 ما يراقبه مدير المنشأة</p>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
            {active.watch.map((w) => (
              <li key={w} className="flex items-center gap-2"><span className="text-brand-600">◈</span>{w}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4">
          <p className="text-sm font-bold text-rose-700">⚠️ أنماط الفشل الشائعة</p>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
            {active.failures.map((f) => (
              <li key={f} className="flex items-center gap-2"><span className="text-rose-500">✕</span>{f}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-brand-200 bg-brand-50/50 p-4">
          <p className="text-sm font-bold text-brand-700">🔧 أولويات الصيانة الوقائية</p>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
            {active.pm.map((p) => (
              <li key={p} className="flex items-center gap-2"><span className="text-brand-600">✓</span>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}