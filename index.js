var loginBtn = document.getElementById('loginBtn');

function userLoginPage(){
var userEmail = document.getElementById('email').value;
var userPassword = document.getElementById('password').value;

if (userEmail === "test@example.com" && userPassword === "123456"){
    alert('Login Successful!');

}else {alert('Invalid email or password')}
}

loginBtn.addEventListener('click' , userLoginPage);