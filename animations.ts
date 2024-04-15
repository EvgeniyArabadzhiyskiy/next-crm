import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = () => {
  //   const transitionElement = document.getElementById('transition-element');

  //   if (transitionElement) {
  const tl = gsap.timeline();

  tl
    // .set(transitionElement, {rotate: 90 , translateY: '250px', })
    .set('#transition-element', {
      xPercent: 0,
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
      delay: 0.1,
    })
    .to('#transition-element', { xPercent: 100, duration: 0.8 })
    .to(
      '#transition-element',
      {
        borderTopLeftRadius: '50vh',
        borderBottomLeftRadius: '50vh',
        duration: 0.4,
      },
      '<',
    );
  //   }
};

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  timeLine: gsap.core.Timeline | undefined,
) => {
  const tl = gsap.timeline();

  // tl.to('#transition-element', {opacity: 1, pointerEvents: "auto"})

  timeLine
  ?.set('#transition-element', { translateX: "0%", })
  .to('#transition-element', {
    translateX: "100%",
    // x: 1290,
    duration: 0.3,
    onComplete: () => {
      router.push(href);
    },
  });

  // timeLine
  //   ?.set('#transition-element', {
  //     xPercent: -100,
  //     borderTopRightRadius: '50vh',
  //     borderBottomRightRadius: '50vh',
  //     borderTopLeftRadius: '0px',
  //     borderBottomLeftRadius: '0',
  //   })
  //   .to('#transition-element', {
  //     xPercent: 0,
  //     duration: 0.8,
  //     onComplete: () => {
  //       router.push(href);
  //     },
  //   })
  //   .to(
  //     '#transition-element',
  //     {
  //       borderTopRightRadius: '0',
  //       borderBottomRightRadius: '0',
  //       duration: 0.8,
  //     },
  //     '<',
  //   );
};
