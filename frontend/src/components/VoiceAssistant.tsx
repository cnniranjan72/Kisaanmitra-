import { useState, useEffect, useRef } from 'react';
import { Mic, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

type Command = {
  command: string | RegExp;
  action: () => void;
  description: string;
};

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showCommands, setShowCommands] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleListening = async () => {
    try {
      // If already listening, stop and reset
      if (isListening) {
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
        setIsListening(false);
        return;
      }

      // Reset state for new recording
      setTranscript('');
      
      // Request microphone permission and start recognition
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Stop the stream immediately after getting permission
        stream.getTracks().forEach(track => track.stop());
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event) => {
          const newTranscript = Array.from(event.results)
            .map((result) => result[0]?.transcript || '')
            .join('')
            .trim();
          
          if (newTranscript) {
            setTranscript(newTranscript);
          }
        };

        recognition.onend = () => {
          if (transcript) {
            processCommand(transcript);
          }
          setIsListening(false);
        };

        recognition.onerror = (event) => {
          if (event.error !== 'aborted') {
            toast({
              title: 'Error',
              description: `Speech recognition error: ${event.error}`,
              variant: 'destructive',
            });
          }
          setIsListening(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
        setIsListening(true);
        
        // Auto-stop after 5 seconds of no speech
        timeoutRef.current = setTimeout(() => {
          if (isListening && recognitionRef.current) {
            recognitionRef.current.stop();
          }
        }, 5000);
        
      } catch (error) {
        console.error('Error accessing microphone:', error);
        toast({
          title: 'Microphone Access Required',
          description: 'Please allow microphone access to use voice commands.',
          variant: 'destructive',
        });
        setIsListening(false);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      setIsListening(false);
    }
  };

  const processCommand = async (text: string) => {
    const command = text.toLowerCase().trim();
    console.log('Processing command:', command);
    
    // Close commands list when processing a command
    setShowCommands(false);

    // Navigation commands
    const navCommands: { [key: string]: string } = {
      'go to home': '/',
      'home': '/',
      'dashboard': '/',
      'marketplace': '/marketplace',
      'equipment': '/equipment',
      'financial': '/financial',
      'community': '/community',
      'market intelligence': '/market-intel',
      'weather': '/market-intel/weather',
      'disease alerts': '/market-intel/disease',
      'yield predictions': '/market-intel/yield',
      'price forecast': '/market-intel/price',
    };

    // Check for matches
    for (const [key, path] of Object.entries(navCommands)) {
      if (command.includes(key)) {
        console.log(`Navigating to: ${path}`);
        setIsNavigating(true);
        
        // Add a small delay to show the loading state
        await new Promise(resolve => setTimeout(resolve, 300));
        
        try {
          navigate(path);
        } finally {
          // Ensure we always clean up the loading state
          setTimeout(() => setIsNavigating(false), 500);
        }
        return;
      }
    }

    // If no match found
    toast({
      title: 'Command not recognized',
      description: 'Try saying "Go to marketplace" or "Show weather"',
      variant: 'destructive',
    });
  };

  // Close commands list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showCommands && !target.closest('.voice-assistant-container')) {
        setShowCommands(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCommands]);

  return (
    <div className="fixed bottom-6 right-6 z-50 voice-assistant-container">
      <div className="relative">
        <button
          onClick={() => setShowCommands(!showCommands)}
          className="absolute -top-10 right-0 p-1 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <Info className="h-4 w-4" />
        </button>
        
        {showCommands && (
          <div className="absolute bottom-full right-0 mb-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-64">
            <h4 className="font-semibold mb-2">Available Commands:</h4>
            <ul className="space-y-1 text-sm">
              <li>• "Go to marketplace"</li>
              <li>• "Show weather updates"</li>
              <li>• "Show disease alerts"</li>
              <li>• "Show yield predictions"</li>
              <li>• "Show price forecast"</li>
            </ul>
          </div>
        )}
        <Button
          onClick={toggleListening}
          disabled={isNavigating}
          className={`rounded-full w-14 h-14 p-0 flex items-center justify-center shadow-lg transition-all relative overflow-hidden ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : isNavigating
              ? 'bg-blue-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          aria-label={isListening ? 'Stop listening' : 'Start voice command'}
        >
          {isNavigating ? (
            // Loading spinner
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          ) : isListening ? (
            <X className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
        </Button>
        
          {/* Visual indicator when listening */}
        {isListening && (
          <div className="absolute -inset-1 rounded-full bg-red-500 opacity-75 animate-ping"></div>
        )}
      </div>
      
      {/* Transcript display */}
      {transcript && (
        <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-sm max-w-xs">
          <p className="font-medium text-gray-900 dark:text-white">You said:</p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
