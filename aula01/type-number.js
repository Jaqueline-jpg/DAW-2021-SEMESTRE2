//Type number
const primeiroNumero = 3;
const segundoNumero = 7;
const resultadoSoma = primeiroNumero + segundoNumero;
console.log(`${primeiroNumero} + ${segundoNumero} = ${resultadoSoma}`)
/*Legal jogar em uma variável e depois para o console*/

//type Float
const valorFlutuante = 3.2
const resultadoDivisao  = primeiroNumero / valorFlutuante;
console.log(`${primeiroNumero} / ${segundoNumero} = ${resultadoDivisao}`);
console.log(Math.round(resultadoDivisao * 100) / 100);

//Type NaN - Não é um número
const texto = 'Materdei';
const resultadoMultiploligacao = texto * segundoNumero;
console.log(` ${texto} * ${segundoNumero} = ${resultadoMultiploligacao}`);