// gsap.to('.quadrado', {
//     x: 100,
//     y: -200,
//     backgroundColor: 'green',
//     duration: 2,
// });

// gsap.to('.quadrado', {
//     x: -50,
//     y: 100,
//     backgroundColor: 'red',
//     duration: 2,
//     delay: 2,
// });

// gsap.to('.quadrado', {
//     x: 200,
//     y: -40,
//     rotate: '180deg',
//     backgroundColor: 'pink',
//     duration: 2,
//     delay: 4,
// });

// Timeline
const tl = gsap.timeline();
tl.to('.quadrado', {
    x: 100,
    y: -200,
    backgroundColor: 'green',
    duration: 2,
    stagger: 0.5,
})
    .to('.quadrado', {
        x: -50,
        y: 100,
        backgroundColor: 'red',
        duration: 2,
        stagger: 0.5,
    })
    .to('.quadrado', {
        x: 200,
        y: -40,
        rotate: '180deg',
        backgroundColor: 'pink',
        duration: 2,
        stagger: 0.5,
    });

const botaoPlay = document.querySelector('.play');
const botaoPause = document.querySelector('.pause');
const botaoReverse = document.querySelector('.reverse');

botaoPause.onclick = () => {
    tl.pause();
};

botaoPlay.onclick = () => {
    tl.play();
};

botaoReverse.onclick = () => {
    tl.reverse();
};
