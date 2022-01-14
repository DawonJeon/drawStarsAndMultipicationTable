//사각형 경계선 찍기

let space ="";

const solution = (height, width) => { 
        for (i=1 ; i <= height; i++) {
                i === 1 || i === height ? allStar(width) : blank(width)
        }
    return space
    }

const allStar = (width) => {
    for(j=1 ; j <= width ; j++) {
        space += "*";
    }
    space += "\n";
    return space
}

const blank = (width) =>  {
    for(j=1 ; j <= width ; j++) {
        j === 1 || j === width ? space += "*" : space += " ";
    }
    space += "\n";
    return space
}

console.log(solution(4,10));
console.log(solution(2,10));
console.log(solution(9,3));




/*
let height;
let width;
let space = "";


const solution = (height, width) => {
    for (i=1; i <= height; i++) {
        for (j=1; j <= width; j++) {
            if ( i==1 || i== height ) {
                space += "*";
            } space += "\n";
            else {
                if( j==1 || j == width) {
                space += "*";
                } else {
                    space += " ";
                }
            } space += "\n";     
            }       
        
        console.log(space);
    


solution(4,10);
*/

// for (j=1; j <= width; j++) {
//     if ( i==1 || i== height ) {
//         space += "*";
//     } space += "\n";
//     else {
//         if( j==1 || j == width) {
//         space += "*";
//         } else {
//             space += " ";
//         }
//     } space += "\n";     
//     }       