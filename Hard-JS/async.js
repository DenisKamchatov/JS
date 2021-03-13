/* 
    Асинхронность.
    Задается функцией setTimeout.
    В нее можно вкладывать функцию (строка 18)
*/
console.log('Start')

console.log('Start 2')

setTimeout(function () {
    console.log('Inside timeout')
}, 5000)

function timeout2sec() {
    console.log('timeout2sec')
}

setTimeout(timeout2sec, 2000)