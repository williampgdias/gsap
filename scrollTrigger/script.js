gsap.registerPlugin(ScrollTrigger);

gsap.from('.quadrado', {
    opacity: 0,
    y: 40,
    x: 30,
    rotate: 30,
    filter: 'blur(20px)',
    delay: 0.3,
    scrollTrigger: {
        trigger: '.container',
        start: '20% top',
        end: '85% bottom',
        markers: true,
        scrub: 2,
    },
});
