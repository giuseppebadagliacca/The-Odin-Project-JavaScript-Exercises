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

// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  // if(number < 0){
  //   return Math.abs(number)
  // }else{
  //   return number-number-number
  // }
  return number < 0 ? Math.abs(number):number-number-number 
}

// console.log(opposite(43))

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder=function(iterable){
  if(Array.isArray(iterable)){
    
  }else{

  }
}