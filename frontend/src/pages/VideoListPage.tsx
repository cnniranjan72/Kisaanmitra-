import React from 'react';

const VideoListPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-10">All Video Tutorials</h1>
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Explore our library of farming tutorials available in multiple languages.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {/* Hindi Videos Section */}
        <section className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">हिंदी (Hindi)</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://youtu.be/DwDBVfsrQXo?si=RNKIqGPm3dbAXbX7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                हाथ से जुताई करने का तरीका
              </a>
            </li>
            <li>
              <a href="https://youtu.be/iaco9NIDUV4?si=ozzTIap7xuEPVTEZ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                जैविक खाद कैसे बनाएं
              </a>
            </li>
            <li>
              <a href="https://youtu.be/4ucbtnYIgjo?si=MDbxxFemf67KQv6E" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                फसलों में सिंचाई कब करें
              </a>
            </li>
            <li>
              <a href="https://youtu.be/CO9WGGwftLQ?si=Gv-1RxHx-xczHLxL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                कीट नियंत्रण के घरेलू उपाय
              </a>
            </li>
          </ul>
        </section>

        {/* Kannada Videos Section */}
        <section className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">ಕನ್ನಡ (Kannada)</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://youtube.com/shorts/-9R1zQMe5ZA?si=dOJSsRH-WEbbk-KK" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ಹನಿ ನೀರಾವರಿ ಪದ್ಧತಿ
              </a>
            </li>
            <li>
              <a href="https://youtube.com/shorts/fnb-UnwJKtc?si=rG8DW5REZ93VjQvP" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ಸಾವಯವ ಕೃಷಿ ಪದ್ಧತಿ
              </a>
            </li>
            <li>
              <a href="https://youtube.com/shorts/r_uc4e-kJFE?si=_jMEK7bdT_aAqohu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ಬೆಳೆ ರೋಗ ನಿರ್ವಹಣೆ
              </a>
            </li>
            <li>
              <a href="https://youtu.be/tOlVDxnGQfA?si=O6LyJewvtCiMGqlY" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ಉತ್ತಮ ಬೀಜಗಳ ಆಯ್ಕೆ
              </a>
            </li>
          </ul>
        </section>

        {/* Marathi Videos Section */}
        <section className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">मराठी (Marathi)</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://youtu.be/utXlTbnZxks?si=ZINse9wCXzIA0SQC" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                पीक रोग व्यवस्थापन
              </a>
            </li>
            <li>
              <a href="https://youtu.be/mV4JoSC16ak?si=PmYKi9A7qXnjLYlH" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                गांडूळ खत निर्मिती
              </a>
            </li>
            <li>
              <a href="https://youtu.be/7rktJrRG2e8?si=YQk3-3mso8XOPQV3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                पिकांची काळजी कशी घ्यावी
              </a>
            </li>
            <li>
              <a href="https://youtu.be/K759w1JIhZQ?si=-GNczqzRO2iR3imh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                शेतीतील आधुनिक तंत्रज्ञान
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VideoListPage;