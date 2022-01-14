
const solution = (input) => {
    return (input <= 1) ? '소수가 아닙니다' : prime(input); 
}


const prime = (input) => {
    const IsPrimes = [];
    const NotPrimes = [];
    for(let i = 2; i < input; i++) {
        for (let j = 2; j < i ; j++) {
            if ( i % j === 0 ) {
                NotPrimes.push(i)
            } 
        } IsPrimes.push(i)
    } return NotPrimes
}

console.log(solution(9));
