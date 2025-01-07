window.onload = function () {

  // JQueryInputmask | Маска для поля ввода телефона
  $('.js-mask-tel').inputmask({
    mask: '7 999 999 99 99',
    placeholder: '',
    showMaskOnHover: false
  });

  // ** GSAP || Анимация **
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // GSAP ScrollSmoother
  ScrollSmoother.create({
    wrapper: '.page',
    content: '.content',
    smooth: 1,
    smoothTouch: 0.1,
    effects: true,
  });

  let mm = gsap.matchMedia(),
    breakPointDesktop = 1440;
    breakPointMobile = 768;

  const textWelcomeTitle = new SplitText(".welcome__title");

  mm.add(
    {
      isDesktop: `(min-width: ${breakPointDesktop + 1}px)`,
      isTablet: `(max-width: ${breakPointDesktop}px) and (min-width: ${breakPointMobile + 1}px)`,
      isMobile: `(max-width: ${breakPointMobile}px)`,
    },
    (context) => {
      let { isDesktop, isMobile, } = context.conditions;

      // GSAP Welcome block

      gsap.set(textWelcomeTitle.chars, {
        transformOrigin: "center",
      })

      const tlWelcome = gsap.timeline({
        onStart: titleShow
      });

      if (!isMobile) {
        tlWelcome
          .add(gsap.fromTo(
            textWelcomeTitle.chars,
            0.7,
            {
              opacity: 0,
              scale: 0,
              y: 50,
              x: 100,
              rotation: 10
            },
            {
              stagger: 0.05,
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              rotation: 0
            },
            0.05
          ))
          .add(gsap.fromTo('.welcome__text', {
            opacity: 0,
            x: 50,
          }, {
            duration: 1,
            opacity: 1,
            x: 0,
          }))
          .add((gsap.fromTo('.welcome__btn', {
            opacity: 0,
            x: 50,
          }, {
            duration: 1,
            opacity: 1,
            x: 0,
        })), '>-=0.5')
       } else { 
          tlWelcome
            .add(gsap.fromTo(
              textWelcomeTitle.chars,
              1,
              {
                opacity: 0,
                scale: 0,
                y: 50,
                x: 100,
                rotation: 10
              },
              {
                stagger: 0.05,
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0,
                rotation: 0
              },
              0.05
            ))
            .add(gsap.fromTo('.welcome__text', {
              opacity: 0,
              y: 50,
            }, {
              duration: 1,
              opacity: 1,
              y: 0,
            }))
            .add((gsap.fromTo('.welcome__btn', {
              opacity: 0,
              y: 50,
            }, {
              duration: 1,
              opacity: 1,
              y: 0,
          })), '>-=0.5');
        }

      function titleShow() {
        let title = document.querySelector('.welcome__title');
        title.classList.add('show');
      }

      // GSAP Advantages block
      const tlAdvantages = gsap.timeline({
        scrollTrigger: {
          trigger: '.advantages',
          pin: true,
          start: isDesktop ? '+50 top' : 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      if (!isMobile) {
        tlAdvantages
          .add(gsap.fromTo('.advantages__title', {
            opacity: 0,
            y: 50,
          }, {
            opacity: 1,
            y: 0,
          }))
          .add(gsap.fromTo('.advantages__item--1', {
            opacity: 0,
            x: -50,
          }, {
            opacity: 1,
            x: 0,
          }))
          .add(gsap.fromTo('.advantages__item--2', {
            opacity: 0,
            x: 50,
          }, {
            opacity: 1,
            x: 0,
          }))
          .add(gsap.fromTo('.advantages__item--3', {
            opacity: 0,
            x: -50,
          }, {
            opacity: 1,
            x: 0,
          }))
          .add(gsap.fromTo('.advantages__item--4', {
            opacity: 0,
            x: 50,
          }, {
            opacity: 1,
            x: 0,
          }))
       } else { 
        tlAdvantages
          .add(gsap.fromTo('.advantages__title', {
            opacity: 0,
            y: 50,
          }, {
            opacity: 1,
            y: 0,
          }))
          .add(gsap.fromTo('.advantages__item', {
            opacity: 0,
            y: 50,
          }, {
            opacity: 1,
            y: 0,
            stagger: 0.2
          }));
       }

      // GSAP Callback block
      const tlCallback = gsap.timeline({
        scrollTrigger: {
          trigger: '.callback',
          pin: true,
          start: 'center center',
          end: 'bottom top',
          scrub: true
        }
      });

      tlCallback
        .add(gsap.fromTo('.callback__title', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.callback__text', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.callback__input', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.5,
        }))
        .add(gsap.fromTo('.callback__btn', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.callback__ps', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }));

      // GSAP Guarantees block
      const tlGuarantees = gsap.timeline({
        scrollTrigger: {
          trigger: '.guarantees',
          pin: true,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      tlGuarantees
        .add(gsap.fromTo('.guarantees__title', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.guarantees__sub', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.guarantees__text', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.guarantees__btn', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }));

      // GSAP Money block
      const tlMoney = gsap.timeline({
        scrollTrigger: {
          trigger: '.money',
          // pin: true,
          start: 'top center',
          end: 'center center',
          scrub: true,
        }
      });

      tlMoney
        .add(gsap.fromTo('.money__title', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.money__text', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }));

      // GSAP About block
      const tlAbout = gsap.timeline({
        scrollTrigger: {
          trigger: '.about',
          // pin: true,
          start: 'top center',
          end: 'center center',
          scrub: true,
        }
      });

      tlAbout
        .add(gsap.fromTo('.about__title', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.about__text', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.about__subtitle', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.about__subtext', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }));

      const aboutItems = document.querySelectorAll('.about__item');
      aboutItems.forEach(item => {
        if (!isMobile) {
          tlAbout.add(gsap.fromTo(item, {
            opacity: 0,
            x: 50,
          }, {
            opacity: 1,
            x: 0,
          }), '+=0.3')
         } else {
           tlAbout.add(gsap.fromTo(item, {
            opacity: 0,
            y: 50,
          }, {
            opacity: 1,
            y: 0,
          }), '+=0.3')
         }
      });

      // GSAP Video block
      const tlVideo = gsap.timeline({
        scrollTrigger: {
          trigger: '.video',
          pin: true,
          start: isDesktop ? '+=150 top' : 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      tlVideo
        .add(gsap.fromTo('.video__title', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.video__list li', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.2
        }))
        .add(gsap.fromTo('.video__list', {
          'border-color': 'transparent'
        }, {
          'border-color': 'rgba(255, 255, 255, 0.1)'
        }));

      if (!isMobile) {
        tlVideo.add(gsap.fromTo('.video__btn', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
        .add(gsap.fromTo('.video__price', {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        }))
       } else {
        tlVideo
          .add(gsap.fromTo('.video__price', {
            opacity: 0,
            y: 50,
          }, {
            opacity: 1,
            y: 0,
          }))
          .add(gsap.fromTo('.video__btn', {
            opacity: 0,
            y: 50,
          }, {
            opacity: 1,
            y: 0,
        }));
       }

      const video = document.querySelector(".video-background");
      let src = video.currentSrc || video.src;
      console.log(video, src);

      /* Make sure the video is 'activated' on iOS */
      function once(el, event, fn, opts) {
        var onceFn = function (e) {
          el.removeEventListener(event, onceFn);
          fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn, opts);
        return onceFn;
      }

      once(document.documentElement, "touchstart", function (e) {
        video.play();
        video.pause();
      });

      const tlVideoPlay = gsap.timeline({
        scrollTrigger: {
          trigger: '.video',
          start: isDesktop ? '+=150 top' : 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      once(video, "loadedmetadata", () => {
        tlVideoPlay.fromTo(
          video,
          // 3,
          {
            currentTime: 0
          },
          {
            currentTime: video.duration || 1
          },
          0
        );
      });

      setTimeout(function () {
        if (window["fetch"]) {
          fetch(src)
            .then((response) => response.blob())
            .then((response) => {
              var blobURL = URL.createObjectURL(response);

              var t = video.currentTime;
              once(document.documentElement, "touchstart", function (e) {
                video.play();
                video.pause();
              });

              video.setAttribute("src", blobURL);
              video.currentTime = t + 0.01;
            });
        }
      }, 1000);
      
    }
  );

  // GSAP Show
  const GsapShowElements = document.querySelectorAll('[gsap-show]');
  function GsapShowTo() {
    GsapShowElements.forEach(item => {
      let itemDirection = item.getAttribute('gsap-show');
      let startValueX,
          startValueY,
          endValueX,
          endValueY;
      if (itemDirection == 'left') {
        startValueX = 50;
        startValueY = 0;
        endValueX = 0;
        endValueY = 0;
      }else if (itemDirection == 'right') {
        startValueX = -50;
        startValueY = 0;
        endValueX = 0;
        endValueY = 0;
      }else if (itemDirection == 'top') {
        startValueX = 0;
        startValueY = 50;
        endValueX = 0;
        endValueY = 0;
      }else if (itemDirection == 'bottom') {
        startValueX = 0;
        startValueY = -50;
        endValueX = 0;
        endValueY = 0;
      };
      gsap.fromTo(item, {
        opacity: 0,
        x: startValueX,
        y: startValueY
      }, {
        opacity: 1,
        x: endValueX,
        y: endValueY,
        scrollTrigger: {
          trigger: item,
          start: '-=700px',
          end: '-=300px',
          scrub: true,
        }
      });
    });
  };
  GsapShowTo();

  // GSAP Hide
  const GsapHideElements = document.querySelectorAll('[gsap-hide]');
  function GsapHideTo() {
    GsapHideElements.forEach(item => {
      let itemDirection = item.getAttribute('gsap-hide');
      let startValueX,
        startValueY,
        endValueX,
        endValueY;
      if (itemDirection == 'left') {
        startValueX = 0;
        startValueY = 0;
        endValueX = -50;
        endValueY = 0;
      } else if (itemDirection == 'right') {
        startValueX = 0;
        startValueY = 0;
        endValueX = 50;
        endValueY = 0;
      } else if (itemDirection == 'top') {
        startValueX = 0;
        startValueY = 0;
        endValueX = 0;
        endValueY = -50;
      } else if (itemDirection == 'bottom') {
        startValueX = 0;
        startValueY = 0;
        endValueX = 0;
        endValueY = 50;
      };
      gsap.fromTo(item, {
        opacity: 1,
        x: startValueX,
        y: startValueY
      }, {
        opacity: 0,
        x: endValueX,
        y: endValueY,
        scrollTrigger: {
          trigger: item,
          start: '-=200',
          end: 'bottom',
          scrub: true
        }
      });
    });
  };
  GsapHideTo();
}