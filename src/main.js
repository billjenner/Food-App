import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import FoodItem from './components/FoodItem.vue'

const app = createApp(App)
app.component('food-item', FoodItem)

app.use(createPinia())
app.use(router)

app.mount('#app')


// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/sw.js')
//         .then(registration => {
//           console.log('Service Worker registered:', registration);
//         })
//         .catch(error => {
//           console.log('Service Worker registration failed:', error);
//         });
//     });
//   }

//   self.addEventListener('fetch', event => {
//     event.respondWith(
//       caches.match(event.request)
//         .then(response => {
//           if (response) {
//             return response;
//           }
//           return fetch(event.request);
//         })
//     );
//   });