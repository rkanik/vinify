<template>
	<div>
		<h2 class="text-primary header__title">vinify</h2>
		<div class="mt-4">
			<a
				href="#"
				class="header__nav-item block py-2 px-4 hover:bg-gray-200 rounded-sm"
				>Start</a
			>
			<a
				href="#"
				class="header__nav-item block py-2 px-4 mt-2 hover:bg-gray-200 rounded-sm"
				>Resources</a
			>
			<hr class="border-t border-primary.border-opacity-25 my-4" />
			<a
				href="#"
				class="header__nav-item block py-2 px-4 hover:bg-gray-200 rounded-sm"
				>Pricing</a
			>
			<a
				href="#"
				class="header__nav-item block py-2 mt-2 px-4 hover:bg-gray-200 rounded-sm"
				>Login</a
			>
		</div>
		<!-- <hr class="border-t border-primary.border-opacity-25 my-4" /> -->
		<vn-flex
			to="#"
			justify-center
			class="bg-primary mt-8 header__nav-item text-secondary rounded py-2 leading-none"
		>
			Sign Up
		</vn-flex>
	</div>
</template>

<script>
export default {
	name: 'MobileMenuContent',
}
</script>
