import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import communities from '../config/card.json'

const images = [img1, img2, img3, img4, img5, img6];
const Card = () => {
  return (
    <>
      <div className="mx-auto min-w-sm flex justify-center mt-12">
        <h1 className="text-center text-3xl font-semibold mb-5 font-sans uppercase text-primary">
          Communities we Manage
        </h1>
      </div>
      <div className="communities  flex flex-wrap gap-10 align-center justify-center ">
        {communities.map((community, index) => (
          <div
            key={index}
            className="text-heading max-w-xs overflow-hidden shadow-xs"
          >
            <img className="w-full" src={images[index]} alt={community.title} />
            <div className="px-6 py-4 ">
              <p className="text-primary text-base mt-2 font-normal font-sans">
                {community.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-400">
              <h3 className="text-xl font-sans text-primary font-normal">
                {community.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card