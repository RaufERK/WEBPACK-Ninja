import { add as addNumber, addAndMuliply } from './functions/index'

const output = addNumber(1, 2)
const outputM = addAndMuliply(1, 2, 2)

function add1(params) {
  console.log('hello!')
}

console.log(output)
console.log(outputM)
add1()
