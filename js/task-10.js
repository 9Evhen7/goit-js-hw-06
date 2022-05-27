// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити,
// колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const divRef = document.querySelector('#boxes');

let size = 30;

const divThumbEl = document.createElement('div')
  
function createBoxes(){ 
  for (let i = 0; i < inputRef.value; i++) { 
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;

    divThumbEl.append(divEl);
    size += 10;
  }
  divRef.append(divThumbEl);
  inputRef.value = '';
};

function destroyBoxes() { 
  divThumbEl.innerHTML = '';
  size = 30;
}
  
  
buttonCreateRef.addEventListener('click', createBoxes);
buttonDestroyRef.addEventListener('click', destroyBoxes);

