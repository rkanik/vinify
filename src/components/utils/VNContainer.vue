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
		padding-left: 28px;
		padding-right: 28px;
		@include on("lg") {
			padding-left: 0;
			padding-right: 0;
		}
		@include on("2p5xl") {
			max-width: 1650px;
		}
	}
</style>
