import "./globals.css";

import { headers } from "next/headers";
import Script from "next/script";

import { defaultLocale, locales, type Locale } from "@/lib/site-content";

type RootLayoutProps = {
  children: React.ReactNode;
};

const resolveLocale = async (): Promise<Locale> => {
  const headerList = await headers();
  const headerLocale = headerList.get("x-locale");

  if (headerLocale && locales.includes(headerLocale as Locale)) {
    return headerLocale as Locale;
  }

  return defaultLocale;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await resolveLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cinzel:400,700%7CRaleway:500,500i,600,700%7CMaterial+Icons&display=swap"
        />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="icon" type="image/x-icon" href="/img/content/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
        <Script src="/js/vendor.js" strategy="beforeInteractive" />
        <Script id="gsap-effects-fix" strategy="beforeInteractive">
          {`
(function () {
  function ensureMoveCurtain() {
    if (!window.gsap) return false;
    window.gsap.effects = window.gsap.effects || {};
    if (typeof window.gsap.effects.moveCurtain === 'function') return true;

    if (typeof window.gsap.registerEffect === 'function') {
      window.gsap.registerEffect({
        name: 'moveCurtain',
        effect: function (targets, config) {
          var cfg = config || {};
          return window.gsap.to(targets, {
            autoAlpha: 0,
            y: '-100%',
            duration: cfg.duration || 0.6,
            ease: cfg.ease || 'power2.out'
          });
        },
        defaults: { duration: 0.6, ease: 'power2.out' },
        extendTimeline: true
      });
      return true;
    }

    window.gsap.effects.moveCurtain = function (targets, config) {
      var cfg = config || {};
      return window.gsap.to(targets, {
        autoAlpha: 0,
        y: '-100%',
        duration: cfg.duration || 0.6,
        ease: cfg.ease || 'power2.out'
      });
    };
    return true;
  }

  if (!ensureMoveCurtain()) {
    var attempts = 0;
    var timer = setInterval(function () {
      attempts += 1;
      if (ensureMoveCurtain() || attempts > 60) {
        clearInterval(timer);
      }
    }, 50);
  }
})();
          `}
        </Script>
        <Script src="/js/components.js" strategy="afterInteractive" />
        <Script id="preloader-fallback" strategy="afterInteractive">
          {`
(function () {
  var didHide = false;
  var didEmit = false;
  function emitPreloaderEnd() {
    if (didEmit) return;
    didEmit = true;
    try {
      if (window.$window && typeof window.$window.trigger === 'function') {
        window.$window.trigger('arts/preloader/end');
      }
    } catch (e) {}
    try {
      window.dispatchEvent(new CustomEvent('arts/preloader/end'));
    } catch (e) {}
    if (window.SMController && typeof window.SMController.enabled === 'function') {
      window.SMController.enabled(true);
      if (typeof window.SMController.update === 'function') {
        window.SMController.update(true);
      }
    }
  }
  function forceHide() {
    if (didHide) return;
    var preloader = document.getElementById('js-preloader');
    if (!preloader) return;
    didHide = true;
    try {
      if (window.PagePreloader && typeof window.PagePreloader.finish === 'function') {
        window.PagePreloader.finish();
      }
    } catch (e) {}
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    preloader.style.display = 'none';
    document.body.classList.remove('cursor-progress');
    var curtain = document.getElementById('js-page-transition-curtain');
    if (curtain) {
      curtain.style.opacity = '0';
      curtain.style.display = 'none';
    }
    var pageContent = document.querySelector('.page-wrapper__content');
    if (pageContent) {
      pageContent.style.opacity = '1';
      pageContent.style.visibility = 'visible';
      pageContent.style.display = 'block';
    }
    var header = document.getElementById('page-header');
    if (header) {
      header.style.opacity = '1';
      header.style.visibility = 'visible';
    }
    emitPreloaderEnd();
  }

  if (document.readyState === 'complete') {
    setTimeout(forceHide, 1200);
  } else {
    window.addEventListener('load', function () {
      setTimeout(forceHide, 1200);
    }, { once: true });
  }
  setTimeout(forceHide, 4500);
})();
          `}
        </Script>
      </body>
    </html>
  );
}
