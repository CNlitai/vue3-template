<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/store/modules/settings'
import logo from '@/assets/layouts/logo.png?url'

interface Props {
	collapse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	collapse: true,
})

const settingsStore = useSettingsStore()
const { layoutMode } = storeToRefs(settingsStore)

const title = import.meta.env.VITE_APP_DEFAULT_TITLE || ''
</script>

<template>
	<div class="layout-logo-container" :class="{ collapse: props.collapse, 'layout-mode-top': layoutMode === 'top' }">
		<transition name="layout-logo-fade">
			<router-link v-if="props.collapse" key="collapse" to="/">
				<img :src="logo" alt="" class="layout-logo" />
			</router-link>
			<router-link v-else key="expand" to="/">
				<div class="layout-logo-text">
					<img :src="logo" alt="" />
					<div>{{ title }}</div>
				</div>
			</router-link>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.layout-logo-container {
	position: relative;
	width: 100%;
	height: var(--v3-header-height);
	line-height: var(--v3-header-height);
	background-color: transparent;
	text-align: center;
	overflow: hidden;
	.layout-logo {
		display: none;
	}
	.layout-logo-text {
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 32px;
			height: 32px;
			margin-right: 8px;
		}
		div {
			font-size: 16px;
			font-weight: 600;
			color: #c0c4cc;
			user-select: none;
		}
	}
}

.layout-mode-top {
	height: var(--v3-navigationbar-height);
	line-height: var(--v3-navigationbar-height);
}

.collapse {
	.layout-logo {
		width: 32px;
		height: 32px;
		vertical-align: middle;
		display: inline-block;
	}
	.layout-logo-text {
		display: none;
	}
}
</style>
