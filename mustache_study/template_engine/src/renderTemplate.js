import lookup from './lookup'
/**
 * 根据tokens和data,解析成dom字符串
 * @param {*} tokens 
 * @param {*} data 
 * @returns 
 */
export default function renderTemplate(tokens, data){
  let domStr = ''
  for(let i = 0; i < tokens.length; i++){
    let token = tokens[i]
    if(token[0] === '#'){
      domStr += parseArray(token, data)
    }else if(token[0] === 'name'){
      domStr += lookup(data, token[1])
    }else{
      domStr += token[1]
    }
  }
  return domStr
}

/**
 * 根据循环模板和data解析成dom字符串
 * @param {*} tokens 
 * @param {*} arrData 
 * @returns 
 */
function parseArray(token, data){
  let domstr = ''
  let arrData = lookup(data, token[1])
  for(let i = 0; i < arrData.length; i++){
    domstr += renderTemplate(token[2], {
      ...arrData[i],
      '.': arrData[i]
    })
  }
  return domstr
}