// first
/*
Создать функции:

- первая функция принимает массив и колбэк (одна для всех вызовов)

- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”

firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →

“New value: Jhon is 45, Aaron is 20,”

firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

Имена функций должны быть как в примере!

Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
*/

function firstFunc(arr, callback) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += callback([arr[i]]);
  }
  return `New value: ${res.trim()}`;
}
function handler1(elem) {
  let res2 = "";
  elem = elem.join("");
  for (let i = 0; i < elem.length; i++) {
    if (i === 0) {
      res2 += elem[i].toUpperCase();
    } else {
      res2 += elem[i];
    }
  }
  return res2;
}
function handler2(elem2) {
  let res3 = 10;
  res3 = `${res3 * elem2}`;
  return `${res3}, `;
}
function handler3(elem3) {
  let res4 = "";
  for (let key of elem3) {
    res4 = `${key.name} is ${key.age}, `;
  }
  return res4;
}
function handler4(elem4) {
  let res5 = "";
  elem4 = elem4.join("");
  for (let i = elem4.length - 1; i >= 0; i--) {
    res5 += `${elem4[i]}`;
  }
  return `${res5}, `;
}
const result = firstFunc([10, 20, 30], handler2);
console.log(result);
