/**
 * Escreva uma função chamada countBs que recebe uma string como seu único
 * argumento e retorna um número que indica quantos caracteres B maiúsculos
 * existem na string
 */

/*
function countBs(palavra) {
  let temB = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "B") {
      temB++;
    }
  }
  return temB;
}
*/

/**
 * Em seguida, escreva uma função chamada countChar que se comporta como
 * countBs, exceto que recebe um segundo argumento que indica o caractere que
 * deve ser contado (em vez de contar apenas caracteres B maiúsculos). Reescreva
 * countBs para fazer uso dessa nova função.
 */

function countChar(palavra, caractere) {
  if (!caractere) return 0;

  let temC = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === caractere) {
      temC++;
    }
  }
  return temC;
}

// function countBs(palavra) {
//   countChar(palavra, "B");
// }

const countBs = (palavra) => countChar(palavra, "B");

console.log(countBs("BBBBaB"));
