import { ref } from 'vue'
import store from '@/store'
import { defineStore } from 'pinia'
import { type RouteRecordRaw } from 'vue-router'
import { constantRoutes, asyncRoutes } from '@/router'
import asyncRouteSettings from '@/config/async-route'

const hasPermission = (permissions: string[], route: RouteRecordRaw) => {
	const routeRoles = route.meta?.permission
	return permissions.indexOf(typeof routeRoles === 'string' ? routeRoles : '') > -1
}

const filterAsyncRoutes = (routes: RouteRecordRaw[], permissions: string[]) => {
	const res: RouteRecordRaw[] = []
	routes.forEach(route => {
		const tempRoute = { ...route }
		if (tempRoute.meta?.noLogin) {
			res.push(tempRoute)
			return
		} else {
			if (hasPermission(permissions, tempRoute)) {
				if (tempRoute.children) {
					tempRoute.children = filterAsyncRoutes(tempRoute.children, permissions)
				}
				res.push(tempRoute)
			}
		}
	})
	return res
}

export const usePermissionStore = defineStore('permission', () => {
	const routes = ref<RouteRecordRaw[]>([])
	const dynamicRoutes = ref<RouteRecordRaw[]>([])

	const setRoutes = (permissions: string[]) => {
		const accessedRoutes = asyncRouteSettings.open ? filterAsyncRoutes(asyncRoutes, permissions) : asyncRoutes
		routes.value = constantRoutes.concat(accessedRoutes)
		dynamicRoutes.value = accessedRoutes
	}

	return { routes, dynamicRoutes, setRoutes }
})

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
	return usePermissionStore(store)
}
