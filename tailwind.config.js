// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          pulseSlow: {
            '0%, 100%': { opacity: 1, transform: 'scale(1)' },
            '50%': { opacity: 0.7, transform: 'scale(1.05)' },
          },
        },
        animation: {
          float: 'float 6s ease-in-out infinite',
          pulseSlow: 'pulseSlow 8s ease-in-out infinite',
        },
      },
    },
  };