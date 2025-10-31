import { GoogleGenerativeAI } from "@google/generative-ai";

import { geminiApiKey } from "@/shared/lib/env/server";

export const geminiClient = new GoogleGenerativeAI(geminiApiKey);
