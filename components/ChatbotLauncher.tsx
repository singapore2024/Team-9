'use client';

import React, { useState } from 'react';
import { Chatbot } from './Chatbot'; // Ensure this path is correct
import { Button } from './ui/button';
import { MessageSquareIcon } from 'lucide-react';

export function ChatbotLauncher() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Floating Button */}
      <Button
        onClick={toggleChatbot}
        className='fixed bottom-6 right-6 z-50 bg-primary rounded-full p-3 shadow-lg'
      >
        <MessageSquareIcon className='w-6 h-6 text-white' />
      </Button>

      {/* Chatbot Component */}
      {isChatbotOpen && (
        <div className='fixed bottom-16 right-6 w-[90%] max-w-[400px] z-40'>
          <Chatbot />
        </div>
      )}
    </div>
  );
}
