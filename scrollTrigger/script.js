gsap.registerPlugin(ScrollTrigger);

const quadrados = document.querySelectorAll('.quadrado');

const tl = gsap.timeline();

tl.to('.quadrado', {
    scale: 11,
    scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: 'bottom 50%',
        markers: true,
        scrub: 1,
        pin: true,
    },
});
