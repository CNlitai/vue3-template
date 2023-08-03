// core
import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import { MotionPlugin } from '@vueuse/motion'

import '@/router/permission'
// load
import { loadSvg } from '@/icons'
import { loadPlugins } from '@/plugins'
import { loadDirectives } from '@/directives'
// css
import 'uno.css'
import 'normalize.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/index.scss'

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
loadDirectives(app)

app.use(MotionPlugin, {
	directives: {
		'main-show': {
			initial: {
				opacity: 0,
				y: 100,
			},
			enter: {
				opacity: 1,
				y: 0,
				transition: {
					type: 'spring',
					stiffness: 250,
					damping: 25,
					mass: 0.5,
				},
			},
			leave: {
				opacity: 0,
				y: -100,
			},
		},
	},
})

app.use(store).use(router)
router.isReady().then(() => {
	app.mount('#app')
})
