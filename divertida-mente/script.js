// gsap.registerPlugin(ScrollTrigger);

// const quadrados = document.querySelectorAll('.quadrado');

// const tl = gsap.timeline();

// tl.to('.quadrado', {
//     scale: 11,
//     scrollTrigger: {
//         trigger: '.container',
//         start: 'top top',
//         end: 'bottom 50%',
//         markers: true,
//         scrub: 1,
//         pin: true,
//     },
// });

// Brincando com Divertida mente
// tl.to(quadrados[1], {
//     x: '110%',
//     scrollTrigger: {
//         trigger: '.quadrado',
//         start: '-50% top',
//         end: '90% 60%',
//         scrub: 2,
//         markers: true,
//     },
// })
//     .to(quadrados[2], {
//         x: '220%',
//         scrollTrigger: {
//             trigger: '.quadrado',
//             start: '-50% top',
//             end: '90% 60%',
//             scrub: 2,
//         },
//     })
//     .to(quadrados[3], {
//         x: '330%',
//         scrollTrigger: {
//             trigger: '.quadrado',
//             start: '-50% top',
//             end: '90% 60%',
//             scrub: 2,
//         },
//     })
//     .to(quadrados[4], {
//         x: '440%',
//         opacity: 0,
//         scrollTrigger: {
//             trigger: '.quadrado',
//             start: '-50% top',
//             end: '90% 60%',
//             scrub: 2,
//         },
//     });
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
