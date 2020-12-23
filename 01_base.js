// 1 Переменные

    // var name = 'Denis' // Устаревшая
    // const sec = 'Kamchatov' 
    // let age = 19
    // console.log(age) // Вывести в консоль в браузере

// 2 Мутирование

    // console.log('Имя человека: ' + name + ', а возраст: ' + age) // JS автоматически преобразует age в string

    // const firstName = prompt('Введите ваше имя: ')
    // alert('Привет, ' + firstName)

// 3 Операторы

    // console.log(++age) // ++ - оператор увеличения на 1, аналогично --

// 4 Типы данных

    // const age = 19
    // console.log(typeof age) // Вывести тип данных 

// 5 Приоритет операторов

// 6 Условные операторы

    // const courseStatus = 'read'

    // if (courseStatus === 'pending') {     // === - Не приводит к одному типу данных
    //     console.log('Курс в разработке')  // == - Приводит к одному типу данных и сравнивает
    // } 
    // else if (courseStatus === 'ready') {
    //     console.log('Курс готов')
    // }
    // else {
    //     console.log('Курс не разрабатывается')
    // }

    // Тернарное выражение
    // courseStatus === 'ready' ? console.log('Курс готов') : console.log('Курс не готов')

// 7 Булевая логика

// 8 Функции

    // function calculateAge(year) {
    //     return 2020 - year
    // }

    // const myYear = calculateAge(2001)
    // console.log(myYear)

// 9 Массивы

    // const cars = ['Мазда', 'Мерседес', 'Опель']
    // carsPop = cars.pop() // Удаляет послений элемент массива и возвращает его значение
    // console.log(cars) 
    // console.log(cars.length) // Длина массива
    // cars[0] = 'BMW' // Несмотря на const мы можем менять элементы внутри масссива
    // cars[cars.length] = 'Porsche' // Добавлять новый элемент в конец массива (Массив увеличивается на 1)
    // console.log(cars)


// 10 Циклы

    // const cars = ['Мазда', 'Мерседес', 'Опель']

    // for (let i = 0; i < cars.length; i++) {
    //     car = cars[i]
    //     console.log(car)
    // }

    // for (let car of cars) {
    //     console.log(car)
    // }

// 11 Объекты

    // const person = {
    //     firstName: 'Denis',
    //     lastName: 'Kamchatov',
    //     year: 2001,
    //     languages: ['Ru', 'En', 'De'],
    //     hasWife: false,
    //     greet: function() {
    //         console.log('Greet')
    //     }
    // }

    // console.log(person.firstName)
    // const key = 'languages' // Ключ
    // console.log(person[key])
    // person.isProgrammer = true // Добавить новый объект 
    // console.log(person)
    // person.greet()