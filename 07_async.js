// Event Loop

// const timeout = setTimeout( () => {  // Задает время через которое произойдет событие. Состоит из двух элементов: функция и время в ms
//     console.log('After interval')
// }, 2500)
// clearTimeout(timeout) // Очищает timeout 

// const interval = setInterval(() => {
//     console.log('After interval')
// }, 2500)
// clearInterval(interval) // Очищает интервал


// const delay = (callback, wait = 1000) => { // Также можно создавать через отдельную переменную
//     setTimeout(callback, wait)
// }
// delay(() => {
//     console.log('After 2.5 seconds')
// }, 2500)

const delay = (wait) => {
    const promise = new Promise((resolve, reject) => { // new Promise - нужна для того, чтобы не было большого уровня вложенности
        setTimeout(() => {
            resolve() // resolve - срабатывает если нет ошибок
            reject('Что-то пошло не так') // reject - срабатывает когда появилась ошибка. Более низкого приоритета, чем resolve. В скобках записываем значение, которое мы хотим, чтобы в переменную в catch
        }, wait)
    })
    return promise // new Promise - требует return, поэтому мы его добавляем в новую переменную. 
}

// delay(2000)
//     .then(() => {                     // then - сработает, если нет ошибок (сработал resolve)
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error('Error:', err)) // catch - срабатывает, если найдена ошибка (сработал reject)
//     .finally(() => console.log('Finally')) // срабатывает после того, как всё прошло (срабатывает не заввисимо от того, что сработало resolve или reject)



const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))
// getData().then(data => console.log(data))

async function asyncExample() {
    try {                            // Конструкция try нужна для обработки ошибок. После того, как ошибка будет обработана, она выведется текстом в консоль
        await delay(3000)            // Будет ждать когда выполнится сначала delay, и только потом выполнит getData
        const data = await getData()
        console.log('Data:', data)
    } catch(e) {                     // Вместо catch можно писать finally
        console.log(e)
    }
} 
asyncExample()