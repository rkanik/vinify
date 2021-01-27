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
		@include on("2p5xl") {
			padding-left: 0;
			padding-right: 0;
			max-width: 1650px;
		}
	}
</style>
