import React, { useState } from "react";
const AddTour = () => {
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:4040/api/tours";

    const newTour = {
      image: "Samu.jpg",
      date,
      title,
      info,
      location,
      duration,
      cost,
    };

    /* const newTour = {
      image: "Samu.jpg",
      date: "Helmikuu",
      title: "Juuseria",
      info: "se olla hiano",
      location: "Stadi",
      duration: 360,
      cost: 49,
    }; */

    const response = await fetch("http://localhost:4040/api/tours", {
      method: "POST",
      body: JSON.stringify(newTour),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    console.log(newTour);
    setImage("");
    setDate("");
    setTitle("");
    setInfo("");
    setLocation("");
    setDuration("");
    setCost("");
  };
  return (
    <div>
      <h2>Add your tour here</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div>
          <label htmlFor="info">Info:</label>
          <input
            id="info"
            type="text"
            onChange={(e) => setInfo(e.target.value)}
            value={info}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div>
          <label htmlFor="Duration">Duration:</label>
          <input
            id="Duration"
            type="text"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
          />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            id="cost"
            type="text"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddTour;
