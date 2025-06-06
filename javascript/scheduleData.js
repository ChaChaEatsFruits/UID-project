window.focus();
const sampleData = [
    {
      trainName: "Express 101",
      from: "Noida",
      to: "Bengaluru",
      departure: "10:00 AM",
      arrival: "2:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 10AD",
      from: "Kolkata",
      to: "Delhi",
      departure: "11:00 AM",
      arrival: "3:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Memu 210",
      from: "Mumbai",
      to: "Agra",
      departure: "12:00 PM",
      arrival: "4:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 102",
      from: "Chennai",
      to: "Hyderabad",
      departure: "6:00 AM",
      arrival: "12:00 PM",
      availability: "Available",
    },
    {
      trainName: "Memu 234",
      from: "Pune",
      to: "Ahmedabad",
      departure: "7:00 AM",
      arrival: "1:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 106",
      from: "Bhopal",
      to: "Jaipur",
      departure: "8:00 AM",
      arrival: "2:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 12BW",
      from: "Lucknow",
      to: "Kanpur",
      departure: "9:00 AM",
      arrival: "10:00 AM",
      availability: "Available",
    },
    {
      trainName: "Local 23QH",
      from: "Patna",
      to: "Guwahati",
      departure: "5:00 AM",
      arrival: "3:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 107",
      from: "Nagpur",
      to: "Indore",
      departure: "11:00 AM",
      arrival: "5:00 PM",
      availability: "Available",
    },
    {
      trainName: "Memu 1105",
      from: "Surat",
      to: "Vadodara",
      departure: "1:00 PM",
      arrival: "3:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 111",
      from: "Ranchi",
      to: "Jamshedpur",
      departure: "2:00 PM",
      arrival: "4:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 11YD",
      from: "Bhubaneswar",
      to: "Visakhapatnam",
      departure: "3:00 PM",
      arrival: "7:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Memu 1143",
      from: "Madurai",
      to: "Coimbatore",
      departure: "4:00 PM",
      arrival: "8:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 114",
      from: "Kochi",
      to: "Trivandrum",
      departure: "5:00 PM",
      arrival: "9:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 231",
      from: "Amritsar",
      to: "Chandigarh",
      departure: "6:00 PM",
      arrival: "10:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Memu 3116",
      from: "Shimla",
      to: "Manali",
      departure: "7:00 PM",
      arrival: "11:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 27IP",
      from: "Dehradun",
      to: "Haridwar",
      departure: "8:00 PM",
      arrival: "10:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 118",
      from: "Varanasi",
      to: "Allahabad",
      departure: "9:00 PM",
      arrival: "11:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 424",
      from: "Rajkot",
      to: "Bhavnagar",
      departure: "10:00 PM",
      arrival: "12:00 AM",
      availability: "Available",
    },
    {
      trainName: "Memu 2004",
      from: "Udaipur",
      to: "Ajmer",
      departure: "6:00 AM",
      arrival: "12:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 12HG",
      from: "Gwalior",
      to: "Jhansi",
      departure: "7:00 AM",
      arrival: "9:00 AM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 122",
      from: "Jodhpur",
      to: "Bikaner",
      departure: "8:00 AM",
      arrival: "12:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 23UG",
      from: "Mysore",
      to: "Hubli",
      departure: "9:00 AM",
      arrival: "1:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 45TR",
      from: "Vijayawada",
      to: "Tirupati",
      departure: "10:00 AM",
      arrival: "2:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Memu 1250",
      from: "Aurangabad",
      to: "Nashik",
      departure: "11:00 AM",
      arrival: "3:00 PM",
      availability: "Available",
    },
    {
      trainName: "Memu 2621",
      from: "Salem",
      to: "Erode",
      departure: "12:00 PM",
      arrival: "2:00 PM",
      availability: "Available",
    },
    {
      trainName: "Memu 7002",
      from: "Tiruchirapalli",
      to: "Madurai",
      departure: "1:00 PM",
      arrival: "3:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 128",
      from: "Jabalpur",
      to: "Rewa",
      departure: "2:00 PM",
      arrival: "4:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 77AD",
      from: "Srinagar",
      to: "Leh",
      departure: "3:00 PM",
      arrival: "9:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 390",
      from: "Panaji",
      to: "Margao",
      departure: "4:00 PM",
      arrival: "6:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 112",
      from: "Agartala",
      to: "Imphal",
      departure: "5:00 PM",
      arrival: "10:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 328",
      from: "Aizawl",
      to: "Silchar",
      departure: "6:00 PM",
      arrival: "12:00 AM",
      availability: "Available",
    },
    {
      trainName: "Express 221",
      from: "Shillong",
      to: "Guwahati",
      departure: "7:00 PM",
      arrival: "10:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 134",
      from: "Kohima",
      to: "Dimapur",
      departure: "8:00 PM",
      arrival: "11:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 76VH",
      from: "Itanagar",
      to: "Tezpur",
      departure: "9:00 PM",
      arrival: "12:00 AM",
      availability: "Available",
    },
    {
      trainName: "Memu 1236",
      from: "Gangtok",
      to: "Darjeeling",
      departure: "10:00 PM",
      arrival: "2:00 AM",
      availability: "Waiting List",
    },
    {
      trainName: "Memu 3137",
      from: "Dispur",
      to: "Dibrugarh",
      departure: "6:00 AM",
      arrival: "12:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 989",
      from: "Raipur",
      to: "Bilaspur",
      departure: "7:00 AM",
      arrival: "10:00 AM",
      availability: "Available",
    },
    {
      trainName: "Express 139",
      from: "Ranchi",
      to: "Dhanbad",
      departure: "8:00 AM",
      arrival: "12:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Local 1740",
      from: "Shimla",
      to: "Kullu",
      departure: "9:00 AM",
      arrival: "2:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 2141",
      from: "Chandigarh",
      to: "Ambala",
      departure: "10:00 AM",
      arrival: "12:00 PM",
      availability: "Available",
    },
    {
      trainName: "Memu 14OP",
      from: "Srinagar",
      to: "Anantnag",
      departure: "11:00 AM",
      arrival: "1:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Memu 14LN",
      from: "Bangalore",
      to: "Mysore",
      departure: "12:00 PM",
      arrival: "2:00 PM",
      availability: "Available",
    },
    {
      trainName: "Memu 32LH",
      from: "Chennai",
      to: "Pondicherry",
      departure: "1:00 PM",
      arrival: "4:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 145",
      from: "Kolkata",
      to: "Siliguri",
      departure: "2:00 PM",
      arrival: "10:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 237",
      from: "Delhi",
      to: "Amritsar",
      departure: "3:00 PM",
      arrival: "8:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 7147",
      from: "Mumbai",
      to: "Pune",
      departure: "4:00 PM",
      arrival: "7:00 PM",
      availability: "Available",
    },
    {
      trainName: "Local 2002",
      from: "Hyderabad",
      to: "Warangal",
      departure: "5:00 PM",
      arrival: "8:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Express 149",
      from: "Patna",
      to: "Gaya",
      departure: "6:00 PM",
      arrival: "9:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 922",
      from: "Lucknow",
      to: "Varanasi",
      departure: "7:00 PM",
      arrival: "11:00 PM",
      availability: "Available",
    },
    {
      trainName: "Express 182",
      from: "Kanpur",
      to: "Allahabad",
      departure: "8:00 PM",
      arrival: "10:00 PM",
      availability: "Waiting List",
    },
    {
      trainName: "Memu 73CL",
      from: "Indore",
      to: "Ujjain",
      departure: "9:00 PM",
      arrival: "11:00 PM",
      availability: "Available",
    },
    {
      trainName: "Memu 55CS",
      from: "Jabalpur",
      to: "Katni",
      departure: "10:00 PM",
      arrival: "12:00 AM",
      availability: "Available",
    },
    {
      trainName: "Express 154",
      from: "Jodhpur",
      to: "Jaipur",
      departure: "6:00 AM",
      arrival: "12:00 PM",
      availability: "Waiting List",
    },
  ];
