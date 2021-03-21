import Scanner from './Scanner'
import nestTokens from './nestTokens'
/**
 * 将模板字符串转为token数组
 * @returns 
 */
export default function parseTemplateToTokens(templateStr){
  const scanner = new Scanner(templateStr)
  let tokens = []
  let words
  // 循环检测：当指针pos不等于templateStr长度时，或者tail不为空
  while (!scanner.eos()) {
    words = scanner.scanUntil('{{')
    if(words != ''){
      tokens.push(['text', words])
    }
    scanner.scan('{{')

    words = scanner.scanUntil('}}')
    if(words != ''){
      if(words[0] === '#'){
        tokens.push(['#', words.substring(1)])
      }else if(words[0] === '/'){
        tokens.push(['/', words.substring(1)])
      }else{
        tokens.push(['name', words])
      }
    }
    scanner.scan('}}')
  }
  return nestTokens(tokens)
}