// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

const handlerInc = () => { 
    counterValue += 1;
    valueEl.textContent = counterValue;
    return;
}
const handlerDec = () => { 
    counterValue -= 1;
    valueEl.textContent = counterValue;
    return;
}



console.log(buttonDecrement);
console.log(buttonIncrement);

buttonIncrement.addEventListener('click', handlerInc);
buttonDecrement.addEventListener('click', handlerDec);




// ------------------------------------------------------------

//  не можу зрозуміти чому не працює такий варіант ?


// const handler = (value) => { 
//     counterValue += value;
//     valueEl.textContent = counterValue;
//     return;
// }

// buttonIncrement.addEventListener('click', handler.bind(1));
// buttonDecrement.addEventListener('click', handler.bind(-1));