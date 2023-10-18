// Card.js
import { CiStar } from 'react-icons/ci';
import React from 'react';

const Card = ({ title, description, imageUrl, price }) => {
  return (
    <div className="flex items-center flex-col mt-4">
      <img src={imageUrl} alt={title} className="w-[300px] h-[300px]" />
      <div className="mt-3 text-[14px] text-gray-400">{title}</div>
        <p className="mt-1 text-gray-700 font-semibold">{description}</p>
        <div className="font-semibold text-[14px]">
        {price}
      </div>
    </div>
  );
};

export default Card;
