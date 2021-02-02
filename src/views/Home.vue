<template>
	<div class="home">
		<HeroSection />

		<!-- Chat bot -->
		<div id="chat-bot-section" class="chatbot relative z-20 pt-16 pb-4">
			<vn-container>
				<div class="text-center relative z-10">
					<h2
						class="heading text-secondary w-52 sm:w-full sm:max-w-sm lg:w-auto px-2 lg:max-w-lg xl:max-w-full mx-auto lg:mt-16 xl:mt-20 2xl:mt-24"
					>
						Sell wine online? Chat to Naomi below.
					</h2>
					<p
						class="content text-secondary mt-5 px-3 mx-auto max-w-xxxs sm:max-w-unset lg:mx-44 xl:mx-80"
					>
						Grow a deep understanding of your customers, capture data and
						make every interaction with your brand memorable.
					</p>
					<svg
						width="16.479"
						height="10.114"
						viewBox="0 0 16.479 10.114"
						class="mx-auto mt-7"
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
						class="lg:mt-12 lg:max-w-2xl xl:max-w-3xl mx-auto transform translate-y-8 lg:transform-none lg:translate-y-0"
					>
						<img
							alt="chatbot arrow"
							src="@/assets/svg/chatbot-arrow.svg"
							class="absolute -left-24 bottom-12"
						/>
						<p
							class="text-accent content absolute bottom-24 -left-44 transform -rotate-28"
						>
							Click to continue
						</p>
					</ChatBot>
				</div>
			</vn-container>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div
			class="relative z-10 transform -translate-y-px bg-white pt-48 pb-24 lg:pb-0"
		>
			<vn-container>
				<div
					class="relative lg:py-0 text-center lg:text-left mx-auto lg:mx-0 lg:pb-60 lg:mx-cont"
				>
					<img
						alt="Lightbulb"
						src="@/assets/images/lightbulb.png"
						class="hidden lg:block absolute lg:max-h-20 lg:-left-20 -top-16"
					/>
					<div class="lg:absolute -bottom-12 right-0">
						<img
							class="home__benchdrink w-44 mx-auto self-end flex-none"
							src="@/assets/images/benchdrink.png"
							alt="benchdrink"
						/>
					</div>
					<div
						class="mt-8 lg:mt-0 xl:max-w-xl"
						style="height: max-content"
					>
						<h2
							class="heading w-64 sm:w-full sm:max-w-sm lg:w-full lg:max-w-3xl xl:max-w-xl mx-auto lg:mx-0 px-1 lg:px-0"
						>
							All of the collected
							<span class="text-accent"
								>data is visualised
								<br class="hidden lg:block" />live</span
							>

							on an easy to understand dashboard
						</h2>
						<hr
							class="my-5 w-64 sm:w-full sm:max-w-sm lg:max-w-none lg:w-auto mx-auto lg:mx-0 border-t border-primary border-opacity-25"
						/>
						<p
							class="content w-64 sm:w-full sm:max-w-sm lg:max-w-xl lg:w-auto mx-auto px-3 lg:px-0 lg:mx-0"
						>
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
		<div class="lg:pl-cont">
			<div
				class="bg-green bg-opacity-5 pt-16 pb-24 lg:px-cont lg:py-8 xl:pt-32 xl:pb-20 xl:rounded-98px lg:rounded-48px rounded-r-none"
			>
				<div class="flex flex-col lg:flex-row-reverse lg:justify-between">
					<div
						class="px-7 lg:px-0 relative lg:max-w-xl lg:w-full lg:flex-none"
					>
						<img
							alt="World Map Small"
							class="lg:hidden w-64 sm:w-4/5 mx-auto"
							src="../assets/images/worldmap-640.png"
						/>
						<img
							alt="World Map Large"
							class="hidden lg:block w-full flex-none"
							src="../assets/images/worldmap-1280.png"
						/>
					</div>
					<div class="mt-10 lg:mt-0 text-center lg:text-left lg:max-w-sm">
						<div
							class="px-7 lg:px-0 sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-full"
						>
							<h2 class="heading mx-2 lg:mx-0">
								<span class="text-accent">Identify</span> your most
								popular regions and grape varieties
							</h2>
							<hr
								class="my-5 lg:my-0 lg:mt-5 lg:mb-7 border-t border-primary border-opacity-25 mx-5 lg:mx-0"
							/>
							<p
								class="content w-56 sm:w-full sm:max-w-sm lg:w-auto mx-auto lg:mx-0 lg:pr-8"
							>
								Make more informed buying decisions by identifying the
								patterns in core wine traits and your customer’s palate
								profiles.
							</p>
							<a
								href="#"
								class="inline-block py-3 px-9 xl:px-10 mt-8 xl:mt-9 bg-primary text-secondary rounded-8px shadow-xl text-btn"
								><span class="font-semibold mr-1">Get started</span> for
								free</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div class="py-16 lg:py-40">
			<vn-container>
				<div
					class="flex flex-col lg:flex-row lg:justify-between lg:space-x-20"
				>
					<div class="home__empty-box mx-auto" />
					<div
						class="mt-10 lg:mt-6 text-center lg:text-left lg:flex-1 lg:pr-cont"
					>
						<div
							class="px-7 lg:px-0 sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-full"
						>
							<h2
								class="heading w-56 sm:w-full sm:max-w-sm lg:max-w-xl lg:w-auto mx-auto px-1 lg:px-0 lg:mx-0"
							>
								Great new wine just in? Why not
								<span class="text-accent">share</span> it with the
								customers that you know will love it!
							</h2>
							<hr
								class="my-4 lg:my-0 lg:mt-6 lg:mb-7 border-t border-primary border-opacity-25 mx-2 lg:mx-0"
							/>
							<p
								class="content w-64 sm:w-full sm:max-w-sm lg:w-auto lg:max-w-xl mx-auto lg:mx-0 lg:mr-8"
							>
								Select any wine from your portfolio and based on your
								customer <br class="sm:hidden" />
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
		<div class="lg:pl-cont">
			<div
				class="bg-primary bg-opacity-5 relative pt-14 pb-24 lg:pt-32 lg:pb-24 xl:rounded-98px lg:rounded-48px rounded-r-none lg:px-cont"
			>
				<div class="flex flex-col lg:flex-row-reverse lg:justify-between">
					<div class="home__empty-box v2 mx-auto" />
					<div
						class="px-4 sm:px-0 mt-10 lg:mt-0 text-center lg:text-left lg:flex-1 sm:mx-auto sm:w-11/12 md:w-4/5 lg:mr-12"
					>
						<h2
							class="heading w-72 sm:w-full sm:max-w-sm lg:w-full px-1 lg:px-0 lg:max-w-xl mx-auto lg:mx-0"
						>
							We <span class="text-accent">automate</span> key data
							points on each wine to make our recommendation engine
							<br class="sm:hidden" />
							as accurate as possible
						</h2>
						<hr
							class="mt-4 mb-6 lg:my-6 border-t border-primary border-opacity-25 mx-7 lg:mx-0"
						/>
						<p class="content mx-7 lg:mx-0 lg:mr-12">
							A beautiful collaboration between sommeliers and artificial
							intelligence combine years of real world experience with
							the power of technology.
						</p>
						<a
							href="#"
							class="inline-block py-3 px-9 xl:px-10 mt-8 xl:mt-12 bg-primary text-secondary rounded-8px shadow-xl text-btn"
							><span class="font-semibold mr-1">Get started</span> for
							free</a
						>
					</div>
				</div>
			</div>
		</div>

		<!-- -------- -->
		<!-- Section -->
		<div class="py-16 lg:py-24">
			<vn-container>
				<div
					class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:pr-cont"
				>
					<div class="relative">
						<img
							alt="Wine Seller"
							class="w-56 sm:w-full sm:max-w-xs mx-auto xl:max-w-xl lg:w-full"
							src="@/assets/images/shopify.png"
						/>
					</div>
					<div class="mt-9 lg:mt-0 text-center lg:text-left lg:max-w-md">
						<div class="sm:mx-auto sm:w-11/12 md:w-4/5 lg:w-full">
							<h2
								class="heading w-60 sm:w-full sm:max-w-sm lg:w-auto mx-auto lg:mr-16"
							>
								<span class="text-accent">Quick integration</span>
								with Shopify or Woocommerce with a click of a button
							</h2>
							<hr
								class="my-5 mx-8 lg:mt-6 lg:mb-7 border-t border-primary border-opacity-25 lg:mx-0"
							/>
							<p class="content mx-6 lg:mx-0 lg:mr-10">
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
				class="flex lg:block flex-col items-center justify-center px-con z-10 text-center absolute w-full inset-0 lg:top-auto lg:left-auto lg:bottom-16 xl:bottom-44 lg:right-0 lg:max-w-78/100"
			>
				<h2
					class="heading mx-2 mt-24 max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-lg lg:mx-auto"
				>
					Keep connected with your <br class="hidden lg:block" />
					customers anytime, anywhere.
				</h2>
				<a
					href="#"
					class="inline-block py-3 px-9 xl:px-10 mt-8 xl:mt-9 bg-primary text-secondary rounded-8px shadow-xl text-btn"
					><span class="font-semibold mr-1">Get started</span> for free</a
				>
			</div>
		</div>

		<!-- -------- -->
		<!-- Bottom -->

		<div class="bg-primary py-10 xl:py-24 relative z-10">
			<vn-container>
				<div class="px-6 lg:px-0">
					<div class="lg:flex lg:space-x-16 lg:justify-between">
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
						<div class="home__empty-box v3 hidden xl:block" />
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
			@include on("xl") {
				width: 573px;
				height: 372px;
				&.v2 {
					width: 536px;
				}
			}
			&.v3 {
				width: 197px;
				height: 154px;
				background-color: rgba(#d8d8d8, 0.3);
			}
		}
		&__benchdrink {
			@include on("lg") {
				min-width: 431px;
			}
		}
	}
	.chatbot {
		background-image: url(../assets/svg/section2-bgshape-small.svg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
		@include on("lg") {
			background-position: top;
			background-size: contain;
			background-image: url(../assets/images/section2-bgshape-large.png);
			transform: translateY(-1px);
		}
		@include up(1825px) {
			background-size: cover;
		}
	}
</style>
