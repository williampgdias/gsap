// gsap.to('.quadrado', {
//     x: '200',
//     duration: 3,
//     backgroundColor: 'pink',
// });

// gsap.from('.quadrado', {
//     x: '200',
//     duration: 3,
//     backgroundColor: 'pink',
// });

gsap.fromTo(
    '.quadrado',
    {
        x: -200,
        y: 100,
    },
    {
        x: 100,
        y: -200,
        duration: 3,
        backgroundColor: 'green',
    }
);
