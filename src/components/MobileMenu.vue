<template>
	<div
		class="hmenu absolute inset-x-6 ml-auto lg:hidden"
		:class="{ show: value }"
	>
		<div
			class="hmenu__overlay fixed inset-0 bg-black bg-opacity-50 blur-1 z-50"
			:class="hmenuClass"
		></div>
		<div
			class="hmenu__content bg-white shadow rounded rounded-tr-none p-3 z-50 relative"
			:class="hmenuClass"
		>
			<button
				@click="$emit('input', false)"
				class="absolute rounded-lg rounded-b-none flex items-center justify-center text-gray-500 -top-10 right-0 bg-white h-10 w-10"
			>
				<VNClose class="h-6 w-6" />
			</button>
			<slot />
		</div>
	</div>
</template>

<script>
import VNClose from '@/components/icons/VNClose'
export default {
	name: 'MobileMenu',
	components: {
		VNClose
	},
	props: {
		value: {
			type: Boolean,
			required: true
		}
	},
	computed: {
		hmenuClass() {
			return this.value
				? 'opacity-1 visible'
				: 'invisible opacity-0'
		}
	}
}
</script>

<style lang='scss' scoped>
	.hmenu {
		max-width: 411px;
		&__overlay,
		&__content {
			transition: all 300ms ease-in-out;
		}
		&__content {
			top: 1rem;
		}
		&.show {
			.hmenu__content {
				top: 0;
			}
		}
	}
</style>
