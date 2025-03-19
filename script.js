
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