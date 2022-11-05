function multiply(...num) {
    let result =1;
    for(let a of num){
    result *=a 
    }
    return result
}
console.log(multiply(2,3,4));