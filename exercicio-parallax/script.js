gsap.registerPlugin(ScrollTrigger);

let valorMaskSize = '5500vw';

if (window.innerWidth < 2250) {
    valorMaskSize = '7000vw';
}

gsap.to('.mask', {
    maskSize: valorMaskSize,
    maskPosition: '48% center',
    scrollTrigger: {
        trigger: '.container',
        pin: true,
        start: 'top top',
        end: 'bottom 20%',
        scrub: 2,
    },
});

gsap.from('.content', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.content',
        start: 'top top',
        end: 'bottom 20%',
        scrub: 2,
    },
});
