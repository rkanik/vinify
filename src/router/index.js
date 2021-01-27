import Vue from 'vue'
import VueRouter from 'vue-router'

// importers
import { view, layout } from '../helpers'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: layout('DefaultLayout'),
			children: [
				{
					path: '',
					name: 'Home',
					component: view('Home')
				}
			]
		}
	]
})

export default router
