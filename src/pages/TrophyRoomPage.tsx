import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import BadgeGrid from '../components/rewards/BadgeGrid';
import { ArrowLeft } from 'lucide-react';

export default function TrophyRoomPage() {
  const { t } = useTranslation('rewards');
  const navigate = useNavigate();
  const { progress } = useGame();

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/profile')} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-extrabold text-gray-800">🏆 {t('badges.trophyRoom')}</h1>
      </div>

      <p className="text-gray-500 font-semibold">
        {t('badges.progress', { earned: progress.badges.length, total: 18 })}
      </p>

      <BadgeGrid earnedBadges={progress.badges} />
    </div>
  );
}
