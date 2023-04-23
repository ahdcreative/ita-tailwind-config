module.exports = {
    config: {
        theme: {
            extends: {
                // altezze
                height: () => ({
                    128: '30rem',
                    144: '36rem',
                    160: '40rem',
                    map: '40.3rem'
                }),
                // schermi
                screens: {
                    'xs': '475px'
                },
                // Aggiungi colore alla classe 'active'
                backgroundColor: ['active'],
                textColor: ['active'],
                // Animazioni
                keyframes: {
                    wiggle: {
                        '0%, 100%': { transform: 'rotate(-1deg)' },
                        '5%': { transform: 'rotate(2.5deg)' },
                    },
                },
                animation: {
                    wiggle: 'wiggle 15s ease-in out infinite'
                },
                // Colori
                colors: {
                    ita: {
                        'DEFAULT': '#0171cf',
                        'blue': '#007bff',
                        'indigo': '#6610f2',
                        'purple': '#6f42c1',
                        'pink' : '#e83e8c',
                        'red': '#be1e0c',
                        'green': '#01683d',
                        'teal': '#20c997',
                        'info': '#17a2b8',
                        'danger': '#dc3545',
                        'white': '#ffffff',
                        'light': '#f8f9fa',
                        '50': '#80b8e7',
                        '100': '#66a9e2',
                        '200': '#4d9bdd',
                        '300': '#338dd8',
                        '400': '#1a7fd3',
                        'text-default' : '#212934'
                    },
                },
                // Ombre
                boxShadow: {
                    'md-dark': '1px 1px 7px 1px rgba(0, 0, 0, 0.2)',
                    'md-dark-contrast': '1px 1px 7px 1px rgba(0, 0, 0, 0.35)',
                    'lg-dark': '1px 1px 10px 1px rgba(0, 0, 0, 0.15)',
                    '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)',
                }
            },
        },
        variants : {
            extend: {
                // Aggiungi opacità alla classe 'disabled'
                opacity: ['disabled']
            }
        },
    },
    handler: function () {}
}
