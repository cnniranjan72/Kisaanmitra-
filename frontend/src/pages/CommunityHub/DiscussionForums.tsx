import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, User, Clock, ArrowRight } from 'lucide-react';

const DiscussionForums = () => {
  const discussions = [
    {
      id: 1,
      title: 'Best practices for organic farming in dry regions',
      author: 'Ramesh Kumar',
      timeAgo: '2 hours ago',
      replies: 12,
      category: 'Organic Farming'
    },
    {
      id: 2,
      title: 'How to identify and treat common pests in vegetable crops?',
      author: 'Pooja Sharma',
      timeAgo: '5 hours ago',
      replies: 8,
      category: 'Pest Control'
    },
    {
      id: 3,
      title: 'Water conservation techniques for small farms',
      author: 'Arjun Patel',
      timeAgo: '1 day ago',
      replies: 15,
      category: 'Irrigation'
    },
    {
      id: 4,
      title: 'Best crops to grow in red soil',
      author: 'Meena Devi',
      timeAgo: '2 days ago',
      replies: 5,
      category: 'Crop Selection'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Discussion Forums</h1>
        <Link 
          to="/community/new-discussion" 
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          Start New Discussion
        </Link>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div 
            key={discussion.id} 
            className="discussion-card bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
                    {discussion.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {discussion.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {discussion.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {discussion.timeAgo}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {discussion.replies} {discussion.replies === 1 ? 'reply' : 'replies'}
                  </span>
                </div>
              </div>
              <Link 
                to={`/community/discussion/${discussion.id}`} 
                className="text-green-600 hover:text-green-700 flex items-center gap-1"
              >
                View <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForums;
