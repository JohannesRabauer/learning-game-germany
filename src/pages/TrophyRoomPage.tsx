import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import BadgeGrid from '../components/rewards/BadgeGrid';
import ProgressBar from '../components/common/ProgressBar';
import { ArrowLeft } from 'lucide-react';

export default function TrophyRoomPage() {
  const { t } = useTranslation('rewards');
  const navigate = useNavigate();
  const { progress } = useGame();

  const badgeProgress = progress.badges.length / 18;

  return (
    <div className="space-y-5 py-4 max-w-lg mx-auto">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/profile')} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-extrabold text-gray-800">🏆 {t('badges.trophyRoom')}</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-600 font-semibold text-sm">
            {t('badges.progress', { earned: progress.badges.length, total: 18 })}
          </p>
          <span className="text-xs font-bold text-primary">{Math.round(badgeProgress * 100)}%</span>
        </div>
        <ProgressBar value={badgeProgress} color="bg-xp" height="h-2.5" />
      </div>

      <BadgeGrid earnedBadges={progress.badges} />
    </div>
  );
}
