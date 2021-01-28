import Vue from 'vue'
import App from './App.vue'
import router from './router'
import components from './components'

// Styles
import './assets/css/tailwind.css'
import './assets/css/fonts.css'
import './assets/scss/main.scss'

// Global components
components.register(Vue)

// Disabling production tips
Vue.config.productionTip = false

// initiating vue
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
