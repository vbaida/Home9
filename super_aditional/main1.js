



let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

//Немає

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// let divuser = document.createElement('div')
//   document.body.appendChild(divuser)
// for (const user of users) {
//
//     let name = document.createElement('h1')
//     name.innerText = user.name
//     divuser.appendChild(name)
//     let age = document.createElement('h1')
//     age.innerText = user.age
//     divuser.appendChild(age)
//     let status = document.createElement('h2')
//     status.innerText = user.status
//     divuser.appendChild(status)
//
//     let address = document.createElement('ul')
//     divuser.appendChild(address)
//
//     let city = document.createElement('li')
//     city.innerText = user.address.city
//     address.appendChild(city)
//     let country = document.createElement('li')
//     country.innerText = user.address.country
//     address.appendChild(country)
//     let street = document.createElement('li')
//     street.innerText = user.address.street
//     address.appendChild(street)
//     let houseNumber = document.createElement('li')
//     houseNumber.innerText = user.address.houseNumber
//     address.appendChild(houseNumber)}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


// for (const user of users) {
//     let divuser = document.createElement('div')
//     document.body.appendChild(divuser)
//
//     let name = document.createElement('h1')
//     name.innerText = user.name
//     divuser.appendChild(name)
//     let age = document.createElement('h1')
//     age.innerText = user.age
//     divuser.appendChild(age)
//     let status = document.createElement('h2')
//     status.innerText = user.status
//     divuser.appendChild(status)
//
//     let address = document.createElement('ul')
//     divuser.appendChild(address)
//
//     let city = document.createElement('li')
//     city.innerText = user.address.city
//     address.appendChild(city)
//     let country = document.createElement('li')
//     country.innerText = user.address.country
//     address.appendChild(country)
//     let street = document.createElement('li')
//     street.innerText = user.address.street
//     address.appendChild(street)
//     let houseNumber = document.createElement('li')
//     houseNumber.innerText = user.address.houseNumber
//     address.appendChild(houseNumber)}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


// for (const user of users) {
//     let divuser = document.createElement('div')
//     document.body.appendChild(divuser)
//     let name = document.createElement('h1')
//     name.innerText = user.name
//     divuser.appendChild(name)
//     let age = document.createElement('h1')
//     age.innerText = user.age
//     divuser.appendChild(age)
//     let status = document.createElement('h2')
//     status.innerText = user.status
//     divuser.appendChild(status)
//
//     let address = document.createElement('h2')
//     divuser.appendChild(address)
//
//     let city = document.createElement('h2')
//     city.innerText = user.address.city
//     address.appendChild(city)
//     let country = document.createElement('h2')
//     country.innerText = user.address.country
//     address.appendChild(country)
//     let street = document.createElement('h2')
//     street.innerText = user.address.street
//     address.appendChild(street)
//     let houseNumber = document.createElement('h2')
//     houseNumber.innerText = user.address.houseNumber
//     address.appendChild(houseNumber)}


//
//
//
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ]
