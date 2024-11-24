const { add: addNumber, addAndMuliply } = require('./functions')

const output = addNumber(1, 2)
const outputM = addAndMuliply(1, 2, 2)

function add(params) {
  console.log('hello!')
}

console.log(output)
console.log(outputM)
add()
