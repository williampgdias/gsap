// Timeline
const quadrados = document.querySelectorAll('.quadrado');

const tl = gsap.timeline({
    defaults: {
        duration: 2,
    },
    repeat: 1,
    yoyo: true,
});

tl.to(quadrados[1], {
    backgroundColor: 'green',
})
    .to(quadrados[0], {
        x: 200,
        backgroundColor: 'red',
    })
    .to(quadrados[2], {
        x: -200,
        backgroundColor: 'pink',
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
