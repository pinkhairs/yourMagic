import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

import { createPinia } from 'pinia'
const pinia = createPinia()

import { createAuth0 } from "@auth0/auth0-vue";
import config from "./auth.config";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/typography.css';
import { StatusBar, Style } from '@capacitor/status-bar';

const getTheTimeOfDay = () => {
  const currentTime = new Date().getHours()
  const morningTimes = [6, 7, 8, 9, 10, 11]
  const afternoonTimes = [12, 13, 14, 15, 16, 17]
  if (morningTimes.includes(currentTime)) {
    return 'morning'
  } else if (afternoonTimes.includes(currentTime)) {
    return 'afternoon'
  } else {
    return 'evening'
  }
}

// Build the URL that Auth0 should redirect back to
const redirect_uri = `${config.appId}://dev-140amymbq0zvj8li.us.auth0.com/capacitor/${config.appId}/callback`;

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);

app.use(
  createAuth0({
    domain: "dev-140amymbq0zvj8li.us.auth0.com",
    clientId: "fkwYscwPcJfYgyY1JyfO6h9Cj0P5a3Gt",
    authorizationParams: {
      redirect_uri
    }
  })
);
  
router.isReady().then(() => {
  StatusBar.setOverlaysWebView({ overlay: true })
  if (getTheTimeOfDay() === 'afternoon' || getTheTimeOfDay() === 'evening') {
    StatusBar.setStyle({ style: Style.Dark })
  }
  app.mount('#app');
});
