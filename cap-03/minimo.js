/**
 * Defina a função min que recebe dois argumentos e retorna o menor deles.
 */

function min(v1, v2) {
  if (!v2) return v1;

  return v1 > v2 ? v2 : v1;
}

console.log(min(10, 2));
