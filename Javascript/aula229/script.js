function calcularMedia(){
    let x = 0;
    let acumulador = 0;
    while(typeof arguments[x] === 'number'){
        acumulador += arguments[x];
        x++;
    }
    return acumulador/x;
}

console.log(`A média é igual a: ${calcularMedia(0, 9, 8, 7)}`);
console.log(typeof(0));

// 0 é considerado uma valor falso