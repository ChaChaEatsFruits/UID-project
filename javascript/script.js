window.focus();
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

function goLogin(){
    window.location.assign("login.html");
}
function goRegister(){
    
    window.location.assign("registration.html");
}

