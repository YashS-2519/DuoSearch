import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;