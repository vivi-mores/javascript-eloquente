/*
 * Escreva um programa que use console.log para imprimir todos os números de
 * 1 a 100, com duas exceções. Para números divisíveis por 3, imprima "Fizz" em
 * vez do número, e para números divisíveis por 5 (e não por 3), imprima "Buzz"
 * em vez do número.
 */

/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

/*
 * Quando isso estiver funcionando, modifique seu programa para imprimir "
 * FizzBuzz" para números que são divisíveis por ambos 3 e 5 (e ainda imprimir
 * "Fizz" ou "Buzz" para números divisíveis por apenas um deles).
 */

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
