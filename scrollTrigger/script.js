gsap.registerPlugin(ScrollTrigger);

const quadrados = document.querySelectorAll('.quadrado');

const tl = gsap.timeline();

tl.to(quadrados[1], {
    x: '110%',
    scrollTrigger: {
        trigger: '.quadrado',
        start: '0%, 50%',
        end: '100%, 80%',
        scrub: 2,
    },
})
    .to(quadrados[2], {
        x: '220%',
        scrollTrigger: {
            trigger: '.quadrado',
            start: '0%, 50%',
            end: '100%, 80%',
            scrub: 2,
        },
    })
    .to(quadrados[3], {
        x: '330%',
        scrollTrigger: {
            trigger: '.quadrado',
            start: '0%, 50%',
            end: '100%, 80%',
            scrub: 2,
        },
    })
    .to(quadrados[4], {
        x: '440%',
        opacity: 0,
        scrollTrigger: {
            trigger: '.quadrado',
            start: '0%, 50%',
            end: '100%, 80%',
            scrub: 2,
        },
    });

// tl.to('.quadrado', {
//     x: 100,
//     rotate: 40,
//     scrollTrigger: {
//         trigger: '.quadrado',
//         start: '-50% 50%',
//         end: '+=600 50%',
//         markers: true,
//         scrub: 2,
//         pin: true,
//     },
// });
