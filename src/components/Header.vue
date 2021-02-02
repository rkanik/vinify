<template>
	<header id="header" class="header py-2 lg:py-0 relative">
		<vn-container>
			<vn-flex items-center justify-between class="lg:h-16">
				<vn-flex items-center>
					<router-link to="/#header">
						<h2 class="text-primary header__title">vinify</h2>
					</router-link>
					<vn-flex
						on="lg"
						items-center
						class="header__nav hidden lg:ml-16 2xl:ml-32 space-x-12"
					>
						<vn-flex to="#" items-center class="header__nav-item"
							><span class="mr-3">Start</span
							><svg
								class="mt-1"
								width="16.479"
								height="10.114"
								viewBox="0 0 16.479 10.114"
							>
								<path
									d="M358,828.733l7.137,7.953,7.887-7.953"
									transform="translate(-357.256 -828.029)"
									fill="none"
									stroke="#3a2d53"
									stroke-width="2"
									opacity="0.3"
								/></svg
						></vn-flex>
						<vn-flex to="#" items-center class="header__nav-item"
							><span class="mr-3">Resources</span
							><svg
								class="mt-1"
								width="16.479"
								height="10.114"
								viewBox="0 0 16.479 10.114"
							>
								<path
									d="M358,828.733l7.137,7.953,7.887-7.953"
									transform="translate(-357.256 -828.029)"
									fill="none"
									stroke="#3a2d53"
									stroke-width="2"
									opacity="0.3"
								/>
							</svg>
						</vn-flex>
					</vn-flex>
				</vn-flex>
				<vn-flex on="lg" items-center class="header__nav hidden">
					<div class="space-x-12">
						<a href="#" class="header__nav-item">Pricing</a>
						<a href="#" class="header__nav-item">Login</a>
					</div>
					<vn-flex
						to="#"
						items-center
						class="font-semibold bg-primary header__nav-item text-secondary rounded-lg lg:ml-12 2xl:ml-20 py-1 px-8"
					>
						Sign Up
					</vn-flex>
				</vn-flex>
				<button @click="menu = !menu" class="w-6 lg:hidden">
					<svg width="27" height="17">
						<g
							fill="none"
							stroke="#232020"
							stroke-linecap="round"
							stroke-width="3"
						>
							<path d="M1.5 1.5h24M1.5 8.5h24M1.5 15.5h24" />
						</g>
					</svg>
				</button>
			</vn-flex>
		</vn-container>

		<MobileMenu2 v-model="menu">
			<MobileMenuContent />
		</MobileMenu2>
	</header>
</template>

<script>
import MobileMenu2 from '@/components/MobileMenu2'
import MobileMenuContent from '@/components/MobileMenuContent'
export default {
	name: 'Header',
	components: {
		MobileMenu2,
		MobileMenuContent
	},
	data() {
		return {
			menu: false
		}
	},
}
</script>

<style lang='scss'>
	.header {
		&__title {
			@include font(25px, 40px);
			@include on("xl") {
				@include font(40px, 50px);
			}
			@include on("2xl") {
				@include font(50px, 50px);
			}
		}
		&__nav-item {
			@include font(16px, 20px);
			@include on("xl") {
				@include font(16px, 25px);
			}
		}
	}
</style>
