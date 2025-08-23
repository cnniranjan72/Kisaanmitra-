import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    price: number;
    listingType: 'Rent' | 'Buy';
  };
  onPaymentSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, item, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
      onClose();
      toast({
        title: 'Payment Successful!',
        description: `Your ${item.listingType === 'Rent' ? 'rental' : 'purchase'} of ${item.name} has been confirmed.`,
      });
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const v = value.replace(/\D/g, '');
    
    // Limit to 16 digits
    const truncated = v.substring(0, 16);
    
    // Add space after every 4 digits
    return truncated.replace(/(\d{4})(?=\d)/g, '$1 ');
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">
            {item.listingType === 'Rent' ? 'Rent' : 'Buy'} {item.name}
          </h2>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Item:</span>
              <span className="font-medium">{item.name}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Type:</span>
              <span className="font-medium">{item.listingType}</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
              <span>Total:</span>
              <span>₹{item.price.toLocaleString()}</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <Input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                inputMode="numeric"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry (MM/YY)
                </label>
                <Input
                  type="text"
                  value={formatExpiry(expiry)}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  maxLength={5}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <Input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="123"
                  maxLength={3}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name on Card
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full mt-6 bg-green-600 hover:bg-green-700"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Pay ₹${item.price.toLocaleString()}`}
            </Button>
            
            <div className="text-center text-xs text-gray-500 mt-4">
              This is a mock payment. No real transactions will be processed.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
