// Plugins
import vue from '@vitejs/plugin-vue'


// Utilities
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const PwaManifest = {
  registerType:'prompt',
  devOptions: { enabled: true },
  includeAssests:[ '/', 'favicon.ico', "apple-touch-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Food-App",
    short_name:"Food-App",
    description:"I am a simple vite app",
    icons:[{
      src: 'android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'any maskable'
    },
    {
      src:'android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable'
    },
    {
      src: 'apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'any maskable'
    },
    {
      src: 'maskable_icon.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable'
    }
  ],
  theme_color:'#181818',
  background_color:'#e0cc3b',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  },
  
};


// TODO: Stuff not working, register service worker (sw.js) in preview mode
// URL: https://dev.to/adefam/pwa-in-vue-vite-53a3
// URL: https://web.dev/learn/pwa/serving
export default defineConfig({
  plugins: [		 
    vue(),
    VitePWA(
      PwaManifest
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
