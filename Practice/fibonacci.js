let nextNum = 0; 
let num1= 0;
let num2 = 1;
function fibonacci(n){
    for (let i = 1; i <=n; i++) {  
       console.log(nextNum);
       nextNum = num1 + num2;
       num1 = num2;
       num2 = nextNum;   
    }
}
fibonacci(5);
//0 , 1, 1, 2, 3, 5, 8, 12
//