/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bright-blue': 'var(--color-primary-bright-blue)',
        'check-bg-from': 'var(--color-check-bg-from)',
        'check-bg-to': 'var(--color-check-bg-to)',
        'lt-very-light-gray': 'var(--color-lt-very-light-gray)',
        'lt-very-light-grayish-blue': 'var(--color-lt-very-light-grayish-blue)',
        'lt-light-grayish-blue': 'var(--color-lt-light-grayish-blue)',
        'lt-dark-grayish-blue': 'var(--color-lt-dark-grayish-blue)',
        'lt-very-dark-grayish-blue': 'var(--color-lt-very-dark-grayish-blue)',
        'dt-very-dark-blue': 'var(--color-dt-very-dark-blue)',
        'dt-very-dark-desaturated-blue': 'var(--color-dt-very-dark-desaturated-blue)',
        'dt-light-grayish-blue': 'var(--color-dt-light-grayish-blue)',
        'dt-light-grayish-blue-hover': 'var(--color-dt-light-grayish-blue-hover)',
        'dt-dark-grayish-blue': 'var(--color-dt-dark-grayish-blue)',
        'dt-very-dark-grayish-blue': 'var(--color-dt-very-dark-grayish-blue)',
        'dt-black-grayish-blue': 'var(--color-dt-black-grayish-blue)'
      },
      screens: {
        580: '580px',
        1136: '1136px',
        1560: '1560px'
      }
    },
  },
  plugins: [
    function ({addBase, addUtilities}) {
      addBase({
        ':root' : {
          '--color-primary-bright-blue': 'hsl(220, 98%, 61%)',
          '--color-check-bg-from': 'hsl(192, 100%, 67%)',
          '--color-check-bg-to': 'hsl(280, 87%, 65%)',
          '--color-lt-very-light-gray': 'hsl(0, 0%, 98%)',
          '--color-lt-very-light-grayish-blue': 'hsl(236, 33%, 92%)',
          '--color-lt-light-grayish-blue': 'hsl(233, 11%, 84%)',
          '--color-lt-dark-grayish-blue': 'hsl(236, 9%, 61%)',
          '--color-lt-very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
          '--color-dt-very-dark-blue': 'hsl(235, 21%, 11%)',
          '--color-dt-very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
          '--color-dt-light-grayish-blue': 'hsl(234, 39%, 85%)',
          '--color-dt-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
          '--color-dt-dark-grayish-blue': 'hsl(234, 11%, 52%)',
          '--color-dt-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
          '--color-dt-black-grayish-blue': 'hsl(237, 14%, 26%)'
        }
      })
    }
  ],
}

