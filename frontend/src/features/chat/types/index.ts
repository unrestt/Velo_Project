export interface Message {
  id: number;
  senderId: string;   // ID użytkownika, który wysłał
  receiverId: string; // ID użytkownika, który ma odebrać
  content: string;    // Treść wiadomości
  timestamp: string;  // Format ISO, np. "2026-03-30T20:00:00Z"
}