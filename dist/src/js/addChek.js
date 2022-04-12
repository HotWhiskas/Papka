const select = document.getElementById('select');
const number = document.getElementById('number');

let nameP = [];
let numberP = [];
var finalWages = 0;

fetch('http://localhost:8000/api/product')
.then((resp)=>resp.json())
.then(function(product){
    for(var i = 0; i<product.length; i++){
        let option = document.createElement('option');
        option.textContent = product[i].product_name;
        select.appendChild(option);
    }
})

const btAddProduct = document.getElementById('btAddProduct');
btAddProduct.onclick = function(){
    nameP.push(select.value);
    numberP.push(number.value);
    console.log(nameP);
}

const btAddChek = document.getElementById('btAddChek');
btAddChek.onclick = function(){

    fetch('http://localhost:8000/api/product')
    .then((resp)=>resp.json())
    .then(function(product){
        for(var i = 0; i<product.length; i++){
            if(nameP[i] == product[i].product_name){
                finalWages = (product[i].price * numberP[i])+finalWages;
            }
        }

        let list = {
            product_name: nameP,
            date_start: new Date(),
            final_price: finalWages,
            id_users: sessionStorage.userId
        }
        console.log(list);
        fetch('http://localhost:8000/api/chek',{method:"POST",headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(list)
        })
        .catch(function(error) {
            console.log(error);
        });
    })

    
}