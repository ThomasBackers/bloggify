import { createApp } from 'vue'
import store from './store'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

library.add(fas, fab)

const app = createApp(App)
app.use(store)
app.use(router)
// fa is an alias for the component
app.component('fa', FontAwesomeIcon)
app.mount('#app')
