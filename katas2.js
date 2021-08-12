
function add(a, b) {
    let soma = a + b;
    return soma;
}

 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



function multiply(x,y){
    let result = 0;
    for (let multi = 1; multi <= y; multi++){
        result = add(result,x);
    }
    return result;
}

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');



function power(p,o){
    let base = 1;
    for(let exp = 1; exp <= o; exp++){
        base = multiply(base, p);
    }
    return base;
}


 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');



function factorial(num){
    let fat = 1; 
    for (i = 1;i <= num; i++ ){
       fat = multiply(i,fat);
    }
    return fat;
}


console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



function fibonacci(num){
    soma = 0;
    fibo = 1;
    antecessor = 0;

    for (let i = 1; i < num; i++){
        soma = add(antecessor,fibo);
        antecessor = fibo;
        fibo = soma;
    }
    return soma;
}

console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
