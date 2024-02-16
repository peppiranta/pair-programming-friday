import Tour from "./Tour";
import Title from "./Title";
import AddTour from "./addTour";
import { useState, useEffect } from "react";

function Tours() {
  const [toursData, setToursData] = useState([]);
  const apiUrl = "http://localhost:4040/api/tours";

  useEffect(function () {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setToursData(data))
      .catch((error) => console.error("error: ", error));
  }, []);

  const handleDeleteItem = (itemId) => {
    console.log(itemId);
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour._id} {...tour} handleDelete={handleDeleteItem} />
          ))}
        </div>
      </section>
      <AddTour />
    </div>
  );
}

export default Tours;
