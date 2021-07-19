# tailwindcss-easing

A Tailwind CSS plugin extend `transitionTimingFunction` with easing functions from [easings.net](https://easings.net/).

```css
.ease-css { transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); }
.ease-css-in { transition-timing-function: cubic-bezier(0.42, 0, 1, 1); }
.ease-css-out { transition-timing-function: cubic-bezier(0, 0, 0.58, 1); }
.ease-css-in-out { transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
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
```

## License

MIT
