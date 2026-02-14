import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useGame } from '../context/GameContext';
import BadgeGrid from '../components/rewards/BadgeGrid';
import TitleSelector from '../components/rewards/TitleSelector';
import CosmeticGrid from '../components/rewards/CosmeticGrid';
import ProgressBar from '../components/common/ProgressBar';
import { BADGES } from '../content/badges';
import { TITLES } from '../content/titles';
import { COSMETICS } from '../content/cosmetics';
import { ArrowLeft } from 'lucide-react';

type Tab = 'badges' | 'titles' | 'cosmetics';

export default function TrophyRoomPage() {
  const { t, i18n } = useTranslation('rewards');
  const navigate = useNavigate();
  const { progress, setActiveTitle, setActiveFrame } = useGame();
  const lang = i18n.language?.startsWith('de') ? 'de' : 'en';
  const [activeTab, setActiveTab] = useState<Tab>('badges');

  const totalBadges = BADGES.length;
  const badgeProgress = progress.badges.length / totalBadges;
  const totalTitles = TITLES.length;
  const ownedTitles = progress.unlockedTitles ?? [];
  const totalCosmetics = COSMETICS.length;
  const ownedCosmetics = progress.unlockedCosmetics ?? [];

  const tabs: { key: Tab; label: string; icon: string; count: string }[] = [
    {
      key: 'badges',
      label: t('tabs.badges'),
      icon: '🏅',
      count: `${progress.badges.length}/${totalBadges}`,
    },
    {
      key: 'titles',
      label: t('tabs.titles'),
      icon: '👑',
      count: `${ownedTitles.length}/${totalTitles}`,
    },
    {
      key: 'cosmetics',
      label: t('tabs.cosmetics'),
      icon: '🎨',
      count: `${ownedCosmetics.length}/${totalCosmetics}`,
    },
  ];

  return (
    <div className="space-y-5 py-4 max-w-lg mx-auto">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/profile')} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-extrabold text-gray-800">🏆 {t('badges.trophyRoom')}</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 p-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
              activeTab === tab.key
                ? 'border-primary bg-primary/5 shadow-sm'
                : 'border-gray-100 bg-white hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <p className={`text-xs font-bold mt-0.5 ${activeTab === tab.key ? 'text-primary' : 'text-gray-500'}`}>
              {tab.label}
            </p>
            <p className="text-[10px] font-semibold text-gray-400">{tab.count}</p>
          </motion.button>
        ))}
      </div>

      {/* Badge tab */}
      {activeTab === 'badges' && (
        <motion.div
          key="badges"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600 font-semibold text-sm">
                {t('badges.progress', { earned: progress.badges.length, total: totalBadges })}
              </p>
              <span className="text-xs font-bold text-primary">{Math.round(badgeProgress * 100)}%</span>
            </div>
            <ProgressBar value={badgeProgress} color="bg-xp" height="h-2.5" />
          </div>
          <BadgeGrid earnedBadges={progress.badges} />
        </motion.div>
      )}

      {/* Titles tab */}
      {activeTab === 'titles' && (
        <motion.div
          key="titles"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <p className="text-gray-600 font-semibold text-sm mb-1">
              {lang === 'de'
                ? `${ownedTitles.length} von ${totalTitles} Titeln freigeschaltet`
                : `${ownedTitles.length} of ${totalTitles} titles unlocked`}
            </p>
            <p className="text-xs text-gray-400">
              {lang === 'de'
                ? 'Titel werden in Schatztruhen gefunden'
                : 'Titles are found in treasure chests'}
            </p>
          </div>
          <TitleSelector
            unlockedTitles={ownedTitles}
            activeTitle={progress.activeTitle ?? ''}
            onSelect={setActiveTitle}
          />
        </motion.div>
      )}

      {/* Cosmetics tab */}
      {activeTab === 'cosmetics' && (
        <motion.div
          key="cosmetics"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <p className="text-gray-600 font-semibold text-sm mb-1">
              {lang === 'de'
                ? `${ownedCosmetics.length} von ${totalCosmetics} Skins freigeschaltet`
                : `${ownedCosmetics.length} of ${totalCosmetics} skins unlocked`}
            </p>
            <p className="text-xs text-gray-400">
              {lang === 'de'
                ? 'Skins werden in Schatztruhen gefunden'
                : 'Skins are found in treasure chests'}
            </p>
          </div>

          {/* Frames section */}
          <div>
            <h3 className="text-sm font-bold text-gray-600 mb-2">
              {lang === 'de' ? 'Rahmen' : 'Frames'}
            </h3>
            <CosmeticGrid
              type="frame"
              unlockedCosmetics={ownedCosmetics}
              activeId={progress.activeFrame ?? 'default'}
              onSelect={setActiveFrame}
            />
          </div>

          {/* Backgrounds section */}
          <div>
            <h3 className="text-sm font-bold text-gray-600 mb-2">
              {lang === 'de' ? 'Hintergründe' : 'Backgrounds'}
            </h3>
            <CosmeticGrid
              type="background"
              unlockedCosmetics={ownedCosmetics}
              activeId=""
              onSelect={() => {}}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
