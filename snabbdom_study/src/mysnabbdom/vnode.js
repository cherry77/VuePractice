/**
 * vnode只是将传入的参数包起来，返回一个对象
 * @param {*} sel 
 * @param {*} data 
 * @param {*} children 
 * @param {*} text 
 * @param {*} elm 
 * @returns 
 */
export default function vnode(sel, data, children, text, elm){
  return { sel, data, children, text, elm }
}