let row;
let column;
let space = "";

const solution = (row, column) => {
    for(i=1; i<=row; i+=2) {
        if (i=1 || i == row) {
            space += "*"

        else {
            space += " "
            }
        } 
    } console.log(space);
}  

row = 7;
column =9;

solution(row, column)
