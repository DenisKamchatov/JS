const person = {
    name: 'Денис',
    age: 19,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    greet () {                           //                                   greet: function() {
        console.log('greet from person') // Упрощенная форма записи функции:      console.log('greet from person')
                                         //                                   }
    },
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed key',  // Примеры записи ключей
    info(name) {
        console.log('Информация о человеке по имени:', this.name) // this - заменяет person. Он обращается к объекту, в котором находится
    }
}

// console.log(person.name)
// console.log(person.age)
// console.log(person['age'])         // Примеры вывода элементов объекта
// console.log(person['complex key'])
// console.log(person['key_4'])

// person.age++ // Увеличить элемент объекта на 1 (вместо 19 будет стоять 20)
// person.languages.push('sp') // С массивами можем работать как обычно

// delete person['key_4'] // Удалить элемент из объекта
// console.log(person)


// const age = person.age
// const name = person.name // Чтобы не писать два раза age, можно записать так, как показано ниже.

// const {age, name} = person // Создаются новые переменные, которые совпадают названиями с ключами 
// const {age, name, languages: myLang} = person // languages - это название ключа, а myLang - это название переменной, в которую поместится значение этого ключа
// console.log(age, name, myLang)



// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)           // Способ вывода всех элементов Объекта с помощью for. Чтобы избежать ошибок нужно писать этот цикл if
//         console.log('value:', person[key])
//     }
// }

// const keys = Object.keys(person) // Возвращает массив состоящий из элементов Объекта
// keys.forEach(key => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })
// Object.keys(person).forEach(key => {    // Более удобный способ записи 
//     console.log('key:', key)
//     console.log('value:', person[key]) 
// }
// 


// Context

// person.info()

const logger = {                                       // Объяснение почему нужно использовать this
    keys() {
        console.log('Object keys:', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`${key}: ${this[key]}`)
        })
    },
    withParams(start = false, between = false, stop = false) { // Добавление черточек
        if(start) {
            console.log('-------Start-------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`)
            if(between && index != array.length - 1) {
                console.log('-------------------')
            }
        })
        if(stop) {
            console.log('--------Stop-------')
        }
    }
}


// const bound = logger.keys.bind(person) // bind привязывает определенный контекст который мы сами выберем. Он не возвращает значение поэтому нужно создавать переменную. Несмотря на то, что мы keys писали this, функция приняла значения person
// bound()                                // Возвращает в переменную функцию, поэтому нужно вызывать отдельноВ

// logger.keys.call(person) // То же что и bind, но он сразу вызывает эту функцию 
// logger.keysAndValues.call(person)

// logger.withParams.call(person, true, true, true)    // Принимает неограниченное коль-во параметров (зависит от того сколько параметров принимает сама функция)
// logger.withParams.apply(person, [true, true, true]) // То же самое что и call, но принимает два параметра