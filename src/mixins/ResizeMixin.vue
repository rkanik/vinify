<script>
import Vue from "vue";
import { bps } from "@/consts";
import { getDevice } from "@/helpers";
export default Vue.extend({
	name: "ResizeMixin",
	data() {
		return {
			device: "xs",
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.onResize();
			window.addEventListener("resize", this.onResize);
		});
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.onResize);
	},
	watch: {
		device(d) {
			window.bus.$emit("bp", bps[d]);
		},
	},
	methods: {
		onResize() {
			let width = window.innerWidth;
			let height = window.innerHeight;
			this.device = getDevice(width);
			window.bus.$emit("resize", { height, width });
		},
	},
});
</script>


