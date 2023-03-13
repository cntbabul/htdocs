let pattern = 'pw'

let regExOne = new RegExp(pattern)


let flag = 'gi'
let regExTwo =  new RegExp(pattern, flag)

let RegExThree = /pw/gi

const strToCheck  = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);