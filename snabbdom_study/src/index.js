import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const vnode = h('p', {}, '文字')
const vnode2 = h('ul', {}, [
  h('li', {}, '苹果'),
  h('li', {}, '梨子'),
  h('li', {}, '西瓜'),
])
const container = document.getElementById('container')

patch(container, vnode2)