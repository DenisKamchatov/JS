// https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=5
/* PROMISE */
/* 
    Нужен для того, чтобы избавиться от большой вложенности асинхронности.
    Мы прописываем resolve() для того, чтобы показать конец асинронности,
    в него можно записывать какие-либо значения (строка 21). В данном случае мы прописываем backendData, чтобы изменить значения в будущем.
    resolve - говорит о том, что Promise работает корректно, а reject - сообщает об ошибке (выводит результат как ошибку).
    У Promise существует метод catch(), который позволяет найти ошибку. Он принимает в себя функцию и лучше записывать его в самом конце.
    Метод finally() позволяет вывести что-то даже если была найдена ошибка. Он принимает в себя функцию.
    then - метод, который срабатывает после того, как сработает resolve() (строка 21), он принимает в себя функцию.
*/

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: working
        }
        resolve(backendData)
    }, 2000)
})

// Мы в then, в параметр data получили backendData, потому что до этого в resolve прописали backendData (строка 21).  
p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })

    // В этом then, в параметр clientData получили data, потому что до этого в then прописали его в resolve.
    // p2.then(clientData => {
    //     console.log('Data received', clientData)
    // })
})
    .then(clientData => {
        console.log('Data received', clientData)
    })
    .catch(err => comnsole.error('Error', err))
    .finally(() => console.log('Finally!'))

// ВТОРОЙ СПОСОБ ЗАДАНИЯ PROMISE
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
// Это вызов нового способа
sleep(2000).then(() => console.log('After 2 seconds'))
sleep(5000).then(() => console.log('After 5 seconds'))

/* 
    all([]) - Еще один метод Promise. Он включает в себя массивы промисов и пока все они не отработают, then не сработает
*/
Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

/* 
    race([]) - Схож с методом all(), отличается тем, что then сработает, когда сработает первый promise в списке массивов
*/
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})