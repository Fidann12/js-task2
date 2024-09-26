// 1) Ededin faktorialinin hesablanmasini recursive function ile yazin.

// function numbers(num) {
//   let square = 1;
//   if (num == 1) {
//     return square;
//   } else {
//     return num * numbers(num - 1);
//   }
// }
// console.log(numbers(5));

// 3) Yashi 18-25 araliginda olan telebelerin sayi.

// let user1 = {
//   name: "Fidan",
//   age: 21,
// };
// let user2 = {
//   name: "Nubar",
//   age: 24,
// };
// let user3 = {
//   name: "Zeyneb",
//   age: 25,
// };
// let user4 = {
//   name: "Ferid",
//   age: 17,
// };

// let users = [user1, user2, user3, user4];
// let count = 0;
// for (const user of users) {
//   for (const key in user) {
//     if (
//       (key == "age" && user[key] == 18) ||
//       user[key] == 19 ||
//       user[key] == 20 ||
//       user[key] == 21 ||
//       user[key] == 22 ||
//       (user[key] == 23) | (user[key] == 24) ||
//       user[key] == 25
//     ) {
//       count++;
//     }
//   }
// }

// console.log(count);

// 4) Emailinde "c" herfi olan studentlerin sayi.

// let user1 = {
//   name: "Fidan",
//   mail: "fidan.aliyeva033@gmail.com",
// };
// let user2 = {
//   name: "Aydan",
//   mail: "aydan.aliyeva033@gmail.com",
// };
// let user3 = {
//   name: "Cavid",
//   mail: "cavid.beshirov033@gmail.com",
// };
// let user4 = {
//   name: "Nubar",
//   mail: "nubar.aliyeva033@gmail.ru",
// };

// let users = [user1, user2, user3, user4];
// let count = 0;
// for (const user of users) {
//   for (const key in user) {
//     if (key == "mail" && user[key].includes("c")) {
//       count++;
//     }
//   }
// }
// console.log(count);
