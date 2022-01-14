/*
1. 네모 찍기
2. 좌측 직각삼각형 찍기
3. 우측 직각삼각형 찍기
4. 정삼각형 찍기
5. 역삼각형 찍기node n
6. 마름모 찍기
7.  사각형 경계선 찍기
8.  우측 화살표 찍기
*/

//1. 네모찍기
let row;
let column;
let starr ='';

const square = (row, column) => {
    for (i=1; i<=column; i++) {
        for(j=1; j<=row; j++) {
            starr += "*"
        }
        starr += "\n"
    }
    console.log(starr);
 }

column =5;
row = 10;
square(row, column);