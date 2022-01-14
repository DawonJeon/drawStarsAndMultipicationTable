
let column;
let space ="";

const solution = (column) => {
    for ( i=column ; i >= 1 ; i--) {
        for ( j=i ; j>=1; j-- ) {
            space += "*";
        } space += "\n";
    }
    console.log(space);
} 

solution(9);

