function isPrime(n){
    let isprime = n>=2
    for (let i = 2; i <= n/2; i++) {
        if(n%i==0){
            isprime =false
            break;
        }
        

        
    }
    return isprime
}