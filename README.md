# tailwindcss-easing

A Tailwind CSS plugin extends `transitionTimingFunction` and registers `animation-ease-{timing}` utilities with easing functions from [easings.net](https://easings.net/).

```css
.ease-css { transition-timing-function: ease; } /* The CSS default built-in `ease` */
.ease-css-in { transition-timing-function: ease-in; } /* The CSS built-in `ease-in` */
.ease-css-out { transition-timing-function: ease-out; } /* The CSS built-in `ease-out` */
.ease-css-in-out { transition-timing-function: ease-in-out; } /* The CSS built-in `ease-in-out` */
.ease-in-sine { transition-timing-function: cubic-bezier(0.12, 0, 0.39, 0); }
.ease-out-sine { transition-timing-function: cubic-bezier(0.61, 1, 0.88, 1); }
.ease-in-out-sine { transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1); }
.ease-in-quad { transition-timing-function: cubic-bezier(0.11, 0, 0.5, 0); }
.ease-out-quad { transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1); }
.ease-in-out-quad { transition-timing-function: cubic-bezier(0.45, 0, 0.55, 1); }
.ease-in-cubic { transition-timing-function: cubic-bezier(0.32, 0, 0.67, 0); }
.ease-out-cubic { transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1); }
.ease-in-out-cubic { transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
.ease-in-quart { transition-timing-function: cubic-bezier(0.5, 0, 0.75, 0); }
.ease-out-quart { transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1); }
.ease-in-out-quart { transition-timing-function: cubic-bezier(0.76, 0, 0.24, 1); }
.ease-in-quint { transition-timing-function: cubic-bezier(0.64, 0, 0.78, 0); }
.ease-out-quint { transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
.ease-in-out-quint { transition-timing-function: cubic-bezier(0.83, 0, 0.17, 1); }
.ease-in-expo { transition-timing-function: cubic-bezier(0.7, 0, 0.84, 0); }
.ease-out-expo { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
.ease-in-out-expo { transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1); }
.ease-in-circ { transition-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
.ease-out-circ { transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1); }
.ease-in-out-circ { transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1); }
.ease-in-back { transition-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56); }
.ease-out-back { transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
.ease-in-out-back { transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6); }

.animation-ease-css { animation-timing-function: ease; } /* The CSS default built-in `ease` */
.animation-ease-css-in { animation-timing-function: ease-in; } /* The CSS built-in `ease-in` */
.animation-ease-css-out { animation-timing-function: ease-out; } /* The CSS built-in `ease-out` */
.animation-ease-css-in-out { animation-timing-function: ease-in-out; } /* The CSS built-in `ease-in-out` */
.animation-ease-in-sine { animation-timing-function: cubic-bezier(0.12, 0, 0.39, 0); }
.animation-ease-out-sine { animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1); }
.animation-ease-in-out-sine { animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1); }
.animation-ease-in-quad { animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0); }
.animation-ease-out-quad { animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1); }
.animation-ease-in-out-quad { animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1); }
.animation-ease-in-cubic { animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0); }
.animation-ease-out-cubic { animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1); }
.animation-ease-in-out-cubic { animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
.animation-ease-in-quart { animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0); }
.animation-ease-out-quart { animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1); }
.animation-ease-in-out-quart { animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1); }
.animation-ease-in-quint { animation-timing-function: cubic-bezier(0.64, 0, 0.78, 0); }
.animation-ease-out-quint { animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); }
.animation-ease-in-out-quint { animation-timing-function: cubic-bezier(0.83, 0, 0.17, 1); }
.animation-ease-in-expo { animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0); }
.animation-ease-out-expo { animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
.animation-ease-in-out-expo { animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1); }
.animation-ease-in-circ { animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
.animation-ease-out-circ { animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1); }
.animation-ease-in-out-circ { animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1); }
.animation-ease-in-back { animation-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56); }
.animation-ease-out-back { animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
.animation-ease-in-out-back { animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6); }
```

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-easing
```
or
```sh
yarn add -D tailwindcss-easing
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-easing'),
    // ...
  ],
}
```

## Usage

Use the `ease-{timing}` utilities to control an element’s easing curve.

```html
<button class="ease-in-out-expo ...">Button</button>
```
