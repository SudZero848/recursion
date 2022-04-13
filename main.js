// Write two functions that find the factorial of any number. One should use recursive, the other one a for-loop


/* findFactorialRecursive(5)
    should equal 5 * 4 * 3 * 2 * 1

    take number and * number - 1 

*/


function findFactorialRecursive(number) {
    while (number > 0) {

    }
}


function findFactorialIterative(number) {
    // let array = [];
    // for (let i = number; i > 0; i--) {
    //     array.push(i)
    // }
    // return array.reduce((a,b) => a * b)

    // a more efficient way: 

    let answer = 1;
    if (number === 2) {
        return 2
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i
    }
    return answer
}

console.log(findFactorialIterative(5))