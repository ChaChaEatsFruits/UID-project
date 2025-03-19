
function registerUser() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    if (username && email && phone) {
        alert("Signed Up Successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}

function goHome() {
    alert("Going back to home");
    window.location.href = "index.html";
}
function goLogin(){
    alert("Going to Login page");
    window.location.href="login.html";
}
function goRegister(){
    alert("Going to SignUp page");
    window.location.href="registration.html";
}
function checkLogin(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
}