export default function createElement(vnode){
  let domNode = document.createElement(vnode.sel)

  // 判断有子节点还是文本？
  if(vnode.text && (vnode.children == undefined || vnode.children.children === 0)){
    domNode.innerText = vnode.text
  }else if(Array.isArray(vnode.children) && vnode.children.length > 0){
    for(let i = 0; i < vnode.children.length; i++){
      let ch = vnode.children[i]
      let chDom = createElement(ch)
      domNode.appendChild(chDom)
    }
  }
  return domNode
}