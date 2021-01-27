import VNFlex from './components/utils/VNFlex'
import VNContainer from './components/utils/VNContainer'
import VNArrow from './components/icons/VNArrow'

export default {
	register(Vue) {
		Vue.component(VNFlex.name, VNFlex)
		Vue.component(VNArrow.name, VNArrow)
		Vue.component(VNContainer.name, VNContainer)
	}
}

