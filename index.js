const plugin = require('tailwindcss/plugin')

const easing = plugin(
  () => {
    return () => {
      // empty
    }
  },
  () => {
    return {
      theme: {
        extend: {
          transitionTimingFunction: {
            'css': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            'css-in': 'cubic-bezier(0.42, 0, 1, 1)',
            'css-out': 'cubic-bezier(0, 0, 0.58, 1)',
            'css-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
            'in-sine': 'cubic-bezier(0.12, 0, 0.39, 0)',
            'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
            'in-out-sine': 'cubic-bezier(0.37, 0, 0.63, 1)',
            'in-quad': 'cubic-bezier(0.11, 0, 0.5, 0)',
            'out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)',
            'in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',
            'in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
            'out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
            'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
            'in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
            'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
            'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
            'in-quint': 'cubic-bezier(0.64, 0, 0.78, 0)',
            'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
            'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
            'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
            'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
            'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
            'in-circ': 'cubic-bezier(0.55, 0, 1, 0.45)',
            'out-circ': 'cubic-bezier(0, 0.55, 0.45, 1)',
            'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
            'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
            'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            'in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
          },
        },
      },
    }
  }
)

module.exports = easing
