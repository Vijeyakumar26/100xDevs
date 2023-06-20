let ans = 0; 
function sum(num){
    for (let i = 1; i <=num; i++) {
        ans = ans + i;        
    }
    return ans;
}
console.log(sum(100));