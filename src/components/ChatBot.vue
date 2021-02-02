<template>
	<div class="chatbot-wrapper relative">
		<div :id="id" class="w-full h-full rounded-3xl bg-white shadow-lg overflow-hidden" />
		<slot />
	</div>
</template>

<script>
export default {
	name: 'ChatBot',
	data() {
		return {
			id: 'chat-bot',
			chatBot: null,
			scriptId: 'chat-bot-script',
			scriptSrc: 'https://static.landbot.io/landbot-3/landbot-3.0.0.js',
			dataUrl: 'https://chats.landbot.io/v3/H-798779-XDPEXH73C2KFAAEU/index.json'
		}
	},
	mounted() {
		this.injectScript(() => {
			this.chatBot = new Landbot.Container({
				container: `#${this.id}`,
				configUrl: this.dataUrl,
			});
		})
	},
	methods: {
		injectScript(onLoad) {
			if (document.getElementById(this.scriptId)) return
			let script = document.createElement('script');
			script.id = this.scriptId
			script.onload = onLoad
			script.src = this.scriptSrc;
			let firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
		},
	}
}
</script>
<style lang="scss">
	.chatbot-wrapper {
		height: 400px;
		@include on("sm") {
			height: 800px;
		}
		@include on("md") {
			height: 1024px;
		}
		@include on("lg") {
			height: 440px;
		}
		@include on("xl") {
			height: 570px;
		}
	}
</style>