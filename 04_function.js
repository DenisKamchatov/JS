// 1 Функции

// Function Declaration
// function greet(name) {
//     console.log('Привет, ' + name)
// }
// const name = 'Денис'

// Function Expression
// const greet2 = function greet2(name2) {
//     console.log('Привет2, ' + name2)
// }
// const name2 = 'Максим'

// greet('Денис')
// greet2('Максим')

// 2 Анонимные функции

// let counter = 0
// const interval = setInterval(function() { // setInterval - задает интервал, а setTimeout - задает задержку перед написание только первой строки
//     if (counter === 5) {
//         clearInterval(interval) // clearInterval - тормозит интервал
//     } else {
//         console.log(++counter)
//     }
//       // Функция, которая с задержкой в 1000ms будет прибавлять 1 к counter
// }, 1000)

// 3 Стрелочные функции

// const arrow = (name) => {
//     console.log('Привет, ' + name)
// }
//                                                             // Два способа вызова стрелочной функции
// const arrow2 = name => console.log('Привет, ' + name)

// arrow2('Денис')

// 4 Параметры по умолчанию

// const sum = (a = 1, b = 5) => a + b // Можно по умолчанию записывать значения аргументов
// console.log(sum())

// function sumAll(...all) { // ... - Означает что можно записывать в функцию неограниченное кол-во элементов. all - это просто название, можно писать что угодно
//     console.log(all)      // При этом создается массив с числами, которые мы вызываем в функции
// }
// sumAll(1, 2, 3, 4, 5)

// 5 Замыкания

// function createMember(name) {
//     return function (lastName) {
//         console.log(name + ' ' + lastName)
//     }
// }

// const logWithLastName = createMember('Денис')
// console.log(logWithLastName('Камчатов'))
// console.log(logWithLastName('Василевский'))