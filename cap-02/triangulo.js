/* 
Escreva um loop que faça sete chamadas a console.log para exibir o seguinte
triângulo:
#
##
###
####
#####
######
####### 
*/

const letter = "#";

for (let i = 0; i < 7; i++) {
  let response = "#";
  for (let j = 0; j < i; j++) {
    response += letter;
  }
  console.log(response);
}
