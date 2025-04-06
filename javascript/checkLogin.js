const checkLogin=JSON.parse(localStorage.getItem('isLoggedIn'));
if (checkLogin){
    document.querySelectorAll(".not-logged-in").forEach(item=>item.style.display="none");
    document.querySelectorAll(".logged-in").forEach(item=>item.style.display="block");
}
else{
    document.querySelectorAll(".not-logged-in").forEach(item=>item.style.display="block");
    document.querySelectorAll(".logged-in").forEach(item=>item.style.display="none");
}