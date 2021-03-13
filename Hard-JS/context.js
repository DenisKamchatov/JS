/* 
    THIS И КАК ОН РАБОТАЕТ. 
    По-умолчанию this указывает на объект window
    this обращается к объекту перед точкой. 
    Например, если мы вызовем hello(), то нам в this выведется объект window, потому что
    hello() - это window.hello().
    Еще один пример, если мы вызовем эту функцию в объекте, в нашем случае person.sayHello(), 
    то в this выведется этот объект,
    
    Если мы хотим вызывать функцию в объекте и в то же время хотим, чтобы выводился window, то мы прописываем 
    метод bind(), ниже я привел с ним пример.
*/


function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),

    /* В данной функции this указывает на объект */
    logInfo: function (job, phone) {
        /* 
            Здесь мы просто немного приукрасили вывод в консоль.
            При помощи console.group() мы собрали все выводы в одну группу.
            В group мы написали заголовок группы
        */
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Lena',
    age: 23,
}

/* 
    В данном случае bind перенаправляет наш this в logInfo на объект lena, поэтому
    в консоль выводятся значения объекта lena.
    Во вторых скобках можно написать параметры функции.
    Также можно перечислять через запятую, но тогда нужно будет не забыть добавить две скобки в конце,
    чтобы вызвать функцию
*/
// person.logInfo.bind(lena)('Frontend', '8-234-213-23-54')
// person.logInfo.bind(lena, 'Frontend', '8-234-213-23-54')()
/*
    Чтобы передать параметры в функцию с помощью bind можно написать вот такую структуру, записав в отдельную переменную
*/
// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-234-213-23-54')
// fnLenaInfoLog()

/* 
    Метод call и bind очень похожи, но есть одно отличие. Метод bind не вызывает функцию, 
    поэтому нужно в конце ставить (), чтобы ее вызвать.
    А call сразу вызывает функцию
*/
person.logInfo.bind(lena, 'Frontend', '8-234-213-23-54')()
person.logInfo.call(lena, 'Frontend', '8-234-213-23-54')

/* 
    Есть еще метод apply. Он отличается от call только оформлением. 
    apply принимает в себя два параметра, вторым из которых всегда будет массив,
    состоящий из параметров
*/
person.logInfo.apply(lena, ['Frontend', '8-234-213-23-54'])
