<template>
	<span>
		<div
			:class="[value ? 'left-0' : '-left-96', wrapperClass]"
			class="fixed inset-y-0 z-50 shadow-xl lg:hidden transition-left transition-delay-100"
		>
			<slot />
		</div>
		<div
			:class="value ? 'left-0' : '-left-full'"
			class="fixed inset-y-0 w-full blur-2 lg:hidden bg-gray-18 bg-opacity-20 z-40 transition-left"
			@click="$emit('input', !value)"
		></div>
	</span>
</template>

<script>
export default {
	name: 'MobileMenu2',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		wrapperClass: {
			type: String,
			default: 'p-4 bg-white w-4/5 max-w-xs'
		}
	}
}
</script>
<style lang="scss" scoped>
	.blur-2 {
		backdrop-filter: blur(8px);
	}
	.transition-delay-100 {
		transition-delay: 100ms;
	}
	.transition-left {
		transition-property: left;
		transition-timing-function: cubic-bezier(0.68, 0, 0.36, 0.97);
		transition-duration: 400ms;
	}
</style>
