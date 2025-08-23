import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MessageSquare, Users, Video, Globe } from 'lucide-react';
import './styles.css';

const CommunityHub = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    {
      name: 'Discussion Forums',
      path: '/community/discussions', // ✅ Updated path
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      name: 'Expert Consultation',
      path: '/community/experts',
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: 'Video Tutorials',
      path: '/community/videos',
      icon: <Video className="w-5 h-5" />,
    },
    {
      name: 'Local Language Support',
      path: '/community/language',
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Community Hub</h1>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${
                      path === item.path
                        ? 'border-green-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden overflow-x-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  path === item.path
                    ? 'bg-green-50 text-green-700 border-green-500'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700 border-transparent'
                } px-3 py-2 rounded-md text-sm font-medium border-b-2 whitespace-nowrap`}
              >
                <div className="flex items-center">
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CommunityHub;
