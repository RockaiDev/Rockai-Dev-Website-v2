// Chat storage utilities for managing conversation history

const CHAT_STORAGE_KEY = 'rockai_chat_conversation';
const MAX_MESSAGES = 50; // Limit conversation history to prevent storage bloat

export const chatStorage = {
  // Save conversation to localStorage
  saveConversation: (messages) => {
    try {
      if (typeof window !== 'undefined') {
        const conversationData = {
          messages: messages.slice(-MAX_MESSAGES), // Keep only recent messages
          timestamp: Date.now(),
          sessionId: chatStorage.getSessionId()
        };
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(conversationData));
      }
    } catch (error) {
      console.error('Failed to save conversation:', error);
    }
  },

  // Load conversation from localStorage
  loadConversation: () => {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(CHAT_STORAGE_KEY);
        if (stored) {
          const conversationData = JSON.parse(stored);
          
          // Check if conversation is from same session (within 24 hours)
          const isRecentSession = Date.now() - conversationData.timestamp < 24 * 60 * 60 * 1000;
          
          if (isRecentSession && conversationData.sessionId === chatStorage.getSessionId()) {
            return conversationData.messages || [];
          }
        }
      }
    } catch (error) {
      console.error('Failed to load conversation:', error);
    }
    return [];
  },

  // Clear conversation
  clearConversation: () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(CHAT_STORAGE_KEY);
      }
    } catch (error) {
      console.error('Failed to clear conversation:', error);
    }
  },

  // Get or create session ID
  getSessionId: () => {
    try {
      if (typeof window !== 'undefined') {
        let sessionId = sessionStorage.getItem('rockai_chat_session_id');
        if (!sessionId) {
          sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
          sessionStorage.setItem('rockai_chat_session_id', sessionId);
        }
        return sessionId;
      }
    } catch (error) {
      console.error('Failed to get session ID:', error);
    }
    return 'default_session';
  },

  // Add message to conversation
  addMessage: (messages, newMessage) => {
    const updatedMessages = [...messages, newMessage];
    chatStorage.saveConversation(updatedMessages);
    return updatedMessages;
  },

  // Get conversation history for API (without the initial greeting)
  getConversationHistory: (messages) => {
    return messages.filter(msg => msg.sender !== 'bot' || !msg.text.includes("Hi there! I'm Rockai"));
  }
};
