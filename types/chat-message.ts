import { Tables } from "@/supabase/types"

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  message: Tables<"messages">;
  fileItems: string[];
}
