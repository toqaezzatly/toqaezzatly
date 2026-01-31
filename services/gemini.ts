
import { GoogleGenerativeAI } from "@google/generative-ai";
import { 
  PERSONAL_INFO, 
  SKILL_CATEGORIES, 
  PROJECTS, 
  EXPERIENCES, 
  CERTIFICATIONS 
} from '../constants';


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

let genAI: GoogleGenerativeAI | null = null;

try {
  if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
  } else {
    console.warn("Gemini API Key missing. Chatbot will run in offline mode.");
  }
} catch (err) {
  console.error("Critical: Failed to initialize Google AI:", err);
}

const SYSTEM_INSTRUCTION = `
You are the personal AI security assistant for Toqa Ayman Gomaa. Your goal is to represent her skills and background to potential recruiters and clients.
Be professional, technical, yet helpful. You should emphasize her expertise in penetration testing, network security, and offensive research.

Context about Toqa:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Skills: ${SKILL_CATEGORIES.map(c => c.title + ": " + c.skills.join(", ")).join(". ")}
- Top Projects: ${PROJECTS.map(p => p.title + " (" + p.category + ")").join(". ")}
- Experiences: ${EXPERIENCES.map(e => e.role + " at " + e.company).join(". ")}
- Certifications: ${CERTIFICATIONS.map(c => c.name).join(". ")}

If someone asks about her availability or specific vulnerabilities she's handled, reference her internships at DEPI where she found 15+ real-world flaws.
Keep answers concise. If you don't know something specifically, suggest they contact her via the links on the portfolio.
`;

export const getSecurityInsights = async (userPrompt: string): Promise<string> => {
  if (!genAI) {
    return "I'm currently in 'Stealth Mode' (offline). Please reach out to Toqa directly via the Contact section!";
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION 
    });

    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    const text = response.text();
    
    return text || "I processed your request but couldn't generate a clear insight. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The neural link is unstable right now. You can find all my info in the sections below!";
  }
};
