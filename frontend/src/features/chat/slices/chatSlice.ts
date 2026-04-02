// chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}

interface ChatState {
  activePartnerId: string | null;
}

const initialState: ChatState = {
  activePartnerId: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<string | null>) => {
      state.activePartnerId = action.payload;
    },
  },
});

export const { setActiveChat } = chatSlice.actions;
export default chatSlice.reducer;