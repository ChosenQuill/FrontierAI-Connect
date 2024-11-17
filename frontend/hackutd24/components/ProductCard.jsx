// components/ProductCard.jsx

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{product.product_name || product.name}</h3>
      <p className="text-gray-600 flex-grow">{product.features || product.description}</p>
      <div className="mt-4">
        <span className="text-green-600 font-bold">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
