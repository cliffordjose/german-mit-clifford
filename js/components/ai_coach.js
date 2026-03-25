/**
 * AICoach - Advanced Speech Analysis & Feedback System
 * Powered by Google Gemini 2.0 Flash
 */
class AICoach {
    constructor() {
        // Decode obfuscated key
        this.apiKey = window.GEMINI_API_KEY_ENC ? atob(window.GEMINI_API_KEY_ENC) : "";
        this.apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
    }

    /**
     * Analyzes transcription against target text using Gemini LLM.
     * @param {string} target The correct German phrase
     * @param {string} result What the UI heard (transcript)
     * @returns {Promise<Object>} Analysis result
     */
    async analyze(target, result) {
        if (!this.apiKey) {
            console.error("Gemini API Key is missing!");
            return this.getFallbackAnalysis(target, result);
        }

        const prompt = `
            You are a German Pronunciation Coach. 
            Target Phrase: "${target}"
            User Spoke: "${result}"

            Perform a detailed phonetic analysis. 
            1. Compare the user's transcript to the target phrase.
            2. Assign an accuracy score from 0 to 100.
            3. Create a heatmap of the target words. For each word in the target phrase, label it "perfect" (exact match), "near" (phonetically close), or "miss" (wrong or missing).
            4. Provide 2-3 specific "Phonetic Tips" for German learners based on their mistakes.
            5. Provide a short, encouraging "Conversational Tip" (1 sentence).

            Return ONLY a JSON object in this format:
            {
                "score": 85,
                "heatmap": [
                    {"word": "Guten", "status": "perfect"},
                    {"word": "Morgen", "status": "near"}
                ],
                "feedback": ["The 'r' in Morgen should be voiced deep in the throat.", "Focus on the vowel length."],
                "conversational_tip": "You're getting the rhythm right! Just watch those r-sounds."
            }
        `;

        try {
            const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { responseMimeType: "application/json" }
                })
            });

            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

            const data = await response.json();
            const aiResult = JSON.parse(data.candidates[0].content.parts[0].text);
            
            return {
                score: aiResult.score || 0,
                heatmap: aiResult.heatmap || [],
                feedback: aiResult.feedback || [],
                conversational_tip: aiResult.conversational_tip || "Keep practicing!"
            };

        } catch (error) {
            console.error("Gemini Analysis Failed:", error);
            return this.getFallbackAnalysis(target, result);
        }
    }

    getFallbackAnalysis(target, result) {
        // Basic fallback if API fails
        const targetWords = target.toLowerCase().replace(/[.,!?]/g, "").split(' ');
        const resultWords = result.toLowerCase().replace(/[.,!?]/g, "").split(' ');
        
        let heatmap = targetWords.map(word => ({
            word,
            status: resultWords.includes(word) ? 'perfect' : 'miss'
        }));

        let matchCount = heatmap.filter(h => h.status === 'perfect').length;
        let score = Math.round((matchCount / targetWords.length) * 100);

        return {
            score,
            heatmap,
            feedback: ["(Fallback) Gemini API was unavailable. Check your internet or API key."],
            conversational_tip: "The AI is offline, but I'm still tracking your progress!"
        };
    }
}

window.AICoach = new AICoach();
