import { useState } from "react";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GOOGLE_GEN_AI_KEY });

export function useModel() {
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const generate = async (prompt: string): Promise<string> => {
        setLoading(true);
        setError(null);

        try {
            const result = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: prompt,
                config: {
                    thinkingConfig: {
                        thinkingLevel: ThinkingLevel.MINIMAL,
                    }
                },
            });

            console.log(result)

            const text = result.text || "";
            setResponse(text);
            return text;
        } catch (err) {
            setError(err as Error);
            console.log(err)
            return "";
        } finally {
            setLoading(false);
        }
    };

    return {
        response,
        loading,
        error,
        generate,
    };
}