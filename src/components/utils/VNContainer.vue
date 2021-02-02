<template>
	<div class="vn-container container mx-auto">
		<slot />
	</div>
</template>
<script>
export default {
	name: 'vn-container'
}
</script>
<style lang="scss" scoped>
	.vn-container {
		padding-left: 30px;
		padding-right: 30px;
		@include on("lg") {
			padding-left: 0;
			padding-right: 0;
		}
		@include on("xl") {
			max-width: 1183px;
		}
		@include on("2xl") {
			max-width: 1183px;
		}
	}
</style>
