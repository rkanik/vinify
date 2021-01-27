<template>
	<div>
		<!-- Hero First -->
		<div class="bg-secondary relative pt-12 pb-40 lg:pt-0 lg:pb-0">
			<div class="relative z-20">
				<div
					class="ml-12 md:ml-16 lg:ml-0 lg:top-16 lg:left-16 xl:top-24 xl:left-24 2xl:left-32 2xl:top-32 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl lg:absolute lg:z-10"
				>
					<h1 class="heading-xl">
						Everyone deserves<br />
						a
						<span class="lg:text-accent">personal sommelier</span>
					</h1>
					<p
						class="content mt-10 xl:mt-12 2xl:mt-14 mr-8 2xl:mr-0 xl:max-w-3xl"
					>
						Understand your customers, capture data and make every
						interaction with your brand memorable.
					</p>
					<a
						href="#"
						class="h-12 md:h-14 xl:h-16 2xl:h-20 w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96 2xl:py-1 bg-primary text-secondary flex items-center justify-center rounded-8px mt-11 lg:mt-12 xl:mt-14 2xl:mt-16 shadow-md text-base lg:text-lg xl:text-2xl 2xl:text-3xl"
						>Get started for free</a
					>
					<vn-flex
						items-center
						justify-center
						href="#"
						class="content w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96 mt-5 lg:mt-6 xl:mt-7 2xl:mt-8"
					>
						<span class="mr-4">Tell me more</span>
						<VNArrow width="17.862" height="10.846" />
					</vn-flex>
				</div>
				<VNLottie
					v-if="isLargeDevice"
					:options="defaultOptions"
					@created="onLottieCreated"
				/>
			</div>
			<img
				class="absolute inset-x-0 bottom-0 z-10 w-full scale-101 lg:hidden"
				src="@/assets/svg/hero-shape-1.svg"
			/>
		</div>

		<!-- Hero Second -->
		<div class="bg-primary relative h-80 sm:h-96 lg:hidden">
			<img
				class="absolute -mt-32 sm:-mt-48 right-4 sm:right-16 md:right-40 z-30 max-w-xs sm:max-w-sm"
				src="@/assets/images/Sara_Circle_mobile-03.png"
			/>
		</div>

		<!-- Chat bot -->
		<div class="relative pb-12 lg:pb-4 overflow-hidden">
			<vn-container>
				<div class="text-center relative z-10">
					<h2
						class="heading text-secondary max-w-sm lg:max-w-lg xl:max-w-full mx-auto lg:mt-16 xl:mt-20 2xl:mt-24"
					>
						Chat with Naomi below to find out more
					</h2>
					<svg
						width="17.862"
						height="10.846"
						class="mx-auto mt-4 lg:mt-10 xl:mt-12 2xl:mt-14"
						viewBox="0 0 17.862 10.846"
					>
						<path
							d="M358,828.733l7.794,8.685,8.613-8.685"
							transform="translate(-357.256 -828.029)"
							fill="none"
							stroke="#fbe9db"
							stroke-width="2"
							opacity="0.497"
						/>
					</svg>
					<div
						class="bg-white shadow-lg p-4 rounded-xl mt-5 lg:mt-12 xl:mt-14 2xl:mt-16 lg:max-w-2xl xl:max-w-5xl 2xl:max-w-7xl mx-auto"
					>
						<ChatBot />
					</div>
				</div>
			</vn-container>
			<img
				class="absolute top-10 left-20 w-full scale-15 lg:hidden"
				src="@/assets/svg/hero-shape-2.svg"
			/>
			<img
				class="hidden lg:block absolute -top-1 left-0 w-full scale-101"
				src="@/assets/images/section2-bgshape-large.png"
			/>
		</div>
	</div>
</template>

<script>
import ChatBot from '@/components/ChatBot';
import VNLottie from '@/components/utils/VNLottie';
import animationData from '@/assets/json/Hero_Full_Width.json';
import VNArrow from '@/components/icons/VNArrow.vue';
export default {
	name: 'HeroSection',
	components: {
		VNLottie,
		VNArrow,
		ChatBot
	},
	data() {
		return {
			animationSpeed: 1,
			defaultOptions: { animationData },
			isLargeDevice: window.innerWidth >= 1024,
		}
	},
	mounted() {
		window.bus.$on('bp', width => {
			console.log(width)
			this.isLargeDevice =
				width >= 1024 ? true : false
		})
	},
	methods: {
		onLottieCreated(lottie) {
			console.log(lottie)
		}
	}
}
</script>

<style lang='scss' scoped>
	.hero-section {
	}
</style>
