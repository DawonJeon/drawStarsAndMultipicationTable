
const solution = (input) => {
    return ( input < 3 ) ? `3 이상의 숫자를 입력해주세요` : isEvenOrOdd(input)
}

const isEvenOrOdd = (input) => {
    return ( input % 2 === 0 ) ? isEven(input) : isOdd(input)
}

const isEven = (input) => {
    for ( i = 1 ; i <= input ; i++) {
        i <= input/2  ? upInEven(input) : underInEven(input)
    }
}

const upInEven = (input) => {
    let space = '';
    for (j = 1 ; j <= input ; j++ ) {
        if ( j <= 2*i ) { space += "*"}
        else { space += " " };
    }
    console.log(space);
} 

const underInEven = (input) => {
    let space = '';
    let indexofunderi = i - (input/2);
    let variable = 2*(indexofunderi-1);
    for ( j =1 ; j <= input - variable; j++) { space += "*"}
    console.log(space);
}



const isOdd = (input) => {
    let halfOfIndex = (input+1)/2;
    for ( i = 1 ; i <= input ; i++) {
        i <= halfOfIndex  ? upInOdd(input) : underInOdd(input)
    }
}

const upInOdd = (input) => {
    let space = '';
    for ( j = 1 ; j <= 2*i-1 ; j++) {space += "*"}
    console.log(space);
}

const underInOdd = (input) => {
    let halfOfIndex = (input+1)/2;
    let space = '';
    let indexUnderInOdd = i - halfOfIndex;
    let newindexUnderInOdd = input - 2*indexUnderInOdd
    for ( j = 1 ; j <= newindexUnderInOdd; j++) {space += "*"}
    console.log(space);
}

console.log(solution(2));
console.log(solution(6));
console.log(solution(8));

console.log(solution(3));
console.log(solution(5));




