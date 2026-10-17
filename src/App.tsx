import React, { useState } from 'react';
import { StudentProvider, useStudent } from './context/StudentContext';
import { LandingPageLayer } from './components/LandingPageLayer';
import { LoginLayer } from './components/LoginLayer';
import { DashboardLayer } from './components/DashboardLayer';
import { OnboardingModal } from './components/OnboardingModal';
const AppContent: React.FC = () => {
  const { currentLayer, isOnboardingOpen, setIsOnboardingOpen } = useStudent();

  return (
    <>
      {/* Three Architectural Layers */}
      {currentLayer === 'landing' && <LandingPageLayer />}

      {currentLayer === 'login' && <LoginLayer />}

      {currentLayer === 'dashboard' && <DashboardLayer />}

      {/* Global Modals */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </>
  );
};

export default function App() {
  return (
    <StudentProvider>
      <AppContent />
    </StudentProvider>
  );
}
