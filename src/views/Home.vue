<template>
	<div class="home">
		<HeroSection />

		<!-- Chat bot -->
		<div id="chat-bot-section" class="relative pt-16">
			<vn-container>
				<div class="text-center relative z-10">
					<h2
						class="heading text-secondary w-52 px-2 lg:max-w-lg xl:max-w-full mx-auto lg:mt-16 xl:mt-20 2xl:mt-24"
					>
						Sell wine online? Chat to Naomi below.
					</h2>
					<p
						class="content text-secondary mt-5 px-3 mx-auto max-w-xxxs xl:mt-12 2xl:mt-14 xl:max-w-3xl"
					>
						Grow a deep understanding of your customers, capture data and
						make every interaction with your brand memorable.
					</p>
					<svg
						width="16.479"
						height="10.114"
						viewBox="0 0 16.479 10.114"
						class="mx-auto mt-7 lg:mt-10 xl:mt-12 2xl:mt-14"
					>
						<path
							d="M358,828.733l7.137,7.953,7.887-7.953"
							transform="translate(-357.256 -828.029)"
							fill="none"
							stroke="#ffe4d5"
							stroke-width="2"
							opacity="0.3"
						/>
					</svg>
					<ChatBot
						class="bg-white shadow-lg rounded-xl lg:mt-12 xl:mt-14 2xl:mt-16 lg:max-w-2xl xl:max-w-5xl 2xl:max-w-6xl mx-auto transform translate-y-8"
					/>
				</div>
			</vn-container>
			<img
				class="hidden lg:block absolute -top-1 left-0 w-full scale-101"
				src="@/assets/images/section2-bgshape-large.png"
			/>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div
			class="relative transform -translate-y-px bg-white pt-32 pb-24 lg:mt-32 xl:mt-48 2xl:mt-80"
		>
			<vn-container>
				<div
					class="relative lg:py-0 text-center mx-auto lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 2xl:px-7"
				>
					<img
						alt="Lightbulb"
						src="@/assets/images/lightbulb.png"
						class="hidden lg:block absolute lg:h-32 xl:h-36 lg:-left-24 lg:-top-24 xl:-top-28 xl:-left-28"
					/>
					<div>
						<img
							class="w-44 mx-auto"
							src="@/assets/images/benchdrink.png"
							alt="benchdrink"
						/>
					</div>
					<div class="mt-8">
						<h2 class="heading w-64 mx-auto px-1">
							All of the collected
							<span class="text-accent">data is visualised live</span>
							on an easy to understand dashboard
						</h2>
						<hr
							class="my-5 w-64 mx-auto lg:my-9 border-t border-primary border-opacity-25"
						/>
						<p class="content w-64 mx-auto px-3 lg:mx-0">
							Data can be a mess and hard to understand; we’ve got you
							covered there. Our analytics system gathers the most
							important insights from your customers and automates a
							suggested action list.
						</p>
					</div>
				</div>
			</vn-container>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div class="relative z-20 bg-white lg:mt-32 xl:mt-48 2xl:mt-80">
			<div
				class="bg-green bg-opacity-5 pt-16 pb-24 lg:px-6 xl:px-12 2xl:px-28 lg:py-8 xl:py-16 2xl:py-36 lg:ml-8 xl:ml-16 2xl:ml-28 xl:rounded-98px lg:rounded-48px rounded-r-none"
			>
				<div class="flex flex-col lg:flex-row-reverse lg:items-center">
					<div class="px-7 lg:px-0 relative lg:flex-1">
						<img
							alt="World Map Small"
							class="lg:hidden w-64 sm:w-4/5 mx-auto"
							src="../assets/images/worldmap-640.png"
						/>
						<img
							alt="World Map Large"
							class="hidden lg:block w-full"
							src="../assets/images/worldmap-1280.png"
						/>
					</div>
					<div class="mt-10 text-center lg:text-left lg:flex-1">
						<div
							class="px-7 lg:px-0 sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-full"
						>
							<h2 class="heading mx-2">
								<span class="text-accent">Identify</span> your most
								popular regions and grape varieties
							</h2>
							<hr
								class="my-5 lg:mt-8 2xl:mt-10 2xl:mb-10 border-t border-primary border-opacity-25 mx-5 lg:mx-0 2xl:mr-36"
							/>
							<p class="content w-56 mx-auto lg:mx-0 2xl:mr-36">
								Make more informed buying decisions by identifying the
								patterns in core wine traits and your customer’s palate
								profiles.
							</p>
							<a
								href="#"
								class="mx-auto lg:mx-0 h-12 md:h-14 xl:h-16 2xl:h-20 w-56 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96 2xl:py-1 bg-primary text-secondary flex items-center justify-center rounded-8px mt-11 lg:mt-12 xl:mt-14 2xl:mt-16 shadow-md text-base lg:text-lg xl:text-2xl 2xl:text-3xl"
								><span class="font-semibold mr-1 xl:mr-2"
									>Get started</span
								>
								for free</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div class="py-16 lg:py-0 lg:mt-32 xl:mt-48 2xl:mt-80">
			<vn-container>
				<div class="flex flex-col lg:flex-row lg:items-center">
					<div class="home__empty-box mx-auto" />
					<div class="mt-10 lg:mt-0 text-center lg:text-left lg:flex-1">
						<div
							class="px-7 lg:px-0 sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-full lg:pl-6 lg:pr-0 xl:pl-12 xl:pr-4 2xl:pl-32 2xl:pr-12"
						>
							<h2 class="heading w-56 mx-auto px-1 lg:mx-0">
								Great new wine just in? Why not
								<span class="text-accent">share</span> it with the
								customers that you know will love it!
							</h2>
							<hr
								class="my-4 lg:mt-8 2xl:mt-10 2xl:mb-10 border-t border-primary border-opacity-25 mx-2 lg:mx-0"
							/>
							<p class="content w-64 mx-auto lg:mx-0 lg:mr-8">
								Select any wine from your portfolio and based on your
								customer <br />
								profiles, we’ll create a list of people who might enjoy
								a glass (or two).
							</p>
						</div>
					</div>
				</div>
			</vn-container>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div class="lg:mt-32 xl:mt-48 2xl:mt-80">
			<div
				class="bg-primary bg-opacity-5 relative pt-14 pb-24 lg:px-6 xl:px-12 2xl:px-28 lg:py-8 xl:py-16 2xl:py-36 lg:mr-8 xl:mr-16 2xl:mr-28 xl:rounded-98px lg:rounded-48px rounded-l-none"
			>
				<div class="flex flex-col lg:flex-row-reverse lg:items-center">
					<div class="home__empty-box mx-auto" />
					<div
						class="px-4 sm:px-0 mt-10 text-center lg:text-left lg:flex-1 sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-full"
					>
						<h2 class="heading w-72 px-1 mx-auto">
							We <span class="text-accent">automate</span> key data
							points on each wine to make our recommendation engine
							<br />
							as accurate as possible
						</h2>
						<hr
							class="mt-4 mb-6 lg:mt-8 2xl:mt-10 2xl:mb-10 border-t border-primary border-opacity-25 mx-7 lg:mx-0"
						/>
						<p class="content mx-7 lg:mx-0">
							A beautiful collaboration between sommeliers and artificial
							intelligence combine years of real world experience with
							the power of technology.
						</p>
						<a
							href="#"
							class="inline-block py-3 px-9 md:h-14 xl:h-16 2xl:h-20 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96 2xl:py-1 bg-primary text-secondary rounded-8px mt-8 lg:mt-12 xl:mt-14 2xl:mt-16 shadow-md text-btn"
							><span class="font-semibold mr-1 xl:mr-2"
								>Get started</span
							>
							for free</a
						>
					</div>
				</div>
				<img
					alt="Red and White wine"
					class="hidden lg:block absolute lg:h-40 xl:h-44 lg:-top-28 lg:right-16 -xl:top-20 xl:right-24 2xl:h-auto 2xl:-top-44 2xl:right-28"
					src="@/assets/images/red-white-trans.png"
				/>
			</div>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div class="py-16 lg:py-0 lg:mt-32 xl:mt-48 2xl:mt-80">
			<vn-container>
				<div class="flex flex-col lg:flex-row lg:items-center">
					<div class="p4-7 lg:px-1 lg:flex-1 relative">
						<img
							alt="Wine Seller"
							class="w-56 mx-auto"
							src="@/assets/images/shopify.png"
						/>
					</div>
					<div class="mt-9 lg:mt-0 text-center lg:text-left lg:flex-1">
						<div
							class="sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-full lg:pl-6 lg:pr-0 xl:pl-12 xl:pr-4 2xl:pl-32 2xl:pr-12"
						>
							<h2 class="heading w-60 mx-auto">
								<span class="text-accent">Quick integration</span>
								with Shopify or Woocommerce with a click of a button
							</h2>
							<hr
								class="my-5 mx-8 lg:mt-8 2xl:mt-10 2xl:mb-10 border-t border-primary border-opacity-25 lg:mx-0"
							/>
							<p class="content mx-6 lg:mx-0 lg:mr-8">
								Our Shopify and Woocommerce plugins offer a one click
								solution to upload your wines and start generating
								actionable insight.
							</p>
						</div>
					</div>
				</div>
			</vn-container>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div class="relative overflow-x-hidden lg:-mt-24 xl:-mt-64 2xl:-mt-56">
			<img
				class="w-full lg:hidden"
				src="@/assets/images/last-section-bg-small.png"
			/>
			<img
				class="hidden lg:block w-full"
				src="@/assets/images/last-section-bg-large.png"
			/>
			<div
				class="z-10 text-center absolute w-full max-w-xs sm:max-w-sm md:max-w-md left-2/4 top-2/3 sm:top-2/4 lg:left-auto lg:top-auto transform lg:transform-none -translate-x-2/4 -translate-y-2/4 lg:bottom-16 xl:bottom-24 2xl:bottom-44 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl lg:right-1/10 xl:right-6/5 2xl:right-1/5"
			>
				<h2 class="heading mx-2">
					Keep connected with your customers anytime, anywhere.
				</h2>
				<a
					href="#"
					class="inline-block py-3 px-9 md:h-14 xl:h-16 2xl:h-20 sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96 2xl:py-1 bg-primary text-secondary rounded-8px mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 shadow-md text-btn"
					><span class="font-semibold mr-1 xl:mr-2">Get started</span> for
					free</a
				>
			</div>
		</div>

		<!-- -------- -->
		<!-- Bottom -->

		<div class="bg-primary py-10 2xl:py-24 relative z-10">
			<vn-container>
				<div class="px-6 lg:px-0">
					<div class="lg:flex lg:space-x-8 lg:justify-between">
						<h2 class="text-primary text-5xl text-secondary">vinify</h2>

						<div
							class="mt-12 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12"
						>
							<!-- 1 -->
							<div>
								<span class="text-secondary text-footer-title"
									>About</span
								>
								<div
									class="flex flex-col content text-secondary mt-4 2xl:mt-5"
								>
									<a href="#">Get Started</a>
									<a href="#">Why Vinify?</a>
									<a href="#">Team</a>
									<a href="#">Press</a>
									<a href="#">Privacy Policy</a>
									<a href="#">Terms and Conditions</a>
									<a href="#">Cookies Policy</a>
								</div>
							</div>

							<!-- 2 -->
							<div>
								<span class="text-secondary text-footer-title"
									>Need Help?</span
								>
								<div
									class="flex flex-col content text-secondary mt-4 2xl:mt-5"
								>
									<a href="#">Knowledge Centre</a>
									<a href="#">Drop us an email</a>
									<a href="#">Drop us a whatsapp</a>
								</div>
							</div>

							<!-- 3 -->
							<div>
								<span class="text-secondary text-footer-title"
									>Partnership</span
								>
								<div
									class="flex flex-col content text-secondary mt-4 2xl:mt-5"
								>
									<a href="#">Collaboration</a>
									<a href="#">Know your wine?</a>
								</div>
							</div>

							<!-- 4 -->
							<div>
								<span class="text-secondary text-footer-title"
									>Social</span
								>
								<div
									class="text-secondary flex flex-col content text-secondary mt-4 2xl:mt-5"
								>
									<a href="#">Facebook</a>
									<a href="#">Instagram</a>
									<a href="#">Twitter</a>
									<a href="#">Linkedin</a>
									<a href="#">Youtube</a>
								</div>
							</div>
						</div>
						<!-- Image on xl -->
						<img
							alt="Cat with wine"
							class="hidden xl:block xl:max-w-xs"
							src="https://thewinewankers.files.wordpress.com/2014/01/a-funny-cat-glass-wine-bottle.jpg"
						/>
					</div>

					<!-- 5 -->
					<div class="mt-10 lg:mt-12">
						<p class="content text-secondary opacity-40">
							Copyright © 2021 Vinify BV. All rights reserved.
						</p>
					</div>
				</div>
			</vn-container>
		</div>
	</div>
</template>

<script>
import ChatBot from '@/components/ChatBot';
import HeroSection from '@/components/HeroSection'
export default {
	name: 'Home',
	components: {
		ChatBot,
		HeroSection
	}
}
</script>
<style lang="scss">
	.home {
		&__empty-box {
			width: 277px;
			height: 174px;
			background-color: rgba(#651111, 0.1);
		}
	}
	#chat-bot-section {
		background-image: url(../assets/svg/section2-bgshape-small.svg);
		background-size: cover;
		background-position: bottom;
	}
</style>
