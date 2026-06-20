import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req) {
    try {
        const {notes} = await req.json();

        const prompt = `
You are an expert study assistant.

Return ONLY valid JSON.

Generate:
1. A concise summary
2. 5 key points
3. 5 flashcards
4. 5 quiz questions

Format:

{
  "summary": "string",
  "keyPoints": ["point1", "point2"],
  "flashcards": [
    {
      "question": "string",
      "answer": "string"
    }
  ],
  "quizQuestions": ["question1", "question2"]
}

Study Notes:

${notes}
`;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        
        let text = response.text;

        console.log("Gemini Raw Response:", text);

        // Remove markdown wrappers if Gemini adds them
        text = text.replace(/```json/g, "");
        text = text.replace(/```/g, "");
        text = text.trim();

        const data = JSON.parse(text);

        return Response.json(data);
    } catch (error) {
        console.error("Gemini Error:", error);

        return Response.json(
            {
                error: error.message,
            },
            { status: 500 }
            );
        }
}