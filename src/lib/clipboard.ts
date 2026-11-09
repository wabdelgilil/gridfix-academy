/**
 * وظيفة نسخ النصوص إلى الحافظة متوافقة مع كافة المتصفحات والبيئات
 */
export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}

  // بديل للمتصفحات القديمة أو السياقات غير الآمنة
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = (document as any).execCommand?.('copy') ?? false;
    textArea.remove();
    return Boolean(successful);
  } catch {
    return false;
  }
}
