/** 声明 vite 环境变量的类型（如果未声明则默认是 any） */
declare interface ImportMetaEnv {
	readonly MODE: 'development' | 'production' | 'staging'
	readonly NODE_ENV: 'development' | 'production' | 'staging'
	readonly VITE_BASE_API: string
	readonly VITE_ROUTER_HISTORY: 'hash' | 'html5'
	readonly VITE_PUBLIC_PATH: string
	readonly VITE_APP_DEFAULT_TITLE: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