const resultsSection = document.querySelector(".results-section");
resultsSection.innerHTML = ""; // Clear previous results

sampleData.forEach((train) => {
    const trainCard = document.createElement("div");
    trainCard.className = "train-card";
    const trainDuration=getTimeDifference(train.departure,train.arrival);
    trainCard.innerHTML = `
        <div class="train-info">
            <div class="train-name">
                <h2 class="train-title"> ${train.trainName} </h2>
                <span>#12452 | Depart on: <span class="train-schedule">S M T W T F S</span></span>
            </div>

            <div class="train-timing-details">
                <div class="train-destination">
                    <strong>${train.departure}</strong><br>
                    <span>${train.from}</span>
                </div>
                <div class="line"></div>
                <div class="train-duration">
                    <span>${trainDuration}</span>
                    <br>
                    
                </div>
                <div class="line"></div>
                <div class="train-destination">
                    <strong>${train.arrival}</strong><br>
                    <span>${train.to}</span>
                </div>
                
                
            </div>  
        </div>
    `
    resultsSection.appendChild(trainCard);
});

function getTimeDifference(startTime, endTime) {
  // Convert time strings to Date objects (using today’s date as reference)
  const formatTime = timeStr => {
      const [time, modifier] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;

      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
  };

  const start = formatTime(startTime);
  const end = formatTime(endTime);

  // If end is earlier than start (i.e., crosses midnight), add 1 day
  if (end <= start) {
      end.setDate(end.getDate() + 1);
  }

  const diffMs = end - start;
  const diffMins = Math.floor(diffMs / 60000);
  const hours = Math.floor(diffMins / 60);
  const minutes = diffMins % 60;

  return `${hours}h ${minutes}m`;
}


  
  