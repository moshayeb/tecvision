/** إعداد ألوان TecVision من متغيرات css/styles.css */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        tec: {
          orange: 'var(--tec-orange)',
          charcoal: 'var(--tec-charcoal)',
          muted: 'var(--tec-muted)',
          line: 'var(--tec-line)',
          surface: 'var(--tec-surface)',
        },
      },
    },
  },
};
