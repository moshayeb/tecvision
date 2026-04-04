/**
 * ملاحظات بسيطة للنماذج (حتى ربطها بخادم لاحقاً)
 */
(function () {
  function show(el, msg, ok) {
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden', 'text-red-600', 'text-green-700');
    el.classList.add(ok ? 'text-green-700' : 'text-red-600');
    el.setAttribute('role', 'status');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var newsletter = document.getElementById('form-newsletter');
    var newsletterStatus = document.getElementById('newsletter-status');
    if (newsletter && newsletterStatus) {
      newsletter.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = newsletter.querySelector('[type="email"]');
        if (!input || !input.value.trim()) {
          show(newsletterStatus, 'يرجى إدخال البريد الإلكتروني.', false);
          return;
        }
        if (!input.validity.valid) {
          show(newsletterStatus, 'صيغة البريد غير صحيحة.', false);
          return;
        }
        show(newsletterStatus, 'شكراً — سيتم التواصل عند تفعيل الخدمة.', true);
        input.value = '';
      });
    }

    var contactQuick = document.getElementById('form-contact-quick');
    var contactStatus = document.getElementById('contact-quick-status');
    if (contactQuick && contactStatus) {
      contactQuick.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = contactQuick.querySelector('[type="email"]');
        if (!input || !input.value.trim()) {
          show(contactStatus, 'يرجى إدخال البريد.', false);
          return;
        }
        if (!input.validity.valid) {
          show(contactStatus, 'صيغة البريد غير صحيحة.', false);
          return;
        }
        show(
          contactStatus,
          'تم استلام بريدك. للرد السريع يمكنك الاتصال أو مراسلتنا مباشرة من الروابط أعلاه.',
          true
        );
        input.value = '';
      });
    }
  });
})();
