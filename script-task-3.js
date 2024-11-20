// Используя Fetch API, напишите функцию getUserData(),
// которая делает GET-запрос к публичному API (например,
// https://jsonplaceholder.typicode.com/users) и выводит данные о пользователях в консоль.

function getUserData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (resHttp) {
      return resHttp.json();
    })
    .then((result) => {
      console.log(result);
    });
}

getUserData();
