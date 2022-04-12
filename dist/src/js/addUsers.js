const btAddUsers = document.getElementById('btAddUsers');

const first_name_users = document.getElementById('first_name');
const name_users = document.getElementById('name');
const midle = document.getElementById('midle_name');
const pasport_number = document.getElementById('passport_number');
const pasport_serial = document.getElementById('passport_serial');
const post = document.getElementById('post');
const login = document.getElementById('login');
const password = document.getElementById('password');



btAddUsers.addEventListener('click',function(){
    let list = {
        first_name_user: first_name_users.value,
        name_user: name_users.value,
        midle_name_user: midle.value,
        pasport_number: pasport_number.value,
        pasport_serial: pasport_number.value,
        id_post: post.value,
        login: login.value,
        password: password.value
    }
    fetch('http://localhost:8000/api/users',{method: 'POST',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(list)
    });
    
});