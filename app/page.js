"use client";
import { useState } from "react";
export default function Home() {
  const [notes, setNotes] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!notes.trim()) return;

    setError("");
    setResults(null);

    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes,
        }),
      });
      const data = await response.json();
      console.log("API Response:", data);
      if (!response.ok) {
        setError("Unable to generate study materials. Please try again.");
        return;
      }
      setResults(data);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          StudyMate AI
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Turn study notes into summaries,
          flashcards, and quizzes instantly
        </p>
        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
          <textarea className="w-full mt-8 border border-gray-300 rounded-xl p-5 h-64 shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-transparent" 
            placeholder="Paste your study notes here..." 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-2 text-right">
            {notes.length} characters
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className={`mt-6 text-white px-8 py-3 rounded-xl font-semibold transition
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed opacity-70"
                    : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                }
              `}
            >
              {loading ? "Generating..." : "Generate Study Materials"}
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}
        
        {/* Results section */}
        {results && !results.error && (
          <div className="mt-10 space-y-6">
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h2 className="font-bold text-xl">
                📄 Summary
              </h2>
              <p className="mt-3">
                {results.summary}
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h2 className="font-bold text-xl">
                🎯 Key Points
              </h2>

              <ul className="list-disc ml-5 mt-3">
                {results.keyPoints?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h2 className="font-bold text-xl">
                🃏 Flashcards
              </h2>
              {results.flashcards?.map((card, index) => (
                <div key={index} className="mt-4">
                  <p>
                    <strong>Q:</strong> {card.question}
                  </p>
                  
                  <p>
                    <strong>A:</strong> {card.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h2 className="font-bold text-xl">
                ❓ Quiz Questions
              </h2>
              <ol className="list-decimal ml-5 mt-3">
                {results.quizQuestions?.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
      <footer className="text-center text-gray-500 mt-12 font-bold">
        Built with Next.js and Gemini AI
      </footer>
    </main>
  );
}
