# 🎓 StudyMate AI

StudyMate AI is an AI-powered study assistant that transforms lengthy study notes into concise summaries, key points, flashcards, and quiz questions. The goal is to help students study more efficiently and reduce the time spent manually creating revision materials.

## 🚀 Live Demo

**Live URL:** https://studymate-ai-pied.vercel.app/

## 📂 GitHub Repository

**Repository:** https://github.com/manangithubiitm/studymate-ai

---

## 📖 Problem Statement

Students often spend a significant amount of time reading lengthy notes, highlighting important concepts, creating summaries, and preparing revision material before exams.

Traditional study methods can be:

* Time-consuming
* Repetitive
* Difficult to revise quickly

StudyMate AI addresses this challenge by automatically generating structured study materials from raw notes.

---

## ✨ Features

### 📄 AI-Generated Summary

Generate concise summaries from lengthy study notes.

### 🎯 Key Points Extraction

Identify the most important concepts and takeaways.

### 🃏 Flashcards Generation

Automatically create question-answer flashcards for active recall learning.

### ❓ Quiz Questions

Generate practice questions to test understanding.

### ⚠️ Error Handling

User-friendly error messages are displayed when content generation fails.

### 🎨 Clean User Interface

Simple and responsive UI built using Next.js and Tailwind CSS.

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### AI

* Google Gemini 2.5 Flash API

### Deployment

* Vercel

---

## 🏗️ Project Architecture

```text
User Notes
    ↓
Next.js Frontend
    ↓
API Route (/api/generate)
    ↓
Google Gemini API
    ↓
Structured JSON Response
    ↓
Summary + Flashcards + Quiz Generation
```

---

## 📸 Screenshots

### Home Page

<img width="1883" height="887" alt="Screenshot (1223)" src="https://github.com/user-attachments/assets/f371e957-758e-4f00-9084-9769be6641cc" />


### Generated Study Materials

<img width="1720" height="756" alt="Screenshot (1224)" src="https://github.com/user-attachments/assets/25beb81e-c42d-4a63-9d21-23c4862c0b98" />
<img width="1379" height="608" alt="Screenshot (1219)" src="https://github.com/user-attachments/assets/8e8b6112-43d5-41ed-9a5c-ce7d1a13aa4e" />
<img width="1368" height="884" alt="Screenshot (1220)" src="https://github.com/user-attachments/assets/f54fcb63-ee12-47fd-ac7b-c4ca2fd356b0" />



---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/manangithubiitm/studymate-ai.git
cd studymate-ai
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env.local` file:

```env
GEMINI_API_KEY=your_api_key_here
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📚 Example Use Cases

StudyMate AI can process notes from:

* Computer Science
* Biology
* Physics
* History
* Economics
* Any text-based learning material

---

## 🎯 Future Improvements

* PDF Upload Support
* Download Flashcards as PDF
* Dark Mode
* User Authentication
* Study History
* Export Quiz Questions

---

## 👨‍💻 Author

**Manan Tilwani**

Built as part of the Amplify Builder Challenge to explore practical applications of Generative AI in education.

---
