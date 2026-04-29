import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { LessonProvider } from './src/context/LessonContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  console.log('✅ APP JS KELOAD - ROOT ACTIVE');

  return (
    <AuthProvider>
      <LessonProvider>
        <AppNavigator />
      </LessonProvider>
    </AuthProvider>
  );
}
