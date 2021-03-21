import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'
// 怎么将需要渲染的模板字符串传递过来：先暴露个全局对象，传递模板字符串进来
// tag是传过来的
window.Engine = {
  render (templateStr, data){
    const tokens = parseTemplateToTokens(templateStr)
    const domStr = renderTemplate(tokens, data)
    return domStr
  }
}