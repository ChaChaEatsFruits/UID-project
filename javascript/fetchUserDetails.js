window.focus();
const currentUserEmail = JSON.parse(localStorage.getItem("currentUser"));
const users = JSON.parse(localStorage.getItem("users"));

const matchedUser = users.find(user => user.email === currentUserEmail);

if (matchedUser) {
    const name = document.querySelector(".name");
    const email = document.querySelector(".email");
    const phno = document.querySelector(".phno");

    name.innerHTML = matchedUser.name;
    email.innerHTML = matchedUser.email;
    phno.innerHTML = matchedUser.phone;
}
