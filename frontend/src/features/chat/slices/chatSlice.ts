import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}

interface ChatState {
  messages: Record<string, ChatMessage[]>;
  isLoading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: {},
  isLoading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      const msg = action.payload;
      const partnerId = msg.senderId === 'me' ? msg.receiverId : msg.senderId;

      if (!state.messages[partnerId]) {
        state.messages[partnerId] = [];
      }
      state.messages[partnerId].push(msg);
    },
    // sendMessage i receiveMessage zostawiamy pomocniczo, 
    // choć docelowo będziemy używać React Query do danych z API
    sendMessage: (state, action: PayloadAction<{ senderId: string; receiverId: string; content: string }>) => {
      const { senderId, receiverId, content } = action.payload;
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        senderId,
        receiverId,
        content,
        timestamp: new Date().toISOString(),
      };
      
      const partnerId = receiverId;
      if (!state.messages[partnerId]) {
        state.messages[partnerId] = [];
      }
      state.messages[partnerId].push(newMsg);
    },
    receiveMessage: (state, action: PayloadAction<ChatMessage>) => {
       const partnerId = action.payload.senderId;
       if (!state.messages[partnerId]) {
        state.messages[partnerId] = [];
      }
      state.messages[partnerId].push(action.payload);
    }
  },
});

export const { addMessage, sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
