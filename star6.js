// 마름모찍기
//이건...뭐...ㅎ..

let space = "";

const solution = (n) => {  // n은 세로줄의 갯수를 뜻함
    for (i=1 ; i <= n ; i++) {   
        let calculation = (n+1)/2;
        if( n % 2 == 1) {  // n이 홀수일 때,
            if (i <= calculation ) {  //i가 calculation보다 작을때 *이 두개씩 증가함
                for (j=1; j <= n; j++) {
                    if(j > calculation-i && j < calculation+i)  {space += "*";} 
                    else {space += " "}
                } space += "\n";
            }  
            else {  //i가 calculation보다 클때 *이 두개씩 감소함
                for (j=1; j <= n; j++) {  
                    if (j > i-calculation && j < n-i+calculation+1) {space += "*";} 
                    else {space += " ";}
                } space += "\n";
            }
        } 

        else {  // n이 짝수일 때,
            let formula = n/2;  // formula = n의 반
            if( n <= 3) {console.log("3이상의 숫자를 넣으세요.")} 
            else {  // i가 formula보다 작을때는 별이 두개씩 증가함
                if (i <= formula) {  
                    for (j=1; j <= n; j++) {        
                        if (j > formula-i && j <= formula+i ) {space += "*"}
                        else {space += " ";}
                    } space += "\n"
                } else {
                    for (j=1; j <= n ; j++) { //i가 formula보다 클때는 별이 두개씩 감소함
                        if (j >= i-formula && j <= n-i+formula+1) {space += "*"} 
                        else {space += " ";}
                    } space += "\n";
                }
            }
        }
        
    } space += "\n" 
    return space;
} 

// console.log(solution(3));
// console.log(solution(4));
// console.log(solution(5));
// console.log(solution(6));
// console.log(solution(7));
console.log(solution(8));
// console.log(solution(9));
// console.log(solution(10));
// console.log(solution(11));
