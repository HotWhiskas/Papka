const btAddUsers = document.getElementById('btAddUsers');

const first_name_users = document.getElementById('first_name');
const name_users = document.getElementById('name');
const midle = document.getElementById('midle_name');
const pasport_number = document.getElementById('passport_number');
const pasport_serial = document.getElementById('passport_serial');
const post = document.getElementById('post');
const login = document.getElementById('login');
const password = document.getElementById('password');

fetch('http://localhost:8000/api/users')
.then((resp)=>resp.json())
.then(function(users){
    for(var i = 0; i<users.length;i++){
        if(sessionStorage.idChenge==users[i].id_users){
            first_name_users.placeholder = users[i].first_name_user;
            name_users.placeholder = users[i].name_user;
            midle.placeholder = users[i].midle_name_user;
            pasport_number.placeholder = users[i].pasport_number;
            pasport_serial.placeholder = users[i].pasport_serial;
            post.placeholder = users[i].post_name;
            login.placeholder = users[i].login;
            password.placeholder = users[i].password;
        }
    }
})
.catch(function(error) {
    console.log(error);
  });

btAddUsers.addEventListener('click',function(){
    let list = {
        first_name_user: first_name_users.value,
        name_user: name_users.value,
        midle_name_user: midle.value,
        pasport_number: pasport_number.value,
        pasport_serial: pasport_serial.value,
        id_post: post.value,
        login: login.value,
        password: password.value,
        id_users: sessionStorage.idChenge
    }
    console.log(list);
    fetch('http://localhost:8000/api/users',{method: 'PUT',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(list)
    });  
});