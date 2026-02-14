import type { ReactNode } from 'react';
import BottomNav from './BottomNav';
import Navbar from './Navbar';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 pb-24 md:pb-4 max-w-4xl mx-auto w-full">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
