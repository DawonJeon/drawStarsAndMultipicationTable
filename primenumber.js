/**
 * 소수 : 2,3,5,7..
 * @param {} input 
 */

const solution = (input) => {
        return (input < 2) ? '2 이상의 숫자를 입력해주세요.' : isTwo(input)
    }


const isTwo = (input) => {
        return (input === 2) ? '2는 소수입니다.' : doloop(input);
    }

const doloop = (input) => {
    for ( i = 2 ; i < input ; i++) {
        if ( input % i === 0 ) {
            return `${input}은 소수가 아닙니다.`
        }
    }
}


// const isNotPrime = (input) => {
//     let notPrimeNumber = input
//     console.log(`${notPrimeNumber}은 소수가 아닙니다.`)
// }

// const isPrimeNumber = (input) => {
//     console.log(`${input}은 소수입니다.`)

console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
