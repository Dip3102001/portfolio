import React, { useState, useRef, useEffect } from 'react';

const ChatbotWidget : React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello, I am Dxon (Dip’s + Neuron), a prototype AI modeled after Dip. I process his knowledge, projects, and experiences, so you can ask me anything about him. No small talk—just data, logic, and straight answers.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMessages = [
      ...messages,
      { sender: 'user', text: inputValue }
    ];
    
    setMessages(newMessages);
    setInputValue('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      // Add bot response - This would be replaced with your actual bot integration
      setMessages(prev => [
        ...prev, 
        { 
          sender: 'bot', 
          text: getBotResponse(inputValue) 
        }
      ]);
    }, 600);
  };

  // Simple response function - replace with your actual bot integration
  const getBotResponse = (input) => {
    const normalizedInput = input.toLowerCase();
    
    if (normalizedInput.includes('hello') || normalizedInput.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (normalizedInput.includes('help')) {
      return 'I can help answer questions about our products, services, or provide general assistance. What do you need help with?';
    } else if (normalizedInput.includes('bye') || normalizedInput.includes('goodbye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return "I'll need to process that request. Could you provide more details or ask another question?";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble button */}
      <button 
        onClick={toggleChat}
        className="btn btn-circle btn-primary"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="card w-80 md:w-96 h-96 bg-base-100 shadow-xl absolute bottom-20 right-0 flex flex-col overflow-hidden " >
          {/* Header */}
          <div className="card-title bg-primary text-primary-content p-4 justify-between">
            <h3>Dxon</h3>
            <button 
              onClick={toggleChat}
              className="btn btn-circle btn-xs btn-ghost"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto bg-base-200">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'} mb-3`}
              >
                <div className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-primary' : 'chat-bubble-secondary'}`}>
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSendMessage} className="border-t border-base-300 p-3 flex">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="input input-bordered flex-1 rounded-r-none"
            />
            <button 
              type="submit"
              className="btn btn-primary rounded-l-none"
              disabled={!inputValue.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;