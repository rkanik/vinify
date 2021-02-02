<template>
	<div>
		<!-- Hero First -->
		<div
			class="bg-secondary relative pb-36 pt-16 xl:pt-24 xl:pb-60 overflow-hidden"
		>
			<!-- Hero content -->
			<div class="px-con w-max z-20 relative">
				<h1 class="heading-xl">
					Everyone deserves<br />
					a
					<span class="text-accent">personal sommelier</span>
				</h1>
				<p class="content mt-5 xl:mt-6 max-w-xxxs xl:max-w-none">
					Built for retailers, trained by sommeliers, tested by wine
					lovers.
				</p>
				<a
					href="#"
					class="inline-block py-3 px-9 xl:px-10 mt-8 xl:mt-9 bg-primary text-secondary rounded-8px shadow-xl text-btn"
					><span class="font-semibold mr-1 xl:mr-2">Get started</span>for
					free</a
				>
				<br />
				<a
					href="#chat-bot-section"
					class="inline-block px-9 xl:px-11 content mt-4 lg:mt-5"
				>
					<span class="mr-3 font-semibold">Tell me more</span>
					<svg
						class="inline"
						width="13.536"
						height="8.556"
						viewBox="0 0 13.536 8.556"
					>
						<path
							d="M358,828.733l5.739,6.4,6.343-6.4"
							transform="translate(-357.256 -828.029)"
							fill="none"
							stroke="#3a2d53"
							stroke-width="2"
							opacity="0.3"
						/>
					</svg>
				</a>
				<svg
					width="47.77"
					height="65.515"
					class="hidden lg:block mt-2"
					viewBox="0 0 47.77 65.515"
				>
					<g
						transform="matrix(0.588, -0.809, 0.809, 0.588, -13.828, 43.414)"
					>
						<line
							x1="9.42"
							y2="10.276"
							transform="matrix(0.985, -0.174, 0.174, 0.985, 46, 11.681)"
							fill="none"
							stroke="#2c6a67"
							stroke-width="1"
						/>
						<line
							x1="9.42"
							y1="10.276"
							transform="matrix(0.985, -0.174, 0.174, 0.985, 43.794, 1.636)"
							fill="none"
							stroke="#2c6a67"
							stroke-width="1"
						/>
						<path
							d="M55.391,1.758S5.363-9.546,0,25.179"
							transform="matrix(0.985, -0.174, 0.174, 0.985, 0, 18.008)"
							fill="none"
							stroke="#2c6a67"
							stroke-width="1"
						/>
					</g>
				</svg>
				<p
					class="hidden text-accent lg:inline-block transform -rotate-12 -translate-x-8"
				>
					Limited time only!
				</p>
			</div>
			<VNLottie
				v-if="isLargeDevice"
				:options="defaultOptions"
				:size="lottieSize"
				class="absolute right-0 bottom-0 z-0"
			/>
			<img
				class="absolute inset-x-0 bottom-0 z-10 w-full scale-101 lg:hidden"
				src="@/assets/svg/hero-shape-small.svg"
			/>
			<img
				class="absolute inset-x-0 bottom-0 z-10 w-full scale-101 hidden lg:block"
				src="@/assets/svg/hero-shape-large.svg"
			/>
		</div>

		<!-- Hero Second -->
		<div class="bg-primary relative h-32 sm:h-80 lg:hidden">
			<img
				class="hero-b-img absolute -mt-36 sm:-mt-48 right-12 sm:right-20 md:right-32 z-30 w-full"
				src="@/assets/images/Sara_Circle_mobile-03.png"
			/>
		</div>
	</div>
</template>

<script>
import VNLottie from '@/components/utils/VNLottie';
import HeroLottieJson from '@/assets/json/hero-lottie.json';
import VNArrow from '@/components/icons/VNArrow.vue';
export default {
	name: 'HeroSection',
	components: {
		VNLottie,
		VNArrow
	},
	data() {
		return {
			defaultOptions: {
				loop: false,
				animationData: HeroLottieJson
			},
			isLargeDevice:
				window.innerWidth >= 1024,
			isXLargeDevice:
				window.innerWidth >= 1280
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.onResize();
			window.addEventListener(
				"resize", this.onResize
			);
		});
	},
	computed: {
		lottieSize() {
			let width = this.isXLargeDevice
				? 880
				: this.isLargeDevice
					? 780
					: window.innerWidth
			let height = this.isXLargeDevice
				? 670
				: this.isLargeDevice
					? 570
					: window.innerWidth
			return { width, height, unit: 'px' }
		}
	},
	beforeDestroy() {
		window.removeEventListener(
			"resize", this.onResize
		);
	},
	methods: {
		onResize() {
			this.isLargeDevice =
				window.innerWidth >= 1024
			this.isXLargeDevice =
				window.innerWidth >= 1280
		},
	},
}
</script>
<style lang="scss" scoped>
	.hero-b-img {
		width: 189px;
		@include on("sm") {
			width: 294px;
		}
		@include on("md") {
			width: 350px;
		}
	}
</style>
