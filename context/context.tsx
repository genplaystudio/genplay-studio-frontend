import { Dispatch, SetStateAction, createContext } from 'react';
import { ChatMessage } from '@/types/chat-message';

interface ChatbotUIContext {
  // ACTIVE CHAT STORE
  isGenerating: boolean;
  setIsGenerating: Dispatch<SetStateAction<boolean>>;

  // CHAT INPUT COMMAND STORE
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  chatMessages: ChatMessage[];
  setChatMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  isAssistantPickerOpen: boolean;
  setIsAssistantPickerOpen: Dispatch<SetStateAction<boolean>>;
  focusAssistant: boolean;
  setFocusAssistant: Dispatch<SetStateAction<boolean>>;
}
export const ChatbotUIContext = createContext<ChatbotUIContext>({
  // ACTIVE CHAT STORE
  isGenerating: false,
  setIsGenerating: () => {},

  // CHAT INPUT COMMAND STORE
  userInput: '',
  setUserInput: () => {},
  chatMessages: [],
  setChatMessages: () => {},
  focusAssistant: false,
  setFocusAssistant: () => {},
  isAssistantPickerOpen: false,
  setIsAssistantPickerOpen: () => {},
});
