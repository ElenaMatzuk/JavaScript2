'use strict';
const products = [
    {id: 1, 
     title: 'Notebook', 
     price: 2000, 
     image: ["img/notebook.jpg"]
    },
    {id: 2, 
     title: 'Mouse', 
     price: 20,
     image: ["img/mouse.jpg"]
    },
    {id: 3, 
     title: 'Keyboard', 
     price: 200,
     image: ["img/keyboard.jpg"]
    },
    {id: 4, 
     title: 'Gamepad', 
     price: 50,
     image: ["img/gamepad.jpg"]
    },
];

//Функция для формирования верстки каждого товара, для аргументов функции добавлены значения по умолчанию.
const renderProduct = (title = 'название товара', image = 'фото товара', price = 100) => {
    return `<div class="product-item">
                <h3 class="product-item-title">${title}</h3>
                <img src=${image} width="300" height="150"></img>
                <div class="price">
                    <p class="product-price">${price} руб</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};

const renderPage = (list = "товары категории") => {
    const productsList = list.map(item => renderProduct(item.title, item.image, item.price));
    // console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(''); // метод join убрал запятую
};

renderPage(products);

