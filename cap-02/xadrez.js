/**
 * Escreva um programa que cria uma string que representa uma grade 8×8,
 * usando caracteres de nova linha para separar linhas. Em cada posição da
 * grade há um espaço ou um caractere "#". Os caracteres devem formar um
 * tabuleiro de xadrez.
 */

/*
for (let i = 0; i < 8; i++) {
  let line = "";
  for (let j = 0; j < 8; j++) {
    if ((j + i) % 2 == 0) {
      line += " ";
    } else {
      line += "#";
    }
  }
  console.log(line);
}
*/

/**
 * Quando tiver um programa que gera esse padrão, defina um binding size = 8
 * e mude o programa para que funcione para qualquer size, produzindo uma
 * grade da largura e altura fornecidas.
 */

let size = 8;

for (let i = 0; i < size; i++) {
  let line = "";
  for (let j = 0; j < size; j++) {
    if ((j + i) % 2 == 0) {
      line += " ";
    } else {
      line += "#";
    }
  }
  console.log(line);
}
