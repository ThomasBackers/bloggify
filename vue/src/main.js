import { createApp } from 'vue'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

library.add(fas, fab)

const app = createApp(App)
app.use(store)
// fa is an alias
app.component('fa', FontAwesomeIcon)
app.mount('#app')
