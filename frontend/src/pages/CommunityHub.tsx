import React from 'react';
import './CommunityHub.css';

const CommunityHub: React.FC = () => {
  return (
    <div className="community-hub-container bg-gray-50 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-10">Community Hub</h1>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Connect with fellow farmers, share knowledge, and learn from agricultural experts to grow together.
      </p>

      {/* Discussion Forums Section */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold text-green-700">Discussion Forums 💬</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Engage in conversations, ask questions, and share your experiences with a community of farmers.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-medium text-gray-800">Topic: Best practices for organic farming in dry regions</h3>
            <p className="text-sm text-gray-500">Posted by: Ramesh Kumar | 2 hours ago</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-medium text-gray-800">Topic: How to identify and treat common pests in vegetable crops?</h3>
            <p className="text-sm text-gray-500">Posted by: Pooja Sharma | 5 hours ago</p>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
            View All Discussions
          </button>
        </div>
      </section>

      {/* Expert Consultation Section */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold text-green-700">Expert Consultation 👨‍🔬</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Get personalized advice from certified agricultural experts. You can schedule a call or chat with them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-md flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-800">Dr. Anjali Singh</h3>
              <p className="text-sm text-gray-500">Expertise: Soil Health & Crop Management</p>
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors">
              Connect
            </button>
          </div>
          <div className="bg-green-50 p-4 rounded-md flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-800">Sanjay Patel</h3>
              <p className="text-sm text-gray-500">Expertise: Pest Control & Organic Farming</p>
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold text-green-700">Video Tutorials 📹</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Watch easy-to-follow video guides on various farming techniques and tips.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="video-card bg-gray-100 p-2 rounded-md">
            <div className="video-thumbnail bg-gray-300 w-full h-32 rounded-md mb-2"></div>
            <h3 className="font-medium text-sm text-gray-800">How to use a drone for crop spraying</h3>
          </div>
          <div className="video-card bg-gray-100 p-2 rounded-md">
            <div className="video-thumbnail bg-gray-300 w-full h-32 rounded-md mb-2"></div>
            <h3 className="font-medium text-sm text-gray-800">Basics of drip irrigation system setup</h3>
          </div>
          <div className="video-card bg-gray-100 p-2 rounded-md">
            <div className="video-thumbnail bg-gray-300 w-full h-32 rounded-md mb-2"></div>
            <h3 className="font-medium text-sm text-gray-800">Understanding soil pH levels</h3>
          </div>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
          View All Videos
        </button>
      </section>

      {/* Local Language Support Section */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold text-green-700">Local Language Support 🌐</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Access all our features, content, and support in your preferred local language for a better experience.
        </p>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-600">✓</span>
            <p className="text-gray-700">Content available in Hindi, Marathi, Punjabi, Tamil, and more.</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-600">✓</span>
            <p className="text-gray-700">Translate forum posts and expert advice with a single click.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityHub;