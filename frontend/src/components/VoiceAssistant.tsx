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
        
        // Optimize recognition settings
        recognition.continuous = false;  // Process one command at a time
        recognition.interimResults = false;  // Only process final results
        recognition.lang = 'en-US';
        // Note: maxAlternatives is not supported in the type definition but works in browsers
        (recognition as any).maxAlternatives = 1;  // Only get the top alternative
        
        // Process results immediately when available
        recognition.onresult = (event) => {
          const result = event.results[0][0];
          const command = result.transcript.trim();
          
          if (command) {
            setTranscript(command);
            processCommandImmediately(command);
            
            // Reset the hide timer when new speech is detected
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setTranscript('');
            }, 3000);
          }
          
          // Stop listening after processing one command
          if (recognitionRef.current) {
            recognitionRef.current.stop();
          }
        };

        recognition.onend = () => {
          setIsListening(false);
          // Clear any pending timeouts
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };

        recognition.onerror = (event) => {
          if (event.error !== 'aborted' && event.error !== 'no-speech') {
            toast({
              title: 'Error',
              description: `Voice command error: ${event.error}`,
              variant: 'destructive',
            });
          }
          setIsListening(false);
        };

        // Set up a single timeout when starting recognition
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        // Set a timeout to stop listening after 3 seconds of no speech
        timeoutRef.current = setTimeout(() => {
          if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
          }
        }, 3000);

        recognitionRef.current = recognition;
        recognition.start();
        setIsListening(true);
        
        // Initial timeout is already set above
        
        
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

  const showSuccessToast = (message: string) => {
    // Use a more subtle toast for success messages
    toast({
      description: message,
      duration: 1500, // Shorter duration for less intrusive feedback
    });
  };

  const showErrorToast = (message: string) => {
    // Use a more prominent toast for error messages
    toast({
      title: 'Error',
      description: message,
      variant: 'destructive',
    });
  };

  // Auto-hide the transcript after a delay
  useEffect(() => {
    if (!transcript) return;
    
    const hideTimer = setTimeout(() => {
      setTranscript('');
    }, 3000); // Hide after 3 seconds of no new speech
    
    return () => {
      clearTimeout(hideTimer);
    };
  }, [transcript]);

  // Process commands immediately as they come in
  const processCommandImmediately = (command: string) => {
    const normalizedCommand = command.toLowerCase().trim();
    
    // Define command interface for better type safety
    interface CommandHandler {
      pattern: RegExp;
      action: (match: RegExpMatchArray) => string | void;
      isDynamic: boolean;
    }
    
    // Predefined command patterns for quick matching
    const commandMap: CommandHandler[] = [
      // Navigation Commands
      { 
        pattern: /(go to|navigate to|open|show)\s*(?:the)?\s*(home|dashboard)/i, 
        action: () => { 
          navigate('/');
          return 'Navigating to Home';
        },
        isDynamic: true
      },
      { 
        pattern: /(go to|navigate to|open|show)\s*(?:the)?\s*(marketplace|shop|store)/i, 
        action: () => {
          navigate('/marketplace');
          return 'Navigating to Marketplace';
        },
        isDynamic: true
      },
      { 
        pattern: /(go to|navigate to|open|show)\s*(?:the)?\s*(community|forum|discussion)/i, 
        action: () => {
          navigate('/community');
          return 'Navigating to Community Hub';
        },
        isDynamic: true
      },
      { 
        pattern: /(go to|navigate to|open|show)\s*(?:the)?\s*(sustainability|sustainable|eco)/i, 
        action: () => {
          navigate('/sustainability');
          return 'Navigating to Sustainability';
        },
        isDynamic: true
      },
      { 
        pattern: /(go to|navigate to|open|show)\s*(?:my)?\s*(profile|account)/i, 
        action: () => {
          navigate('/profile');
          return 'Navigating to Profile';
        },
        isDynamic: true
      },
      
      // Search Commands
      { 
        pattern: /(search for|find|look for)\s+(.+)/i, 
        action: (match: RegExpMatchArray) => {
          const searchQuery = match[2].trim();
          navigate(`/marketplace?search=${encodeURIComponent(searchQuery)}`);
          return `Searching for ${searchQuery}`;
        },
        isDynamic: true
      },
      { 
        pattern: /(find|show|list)\s+(tractors?|equipment|machinery)/i, 
        action: () => {
          navigate('/marketplace?category=machinery');
          return 'Showing tractors and equipment';
        },
        isDynamic: true
      },
      { 
        pattern: /(find|show|list)\s+(seeds?|fertilizers?|pesticides?)/i, 
        action: () => {
          navigate('/marketplace?category=seeds');
          return 'Showing seeds and fertilizers';
        },
        isDynamic: true
      },
      
      // Weather Commands
      { 
        pattern: /(what'?s|what is|show me)\s+(the )?weather( forecast)?( for (today|tomorrow))?/i, 
        action: () => {
          // This would typically call a weather API
          return 'The weather is partly cloudy with a high of 28°C. Good conditions for farming!';
        },
        isDynamic: true
      },
      
      // Market Price Commands
      { 
        pattern: /(what'?s|what is|show me)\s+(the )?(current )?(market )?price( of| for)?\s*(.+)/i, 
        action: (match: RegExpMatchArray) => {
          const crop = match[5].trim();
          // This would typically fetch current market prices
          return `Current market price for ${crop} is approximately ₹${Math.floor(Math.random() * 2000) + 1000} per quintal.`;
        },
        isDynamic: true
      },
      
      // Help Commands
      { 
        pattern: /(what can i say|help|commands?|options?)/i, 
        action: () => {
          setShowCommands(true);
          return 'Showing available commands';
        },
        isDynamic: true
      },
      
      // Social Features
      { 
        pattern: /(show|view|check)\s+(my )?(notifications?|alerts?)/i, 
        action: () => {
          // This would typically open notifications
          return 'You have 3 new notifications';
        },
        isDynamic: true
      },
      { 
        pattern: /(post|share)\s+(a )?(status|update)( saying)?(.*)/i, 
        action: (match: RegExpMatchArray) => {
          const status = match[4].trim();
          if (status) {
            return `Posted to community: "${status}"`;
          }
          return 'What would you like to share with the community?';
        },
        isDynamic: true
      },
      
      // Farming Tips
      { 
        pattern: /(give me|show me|suggest)\s+(a )?(farming tip|agricultural advice)/i, 
        action: () => {
          const tips = [
            'Consider rotating your crops to maintain soil health.',
            'The best time to water plants is early morning or late evening.',
            'Using organic compost can improve your soil quality significantly.',
            'Monitor your crops regularly for early signs of pests or disease.'
          ];
          return tips[Math.floor(Math.random() * tips.length)];
        },
        isDynamic: true
      }
      
    ];

    // Find and execute the matching command
    for (const cmd of commandMap) {
      const match = normalizedCommand.match(cmd.pattern);
      if (match) {
        try {
          const result = cmd.action(match);
          if (result) {
            showSuccessToast(result);
          }
          return; // Exit after first match
        } catch (error) {
          console.error('Error executing command:', error);
          showErrorToast('Error executing command');
          return;
        }
      }
    }

    // If no match found, show a helpful message
    showErrorToast('Command not recognized. Try saying "Go to marketplace" or "Show weather"');
  };

  // Close commands list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showCommands && !target.closest('.voice-assistant-container')) {
        setShowCommands(false);
      }
    };

    // Add type assertion to handle the event listener type
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
    };
  }, [showCommands]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {/* Speech bubble that shows transcript */}
        {transcript && (
          <div className="absolute bottom-full right-0 mb-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-xs transition-opacity duration-300">
            <p className="text-sm text-gray-800 dark:text-gray-200">{transcript}</p>
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
    </div>
  );
};

export default VoiceAssistant;
