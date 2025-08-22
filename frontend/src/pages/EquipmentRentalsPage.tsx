import React, { useState, useEffect } from 'react';
import EquipmentCard from '../components/EquipmentCards';

const sampleData = [
  { id: 1, name: 'Tractor', description: 'High-power tractor for large fields.', price: 5000, listingType: 'Rent', imageUrl: '/assets/pic101.jpg' },
  { id: 2, name: 'Organic Seeds', description: 'High-yield organic wheat seeds.', price: 1200, listingType: 'Buy', imageUrl: '/assets/pic102.jpg' },
  { id: 3, name: 'Drone Sprayer', description: 'Automated drone for pesticide spraying.', price: 2500, listingType: 'Rent', imageUrl: '/assets/pic103.jpg' },
  { id: 4, name: 'NPK Fertilizer', description: 'Balanced fertilizer for all crop types.', price: 800, listingType: 'Buy', imageUrl: '/assets/pic104.jpg' },
];

const EquipmentRentalsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setListings(sampleData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="text-center mt-20 text-xl">Loading listings...</div>;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient">Kisaan Mitra</span> Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rent, buy, or sell farming equipment, seeds, and fertilizers at affordable rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {listings.map((item) => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentRentalsPage;
