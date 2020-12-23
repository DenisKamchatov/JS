const cars = ['Мерседес', 'БМВ']

const people = [
    {name: 'Denis', budget: 3500},
    {name: 'Maria', budget: 2500},
    {name: 'Fonte', budget: 1700},
]

const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Ауди') // Добавить элемент в конец массива 
// cars.unshift('Лада') // Добавить элемент в начало массива
// cars.shift() // Удалить элемент в начале массива (возвращает полученное значение)
// cars.pop() // Удалить элемент в конце массива (возвращает полученное значение)

// console.log(cars.reverse()) // Отзеркаливает массив и мутирует его (изначальный массив тоже меняется)

// const index = cars.indexOf('БМВ') // Находит интдек по значению элемента
   


// let findedPerson
// for (let person of people) {
//     if (person.budget === 3500) { // То же что и ниже, но в другом виде (лучше использовать то, что ниже)
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function (person) { // Алгоритм для нахождения индекса объекта по значения 
// return person.budget === 3500
// })
// const person = people.find(function (person) { // Алгоритм для нахождения объекта по значения 
//     return person.budget === 3500
//     })
// console.log(person)

// const person = people.find(person => person.budget === 3500) // То же что и выше, но в более простой форме
// console.log(person)


// console.log(cars.includes('БМВ')) // Проверяет есть ли данный элемент в массиве (выводит true или false)

// const upperCaseCars = cars.map(car => { // map - Принимает в себя функцию, которая позволяет взаимодействовать со всеми элементами массива
//     return car.toUpperCase()            // map - Возвращает НОВЫЙ массив (не меняет старый)
// })                                      // Все буквы элементов массива большие
// console.log(upperCaseCars)

// const pow2 = num => num ** 2  // Это другой способ записи этого метода, путем переноса функции в отдельную переменную с функцией
// const sqrt = num => Math.sqrt(num)
// const pow2fib = fib.map(pow2).map(sqrt) // Алгоритм, который возводит в квадрат все числа массива, а потом ставит звачения под квадратный корень
// console.log(pow2fib)

// const pow2 = num => num ** 2
// const pow2fib = fib.map(pow2)
// const filteredNumbers = pow2fib.filter(num => num > 20) // filter - фильтрует элементы в массиве, возвращает НОВЫЙ массив
// console.log(filteredNumbers)

//
// people.reduce(function () {}, 0) // reduce принимает в себя два параметра: функцию и начальное значение, с которого мы хотим что-либо считать (не индекс элемента массива)

const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => { // Алгоритм, который позволяет считать значение суммы денег людей, у которых их больше 2000
    acc += person.budget
    return acc
}, 0)

console.log(allBudget)
//

// Задача №1 (очень полезные методы split и join)

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('') // split - Превращает элементы в массив (в скобках указываем, какой элемент является разделителем)
//                                                       // join - Соединяет элементы массива в строку (в скобках указываем, с помощью чего будут соединяться элементы массива)
// console.log(reverseText)