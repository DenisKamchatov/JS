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
    ['key_' + (1 + 3)]: 'Computed key'  // Примеры записи ключей
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