function prime(n){
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false; // verificam daca i se inmpate la i daca 
    
    }
    return true;
}
console.log(prime(2)); 
