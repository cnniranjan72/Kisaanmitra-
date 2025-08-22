import React from 'react';

const EquipmentCard = ({ item }) => {
  const imageUrl = item.imageUrl || 'https://via.placeholder.com/300';
  
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
          item.listingType === 'Rent' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'
        }`}>
          For {item.listingType}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="text-2xl font-semibold text-green-700">
          ₹{item.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
