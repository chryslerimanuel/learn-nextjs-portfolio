'use client'

import React, { useState } from 'react';

type Message = {
  role: 'user' | 'system' | 'assistant' | 'tool';
  content: string;
};

const isDeploy = process.env.NEXT_PUBLIC_IS_DEPLOY_VERCEL === "1";

const Chatbot: React.FC<{ closeChat: () => void }> = ({ closeChat }) => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (isDeploy) return; // Disable feature on deployment
    if (!userMessage) return;
  
    setLoading(true);
    setChatHistory((prev) => [...prev, { role: 'user', content: userMessage }]);
  
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage,
          chatHistory,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }
  
      const data = await response.json();
      const botMessage = data.choices?.[0]?.message?.content;
  
      if (botMessage) {
        setChatHistory((prev) => [...prev, { role: 'assistant', content: botMessage }]);
        setUserMessage('');
      }
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 w-80 h-96 bg-white dark:bg-gray-800 border rounded-lg shadow-lg p-4 z-50 flex flex-col">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl dark:text-white">Chatbot</h3>
        <button onClick={closeChat} className="text-red-500">X</button>
      </div>
      <div className="h-72 overflow-y-auto p-2 bg-gray-100 dark:bg-gray-400 flex-grow">
        {/* Display chat history */}
        {isDeploy ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-center text-gray-500 dark:text-gray-400">Chatbot is disabled for public users.</p>
          </div>
        ) : (
          <>
            {chatHistory.map((message, index) => (
              <div key={index} className={`py-2 ${message.role === 'user' ? 'text-right dark:text-white' : 'text-left dark:text-white'}`}>
                <p className={`${message.role === 'user' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-200 dark:bg-gray-700'} p-2 rounded-lg`}>
                  {message.content}
                </p>
              </div>
            ))}
            {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
          </>
        )}
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && !loading && userMessage.trim() && !isDeploy) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          disabled={loading || isDeploy}
          className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:text-white disabled:opacity-50"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          disabled={loading || !userMessage.trim() || isDeploy}
          className="bg-blue-500 text-white p-2 rounded-lg disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
