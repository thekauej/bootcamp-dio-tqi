/* //Como declarar um array
let array = ['string', 1, true];
console.log(array) */

/* let array = ['string', 1, true, ['array1', 'teste'], ['array2'], ['array3'], ['array4']];
console.log(array); */

/* //foreach
array.forEach(function(item, index){console.log(item, index)}) */

/* array.push('novo item');
console.log(array); */

/* array.pop();
console.log(array); */
/* 
array.shift();
console.log(array); */

/* array.unshift('novo item no inicio');
console.log(array); */

/* console.log(array.indexOf(true)); */

/* array.splice(0, 3);
console.log(array) */

/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

// assim como arrays as propriedades de objetos podem guardar quaisquer valores
 let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };

 // como acessar propriedades de objetos
// usando ponto "."
//console.log(object.objectInterno); 

/* // manipulando objeto
// desestruturando objeto
let string = object.string;
let number = object.number;
let boolean = object.boolean; 
console.log(string, number, boolean); */


// desestruturando usando chaves
let { string, number, boolean } = object;
console.log(string, number, boolean);