import { bps } from './consts'

// Importer Callbacks
export const view = name => () => import(`@/views/${name}.vue`)
export const layout = name => () => import(`@/layouts/${name}.vue`)

/**
 *
 * @param {any[]} arr - [1, 2, 3]
 * @returns {any[][]} - [[1,2], [2,3]]
 */
const getPairs = arr => {
	let start = 0, pairs = []
	while (start < (arr.length - 1)) {
		pairs.push([arr[start], arr[start + 1]])
		start += 1
	}
	return pairs
}

const bpPairs = getPairs(
	[0, 640, 768, 1024, 1280, 1536]
)

/**
 *
 * @param {[number, number]} range
 * @param {number} size
 * @returns {boolean}
 */
export const between = (range, size) => {
	return size > range[0] && size < range[1];
}

/**
 *
 * @param {number} width
 * @returns {string}
 */
export const getDevice = width => {
	let pair = bpPairs.find(
		pair => between([pair[0], pair[1]], width)
	)
	return pair ? bps[pair[0]] : bps[1536]

}
