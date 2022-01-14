let space = "";
let n;

const solution = (n) => {
    for (i=1; i <= n; i++) { // 6번 도는거 col
        for (j=1; j <= 2*n-1; j++) { // 11번 도는거 row
            if (n-i < j && j < n+i) { // i=2 n=6
                space += "*"; // j = 567
            } else {
                space += " "; // 1234 891011
            }
        } 
        space += "\n"
    }
    console.log(space)
}


solution(10)