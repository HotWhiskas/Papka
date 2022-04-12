const buttonLogIn = document.getElementById('buttonLogIn');
buttonLogIn.addEventListener('click',function(e){
  e.preventDefault();
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  fetch('http://localhost:8000/api/users')
  .then((resp) => resp.json())
  .then(function(users) {
    for(var i = 0; i<users.length;i++){
      if(login==users[i].login && password==users[i].password){
        
            
        sessionStorage.userId = users[i].id_users;
        sessionStorage.postId = users[i].id_post;
        document.location.href = "/";
        
      }
    }
  })
  .catch(function(error) {
    console.log(error);
  });
    
});
