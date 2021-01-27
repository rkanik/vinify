<template>
	<div :style="style" class="overflow-hidden mx-auto" ref="lavContainer" />
</template>
<script>
import lottie from 'lottie-web';
export default {
	name: 'VNLottie',
	props: {
		options: {
			type: Object,
			required: true
		},
		size: {
			type: Object,
			default() {
				return {
					width: 100,
					height: 100,
					unit: '%'
				}
			}
		}
	},
	mounted() {
		this.anim = lottie.loadAnimation({
			renderer: 'svg',
			container: this.$refs.lavContainer,
			loop: this.options.loop !== false,
			autoplay: this.options.autoplay !== false,
			animationData: this.options.animationData,
			rendererSettings: this.options.rendererSettings
		}
		);
		this.$emit('created', this.anim)
	},
	computed: {
		style() {
			return {
				width: `${this.size.width}${this.size.unit}`,
				height: `${this.size.height}${this.size.unit}`,
			}
		}
	},
	watch: {
		size: {
			deep: true,
			handler(s) {
				console.log(s)
			}
		}
	}
}
</script>
