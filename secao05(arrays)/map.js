const array = [1, 2, 3, 4, 5];
const dobrados = array.map((num) => num * 2);

console.log(dobrados); // [2, 4, 6, 8, 10]
console.log(numeros); // [1, 2, 3, 4, 5] (não alterado)

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((num, index) => {
  numeros[index] = num * 2; // Modifica o array original
});

console.log(numeros); // [2, 4, 6, 8, 10]
