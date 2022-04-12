const btAddProduct = document.getElementById('btAddProduct');

const productName = document.getElementById('productName');
const ingredient = document.getElementById('ingredient');
const number = document.getElementById('number');
const price = document.getElementById('price');


btAddProduct.addEventListener('click',function(){
    let list = {
        id_users: sessionStorage.userId,
        product_name: productName.value,
        ingredient:ingredient.value,
        price: price.value,
        number: number.value
    }
    fetch('http://localhost:8000/api/product',{method: 'POST',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(list)
    });
    
});