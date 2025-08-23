import React from 'react';
import { Phone, MessageSquare, Calendar, Star } from 'lucide-react';

type Expert = {
  id: number;
  name: string;
  expertise: string[];
  rating: number;
  experience: string;
  languages: string[];
  available: boolean;
  image: string;
};

const ExpertConsultation = () => {
  const experts: Expert[] = [
    {
      id: 1,
      name: 'Dr. Anjali Singh',
      expertise: ['Soil Health', 'Crop Management', 'Organic Farming'],
      rating: 4.9,
      experience: '12+ years',
      languages: ['Hindi', 'English', 'Punjabi'],
      available: true,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Sanjay Patel',
      expertise: ['Pest Control', 'Drip Irrigation', 'Vegetable Farming'],
      rating: 4.7,
      experience: '8+ years',
      languages: ['Hindi', 'Gujarati', 'English'],
      available: true,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Meenakshi Iyer',
      expertise: ['Horticulture', 'Mushroom Cultivation', 'Vermicomposting'],
      rating: 4.8,
      experience: '10+ years',
      languages: ['Hindi', 'Tamil', 'English'],
      available: false,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      expertise: ['Dairy Farming', 'Animal Husbandry', 'Poultry'],
      rating: 4.6,
      experience: '15+ years',
      languages: ['Hindi', 'English', 'Bhojpuri'],
      available: true,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Expert Consultation</h1>
        <p className="text-gray-600">
          Get personalized advice from certified agricultural experts. Schedule a call or chat with them directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <div 
            key={expert.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-green-200"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{expert.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{expert.rating}</span>
                    <span className="text-gray-400 mx-1">•</span>
                    <span className="text-sm text-gray-500">{expert.experience}</span>
                  </div>
                  {!expert.available && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                      Not Available Today
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Speaks</h4>
                <div className="flex flex-wrap gap-2">
                  {expert.languages.map((language, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
              <div className="flex gap-3">
                <button 
                  disabled={!expert.available}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md ${
                    expert.available 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Call
                </button>
                <button 
                  disabled={!expert.available}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 border rounded-md ${
                    expert.available 
                      ? 'border-green-600 text-green-600 hover:bg-green-50' 
                      : 'border-gray-300 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat
                </button>
              </div>
              {expert.available && (
                <button className="w-full mt-3 flex items-center justify-center gap-2 text-sm text-green-600 hover:text-green-700">
                  <Calendar className="w-4 h-4" />
                  Schedule for later
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertConsultation;
