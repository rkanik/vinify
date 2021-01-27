<template>
	<div
		class="default-layout flex flex-col overflow-y-hidden h-screen min-h-screen"
	>
		<Header class="flex-none" />
		<div class="flex-1 overflow-y-auto">
			<router-view />
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header'
export default {
	name: 'DefaultLayout',
	components: {
		Header
	}

}
</script>
