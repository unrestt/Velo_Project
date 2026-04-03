import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    // Tę akcję wywołujesz, gdy klikasz na użytkownika na liście kontaktów
    setActiveChat: (state, action: PayloadAction<string | null>) => {
      state.activePartnerId = action.payload;
    },
  },
});

export const { setActiveChat } = chatSlice.actions;
export default chatSlice.reducer;