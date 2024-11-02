import { Tables, TablesInsert } from "@/supabase/types"
import {
    // ChatFile,
    ChatMessage,
    // ChatPayload,
    ChatSettings,
    // LLM,
    // MessageImage
} from "@/types"

export const createTempMessages = (
    messageContent: string,
    chatMessages: ChatMessage[],
    chatSettings: ChatSettings,
    b64Images: string[],
    isRegeneration: boolean,
    setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
    selectedAssistant: Tables<"assistants"> | null
) => {

}