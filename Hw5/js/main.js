const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        isCartOpen: false,
        catalogUrl: '/catalogData.json',
        products: [],
        product: [],
        productDel: [], 
        imgCatalog: 'https://placehold.it/200x150'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        //Добавить продукт
        addProduct(product){
            this.product.push(product);             
        },
        //Удалить продукт
        delProduct(productDel){
            this.product.splice(this.productDel,1);       
        },
        
        
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
               }
           });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            })
    }
})


