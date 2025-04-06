window.focus();
const searchBtn=document.getElementById('search-btn');
searchBtn.addEventListener('click',()=>{
    const from = document.querySelector("#from").value.trim();
    const to = document.querySelector("#to").value.trim();
    window.location.assign(`trainSchedule.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
})