'use client'

import React, { useState } from 'react';
import Together from 'together-ai';

const Chatbot: React.FC<{ closeChat: () => void }> = ({ closeChat }) => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // Create an instance of the Together API
  const together = new Together({ apiKey: process.env.NEXT_PUBLIC_TOGETHER_API_KEY });

  const handleSendMessage = async () => {
    if (!userMessage) return;

    setLoading(true);

    // Add user message to chat history
    setChatHistory((prev) => [...prev, { role: 'user', content: userMessage }]);

    try {
      // API call to get chatbot response
      const response = await together.chat.completions.create({
        messages: [...chatHistory, { role: 'user', content: userMessage }],
        model: 'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8',
      });

      const botMessage = response.choices[0].message.content;

      // Add bot's response to chat history
      setChatHistory((prev) => [...prev, { role: 'assistant', content: botMessage }]);
      setUserMessage('');
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 w-80 h-96 bg-white border rounded-lg shadow-lg p-4 z-50">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">Chatbot</h3>
        <button onClick={closeChat} className="text-red-500">X</button>
      </div>
      <div className="h-72 overflow-y-auto p-2 bg-gray-100">
        {/* Display chat history */}
        {chatHistory.map((message, index) => (
          <div key={index} className={`py-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <p className={`${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-200'} p-2 rounded-lg`}>
              {message.content}
            </p>
          </div>
        ))}
        {loading && <p className="text-center text-gray-500">Loading...</p>}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-lg disabled:opacity-50"
          disabled={loading || !userMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
