import { geminiApiKey } from "@/shared/lib/env/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const geminiClient = new GoogleGenerativeAI(geminiApiKey);
