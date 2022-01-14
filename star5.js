// 역삼각형 만들기

let n;
let space = "";

const solution = (n) => {
    for (i=1; i <= n; i++) {
        for (j=1; j <= 2*n-1; j++) {
            if (j >= i && j <= 2*n-i) {
                space += "*";
            } else {
                space += " ";
            }
        }
        space += "\n";
    }
    console.log(space);
}

solution(7);