// codewars code challange promts and answers 

// "Square Every Digit" - Welcome. In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer

function squareDigits(num){
  const finalOutput = []
  const stringArr = num.toString().split('')
  stringArr.forEach(x=> {
    const num = parseFloat(x)
    finalOutput.push(num*num)
  })
  return parseFloat(finalOutput.join(''))
}

// console.log(typeof squareDigits(9119))

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string. Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a,b) {
  let binaryOutput = [], num = a+b

 while(num/2 !== 0){
   binaryOutput.push(num/2)
   num = num%2
 }
 return parseFloat([...binaryOutput,0].join(''))
}

console.log(addBinary(74,1))