module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        fontFamily: {
            'sans': 'motiva-sans, sans-serif'
        },
        extend: {
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10',
                'secondaryBlue': 'rgba(62, 126, 167, 0.8)',
                '-white': 'rgb(227, 234, 239)',
            },

            backgroundImage: theme => ({
                'body-bg': "url('assets/colored_body_top2.png')",
                'icons': "url('https://steamstore-a.akamaihd.net/public/images/v6/store_menu_icons.png?v=2')"
            }),
            backgroundPosition: {
                'curators': '-16px',
                'tags': '-32px',
                'reccomendations': '-48px',
                'new': '-64px',
                'sales': '-80px',
                'realise': '-112px',
                'upcoming': '-128px',
                'special': '-144px',
                'vitual': '-160px',
                'controller': '-176px'
            },
            gridTemplateColumns: {
                'main': '200px 1fr'
            },
        },
        gradientColorStops: theme => ({
            'primary': 'rgb(227, 234, 239) 5%',
            'secondary': 'rgb(199, 213, 224) 95%',
        })
    },
    variants: {},
    plugins: [],
}
