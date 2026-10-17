import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  // Safe server-side Gemini API route
  app.post('/api/ai/coach', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(200).json({
          available: false,
          message: 'Gemini API key not configured. Using offline intelligence engine.',
        });
      }

      const { profile, subjectScores, learningDna } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Act as an elite career and academic counselor for PathFinder AI.
Review this student profile:
Student Name: ${profile.name}
Class: ${profile.currentClass}
Target Goal: ${profile.targetCareer}
Learning Archetype: ${learningDna.archetype}
Top Subjects: ${subjectScores.map((s: any) => `${s.subject} (Score: ${s.compositeScore}%, Marks: ${s.marks}%, Interest: ${s.interest}%)`).join(', ')}

Provide a concise, motivating, 3-paragraph executive coaching breakdown:
1. Analysis of their hidden potential beyond conventional exam marks.
2. The specific high-leverage skill unlock that will accelerate their journey towards ${profile.targetCareer}.
3. A personalized mindset and execution strategy.
Keep it human, sharp, inspiring, and under 220 words.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      return res.status(200).json({
        available: true,
        insights: response.text,
      });
    } catch (err: any) {
      console.warn('Gemini API call failed, falling back to heuristic insights:', err?.message);
      return res.status(200).json({
        available: false,
        error: err?.message,
      });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'PathFinder AI' });
  });

  // Vite middleware for dev
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static files
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`PathFinder AI server running on port ${port}`);
  });
}

startServer();
