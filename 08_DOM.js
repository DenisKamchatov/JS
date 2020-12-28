const heading = document.getElementById('hello') // Возвращает ссылку на объект в DOM-дереве, ID которого мы записали 
// console.dir(heading) // Выводит состав переменной, то из чего состоит элемент (Ширина, высота, текст в тэге и тд)
// Написав console.dir(heading.id) мы получим id элемента. 
heading.textContent = 'Changed from Javascript' // Можно менять текст 

// const heading2 = document.getElementsByTagName('h2')[0] // Устаревший способ поиска элемента по названию тэга. Это псевдомассив, поэтому если нужно получить конкретные значения, а не массив, нужно использовать квадратные скобки для поиска по индексу
// const heading2 = document.getElementsByClassName('h2_class')[0] // Тоже устаревший, тоже псевдомассив, но поиск не по тэгу а по классу

const heading2 = document.querySelector('.h2_class') // Более современный способ, использует поиск по css селектору. Возвращает один элемент (первый который попадется)
// console.dir(heading2)

// Если h2 несколько, то можно использовать несколько способов:
// 1
// const heading3 = heading2.nextElementSibling 
// console.dir(heading3)
// 2
const h2List = document.querySelectorAll('h2') // Этот способ удобнее
// console.log(h2List)
const heading3 = h2List[1]
// console.log(heading3)


setTimeout(() => {
    addStylesTo(heading, 'Javascript', 'white')
}, 1500)
setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся и всё получится', 'green')
}, 2500)
setTimeout(() => {
    addStylesTo(heading3.children[0], 'Ты всё сможешь', 'blue', '4rem')
}, 3500)

const link = heading3.querySelector('a') //
link.addEventListener('click', (event) => {   // При нажатии на ссылку в консоль будет выводиться 'Click on link'
    // console.log('Click on link', event.target.getAttribute('href'))       // Если посмотреть на event в консоли, то можно увидеть много полезных методов для click
    const url = event.target.getAttribute('href') // getAttribute - выводит сам объект (в данном случае  ссылку)
    window.location = url // По ссылке переходит не в новое окно, а в то же
})                                               

function addStylesTo(node, text, color="red", fontSize) {
    node.textContent = text
    node.style.color = color // .style используется для внешних изменений элемента 
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2.5rem'
    node.style.display = 'block' // Чтобы наша ссылка отображалась как остальные блоки
    node.style.width = '100%'    // 
    // falsy: '', undefined, null, 0, false
    if(fontSize) {                      // Проверка: если fontSize не falsy
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events - Полезный справочник



heading.onclick = () => {
    if (heading.style.color === 'white') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'white'
        heading.style.backgroundColor = 'black'
    }
}
heading2.addEventListener('click', () => {       // То же что и выше, но в другой форме
    if (heading2.style.color === 'green') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'green'
        heading2.style.backgroundColor = 'black'
    }
})
