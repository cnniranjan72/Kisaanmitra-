import { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, MapPin, DollarSign, Shield, Package, TrendingUp } from 'lucide-react';

interface Market {
  id: string;
  name: string;
  address: string;
  distance: string;
  rating?: number;
  totalRatings?: number;
  location: {
    lat: number;
    lng: number;
  };
}

interface Coordinates {
  lat: number;
  lng: number;
}

const Marketplace = () => {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  // Check if Google Maps API key is set
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  if (!googleMapsApiKey || googleMapsApiKey === 'your_google_maps_api_key_here') {
    console.error('Google Maps API key is not properly configured.');
    setLoading(false);
    return;
  }

  // Initialize Google Maps
  useEffect(() => {
    const initMap = async () => {
      try {
        // Get user's current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation({ lat: latitude, lng: longitude });
              loadNearbyMarkets(latitude, longitude);
            },
            (error) => {
              console.error('Error getting location:', error);
              // Default to a central location if geolocation fails
              const defaultLocation = { lat: 20.5937, lng: 78.9629 }; // Center of India
              setUserLocation(defaultLocation);
              loadNearbyMarkets(defaultLocation.lat, defaultLocation.lng);
            }
          );
        }
      } catch (error) {
        console.error('Error initializing map:', error);
        setLoading(false);
      }
    };

    initMap();
  }, []);

  // Load nearby markets using Google Places API
  const loadNearbyMarkets = async (lat: number, lng: number) => {
    try {
      const loader = new Loader({
        apiKey: googleMapsApiKey,
        version: 'weekly',
        libraries: ['places']
      });

      await loader.load();
      
      // Initialize map
      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 12,
        });
      }

      // Add user location marker
      new google.maps.Marker({
        position: { lat, lng },
        map: mapInstance.current,
        title: 'Your Location',
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
      });

      // Search for nearby markets (agricultural markets/mandis)
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      const request: google.maps.places.PlaceSearchRequest = {
        location: { lat, lng },
        radius: 10000, // 10km radius
        type: 'grocery_or_supermarket',
        keyword: 'mandi OR market OR agricultural'
        // Removed rankBy as it cannot be used with radius
      };

      service.nearbySearch(request, (results, status) => {
        if (status === 'OK' && results) {
          const marketData = results.slice(0, 10).map((place, index) => {
            const location = place.geometry?.location;
            return {
              id: place.place_id || `market-${index}`,
              name: place.name || 'Unnamed Market',
              address: place.vicinity || 'Address not available',
              distance: '1.2 km', // This would be calculated in a real app
              location: {
                lat: location ? location.lat() : 0,
                lng: location ? location.lng() : 0
              }
            };
          });
          setMarkets(marketData);

          // Add markers for each market
          markersRef.current = marketData.map(market => {
            return new google.maps.Marker({
              position: market.location,
              map: mapInstance.current,
              title: market.name,
            });
          });
        }
        setLoading(false);
      });
    } catch (error) {
      console.error('Error loading markets:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Handle market selection
  const handleMarketSelect = (market: Market) => {
    if (mapInstance.current && market) {
      mapInstance.current.setCenter(market.location);
      mapInstance.current.setZoom(15);
    }
  };

  // Feature cards data
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: 'Real-time Market Rates',
      description: 'Get live updates on crop prices across different markets.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: 'AI Price Recommendations',
      description: 'Smart suggestions for optimal selling prices based on market trends.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: 'Secure Digital Payments',
      description: 'Safe and secure transactions with multiple payment options.'
    },
    {
      icon: <Package className="w-6 h-6 text-green-600" />,
      title: 'Bulk Trading Options',
      description: 'Connect with bulk buyers and get better deals for large quantities.'
    }
  ] as const;

  if (!googleMapsApiKey || googleMapsApiKey === 'your_google_maps_api_key_here') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Google Maps API Key Required</h2>
          <p className="text-gray-700 mb-6">
            To use the Marketplace feature, please set up a valid Google Maps API key in the <code className="bg-gray-100 px-2 py-1 rounded">.env</code> file.
          </p>
          <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
            <p className="font-semibold mb-2">1. Get a Google Maps API key:</p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to the <a href="https://console.cloud.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
              <li>Create a new project or select an existing one</li>
              <li>Enable the following APIs: Maps JavaScript API and Places API</li>
              <li>Create credentials (API key)</li>
            </ol>
          </div>
          <p className="text-sm text-gray-600">
            Need help? Contact support for assistance with setting up the API key.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Crop Marketplace</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct farmer-to-buyer trading with transparent pricing and secure payments
          </p>
        </div>

        {/* Search and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Markets List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Search markets..."
                  />
                </div>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: '500px' }}>
                {loading ? (
                  <div className="p-4 text-center text-gray-500">Loading markets...</div>
                ) : markets.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {markets.map((market) => (
                      <li key={market.id}>
                        <button
                          className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                          onClick={() => handleMarketSelect(market)}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                              <MapPin className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{market.name}</p>
                              <p className="text-sm text-gray-500">{market.address}</p>
                              {market.rating && (
                                <div className="mt-1 flex items-center">
                                  <span className="text-yellow-400">★</span>
                                  <span className="ml-1 text-sm text-gray-600">
                                    {market.rating.toFixed(1)} ({market.totalRatings || 0} reviews)
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-gray-500">No markets found in your area.</div>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div ref={mapRef} className="w-full h-full min-h-[500px]" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketplace Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to Start Trading?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join our marketplace today to connect with buyers and sellers directly. Get the best prices for your crops with zero middlemen.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
