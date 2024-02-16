// app.js

const apiUrl = "http://localhost:4040/api/tours";

const tour = {
  image: "Samu.jpg",
  date: "Helmikuu",
  title: "Juuseria",
  info: "se olla hiano",
  location: "Stadi",
  duration: 360,
  cost: 49,
};

const addTour = async () => {
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(tour),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  console.log("New Tour added:", json);
};

// Example Usage
addTour();
