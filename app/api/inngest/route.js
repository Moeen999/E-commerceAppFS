import { serve } from "inngest/next";
import {
  inngest,
  syncDeleteUser,
  syncUserCreation,
  syncUserUpdate,
} from "@/config/ingest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdate, syncDeleteUser],
});
