/**
 * يحمّل قوالب الرأس والتذييل من مجلد includes/
 * - على الجذر: <html data-base="">
 * - داخل مجلد فرعي (مثل en/): <html data-base="../">
 * - ملفات مخصصة: data-include-header و data-include-footer
 */
(function () {
  function basePath() {
    return document.documentElement.getAttribute('data-base') || '';
  }

  function url(file) {
    return basePath() + file;
  }

  async function injectSlot(slotId, file) {
    const slot = document.getElementById(slotId);
    if (!slot) return;
    try {
      const res = await fetch(url(file));
      if (!res.ok) throw new Error(String(res.status));
      const html = await res.text();
      slot.outerHTML = html;
    } catch (err) {
      console.error('[partials]', file, err);
      slot.innerHTML =
        '<p class="p-4 text-center text-red-600" dir="rtl">تعذّر تحميل القالب. شغّل الموقع عبر خادم محلي (مثل: python -m http.server).</p>';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const headerFile = root.getAttribute('data-include-header') || 'includes/header.html';
    const footerFile = root.getAttribute('data-include-footer') || 'includes/footer.html';
    injectSlot('site-header-slot', headerFile);
    injectSlot('site-footer-slot', footerFile);
  });
})();
