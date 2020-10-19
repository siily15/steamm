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
            }),
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
