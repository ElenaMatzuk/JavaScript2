class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        //this.allProducts = [];//массив товаров c добавлением фото
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.totalCardPrice();
    }
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    // Метод для подсчета суммарной стоимости всех товаров
    totalCardPrice() {
        let totalPrice = 0;
        this.goods.forEach(item => totalPrice += item.price);
        console.log(totalPrice);
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
           // this.allProducts.push(item);
             block.insertAdjacentHTML("beforeend",item.render());
             //block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://placehold.it/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

// Класс для корзины товаров
class Card {
    constructor() {
    }
    
    // метод для очистки корзины
    clearAll() {
    }
    
    //метод подсчета суммы купленных товаров
    totalCost(){
    }
}

// класс элемента корзины товара
class CardItem {
    constructor() {
    }
    
    //удаляет один элемент из корзины
    deleteItem(){
    }
}