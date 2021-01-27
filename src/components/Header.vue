<template>
	<header class="header py-1 relative">
		<vn-container>
			<vn-flex items-center justify-between class="h-16 lg:h-20 2xl:h-28">
				<vn-flex items-center>
					<h2 class="text-primary header__title">Vinify</h2>
					<vn-flex
						on="lg"
						items-center
						class="header__nav hidden lg:ml-16 2xl:ml-32 space-x-12"
					>
						<vn-flex to="#" items-center class="header__nav-item"
							><span class="mr-3">Start</span> <VNArrow class="h-3 w-5"
						/></vn-flex>
						<vn-flex to="#" items-center class="header__nav-item"
							><span class="mr-3">Resources</span
							><VNArrow class="h-3 w-5"
						/></vn-flex>
					</vn-flex>
				</vn-flex>
				<vn-flex on="lg" items-center class="header__nav hidden">
					<div class="space-x-12">
						<a href="#" class="header__nav-item">Pricing</a>
						<a href="#" class="header__nav-item">Login</a>
					</div>
					<vn-flex
						to="#"
						class="bg-primary header__nav-item text-secondary rounded-xl lg:ml-12 2xl:ml-20 py-2 px-10 leading-none"
					>
						Signup
					</vn-flex>
				</vn-flex>
				<button @click="menu = !menu" class="lg:hidden">
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
		<MobileMenu v-model="menu">
			<MobileMenuContent />
		</MobileMenu>
	</header>
</template>

<script>
import MobileMenu from '@/components/MobileMenu'
import MobileMenuContent from '@/components/MobileMenuContent'
export default {
	name: 'Header',
	components: {
		MobileMenu,
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
			@include font(30px, 50px);
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
				@include font(20px, 30px);
			}
			@include on("2xl") {
				@include font(25px, 40px);
			}
		}
	}
</style>
