const myArray = [1, 2, 3];
const myArray2 = [4, 5, 6];

//lenght
myArray.lenght
console.log(myArray)

//push
myArray.push(4)
console.log(myArray)

//pop
const lastItem = myArray.pop
console.log(lastItem)

//concat
const myArray3 = myArray.concat(myArray2);
console.log(myArray3)

//findLast
const last = myArray.findLast(x => x < 2)
console.log(last)

//Every
const areEvery = myArray.every(x => x < 4)
console.log(areEvery)


//Los que no estaban en el pp y una definicion para recuerdo:


// constructor: Devuelve la función constructora que creó la instancia del array.
const arrayConstructor = myArray.constructor;
console.log(arrayConstructor);

// copyWithin: Copia una parte del array a otra ubicación en el mismo array sin cambiar su longitud.
myArray.copyWithin(1, 2);
console.log(myArray);

// entries: Devuelve un nuevo objeto Array Iterator que contiene pares clave/valor para cada índice en el array.
const iterator = myArray.entries();
for (const entry of iterator) {
  console.log(entry);
}

// fill: Llena todos los elementos de un array desde una posición de inicio hasta una posición final con un valor estático.
myArray.fill(0, 1, 3);
console.log(myArray);

// filter: Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función proporcionada.
const filteredArray = myArray.filter(x => x > 1);
console.log(filteredArray);

// find: Devuelve el primer elemento del array que cumpla con la función de prueba proporcionada.
const foundItem = myArray.find(x => x > 1);
console.log(foundItem);

// findIndex: Devuelve el índice del primer elemento del array que cumpla con la función de prueba proporcionada.
const foundIndex = myArray.findIndex(x => x > 1);
console.log(foundIndex);

// findLastIndex: Devuelve el índice del último elemento del array que cumpla con la función de prueba proporcionada.
const foundLastIndex = myArray.findLastIndex(x => x > 1);
console.log(foundLastIndex);

// flat: Crea un nuevo array con todos los elementos sub-array concatenados hasta la profundidad especificada.
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat();
console.log(flatArray);

// flatMap: Primero mapea cada elemento usando una función de mapeo y luego aplana el resultado en un nuevo array.
const flatMappedArray = myArray.flatMap(x => [x * 2]);
console.log(flatMappedArray);

// forEach: Ejecuta una función proporcionada una vez por cada elemento del array.
myArray.forEach(x => console.log(x));

// includes: Determina si un array contiene un determinado elemento, devolviendo true o false según corresponda.
const includesItem = myArray.includes(2);
console.log(includesItem);

// indexOf: Devuelve el primer índice en el que se puede encontrar un determinado elemento en el array, o -1 si el elemento no se encuentra.
const indexOfItem = myArray.indexOf(2);
console.log(indexOfItem);

// join: Une todos los elementos de un array (o un array-like object) en una cadena y la devuelve.
const joinedString = myArray.join('-');
console.log(joinedString);

// keys: Devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice en el array.
const keysIterator = myArray.keys();
for (const key of keysIterator) {
  console.log(key);
}

// lastIndexOf: Devuelve el último índice en el que un cierto elemento puede encontrarse en el array, o -1 si el elemento no se encuentra.
const lastIndexOfItem = myArray.lastIndexOf(2);
console.log(lastIndexOfItem);

// map: Crea un nuevo array con los resultados de la llamada a una función proporcionada en cada uno de sus elementos.
const mappedArray = myArray.map(x => x * 2);
console.log(mappedArray);

// reduce: Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.
const reducedValue = myArray.reduce((acc, x) => acc + x, 0);
console.log(reducedValue);

// reduceRight: Aplica una función a un acumulador y a cada valor del array (de derecha a izquierda) para reducirlo a un solo valor.
const reducedRightValue = myArray.reduceRight((acc, x) => acc + x, 0);
console.log(reducedRightValue);

// reverse: Invierte el orden de los elementos de un array.
myArray.reverse();
console.log(myArray);

// shift: Elimina el primer elemento de un array y lo devuelve. Este método cambia la longitud del array.
const firstItem = myArray.shift();
console.log(firstItem);

// slice: Devuelve una copia de una parte del array dentro de un nuevo array.
const slicedArray = myArray.slice(1, 3);
console.log(slicedArray);

// some: Prueba si al menos un elemento en el array pasa la prueba implementada por la función proporcionada.
const someCondition = myArray.some(x => x > 2);
console.log(someCondition);

// sort: Ordena los elementos de un array en su lugar y devuelve el array.
const unsortedArray = [3, 1, 2];
unsortedArray.sort();
console.log(unsortedArray);

// splice: Cambia el contenido de un array eliminando, reemplazando o añadiendo nuevos elementos en su lugar.
myArray.splice(1, 1, 10);
console.log(myArray);

// toLocaleString: Devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos usando sus respectivas conversiones toLocaleString.
const localeString = myArray.toLocaleString();
console.log(localeString);

// toString: Devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos usando sus respectivas conversiones toString.
const arrayString = myArray.toString();
console.log(arrayString);

// unshift: Añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
myArray.unshift(0);
console.log(myArray);

// values: Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en el array.
const valuesIterator = myArray.values();
for (const value of valuesIterator) {
  console.log(value);
}

