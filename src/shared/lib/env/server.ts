"server-only";

import { getEnvStr } from "./loader";

const geminiApiKey = getEnvStr({ key: "GEMINI_API_KEY" });

export { geminiApiKey };
