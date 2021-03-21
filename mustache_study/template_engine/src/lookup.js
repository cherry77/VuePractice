export default function lookup(data, path){
  if(path.indexOf('.') === -1 && path !== '.'){
    const paths = path.split('.')
    let temp = data
    for(let i = 0; i < paths.length; i++){
      temp = temp[paths[i]]
    }
    return temp
  }
  return data[path]
}