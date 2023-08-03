/// <reference types="vitest" />

import { type ConfigEnv, type UserConfigExport, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
const pathSrc = path.resolve(__dirname, './src')

/** 配置项文档：https://cn.vitejs.dev/config */
export default (configEnv: ConfigEnv): UserConfigExport => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd())
	const { VITE_PUBLIC_PATH } = viteEnv
	return {
		envDir: path.resolve(__dirname, './env'),
		/** 打包时根据实际情况修改 base */
		base: VITE_PUBLIC_PATH,
		resolve: {
			alias: {
				/** @ 符号指向 src 目录 */
				'@': pathSrc,
			},
		},
		server: {
			/** 是否开启 HTTPS */
			https: false,
			/** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
			host: true, // host: "0.0.0.0"
			/** 端口号 */
			port: 5173,
			/** 是否自动打开浏览器 */
			open: false,
			/** 跨域设置允许 */
			cors: true,
			/** 端口被占用时，是否直接退出 */
			strictPort: false,
			/** 接口代理 */
			proxy: {
				'/api/v1': {
					// target: "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1",
					target: 'https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538/api/v1',
					ws: true,
					/** 是否允许跨域 */
					changeOrigin: true,
					rewrite: path => path.replace('/api/v1', ''),
				},
			},
		},
		build: {
			/** 消除打包大小超过 500kb 警告 */
			chunkSizeWarningLimit: 2000,
			/** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
			minify: 'terser',
			/** 在打包代码时移除 console.log、debugger 和 注释 */
			terserOptions: {
				compress: {
					drop_console: false,
					drop_debugger: true,
					pure_funcs: ['console.log'],
				},
				format: {
					/** 删除注释 */
					comments: false,
				},
			},
			/** 打包后静态资源目录 */
			assetsDir: 'static',
		},
		/** Vite 插件 */
		plugins: [
			vue({
				reactivityTransform: true,
			}),
			vueJsx(),
			/** 将 SVG 静态图转化为 Vue 组件 */
			svgLoader({ defaultImport: 'url' }),
			/** SVG */
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
				symbolId: 'icon-[dir]-[name]',
			}),
		],
		test: {
			include: ['tests/**/*.test.ts'],
			environment: 'jsdom',
		},
	}
}
