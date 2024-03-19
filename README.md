# 1

Food App - Vue 3, Vuetify, Vite, JSON Web Server, & PWA

## PWA References
- [PWA minimal setup](https://vite-pwa-org.netlify.app)
- [icon generator](https://favicon.io)
- [PWA step-by-step](https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf)
- [PWA tutorial (Wildermuth)](https://wildermuth.com/2023/02/09/vite-plugin-for-progressive-web-apps/))
- [example PWA](https://www.youtube.com/watch?v=HExHPdX4Rb0)
- [https setup (missing port config)](https://www.youtube.com/watch?v=s2YxcPR_yhw)
- [Vite Configuration Reference](https://vitejs.dev/config/).

## Code secpific to PWA
- vite.config.js > PWAManifest
- /public/various icons
- index.js various link references

## Project Setup

```sh
npm install vite-plugin-pwa --save-dev
```

## Re-install
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
npm run preview
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
