import h from './mysnabbdom/h'

const vnode = h('div', {}, '文字')
const vnode2 = h('ul', {}, [
  h('li', {}, '苹果'),
  h('li', {}, '梨子'),
  h('li', {}, '西瓜'),
])
const vnode3 = h('div', {}, h('li', {}, '苹果'))
console.log(vnode3)