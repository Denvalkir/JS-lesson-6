// Создайте цепочку из двух Promise, где первый Promise возвращает число,
// а второй Promise принимает это число и возвращает его квадрат. Обработайте результат с помощью then().

let num = 2;

let promise1 = new Promise((resolve) => {
  resolve(num);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(num * num);
  }, 1000);
});

promise1
  .then((resultPromise1) => {
    console.log(resultPromise1);
    return promise2;
  })
  .then((resultPromise2) => {
    console.log(resultPromise2);
  });
