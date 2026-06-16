"use client";
import { useState } from "react";
export default function Home() {
  const [notes, setNotes] = useState("");

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          StudyMate AI
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Turn study notes into summaries,
          flashcards, and quizzes instantly
        </p>
        <textarea className="w-full mt-8 border rounded-lg p-4 h-64" placeholder="Paste your study notes here..." value={notes}
        onChange={(e) => setNotes(e.target.value)}/>
        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg">
          Generate Study Materials
        </button>
        {/* Results section */}
        <div className="mt-10 space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl">
              Summary
            </h2>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl">
              Key Points
            </h2>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl">
              Flashcards
            </h2>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="font-bold text-xl">
              Quiz Questions
            </h2>
          </div>
        </div>
      </div>
    </main>

  );
}
