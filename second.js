// second
/*
Написать аналог метода every.
Создайте функцию every, она должна принимать первым аргументом массив
чисел (обязательно проверьте что передан массив) вторым аргументом callback
(обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию
то функция должна вернуть new Error("с произвольным сообщением.")

функция должна возвращать true или false в зависимости от результата вызова callback
(проверить число больше 5).
Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
*/

function every(arr, fn) {
  if (!Array.isArray(arr) && typeof fn !== "function") {
    console.log("dsds");
  }
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }
  return res;
}

function everyCallback(elem) {
  return elem * 2;
}

const result = every([1, 2, 6], everyCallback);
console.log(result);
