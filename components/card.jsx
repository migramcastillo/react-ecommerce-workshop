import React from "react";

const Card = ({ name, description, image, url, category }) => {
  return (
    <div className="p-2 w-1/2">
      <div className="flex justify-between bg-white shadow rounded">
        <img className="w-1/3 rounded-l h-56" src={image} />
        <div className="flex-1 flex flex-col justify-between p-3">
          <h2 className="text-gray-800 text-lg font-semibold py-1">{name}</h2>
          <div className="flex">
            {category.map((cat, index) => (
              <span
                key={index}
                className="capitalize bg-blue-500 text-white rounded-full text-xs px-2 mx-1"
              >
                {cat}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm py-1">{description}</p>
          <div className="flex justify-end">
            <a
              href={url}
              target="_blank"
              className="py-2 px-4 rounded shadow text-gray-100 bg-red-600 cursor-pointer"
            >
              Saber más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
