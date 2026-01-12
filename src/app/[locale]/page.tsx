
import { notFound } from "next/navigation";

import { locales, siteContent, type Locale } from "@/lib/site-content";

type PageProps = {
  params: { locale: string };
};

const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

const highlightIcons = [
  "/img/assets/sectionServices/value.svg",
  "/img/assets/sectionServices/rings.svg",
  "/img/assets/sectionServices/studio-lighting.svg",
];

export default function HomePage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const content = siteContent[locale];
  const phoneHref = `tel:+46764150446`;
  const emailHref = `mailto:${content.contact.email}`;
  const aboutImage = content.gallery.items[0];
  const aboutImageSrc = aboutImage?.src ?? content.hero.image;
  const aboutImageAlt = aboutImage?.alt ?? content.about.title;
  const gallerySlides = content.gallery.items.slice(0, 4);

  return (
    <>
      <div data-barba="wrapper">
        <div
          className="preloader text-center bg-dark-2"
          id="js-preloader"
          data-arts-theme-text="light"
        >
          <div className="preloader__content">
            <div className="preloader__header mt-auto">
              <div className="preloader__heading h2">MM Persienner</div>
              <div className="preloader__subline small-caps mt-1">
                {content.hero.eyebrow}
              </div>
            </div>
            <div className="preloader__counter h5">
              <span className="preloader__counter-number preloader__counter-current">
                0
              </span>
              <span className="preloader__counter-divider">
                &nbsp;&nbsp;/&nbsp;&nbsp;
              </span>
              <span className="preloader__counter-number preloader__counter-total">
                100
              </span>
            </div>
            <div className="preloader__circle"></div>
          </div>
        </div>
        <svg
          className="spinner d-lg-none"
          id="js-spinner"
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="spinner__path"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
        <div className="curtain transition-curtain" id="js-page-transition-curtain">
          <div className="curtain__wrapper-svg">
            <svg
              className="curtain-svg"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                className="curtain-svg__normal"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_top-desktop"
                d="M0,300 C305.333333,100 625.333333,0 960,0 C1294.66667,0 1614.66667,100 1920,300 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,300 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_top-mobile"
                d="M0,150 C305.333333,50 625.333333,0 960,0 C1294.66667,0 1614.66667,50 1920,150 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,150 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_bottom-desktop"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_bottom-mobile"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1030 1294.66667,1005 960,1005 C625.333333,1005 305.333333,1030 0,1080 L0,0 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-curtain curtain" id="js-header-curtain">
          <div className="curtain__wrapper-svg">
            <svg
              className="curtain-svg"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                className="curtain-svg__normal"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_top-desktop"
                d="M0,300 C305.333333,100 625.333333,0 960,0 C1294.66667,0 1614.66667,100 1920,300 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,300 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_top-mobile"
                d="M0,150 C305.333333,50 625.333333,0 960,0 C1294.66667,0 1614.66667,50 1920,150 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,150 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_bottom-desktop"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_bottom-mobile"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1030 1294.66667,1005 960,1005 C625.333333,1005 305.333333,1030 0,1080 L0,0 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className="header-curtain header-curtain_transition curtain"
          id="js-header-curtain-transition"
        >
          <div className="curtain__wrapper-svg">
            <svg
              className="curtain-svg"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                className="curtain-svg__normal"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,0 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_top-desktop"
                d="M0,300 C305.333333,100 625.333333,0 960,0 C1294.66667,0 1614.66667,100 1920,300 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,300 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_top-mobile"
                d="M0,150 C305.333333,50 625.333333,0 960,0 C1294.66667,0 1614.66667,50 1920,150 L1920,1080 C1614.66667,1080 1294.66667,1080 960,1080 C625.333333,1080 305.333333,1080 0,1080 L0,150 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_bottom-desktop"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,980 1294.66667,930 960,930 C625.333333,930 305.333333,980 0,1080 L0,0 Z"
              ></path>
              <path
                className="curtain-svg__curve curtain-svg__curve_bottom-mobile"
                d="M0,0 C305.333333,0 625.333333,0 960,0 C1294.66667,0 1614.66667,0 1920,0 L1920,1080 C1614.66667,1030 1294.66667,1005 960,1005 C625.333333,1005 305.333333,1030 0,1080 L0,0 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="cursor" id="js-cursor">
          <div className="cursor__wrapper">
            <div className="cursor__follower">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle
                  id="inner"
                  cx="25"
                  cy="25"
                  r="24"
                  style={{ opacity: 0.6 }}
                ></circle>
                <circle
                  id="outer"
                  cx="25"
                  cy="25"
                  r="24"
                  style={{
                    strokeDashoffset: 252.327,
                    strokeDasharray: "0px, 999999px",
                  }}
                ></circle>
              </svg>
            </div>
            <div className="cursor__arrows">
              <div className="cursor__arrow cursor__arrow_up material-icons">
                keyboard_arrow_up
              </div>
              <div className="cursor__arrow cursor__arrow_down material-icons">
                keyboard_arrow_down
              </div>
              <div className="cursor__arrow cursor__arrow_left material-icons">
                keyboard_arrow_left
              </div>
              <div className="cursor__arrow cursor__arrow_right material-icons">
                keyboard_arrow_right
              </div>
            </div>
            <div className="cursor__label"></div>
            <div className="cursor__icon material-icons"></div>
          </div>
        </div>
        <header
          className="header header_menu-right header_fixed container-fluid js-header-sticky"
          id="page-header"
          data-arts-theme-text="light"
          data-arts-header-sticky-theme="bg-dark-2"
          data-arts-header-logo="secondary"
          data-arts-header-sticky-logo="secondary"
          data-arts-header-overlay-theme="dark"
          data-arts-header-overlay-background="#000"
        >
          <div className="header__container header__controls">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto header__col header__col-left">
                <a className="logo" href={`/${locale}`} aria-label="MM Persienner">
                  <div className="logo__wrapper-img">
                    <img
                      className="logo__img-primary"
                      src="/brand/logo.png"
                      alt="MM Persienner"
                      height="24"
                    />
                    <img
                      className="logo__img-secondary"
                      src="/brand/logo.png"
                      alt="MM Persienner"
                      height="24"
                    />
                  </div>
                </a>
              </div>
              <div className="col-auto header__col">
                <div className="lang-switch" aria-label="Language switch">
                  <a className={locale === "sv" ? "is-active" : ""} href="/sv">
                    SV
                  </a>
                  <span>/</span>
                  <a className={locale === "en" ? "is-active" : ""} href="/en">
                    EN
                  </a>
                </div>
              </div>
              <div className="col-auto header__col">
                <div
                  className="header__burger"
                  id="js-burger"
                  data-arts-cursor="data-arts-cursor"
                  data-arts-cursor-scale="1.7"
                  data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                  data-arts-cursor-hide-native="true"
                >
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                </div>
              </div>
              <div className="header__overlay-menu-back" id="js-submenu-back">
                <div
                  className="arrow arrow-left js-arrow arrow_mini"
                  data-arts-cursor="data-arts-cursor"
                  data-arts-cursor-hide-native="true"
                  data-arts-cursor-scale="0"
                  data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                >
                  <svg
                    className="svg-circle"
                    viewBox="0 0 60 60"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <circle className="circle" cx="30" cy="30" r="29" fill="none"></circle>
                  </svg>
                  <div className="arrow__pointer arrow-left__pointer"></div>
                  <div className="arrow__triangle"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__wrapper-overlay-menu container-fluid container-fluid_paddings">
            <div className="header__wrapper-menu">
              <ul className="menu-overlay js-menu-overlay">
                <li>
                  <a className="h2" href="#about" data-pjax-link="overlayMenu">
                    <div
                      className="menu-overlay__item-wrapper split-text js-split-text"
                      data-split-text-type="lines"
                    >
                      {content.nav.about}
                    </div>
                  </a>
                </li>
                <li>
                  <a className="h2" href="#services" data-pjax-link="overlayMenu">
                    <div
                      className="menu-overlay__item-wrapper split-text js-split-text"
                      data-split-text-type="lines"
                    >
                      {content.nav.services}
                    </div>
                  </a>
                </li>
                <li>
                  <a className="h2" href="#gallery" data-pjax-link="overlayMenu">
                    <div
                      className="menu-overlay__item-wrapper split-text js-split-text"
                      data-split-text-type="lines"
                    >
                      {content.nav.gallery}
                    </div>
                  </a>
                </li>
                <li>
                  <a className="h2" href="#contact" data-pjax-link="overlayMenu">
                    <div
                      className="menu-overlay__item-wrapper split-text js-split-text"
                      data-split-text-type="lines"
                    >
                      {content.nav.contact}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__wrapper-overlay-widgets">
              <div className="row">
                <div className="col-lg-4 header__widget">
                  <div className="header__widget-title small-caps js-split-text split-text">
                    {content.contact.phoneLabel}
                  </div>
                  <div className="header__widget-content js-split-text split-text">
                    <p>
                      <a href={phoneHref}>{content.contact.phone}</a>
                      <br />
                      <a href={emailHref}>{content.contact.email}</a>
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 header__widget">
                  <div className="header__widget-title small-caps js-split-text split-text">
                    {content.contact.addressLabel}
                  </div>
                  <div className="header__widget-content js-split-text split-text">
                    <p>
                      {content.contact.address}
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 header__widget">
                  <div className="header__widget-title small-caps js-split-text split-text">
                    {content.contact.orgLabel}
                  </div>
                  <div className="header__widget-content js-split-text split-text">
                    <p>
                      {content.contact.orgNumber}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="js-smooth-scroll bg-dark-1" id="page-wrapper" data-barba="container">
          <main className="page-wrapper__content">
            <section
              className="section section-masthead d-none"
              data-background-color="var(--color-dark-1)"
            ></section>
            <section
              className="section section-fullheight section-projects section-projects-slider bg-dark-1 overflow"
              data-arts-theme-text="light"
              data-arts-os-animation="true"
              id="home"
            >
              <div className="section-fullheight__inner section-fullheight__inner_mobile text-center">
                <div className="slider slider-fullscreen-projects js-slider-fullscreen-projects js-slider">
                  <div className="slider-fullscreen-projects__content swiper-container pointer-events-none js-slider-fullscreen-projects__content">
                    <div className="swiper-wrapper">
                      {content.heroSlider.items.map((item) => (
                        <div className="swiper-slide" key={item.title}>
                          <h2
                            className="h1 slider__heading js-split-text"
                            data-split-text-type="lines, words, chars"
                          >
                            {item.title}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="slider-fullscreen-projects__images swiper-container js-slider-fullscreen-projects__images"
                    data-mousewheel-enabled="data-mousewheel-enabled"
                    data-direction="horizontal"
                    data-transition-effect="distortion"
                    data-aspect-ratio="1.5"
                    data-transition-displacement-img="/img/general/bg-displacement-7.jpg"
                    data-speed="1200"
                    data-autoplay-enabled="true"
                    data-autoplay-delay="6000"
                    data-counter-style="roman"
                  >
                    <div className="swiper-wrapper">
                      {content.heroSlider.items.map((item) => (
                        <div className="swiper-slide overflow" key={item.image}>
                          <div
                            className="slider__images-slide-inner js-transition-img overflow"
                            data-swiper-parallax="90%"
                          >
                            <div
                              className="slider__bg lazy-bg js-transition-img__transformed-el"
                              data-texture-src={item.image}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="slider__overlay overlay overlay_circle-dark overlay_deither"></div>
                    <div className="slider__circle"></div>
                  </div>
                  <div className="slider-fullscreen-projects__footer swiper-container js-slider-fullscreen-projects__footer">
                    <div className="swiper-wrapper">
                      {content.heroSlider.items.map((item) => (
                        <div className="swiper-slide" key={item.title}>
                          <div className="slider__wrapper-button-footer">
                            <a
                              className="button button_white button_bordered"
                              data-hover={content.heroSlider.button}
                              href="#contact"
                            >
                              <span className="button__label-hover">
                                {content.heroSlider.button}
                              </span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider__wrapper-counter slider-fullscreen-projects__counter">
                    <div className="slider__counter slider__counter_current">
                      <div className="js-slider-fullscreen-projects__counter-current swiper-container">
                        <div className="swiper-wrapper"></div>
                      </div>
                    </div>
                    <div className="slider__counter-divider slider-fullscreen__counter-divider"></div>
                    <div className="slider__counter slider__counter_total js-slider-fullscreen-projects__counter-total"></div>
                  </div>
                  <div className="slider__arrow slider__arrow_left slider__arrow_absolute js-slider__arrow-prev">
                    <div
                      className="arrow arrow-left js-arrow"
                      data-arts-cursor="data-arts-cursor"
                      data-arts-cursor-hide-native="true"
                      data-arts-cursor-scale="0"
                      data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                    >
                      <svg
                        className="svg-circle"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <circle className="circle" cx="30" cy="30" r="29" fill="none"></circle>
                      </svg>
                      <div className="arrow__pointer arrow-left__pointer"></div>
                      <div className="arrow__triangle"></div>
                    </div>
                  </div>
                  <div className="slider__arrow slider__arrow_right slider__arrow_absolute js-slider__arrow-next">
                    <div
                      className="arrow arrow-right js-arrow"
                      data-arts-cursor="data-arts-cursor"
                      data-arts-cursor-hide-native="true"
                      data-arts-cursor-scale="0"
                      data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                    >
                      <svg
                        className="svg-circle"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <circle className="circle" cx="30" cy="30" r="29" fill="none"></circle>
                      </svg>
                      <div className="arrow__pointer arrow-right__pointer"></div>
                      <div className="arrow__triangle"></div>
                    </div>
                  </div>
                  <div className="slider__wrapper-canvas">
                    <div className="slider__wrapper-canvas-inner">
                      <canvas className="slider__canvas"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="section section-content clearfix bg-light-1 pt-large pb-medium"
              id="about"
              data-arts-os-animation="true"
            >
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="section-content__heading split-text js-split-text"
                      data-split-text-type="lines,words"
                      data-split-text-set="words"
                    >
                      <h2 className="h2 mt-0 mb-0">{content.about.title}</h2>
                    </div>
                    <div
                      className="section-content__text split-text js-split-text mt-1"
                      data-split-text-type="lines"
                      data-split-text-set="lines"
                    >
                      <p>{content.about.lead}</p>
                      <p>{content.about.body}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2 mt-lg-0">
                    <div className="section-content__image overflow">
                      <div className="section-content__image-inner">
                        <section className="section section-image">
                          <div
                            className="section-image__wrapper"
                            data-arts-parallax="data-arts-parallax"
                            data-arts-parallax-factor="0.15"
                          >
                            <div className="lazy">
                              <img
                                data-src={aboutImageSrc}
                                src="#"
                                alt={aboutImageAlt}
                                width="1280"
                                height="1920"
                              />
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="section section-services section-grid pb-medium bg-light-1"
              data-arts-os-animation="true"
              data-grid-columns="3"
              data-grid-columns-tablet="2"
              data-grid-columns-mobile="1"
            >
              <div className="container">
                <div className="row row-gutters">
                  {content.highlights.map((item, index) => (
                    <div className="col-lg-4 col-sm-6 col-gutters" key={item.title}>
                      <div className="section-grid__item">
                        <div className="figure-feature bg-white">
                          <div className="figure-feature__header">
                            <div className="figure-feature__icon">
                              <img
                                src={highlightIcons[index % highlightIcons.length]}
                                alt={item.title}
                              />
                            </div>
                            <div className="figure-feature__heading h4 mt-0-5 mb-0">
                              {item.title}
                            </div>
                          </div>
                          <p className="paragraph mt-0-5 mb-0">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section
              className="section section-content clearfix bg-light-2 pt-large pb-small"
              id="services"
              data-arts-os-animation="true"
            >
              <div className="container">
                <div className="row align-items-end justify-content-between">
                  <div className="col-lg-7">
                    <div
                      className="section-content__heading split-text js-split-text"
                      data-split-text-type="lines,words"
                      data-split-text-set="words"
                    >
                      <h2 className="h2 mt-0 mb-0">{content.services.title}</h2>
                    </div>
                    <div className="section__headline mt-2 mr-auto"></div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="section-content__text split-text js-split-text mt-1"
                      data-split-text-type="lines"
                      data-split-text-set="lines"
                    >
                      <p>{content.services.revealTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="section section-list bg-light-2 pb-medium"
              data-arts-theme-text="dark"
              data-arts-os-animation="true"
            >
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div
                      className="list-projects js-list-hover"
                      data-arts-hover-strength="0.35"
                      data-arts-hover-scale-texture="1.2"
                      data-arts-hover-scale-plane="0.33"
                    >
                      <div className="list-projects__items">
                        {content.services.items.map((item) => (
                          <a
                            className="list-projects__item pt-small pb-small js-change-text-hover js-list-hover__link"
                            href="#contact"
                            data-arts-cursor="data-arts-cursor"
                            data-arts-cursor-hide-native="true"
                            data-arts-cursor-scale="0.0"
                            data-pjax-link="listHover"
                            key={item.title}
                          >
                            <div className="row align-items-center justify-content-center justify-content-md-between">
                              <div className="col-12 d-md-none">
                                <div className="js-transition-img list-projects__cover overflow js-list-hover__cover">
                                  <div className="js-transition-img__transformed-el">
                                    <img
                                      className="of-cover"
                                      data-texture-src={item.image}
                                      src="#"
                                      alt={item.title}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <h2
                                  className="list-projects__heading js-split-text split-text"
                                  data-split-text-type="lines,words"
                                  data-split-text-set="words"
                                >
                                  {item.title}
                                </h2>
                              </div>
                              <div className="col-lg-4">
                                <div className="list-projects__wrapper-link text-lg-right">
                                  <div className="change-text-hover small-caps js-change-text-hover text-lg-right">
                                    <div
                                      className="change-text-hover__normal js-split-text split-text js-change-text-hover__normal"
                                      data-split-text-type="lines"
                                      data-split-text-set="lines"
                                    >
                                      {item.eyebrow}
                                    </div>
                                    <div className="change-text-hover__hover js-change-text-hover__hover">
                                      <div className="change-text-hover__line js-change-text-hover__line"></div>
                                      <span
                                        className="js-split-text split-text"
                                        data-split-text-type="lines"
                                        data-split-text-set="lines"
                                      >
                                        {content.services.revealHover}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <canvas
                        className="list-project__canvas js-list-hover__canvas"
                        data-arts-scroll-fixed="data-arts-scroll-fixed"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="section section-fullheight section-projects section-projects-slider bg-dark-2 overflow"
              data-arts-theme-text="light"
              data-arts-os-animation="true"
              id="showcase"
            >
              <div className="section-fullheight__inner section-fullheight__inner_mobile text-center">
                <div className="slider slider-fullscreen-projects js-slider-fullscreen-projects js-slider">
                  <div className="slider-fullscreen-projects__content swiper-container pointer-events-none js-slider-fullscreen-projects__content">
                    <div className="swiper-wrapper">
                      {content.services.items.map((item) => (
                        <div className="swiper-slide" key={`showcase-${item.title}`}>
                          <div
                            className="small-caps slider__subheading js-split-text split-text mb-1"
                            data-split-text-type="lines, words, chars"
                            data-split-text-set="chars"
                          >
                            {item.eyebrow}
                          </div>
                          <h2
                            className="h1 slider__heading js-split-text"
                            data-split-text-type="lines, words, chars"
                          >
                            {item.title}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="slider-fullscreen-projects__images swiper-container js-slider-fullscreen-projects__images"
                    data-mousewheel-enabled="data-mousewheel-enabled"
                    data-direction="horizontal"
                    data-transition-effect="enterLeave"
                    data-speed="1200"
                    data-autoplay-enabled="true"
                    data-autoplay-delay="6000"
                    data-counter-style="roman"
                    data-touch-ratio="1.5"
                    data-drag-mouse="true"
                    data-drag-cursor="true"
                    data-drag-class="slider-fullscreen-projects__images_scale-up"
                  >
                    <div className="swiper-wrapper">
                      {content.services.items.map((item) => (
                        <div className="swiper-slide overflow" key={`showcase-${item.image}`}>
                          <div
                            className="slider__images-slide-inner js-transition-img overflow"
                            data-swiper-parallax="90%"
                          >
                            <div
                              className="slider__bg swiper-lazy js-transition-img__transformed-el"
                              data-background={item.image}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="slider__overlay overlay overlay_dark"></div>
                    <div className="slider__circle"></div>
                  </div>
                  <div className="slider-fullscreen-projects__footer swiper-container js-slider-fullscreen-projects__footer">
                    <div className="swiper-wrapper">
                      {content.services.items.map((item) => (
                        <div className="swiper-slide" key={`showcase-footer-${item.title}`}>
                          <div className="slider__wrapper-button-footer">
                            <a
                              className="button button_white button_bordered"
                              data-hover={content.heroSlider.button}
                              href="#contact"
                            >
                              <span className="button__label-hover">
                                {content.heroSlider.button}
                              </span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider__wrapper-counter slider-fullscreen-projects__counter">
                    <div className="slider__counter slider__counter_current">
                      <div className="js-slider-fullscreen-projects__counter-current swiper-container">
                        <div className="swiper-wrapper"></div>
                      </div>
                    </div>
                    <div className="slider__counter-divider slider-fullscreen__counter-divider"></div>
                    <div className="slider__counter slider__counter_total js-slider-fullscreen-projects__counter-total"></div>
                  </div>
                  <div className="slider__arrow slider__arrow_left slider__arrow_absolute js-slider__arrow-prev">
                    <div
                      className="arrow arrow-left js-arrow"
                      data-arts-cursor="data-arts-cursor"
                      data-arts-cursor-hide-native="true"
                      data-arts-cursor-scale="0"
                      data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                    >
                      <svg
                        className="svg-circle"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <circle className="circle" cx="30" cy="30" r="29" fill="none">
                        </circle>
                      </svg>
                      <div className="arrow__pointer arrow-left__pointer"></div>
                      <div className="arrow__triangle"></div>
                    </div>
                  </div>
                  <div className="slider__arrow slider__arrow_right slider__arrow_absolute js-slider__arrow-next">
                    <div
                      className="arrow arrow-right js-arrow"
                      data-arts-cursor="data-arts-cursor"
                      data-arts-cursor-hide-native="true"
                      data-arts-cursor-scale="0"
                      data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                    >
                      <svg
                        className="svg-circle"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <circle className="circle" cx="30" cy="30" r="29" fill="none">
                        </circle>
                      </svg>
                      <div className="arrow__pointer arrow-right__pointer"></div>
                      <div className="arrow__triangle"></div>
                    </div>
                  </div>
                  <div className="slider__wrapper-canvas">
                    <div className="slider__wrapper-canvas-inner">
                      <canvas className="slider__canvas"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {content.services.items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <section
                  className="section section-services section-content mb-medium mt-medium"
                  data-arts-os-animation="true"
                  key={`${item.title}-${item.eyebrow}`}
                >
                  <div className="container-fluid no-gutters section-services__container">
                    <div className="row no-gutters align-items-center">
                      <div className={`col-lg-7 ${isEven ? "order-lg-1" : "order-lg-2"}`}>
                        <div className="section-content__image overflow">
                          <div className="section-content__image-inner">
                            <section className="section section-image">
                              <div
                                className="section-image__wrapper"
                                data-arts-parallax="data-arts-parallax"
                                data-arts-parallax-factor="0.15"
                              >
                                <div className="lazy">
                                  <img
                                    data-src={item.image}
                                    src="#"
                                    alt={item.title}
                                    width="1920"
                                    height="1280"
                                  />
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-5 ${isEven ? "order-lg-2" : "order-lg-1"}`}>
                        <div className="section-services__wrapper-content">
                          <section className="section section-content clearfix container-fluid pt-md-0 pb-md-0 pt-small">
                            <div className="section-content__inner">
                              <div className="section-content__heading split-text js-split-text mb-0-5">
                                <div className="small-caps">{item.eyebrow}</div>
                              </div>
                              <div className="section-content__heading split-text js-split-text">
                                <h2>{item.title}</h2>
                              </div>
                              <div className="section-content__text split-text js-split-text mt-1">
                                <p>{item.text}</p>
                              </div>
                              <div className="section-content__button mt-2">
                                <a className="d-inline-block no-highlight" href="#contact">
                                  <div
                                    className="arrow arrow-right js-arrow"
                                    data-arts-cursor="data-arts-cursor"
                                    data-arts-cursor-hide-native="true"
                                    data-arts-cursor-scale="0"
                                    data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                                  >
                                    <svg
                                      className="svg-circle"
                                      viewBox="0 0 60 60"
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                      <circle
                                        className="circle"
                                        cx="30"
                                        cy="30"
                                        r="29"
                                        fill="none"
                                      ></circle>
                                    </svg>
                                    <div className="arrow__pointer arrow-right__pointer"></div>
                                    <div className="arrow__triangle"></div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`section-services__wrapper-letter ${
                        isEven
                          ? "section-services__wrapper-letter_right"
                          : "section-services__wrapper-letter_left"
                      }`}
                    >
                      <div
                        className="section-services__letter"
                        data-arts-parallax="element"
                        data-arts-parallax-y="-30%"
                      >
                        {item.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
            <section
              className="section section-grid section-content overflow bg-dark-2 pt-large pb-medium"
              data-arts-os-animation="true"
              data-grid-columns="3"
              data-grid-tablet="2"
              data-grid-mobile="1"
              data-arts-theme-text="light"
              id="gallery"
            >
              <div className="container-fluid">
                <div className="row justify-content-between align-items-center section pb-medium">
                  <div className="col-12 col-lg-auto">
                    <h2 className="h1 mt-0 mb-0">{content.gallery.title}</h2>
                    <div className="section__headline mt-2 mr-auto"></div>
                  </div>
                </div>
                <div className="grid grid_fluid-5 js-grid">
                  <div className="grid__item grid__item_desktop-4 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-5 grid__item_fluid-5-fancy grid__sizer js-grid__sizer"></div>
                  {content.gallery.items.map((item) => (
                    <div
                      className="grid__item grid__item_desktop-4 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-5 grid__item_fluid-5-fancy js-grid__item"
                      key={item.src}
                    >
                      <div className="section-grid__item">
                        <a className="figure-project hover-zoom js-change-text-hover" href="#contact">
                          <div className="hover-zoom__inner">
                            <div className="hover-zoom__zoom">
                              <div
                                className="figure-project__wrapper-img js-transition-img"
                                data-arts-parallax="data-arts-parallax"
                                data-arts-parallax-factor="0.15"
                              >
                                <div className="lazy js-transition-img__transformed-el">
                                  <img
                                    data-src={item.src}
                                    src="#"
                                    alt={item.alt}
                                    width="1280"
                                    height="1920"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="figure-project__content pl-md-2 pt-md-2 pt-1 pl-0">
                            <h2 className="h3 figure-project__heading">{item.alt}</h2>
                            <div className="figure-project__category mt-md-1 mt-0-5">
                              <div className="change-text-hover small-caps js-change-text-hover change-text-hover_has-line text-left">
                                <div
                                  className="change-text-hover__normal js-split-text split-text js-change-text-hover__normal"
                                  data-split-text-type="lines"
                                  data-split-text-set="lines"
                                >
                                  {content.nav.gallery}
                                </div>
                                <div className="change-text-hover__hover js-change-text-hover__hover">
                                  <div className="change-text-hover__line js-change-text-hover__line"></div>
                                  <span
                                    className="js-split-text split-text"
                                    data-split-text-type="lines"
                                    data-split-text-set="lines"
                                  >
                                    {content.services.revealHover}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section
              className="section section-fullheight section-projects section-projects-slider bg-dark-1 overflow"
              data-arts-theme-text="light"
              data-arts-os-animation="true"
              id="gallery-slider"
            >
              <div className="section-fullheight__inner section-fullheight__inner_mobile text-center">
                <div className="slider slider-fullscreen-projects js-slider-fullscreen-projects js-slider">
                  <div className="slider-fullscreen-projects__content swiper-container pointer-events-none js-slider-fullscreen-projects__content">
                    <div className="swiper-wrapper">
                      {gallerySlides.map((item) => (
                        <div className="swiper-slide" key={`gallery-slide-${item.src}`}>
                          <div
                            className="small-caps slider__subheading js-split-text split-text mb-1"
                            data-split-text-type="lines, words, chars"
                            data-split-text-set="chars"
                          >
                            {content.gallery.title}
                          </div>
                          <h2
                            className="h1 slider__heading js-split-text"
                            data-split-text-type="lines, words, chars"
                          >
                            {item.alt}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="slider-fullscreen-projects__images swiper-container js-slider-fullscreen-projects__images"
                    data-mousewheel-enabled="data-mousewheel-enabled"
                    data-direction="vertical"
                    data-transition-effect="distortion"
                    data-aspect-ratio="1.5"
                    data-transition-displacement-img="/img/general/bg-displacement-10.jpg"
                    data-speed="1200"
                    data-autoplay-enabled="true"
                    data-autoplay-delay="6000"
                    data-counter-style="roman"
                  >
                    <div className="swiper-wrapper">
                      {gallerySlides.map((item) => (
                        <div className="swiper-slide overflow" key={`gallery-image-${item.src}`}>
                          <div
                            className="slider__images-slide-inner js-transition-img overflow"
                            data-swiper-parallax="90%"
                          >
                            <div
                              className="slider__bg lazy-bg js-transition-img__transformed-el"
                              data-texture-src={item.src}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="slider__overlay overlay overlay_circle-dark overlay_deither"></div>
                    <div className="slider__circle"></div>
                  </div>
                  <div className="slider-fullscreen-projects__footer swiper-container js-slider-fullscreen-projects__footer">
                    <div className="swiper-wrapper">
                      {gallerySlides.map((item) => (
                        <div className="swiper-slide" key={`gallery-footer-${item.src}`}>
                          <div className="slider__wrapper-button-footer">
                            <a
                              className="button button_white button_bordered"
                              data-hover={content.heroSlider.button}
                              href="#contact"
                            >
                              <span className="button__label-hover">
                                {content.heroSlider.button}
                              </span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider__wrapper-counter slider-fullscreen-projects__counter">
                    <div className="slider__counter slider__counter_current">
                      <div className="js-slider-fullscreen-projects__counter-current swiper-container">
                        <div className="swiper-wrapper"></div>
                      </div>
                    </div>
                    <div className="slider__counter-divider slider-fullscreen__counter-divider"></div>
                    <div className="slider__counter slider__counter_total js-slider-fullscreen-projects__counter-total"></div>
                  </div>
                  <div className="slider__arrow slider__arrow_left slider__arrow_absolute js-slider__arrow-prev">
                    <div
                      className="arrow arrow-left js-arrow"
                      data-arts-cursor="data-arts-cursor"
                      data-arts-cursor-hide-native="true"
                      data-arts-cursor-scale="0"
                      data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                    >
                      <svg
                        className="svg-circle"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <circle className="circle" cx="30" cy="30" r="29" fill="none">
                        </circle>
                      </svg>
                      <div className="arrow__pointer arrow-left__pointer"></div>
                      <div className="arrow__triangle"></div>
                    </div>
                  </div>
                  <div className="slider__arrow slider__arrow_right slider__arrow_absolute js-slider__arrow-next">
                    <div
                      className="arrow arrow-right js-arrow"
                      data-arts-cursor="data-arts-cursor"
                      data-arts-cursor-hide-native="true"
                      data-arts-cursor-scale="0"
                      data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                    >
                      <svg
                        className="svg-circle"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <circle className="circle" cx="30" cy="30" r="29" fill="none">
                        </circle>
                      </svg>
                      <div className="arrow__pointer arrow-right__pointer"></div>
                      <div className="arrow__triangle"></div>
                    </div>
                  </div>
                  <div className="slider__wrapper-canvas">
                    <div className="slider__wrapper-canvas-inner">
                      <canvas className="slider__canvas"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="section section-cta text-center section-content pt-medium pb-large bg-dark-1"
              data-arts-theme-text="light"
            >
              <div className="section__content">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <div className="section-cta__heading">
                        <h2 className="h2 mt-0 mt-md-1 mb-1">{content.cta.title}</h2>
                      </div>
                    </div>
                    <div className="col-12 col-lg-10">
                      <p className="paragraph">{content.cta.text}</p>
                      <div className="section-content__button">
                        <a
                          className="button button_solid button_black"
                          data-hover={content.cta.button}
                          href="#contact"
                        >
                          <span className="button__label-hover">{content.cta.button}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section__bg">
                <div className="section-image__wrapper">
                  <div>
                    <div
                      className="lazy-bg"
                      style={{ backgroundImage: `url(${content.cta.image})` }}
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>
                <div className="overlay overlay_top-dark section-masthead__overlay"></div>
              </div>
            </section>
            <section className="section section-fullheight" id="contact">
              <div className="section-fullheight__inner">
                <div className="container-fluid no-gutters h-100">
                  <div className="row no-gutters h-100">
                    <div className="col-lg-4 order-lg-2">
                      <section
                        className="section section-masthead"
                        data-arts-os-animation="true"
                        data-background-color="var(--color-light-1)"
                      >
                        <div className="section section-image section-masthead__background w-100 h-100vh">
                          <div
                            className="section-image__wrapper js-transition-img"
                            data-arts-parallax="data-arts-parallax"
                            data-arts-parallax-factor="0.15"
                          >
                            <div className="js-transition-img__transformed-el">
                              <div className="lazy-bg" data-src={content.cta.image}></div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-lg-4 text-lg-right order-lg-1">
                      <div className="h-100 d-flex justify-content-end flex-column py-md-3 py-1 container-fluid">
                        <section className="section section-contacts section-properties section-content">
                          <div className="container-fluid no-gutters">
                            <div className="row no-gutters">
                              <div className="col">
                                <div className="section-properties__item my-2">
                                  <div
                                    className="figure-info split-text js-split-text"
                                    data-split-text-type="lines,words"
                                    data-split-text-set="words"
                                  >
                                    <div className="figure-info__option small-caps">
                                      {content.contact.addressLabel}
                                    </div>
                                    <div className="figure-info__value paragraph">
                                      {content.contact.address}
                                    </div>
                                  </div>
                                </div>
                                <div className="section-properties__item my-2">
                                  <div
                                    className="figure-info split-text js-split-text"
                                    data-split-text-type="lines,words"
                                    data-split-text-set="words"
                                  >
                                    <div className="figure-info__option small-caps">
                                      {content.contact.phoneLabel}
                                    </div>
                                    <div className="figure-info__value paragraph">
                                      <a href={phoneHref}>{content.contact.phone}</a>
                                      <br />
                                      <a href={emailHref}>{content.contact.email}</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="section-properties__item my-2">
                                  <div
                                    className="figure-info split-text js-split-text"
                                    data-split-text-type="lines,words"
                                    data-split-text-set="words"
                                  >
                                    <div className="figure-info__option small-caps">
                                      {content.contact.orgLabel}
                                    </div>
                                    <div className="figure-info__value paragraph">
                                      {content.contact.orgNumber}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="col-lg-4 order-lg-3">
                      <div className="bg-white h-100 d-flex flex-column justify-content-center py-3 container-fluid">
                        <section className="section section-form">
                          <form className="form form-contact bg-white" action="#" method="post">
                            <div className="row form__row">
                              <div className="col form__col">
                                <h3 className="h3 mt-0 mb-0">{content.contact.formTitle}</h3>
                              </div>
                            </div>
                            <div className="row form__row">
                              <div className="col form__col">
                                <label className="input-float">
                                  <input
                                    className="input-float__input"
                                    type="text"
                                    name="visitor_name"
                                    required
                                  />
                                  <span className="input-float__label">
                                    {content.contact.form.name}
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="row form__row">
                              <div className="col form__col">
                                <label className="input-float">
                                  <input
                                    className="input-float__input"
                                    type="email"
                                    name="visitor_email"
                                    required
                                  />
                                  <span className="input-float__label">
                                    {content.contact.form.email}
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="row form__row">
                              <div className="col form__col">
                                <label className="input-float">
                                  <input
                                    className="input-float__input"
                                    type="tel"
                                    name="visitor_phone"
                                  />
                                  <span className="input-float__label">
                                    {content.contact.form.phone}
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="row form__row">
                              <div className="col form__col">
                                <label className="input-float">
                                  <textarea
                                    className="input-float__input input-float__input_textarea"
                                    name="visitor_msg"
                                    rows={4}
                                  ></textarea>
                                  <span className="input-float__label">
                                    {content.contact.form.message}
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="row form__row">
                              <div className="col form__col form__col_submit">
                                <button
                                  className="button button_solid button_black button_fullwidth"
                                  data-hover={content.contact.form.submit}
                                  type="submit"
                                >
                                  <span className="button__label-hover">
                                    {content.contact.form.submit}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <canvas id="js-webgl"></canvas>
      <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true" data-arts-theme-text="light">
        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item">
              <div className="pswp__img pswp__img--placeholder"></div>
            </div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
                data-arts-cursor="data-arts-cursor"
                data-arts-cursor-scale="1.2"
                data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                data-arts-cursor-hide-native="true"
              ></button>
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
                data-arts-cursor="data-arts-cursor"
                data-arts-cursor-scale="1.2"
                data-arts-cursor-magnetic="data-arts-cursor-magnetic"
                data-arts-cursor-hide-native="true"
              ></button>
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__button pswp__button--arrow--left">
              <div
                className="arrow arrow-left js-arrow"
                data-arts-cursor="data-arts-cursor"
                data-arts-cursor-hide-native="true"
                data-arts-cursor-scale="0"
                data-arts-cursor-magnetic="data-arts-cursor-magnetic"
              >
                <svg
                  className="svg-circle"
                  viewBox="0 0 60 60"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle className="circle" cx="30" cy="30" r="29" fill="none"></circle>
                </svg>
                <div className="arrow__pointer arrow-left__pointer"></div>
                <div className="arrow__triangle"></div>
              </div>
            </div>
            <div className="pswp__button pswp__button--arrow--right">
              <div
                className="arrow arrow-right js-arrow"
                data-arts-cursor="data-arts-cursor"
                data-arts-cursor-hide-native="true"
                data-arts-cursor-scale="0"
                data-arts-cursor-magnetic="data-arts-cursor-magnetic"
              >
                <svg
                  className="svg-circle"
                  viewBox="0 0 60 60"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle className="circle" cx="30" cy="30" r="29" fill="none"></circle>
                </svg>
                <div className="arrow__pointer arrow-right__pointer"></div>
                <div className="arrow__triangle"></div>
              </div>
            </div>
            <div className="pswp__caption">
              <div className="pswp__caption__center text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <script
        id="list-hover-vs"
        type="x-shader/x-vertex"
        dangerouslySetInnerHTML={{
          __html: `uniform vec2 uOffset;

varying vec2 vUv;

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
  float M_PI = 3.1415926535897932384626433832795;
  position.x = position.x + (sin(uv.y * M_PI) * offset.x);
  position.y = position.y + (sin(uv.x * M_PI) * offset.y);
  return position;
}

void main() {
  vUv =  uv + (uOffset * 2.);
  vec3 newPosition = position;
  newPosition = deformationCurve(position,uv,uOffset);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}`,
        }}
      />
      <script
        id="list-hover-fs"
        type="x-shader/x-fragment"
        dangerouslySetInnerHTML={{
          __html: `uniform sampler2D uTexture;
uniform float uAlpha;
uniform float uScale;

varying vec2 vUv;

vec2 scaleUV(vec2 uv,float scale) {
  float center = 0.5;
  return ((uv - center) * scale) + center;
}

void main() {
  vec3 color = texture2D(uTexture,scaleUV(vUv,uScale)).rgb;
  gl_FragColor = vec4(color,uAlpha);
}`,
        }}
      />
      <script
        id="slider-textures-vs"
        type="x-shader/x-vertex"
        dangerouslySetInnerHTML={{
          __html: `varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
        }}
      />
      <script
        id="slider-textures-horizontal-fs"
        type="x-shader/x-fragment"
        dangerouslySetInnerHTML={{
          __html: `varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;

uniform float dispFactor;
uniform float effectFactor;

void main() {

  vec2 uv = vUv;

  vec4 disp = texture2D(disp, uv);

  vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
  vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

  vec4 _texture = texture2D(texture, distortedPosition);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);

  vec4 finalTexture = mix(_texture, _texture2, dispFactor);

  gl_FragColor = finalTexture;

}`,
        }}
      />
      <script
        id="slider-textures-vertical-fs"
        type="x-shader/x-fragment"
        dangerouslySetInnerHTML={{
          __html: `varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;

uniform float dispFactor;
uniform float effectFactor;

void main() {

  vec2 uv = vUv;

  vec4 disp = texture2D(disp, uv);

  vec2 distortedPosition = vec2(uv.x, uv.y - dispFactor * (disp.r*effectFactor));
  vec2 distortedPosition2 = vec2(uv.x, uv.y + (1.0 - dispFactor) * (disp.r*effectFactor));

  vec4 _texture = texture2D(texture, distortedPosition);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);

  vec4 finalTexture = mix(_texture, _texture2, dispFactor);

  gl_FragColor = finalTexture;

}
`,
        }}
      />
      <script
        id="demo-disable-links"
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener("click", function (event) {
  var link = event.target.closest("a");
  if (!link) {
    return;
  }
  var href = link.getAttribute("href");
  if (!href) {
    return;
  }
  if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return;
  }
  event.preventDefault();
});`,
        }}
      />
    </>
  );
}
