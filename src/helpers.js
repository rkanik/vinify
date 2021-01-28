export const view = name => () => import(`@/views/${name}.vue`)
export const layout = name => () => import(`@/layouts/${name}.vue`)
