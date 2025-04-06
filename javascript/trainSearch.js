const form=document.querySelector("#search-form");
window.focus();
const params = new URLSearchParams(window.location.search);
const from = params.get("from");
const to = params.get("to");
if (from && to) {
    document.querySelector("#from-city").value = from;
    document.querySelector("#to-city").value = to;
    setTimeout(() => {
        filterTrains();
    }, 100); // 100ms delay to ensure DOM has rendered all train cards
    
}
function filterTrains(){
    const fromCity=document.querySelector("#from-city").value;
    const toCity=document.querySelector("#to-city").value;
    const trainCards=document.querySelectorAll(".train-card");
    trainCards.forEach((card)=>{
        let trainFromCity=card.querySelector(".train-destination:first-child span").textContent.trim().toLowerCase();
        let trainToCity=card.querySelector(".train-destination:last-child span").textContent.trim().toLowerCase();
        if ((fromCity===""|| trainFromCity.includes(fromCity.toLowerCase())) && (toCity===""|| trainToCity.includes(toCity.toLowerCase())) ){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    })
}
form.addEventListener("submit",(e=>{
    e.preventDefault();
    filterTrains();
}))
