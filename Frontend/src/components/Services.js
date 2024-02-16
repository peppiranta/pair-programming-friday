import Service from "./Service";
import Title from "./Title";
import { useState, useEffect } from "react";

function Services() {
  const [servicesData, setServicesData] = useState([]);
  const apiUrl = "";
  useEffect(function () {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
