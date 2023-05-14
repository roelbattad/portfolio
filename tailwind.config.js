module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            montserrat: ['Montserrat'],
            montserratAlternates: ['Montserrat Alternates']
        },
        colors: {
            'main-background-under': '#abbed2',
            'main-background-over': '#171d23',
            'menu-background' : '#1b242f',
            'mobile-menu' : '#4b6078',
            'highlights': '#f0f0ef',
            // 'highlights': '#F2FE00',
            // 'sentences' : '#FCFDF2',
        },
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}