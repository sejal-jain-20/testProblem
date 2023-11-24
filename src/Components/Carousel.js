import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const images = [
    { image: img1, name: "Arabian Ranches" },
    { image: img2, name: "Arabian Ranches II" },
    { image: img3, name: "Downtown Dubai" },
    { image: img4, name: "Dubai Hills Estate" },
    { image: img5, name: "Dubai Marina" },
    { image: img6, name: "Emirates Living" },
  ];

  return (
    <div className="carousel-container">
      <div className="mx-auto min-w-sm flex justify-center mt-12">
        <h1 className="text-center text-3xl font-semibold mb-2 font-sans uppercase text-primary ">
          Our Services
        </h1>
      </div>

      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#f6f6f6",
            border: "none",
            color: "#64615b",
            cursor: "pointer",
            fontSize: "20px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
            boxShadow: "#00000024 4px 3px 10px 0px",
          },
          children: <b>{`>`}</b>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#f6f6f6",
            border: "none",
            color: "#64615b",
            cursor: "pointer",
            fontSize: "20px",
            height: 40,
            lineHeight: 1,
            textAlign: "center",
            width: 40,
            boxShadow: "#00000024 -3px 0px 10px 0px",
          },

          children: <b>{`<`}</b>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        centerMode
      >
        {images.map((ele, idx) => (
          <div
            className="carousel-images"
            style={{
              width: 250,
              height: 350,
              backgroundImage: `url(${ele.image})`, 
              backgroundSize: "cover", 
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p>{ele.name}</p>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
};

export default Carousel;
