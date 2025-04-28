const tl = gsap.timeline({ defaults: { duration: 0.5 } });

tl.from('.titulo1', {
    y: 30,
    opacity: 0,
})
    .from(
        '.titulo2',
        {
            y: 30,
            opacity: 0,
        },
        '-=.2'
    )
    .from('p', {
        opacity: 0,
        duration: 1,
    })

    .from(
        '.img2',
        {
            height: 0,
        },
        '-=.6'
    )

    .from('.direita img:nth-child(2)', {
        opacity: 0,
    })

    .from(
        'button',
        {
            opacity: 0,
        },
        '-=.2'
    )

    .from(
        '.cards',
        {
            width: 0,
            padding: 0,
        },
        '-=.2'
    )

    .from('.card', {
        opacity: 0,
        y: 12,
        stagger: 0.2,
    });
