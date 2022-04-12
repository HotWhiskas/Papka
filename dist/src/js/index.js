const btExit = document.getElementById('btExit');
btExit.addEventListener('click',function(){
    document.location.href = "/autorisation";
});

const contentItem = document.getElementsByClassName('contentItem');

switch(sessionStorage.postId){

    case '1':

        const btAddProduct = document.getElementById('btFunctions');
        btAddProduct.addEventListener('click',function(){
            document.location.href = "/addProduct";
        });

        fetch('http://localhost:8000/api/product')
        .then((resp)=>resp.json())
        .then(function(product){
            for(var i = 0; i<product.length; i++){
                let textProductName = document.createElement('p');
                textProductName.textContent = product[i].product_name;
                contentItem[0].appendChild(textProductName);
        
                let idProduct = document.createElement('p');
                idProduct.textContent = product[i].id_product;
                idProduct.hidden = 'true';
                contentItem[0].appendChild(idProduct);
        
                let textIngredient = document.createElement('p');
                textIngredient.textContent = product[i].ingredient;
                contentItem[1].appendChild(textIngredient);
        
                let textNumber = document.createElement('p');
                textNumber.textContent = product[i].number;
                contentItem[2].appendChild(textNumber);
        
                let textPrice = document.createElement('p');
                textPrice.textContent = product[i].price;
                contentItem[3].appendChild(textPrice);
        
                let btChengeProduct = document.createElement('p');
                btChengeProduct.className = 'btChenge';
                btChengeProduct.onclick = function(){
                    sessionStorage.idChenge = idProduct.textContent;
                    document.location.href = "/ChengeProduct";
                }
                contentItem[9].appendChild(btChengeProduct);
            }
        })

    break;

    case '2':

        const btAddUsers = document.getElementById('btFunctions');
        btAddUsers.addEventListener('click',function(){
            document.location.href = "/addUsers";
        });
        
        
        fetch('http://localhost:8000/api/users')
        .then((resp)=>resp.json())
        .then(function(users){
            for(var i =0; i<users.length;i++){
                let textFirstName = document.createElement('p');
                textFirstName.textContent = users[i].first_name_user;
                contentItem[0].appendChild(textFirstName);
        
                let idUser = document.createElement('p');
                idUser.textContent = users[i].id_users;
                idUser.hidden = 'true';
                contentItem[0].appendChild(idUser);
        
        
                let textName = document.createElement('p');
                textName.textContent = users[i].name_user;
                contentItem[1].appendChild(textName);
        
                let textMidleName = document.createElement('p');
                textMidleName.textContent = users[i].midle_name_user;
                contentItem[2].appendChild(textMidleName);
        
                let pasportNumber = document.createElement('p');
                pasportNumber.textContent = users[i].pasport_number;
                contentItem[3].appendChild(pasportNumber);
        
                let pasportSerial = document.createElement('p');
                pasportSerial.textContent = users[i].pasport_serial;
                contentItem[4].appendChild(pasportSerial);
        
                let postUser = document.createElement('p');
                postUser.textContent = users[i].post_name;
                contentItem[5].appendChild(postUser);
        
                let loginUser = document.createElement('p');
                loginUser.textContent = users[i].login;
                contentItem[6].appendChild(loginUser);
        
                let passwordUser = document.createElement('p');
                passwordUser.textContent = users[i].password;
                contentItem[7].appendChild(passwordUser);
        
                let btDel = document.createElement('p');
                btDel.className = 'btDel';
        
                let list = {
                    id_users: users[i].id_users
                }
        
                btDel.onclick = function(){
                    fetch('http://localhost:8000/api/users',{method:"DELETE",headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(list)
                        })
                }
        
                contentItem[8].appendChild(btDel);
        
                let btChenge = document.createElement('p');
                btChenge.className = 'btChenge';
                btChenge.onclick = function(){
                    sessionStorage.idChenge = idUser.textContent;
                    document.location.href = "/ChengeUser";
                }
                contentItem[9].appendChild(btChenge);
            }
        });
    break;

    case '3':
        const btAddChek = document.getElementById('btFunctions');
        btAddChek.addEventListener('click',function(){
            document.location.href = "/addChek";
        });
    break;
}
