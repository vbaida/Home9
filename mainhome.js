// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div')

//     - додати йому класи wrap, collapse, alpha, beta
 div.classList.add('wrap')
 div.classList.add('collaps')
 div.classList.add('alpha')
 div.classList.add('beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'silver'
div.style.color = 'black'
div.style.fontSize = '20px'
div.style.width = '100%'
div.style.height = '100%'

// - додати цей блок в body.
document.body.appendChild(div)
// - клонувати його повністю, та додати клон в body.
let divclone = div.cloneNode(true)
document.body.appendChild(divclone)
// - Є масив:
//     ['Main','Products','About us','Contacts']
let arrs = ['Main','Products','About us','Contacts']
console.log(arrs)

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
for (const arr of arrs) {
 let li = document.createElement('li')
 li.innerText = arr;
let menu = document.getElementsByClassName('menu')[0]
menu.appendChild(li)
}
// Завдання робити через цикли.
//

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray)
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const arr of coursesAndDurationArray) {
 let div1 = document.createElement('div')
  div1.innerText = `${arr.title} ${arr.monthDuration}`
    let wraps = document.getElementsByClassName('wrap')
    wraps[0].appendChild(div1)
}

// - Є масив
let coursesAndDurationArrs = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const arr1 of coursesAndDurationArrs) {
    let div2 = document.createElement('div')
    div2.classList.add('item')

   let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = arr1.title
    let p = document.createElement('p')
    p.classList.add('description')
    p.innerText = arr1.monthDuration
    div2.appendChild(h1)
    div2.appendChild(p)
    divclone.appendChild(div2)
    }