# 📱 Mini LMS App (React Native - Expo)

A simple Learning Management System (LMS) mobile app built using React Native (Expo).  
This project was developed as part of a technical case study to demonstrate mobile development skills, application flow, and clean architecture.

---

## 🚀 Features

### ✅ Core Features

- 🔐 Simple Login (dummy authentication)
- 📚 Course List
- 📖 Course Detail & Lessons
- 🔁 Navigation between screens

### ⭐ Additional Features

- ✅ Mark lesson as completed
- 💾 Persist progress using AsyncStorage
- 🧩 Clean and modular architecture
- 🎨 Simple and user-friendly UI

---

## 🧠 Tech Stack

- React Native (Expo)
- React Navigation (Stack & Bottom Tab)
- Context API (State Management)
- AsyncStorage (Local Persistence)

---

## 🏗️ Project Structure

src/
├── components # Reusable UI components
├── context # Global state (Auth & Lesson)
├── navigation # App navigation (Stack & Tab)
├── screens # Main screens (Home, Detail, Progress)
├── hooks # Custom hooks
├── data # Static / dummy data
└── theme # Styling and theme config

This modular structure improves maintainability and makes the application easier to scale.

---

## 🔄 Application Flow

1. User logs in (dummy authentication)
2. User sees course list
3. User selects a course
4. User views lessons
5. User marks lessons as completed
6. Progress is saved locally

---

## ⚙️ Installation & Running

```bash
# Install dependencies
npm install

# Run the project
npx expo start

```
---

## 🔑 Demo Credentials

Email: test@test.com
Password: 123456

---

## 🎥 Demo

You can try the app directly via APK:
https://expo.dev/artifacts/eas/43zfgcXNz7KBeTeG7XhhYQ.apk

---

## 📌 Design Decisions

* **Context API** was used instead of Redux because the app scope is relatively small and does not require complex state management.
* **AsyncStorage** is used to persist user session and lesson progress locally.
* The project is structured in a modular way to ensure scalability and maintainability.

---

## ⚠️ Limitations

* No real backend / API integration
* No real authentication system
* Minimal error handling

---

## 🚀 Future Improvements

* Integrate with real backend (API)
* Implement authentication (JWT / OAuth)
* Add loading & error states
* Improve UI/UX (animations, better layout)
* Use advanced state management (Redux Toolkit / Zustand)

---

## 🎯 Author

Rizky Aditya Maulana
Mobile Developer (React Native)

---

## 💬 Notes

This project focuses on clean architecture, application flow, and scalability rather than complex UI design.
