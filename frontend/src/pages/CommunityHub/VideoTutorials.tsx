import React from 'react';
import { Play, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
  uploadTime: string;
  channel: string;
  category: string;
};

const VideoTutorials = () => {
  const videos: Video[] = [
    {
      id: 'a_YwB6aI0bI',
      title: 'How to use a drone for crop spraying',
      thumbnailUrl: 'https://img.youtube.com/vi/a_YwB6aI0bI/maxresdefault.jpg',
      duration: '12:45',
      views: '24K',
      uploadTime: '2 weeks ago',
      channel: 'AgriTech Solutions',
      category: 'Technology'
    },
    {
      id: 'b_YwB6aI0bI',
      title: 'Basics of drip irrigation system setup',
      thumbnailUrl: 'https://img.youtube.com/vi/b_YwB6aI0bI/maxresdefault.jpg',
      duration: '18:30',
      views: '15K',
      uploadTime: '1 month ago',
      channel: 'FarmTech Experts',
      category: 'Irrigation'
    },
    {
      id: 'c_YwB6aI0bI',
      title: 'Understanding soil pH levels',
      thumbnailUrl: 'https://img.youtube.com/vi/c_YwB6aI0bI/maxresdefault.jpg',
      duration: '9:15',
      views: '32K',
      uploadTime: '3 weeks ago',
      channel: 'Soil Science Today',
      category: 'Soil Health'
    },
    {
      id: 'd_YwB6aI0bI',
      title: 'Organic pest control methods',
      thumbnailUrl: 'https://img.youtube.com/vi/d_YwB6aI0bI/maxresdefault.jpg',
      duration: '14:20',
      views: '28K',
      uploadTime: '1 month ago',
      channel: 'Organic Farming Channel',
      category: 'Pest Control'
    },
    {
      id: 'e_YwB6aI0bI',
      title: 'Composting for beginners',
      thumbnailUrl: 'https://img.youtube.com/vi/e_YwB6aI0bI/maxresdefault.jpg',
      duration: '11:05',
      views: '19K',
      uploadTime: '2 months ago',
      channel: 'Sustainable Farming',
      category: 'Composting'
    },
    {
      id: 'f_YwB6aI0bI',
      title: 'Vertical farming at home',
      thumbnailUrl: 'https://img.youtube.com/vi/f_YwB6aI0bI/maxresdefault.jpg',
      duration: '15:40',
      views: '42K',
      uploadTime: '3 weeks ago',
      channel: 'Urban Farming',
      category: 'Urban Farming'
    }
  ];

  const categories = [
    'All',
    'Technology',
    'Irrigation',
    'Soil Health',
    'Pest Control',
    'Composting',
    'Urban Farming'
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Video Tutorials</h1>
        <p className="text-gray-600">
          Watch easy-to-follow video guides on various farming techniques and tips.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              activeCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <Play className="w-6 h-6 text-green-600" fill="#16a34a" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                {video.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  {video.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 mb-2">{video.channel}</p>
              <div className="flex items-center text-xs text-gray-500 gap-4">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.uploadTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link 
          to="/videos" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-8"
        >
          View All Video Tutorials
        </Link>
      </div>
    </div>
  );
};

export default VideoTutorials;
