import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

export default ai;