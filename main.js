alert('caue e bernardo, numero 7 e 8')
let area=parseInt (prompt('area'))
document.write(area);

function areaquadrado(lado1){
    return lado1*lado1;
}
console.log(areaquadrado(area));

let valoresDaMedia1=parseInt (prompt('valores da media'))
let valoresDaMedia2=parseInt (prompt('valores da media'))
let valoresDaMedia3=parseInt (prompt('valores da media'))
document.write(valoresDaMedia1)
document.write(valoresDaMedia2)
document.write(valoresDaMedia3);
function media(valor1,valor2,valor3){
  return (valor1+valor2+valor3)/3;
}
console.log(media(valoresDaMedia1, valoresDaMedia2, valoresDaMedia3));