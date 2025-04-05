const trainCard = document.createElement("div");
      trainCard.className = "train-card";

      trainCard.innerHTML = `
      <div class="train-info">
        <h2>${train.trainName}</h2>
        <p><strong>From:</strong> ${train.from} | <strong>To:</strong> ${train.to}</p>
        <p><strong>Departure:</strong> ${train.departure} | <strong>Arrival:</strong> ${train.arrival}</p>
        <p><strong>Availability:</strong> ${train.availability}</p>
      </div>
      <a href="bookingPage.html" class="book-button">Book Now</a>
    `;