// 1 Number

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(parseInt(stringInt) + 2) // parseInt - привести строку в число, parseFloat - аналогично
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log((0.4 + 0.2).toFixed(4)) // toFixed() - в скобках колическво чисел после , (он не округляет, а втупую вырезает, а также превращает число в строку) 
// console.log(parseFloat((0.4 + 0.2).toFixed(4)))

// 2 BigInt - нужно для того, чтобы можно было работать с числами, которые больше MAX_SAFE_INTEGER (9007199254740991)

// console.log(90071992547409919999n - 90071992547409919n) // n в конце превращает тип int в bigint

// 3 Math

// console.log(Math.E) // Константы
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 2)) // Возвести в степень
// console.log(Math.abs(-42))

// console.log(Math.max(42, 422, 11, 23, 47))
// console.log(Math.min(42, 422, 11, 23, 47))

// console.log(Math.floor(4.9)) // Округлить в меньшую сторону
// console.log(Math.ceil(4.2)) // Округлить в большую сторону
// console.log(Math.round(4.9)) // Обычное округление
// console.log(Math.random()) // Рандомное число, меньше 1

// 4 Example

// function getRandomBetween(min, max) {
//     return Math.round(0.9 * (max - min) + min)   // Алгоритм нахождения рандомного числа в промежутке
// }
// console.log(getRandomBetween(10, 42))






