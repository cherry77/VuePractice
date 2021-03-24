import vnode from './vnode'
import createElement from './createElement'

export default function patch(oldVnode, newVnode){
  console.log(oldVnode.tagName)
  // oldVnode是否是虚拟节点
  console.log(oldVnode.elm)
  if(oldVnode.sel === '' || oldVnode.sel === undefined){
    // dom的属性有哪些？
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }
  // 是否是同一个节点
  if(oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel){
    // 精细化比较
  }else{
    // 暴力删除旧的，插入新的
    // 思路：现将插入新的dom组装返回,用insertBefore插入
    const newVnodeElm = createElement(newVnode)
    if(oldVnode.elm.parentNode && newVnodeElm){
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
    }
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}