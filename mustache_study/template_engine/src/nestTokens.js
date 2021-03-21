/**
 * 折叠tokens,将#和/之间的token整合起来
 * @param {*} tokens 
 * @returns 
 */
export default function nestTokens(tokens){
  let nestedTokens = []
  // 收集器，初始值为nestedTokens，收集器一直变化
  let collector = nestedTokens
  // 栈，存放入栈的token，便于收集器收集栈进出之间的token
  let sections = []
  for(let i = 0; i < tokens.length; i++){
    let token = tokens[i]

    switch (token[0]) {
      case '#':
        // 收集器指向当前需要收集的token
        collector.push(token)
        // 遇到起始#,入栈
        sections.push(token)
        // 收集器变换到将要收集的地方
        collector = token[2] = []
        break;
      case '/':
        sections.pop()
        // 收集器指回栈底那个位置
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
        break;
      default:
        collector.push(token)
        break;
    }
  }
  return nestedTokens
}