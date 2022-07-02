import React, { useState } from "react";
import serviceapi from "./Api/servicesApi.js";
import { motion } from "framer-motion"

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <motion.div  whileHover={{ scale: 1.2 }}
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </motion.div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;