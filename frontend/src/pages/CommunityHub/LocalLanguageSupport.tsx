import React, { useState } from 'react';
import { Check, Globe, Volume2, MessageSquare, BookOpen } from 'lucide-react';

type Language = {
  id: string;
  name: string;
  nativeName: string;
  code: string;
  flag: string;
  availableFeatures: string[];
};

const LocalLanguageSupport = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');

  const languages: Language[] = [
    {
      id: 'hindi',
      name: 'Hindi',
      nativeName: 'हिंदी',
      code: 'hi',
      flag: '🇮🇳',
      availableFeatures: [
        'All app content',
        'Voice commands',
        'Customer support',
        'Video tutorials',
        'Documentation'
      ]
    },
    {
      id: 'kannada',
      name: 'Kannada',
      nativeName: 'ಕನ್ನಡ',
      code: 'kn',
      flag: '🇮🇳',
      availableFeatures: [
        'All app content',
        'Customer support',
        'Video tutorials',
        'Basic navigation'
      ]
    },
    {
      id: 'marathi',
      name: 'Marathi',
      nativeName: 'मराठी',
      code: 'mr',
      flag: '🇮🇳',
      availableFeatures: [
        'All app content',
        'Customer support',
        'Basic navigation'
      ]
    },
    {
      id: 'tamil',
      name: 'Tamil',
      nativeName: 'தமிழ்',
      code: 'ta',
      flag: '🇮🇳',
      availableFeatures: [
        'Basic navigation',
        'Customer support'
      ]
    },
    {
      id: 'telugu',
      name: 'Telugu',
      nativeName: 'తెలుగు',
      code: 'te',
      flag: '🇮🇳',
      availableFeatures: [
        'Basic navigation',
        'Customer support'
      ]
    },
    {
      id: 'bengali',
      name: 'Bengali',
      nativeName: 'বাংলা',
      code: 'bn',
      flag: '🇮🇳',
      availableFeatures: [
        'Basic navigation'
      ]
    }
  ];

  const selectedLangData = languages.find(lang => lang.id === selectedLanguage) || languages[0];

  const features = [
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: 'App Interface',
      description: 'Navigate the entire app in your preferred language.'
    },
    {
      icon: <Volume2 className="w-6 h-6 text-green-600" />,
      title: 'Voice Commands',
      description: 'Use voice commands in your native language.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      title: 'Customer Support',
      description: 'Get help in your language from our support team.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      title: 'Learning Resources',
      description: 'Access tutorials and guides in multiple languages.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-800 mb-3">Local Language Support</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Access all our features, content, and support in your preferred local language for a better experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Language Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Language</h2>
            <div className="space-y-3">
              {languages.map((language) => (
                <button
                  key={language.id}
                  onClick={() => setSelectedLanguage(language.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    selectedLanguage === language.id
                      ? 'bg-green-50 border border-green-200'
                      : 'hover:bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{language.flag}</span>
                    <div className="text-left">
                      <div className="font-medium text-gray-800">{language.name}</div>
                      <div className="text-sm text-gray-500">{language.nativeName}</div>
                    </div>
                  </div>
                  {selectedLanguage === language.id && (
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Language Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{selectedLangData.flag}</span>
                <div>
                  <h2 className="text-2xl font-bold">{selectedLangData.name}</h2>
                  <p className="text-green-100">{selectedLangData.nativeName}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  const isAvailable = selectedLangData.availableFeatures.some(item => 
                    feature.title.toLowerCase().includes(item.toLowerCase()) || 
                    item.toLowerCase().includes(feature.title.toLowerCase())
                  );

                  return (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border ${
                        isAvailable 
                          ? 'border-green-100 bg-green-50' 
                          : 'border-gray-100 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg mr-3 ${
                          isAvailable ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {React.cloneElement(feature.icon, {
                            className: `${feature.icon.props.className} ${!isAvailable ? 'text-gray-400' : ''}`
                          })}
                        </div>
                        <div>
                          <h4 className={`font-medium ${
                            isAvailable ? 'text-gray-800' : 'text-gray-500'
                          }`}>
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {isAvailable 
                              ? feature.description 
                              : 'Coming soon'}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      We're continuously working to add more languages and features. 
                      Let us know if you'd like to contribute or request a specific language!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalLanguageSupport;
