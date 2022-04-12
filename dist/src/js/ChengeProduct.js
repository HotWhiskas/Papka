const btAddProduct = document.getElementById('btAddProduct');

const product_name = document.getElementById('productName');
const ingredient = document.getElementById('ingredient');
const number = document.getElementById('number');
const price = document.getElementById('price');

fetch('http://localhost:8000/api/product')
.then((resp)=>resp.json())
.then(function(product){
    for(var i = 0; i<product.length;i++){
        if(sessionStorage.idChenge==product[i].id_product){
            product_name.placeholder = product[i].product_name;
            ingredient.placeholder = product[i].ingredient;
            number.placeholder = product[i].number;
            price.placeholder = product[i].price;
        }
    }
})
.catch(function(error) {
    console.log(error);
  });

  btAddProduct.addEventListener('click',function(){
    let list = {
        product_name: product_name.value,
        ingredient: ingredient.value,
        number: number.value,
        price: price.value,
        id_product: sessionStorage.idChenge
    }
    console.log(list);
    fetch('http://localhost:8000/api/product',{method: 'PUT',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(list)
    });  
});