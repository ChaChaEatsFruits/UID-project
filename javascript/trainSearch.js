const form=document.querySelector("#search-form");


form.addEventListener("submit",(e=>{
    e.preventDefault();
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
}))
