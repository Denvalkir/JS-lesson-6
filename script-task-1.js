//     Напишите функцию fetchData(), которая возвращает Promise,
// который разрешается через 2 секунды с данными { message: "Данные загружены" }.
// Используйте then() для обработки успешного разрешения и catch() для обработки ошибок.

function fetchData(boolean) {
  let myNewPromise = new Promise((resolve, reject) => {
    if (boolean) {
      resolve("Данные загружены");
    } else {
      reject("Ошибка! Данные не загружены");
    }
  });

  let result = myNewPromise.then((msg) => msg).catch((msg) => msg);

  setTimeout(() => {
    console.log(result);
  }, 2000);
}

fetchData(true);
