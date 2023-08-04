<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import Admin from './components/Admin.vue'
import Editor from './components/Editor.vue'
const userStore = useUserStore()
const isAdmin = userStore.roles.includes('admin')

const sum = $ref<number>(0)
</script>

<template>
	<div class="uno-app-container" v-motion-main-show>
		<div class="h-2xl w-2xl flex bg-green"></div>
		{{ sum }}
		<el-button type="primary" @click="sum++">+</el-button>
		<component :is="isAdmin ? Admin : Editor" />
	</div>
</template>
