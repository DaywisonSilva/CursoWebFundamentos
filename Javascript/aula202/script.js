let sides = [30, 40, 20];

let sidesOrder = sides.sort();

try{
    if(sides[0] + sides[1] < sides[2]){
        throw 'Os lados inseridos não corresponden aos lados de um triângulo.';
    }else{
        console.log(`Os lados são ${sides[0]}, ${sides[1]}, ${sides[2]}`)
    }
}catch(erro){
    console.log(erro);
}