const trainCards = document.querySelectorAll(".train-card");

trainCards.forEach((card) => {
    const bookBtn = card.querySelector(".book-button");

    bookBtn.addEventListener("click", () => {
        const from = card.querySelector("#from").textContent.trim();
        const to = card.querySelector("#to").textContent.trim();

        // Pass the data through URL parameters
        window.location.href = `bookingPage.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    });
});
