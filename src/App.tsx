import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import { GameProvider } from './context/GameContext';
import { SoundProvider } from './context/SoundContext';
import AppShell from './components/layout/AppShell';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import GamePage from './pages/GamePage';
import ProfilePage from './pages/ProfilePage';
import TrophyRoomPage from './pages/TrophyRoomPage';
import DailyChallengePage from './pages/DailyChallengePage';
import SettingsPage from './pages/SettingsPage';

function AppRoutes() {
  const { isOnboarded } = useUser();

  if (!isOnboarded) {
    return <OnboardingPage />;
  }

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subject/:subject" element={<SubjectPage />} />
        <Route path="/game/:subject/:mode" element={<GamePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/trophies" element={<TrophyRoomPage />} />
        <Route path="/daily" element={<DailyChallengePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/learning-game-germany">
      <UserProvider>
        <GameProvider>
          <SoundProvider>
            <AppRoutes />
          </SoundProvider>
        </GameProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
