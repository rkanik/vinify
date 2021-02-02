<template>
	<div>
		<!-- Hero First -->
		<div
			class="bg-secondary relative pb-36 pt-16 xl:pt-24 xl:pb-72 overflow-hidden"
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
					class="inline-block py-3 px-9 xl:px-10 mt-8 xl:mt-9 bg-primary text-secondary rounded-8px shadow-md text-btn"
					><span class="font-semibold mr-1 xl:mr-2">Get started</span>for
					free</a
				>
				<br />
				<a
					href="#chat-bot-section"
					class="inline-block px-9 content sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96 mt-4 lg:mt-6 xl:mt-7 2xl:mt-8"
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
			</div>
			<VNLottie
				v-if="isLargeDevice"
				:options="defaultOptions"
				:size="{ width: 700, height: 650, unit: 'px' }"
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
import animationData from '@/assets/json/Hero_Full_Width.json';
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
	beforeDestroy() {
		window.removeEventListener(
			"resize", this.onResize
		);
	},
	methods: {
		onResize() {
			this.isLargeDevice =
				window.innerWidth >= 1024
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
