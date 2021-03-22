import vnode from './vnode'

// 实现低配版的h
// h('div', {}, '文字')
// h('div', {}, [])
// h('div', {}, h())
export default function h(sel, data, c) {
  if(arguments.length !== 3)
    throw new Error('必须传入三个参数')
  
  if(typeof c === 'number' || typeof c === 'string'){
    return vnode(sel, data, undefined, c, undefined)
  }else if(Array.isArray(c)){
    let children = []
    for(let i = 0; i < c.length; i++){
      if(!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))){
        throw new Error('传入的数组参数中有项不是h函数')
      }
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  }else if(typeof c === 'object' && c.hasOwnProperty('sel')){
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
  }else{
    throw new Error('传入的第三个参数类型不正确')
  }
}