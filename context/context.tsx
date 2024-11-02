import { Dispatch, SetStateAction, createContext } from 'react';
import { ChatMessage } from '@/types/chat-message';
import { Tables } from '@/supabase/types';
import { ChatSettings } from '@/types';

interface ChatbotUIContext {
  //PASSIVE CHAT STORE
  chatSettings: ChatSettings | null;
  setChatSettings: Dispatch<SetStateAction<ChatSettings>>;

  // ACTIVE CHAT STORE
  isGenerating: boolean;
  setIsGenerating: Dispatch<SetStateAction<boolean>>;
  setFirstTokenReceived: Dispatch<SetStateAction<boolean>>;
  setAbortController: Dispatch<SetStateAction<AbortController | null>>;

  // CHAT INPUT COMMAND STORE
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  chatMessages: ChatMessage[];
  setChatMessages: Dispatch<SetStateAction<ChatMessage[]>>;
  isAssistantPickerOpen: boolean;
  setIsAssistantPickerOpen: Dispatch<SetStateAction<boolean>>;
  focusAssistant: boolean;
  setFocusAssistant: Dispatch<SetStateAction<boolean>>;

  // ITEMS STORE
  models: Tables<'models'>[];
}
export const ChatbotUIContext = createContext<ChatbotUIContext>({
  //PASSIVE CHAT STORE
  chatSettings: null,
  setChatSettings: () => {},

  // ACTIVE CHAT STORE
  isGenerating: false,
  setIsGenerating: () => {},
  setFirstTokenReceived: () => {},
  setAbortController: () => {},

  // CHAT INPUT COMMAND STORE
  userInput: '',
  setUserInput: () => {},
  chatMessages: [],
  setChatMessages: () => {},
  focusAssistant: false,
  setFocusAssistant: () => {},
  isAssistantPickerOpen: false,
  setIsAssistantPickerOpen: () => {},

  // ITEMS STORE
  models: [],
});
