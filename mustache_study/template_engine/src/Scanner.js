export default class Scanner{
  constructor(templateStr){
    this.templateStr = templateStr
    this.pos = 0
    this.tail = templateStr
  }

  /**
   * 跳过指定tag字符
   * @param {*} tag 
   */
  scan(tag){
    // 怎么同时判断走到了两个{{: 先调用scanUntil，再调用scan连续跳过{{标识符
    // 事先判断下尾字符串是否包含需要跳过的tag
    if(this.tail.indexOf(tag) === 0){
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  /**
   * 指针进行扫描：返回扫描初始位置到结束位置直接的字符串
   * @param {*} stopTag 
   * @returns 
   */
  scanUntil(stopTag){
    const pos_backup = this.pos
    // 当没有走完整个模板字符串且没有到指定标识时
    while (!this.eos() && this.tail.indexOf(stopTag) !== 0) {
      this.pos++
      this.tail = this.templateStr.substring(this.pos)
    }
    return this.templateStr.substring(pos_backup, this.pos)
  }

  /**指针是否到最后
   * end of string
   * @returns 
   */
  eos(){
    return this.pos >= this.templateStr.length
  }

}