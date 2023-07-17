// Este ejercicio consiste en convertir las expresiones camelCase en expresiones normales, con espacios:

// "camelCase"    => "camel Case"

// "setIsLoading" => "set Is Loading"
// Parámetros
// string string en camel case a convertir.

// function camelCase(string) {
//   let resultado = '';
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       resultado += ' ' + string[i];
//     } else {
//       resultado += string[i];
//     }
//   }
//   return resultado;
// }

// console.log(camelCase('camelCase'));
// console.log(camelCase('setIsLoading'));

function removerCamelCase(texto) {
  
  let separador=' ';
  let resultado = texto.replace(/[A-Z]/g, function(letter) {
      return separador + letter.toUpperCase();
  });

  return resultado.replace('/^' + separador + '/', '');
}

console.log(removerCamelCase('camelCase'));
console.log(removerCamelCase('setIsLoading'));