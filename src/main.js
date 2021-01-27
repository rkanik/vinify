import Vue from 'vue'
import bus from './bus'
import App from './App.vue'
import router from './router'
import components from './components'
import ResizeMixin from './mixins/ResizeMixin.vue'

// Styles
import './assets/css/tailwind.css'
import './assets/scss/main.scss'

// Global components
components.register(Vue)

// Disabling production tips
Vue.config.productionTip = false

window.bus = bus

// initiating vue
new Vue({
	router,
	mixins: [ResizeMixin],
	render: h => h(App)
}).$mount('#app')
