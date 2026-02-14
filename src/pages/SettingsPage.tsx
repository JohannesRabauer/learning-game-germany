import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';
import BigButton from '../components/common/BigButton';
import Modal from '../components/common/Modal';
import LanguageSwitch from '../components/common/LanguageSwitch';
import { downloadUserData, uploadUserData } from '../utils/exportImport';
import { Volume2, VolumeX, Download, Upload, Trash2 } from 'lucide-react';
import type { Klasse } from '../types/question';

export default function SettingsPage() {
  const { t } = useTranslation();
  const { profile, settings, updateProfile, updateSettings, clearUser } = useUser();
  const { resetProgress } = useGame();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [importMessage, setImportMessage] = useState('');

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const success = await uploadUserData(file);
    setImportMessage(success ? t('settings.importSuccess') : t('settings.importError'));
    if (success) window.location.reload();
  };

  const handleDelete = () => {
    clearUser();
    resetProgress();
    setShowDeleteConfirm(false);
    window.location.reload();
  };

  return (
    <div className="space-y-4 py-4 max-w-md mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-800">{t('settings.title')}</h1>

      {/* Sound */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {settings.soundEnabled ? <Volume2 size={22} className="text-primary" /> : <VolumeX size={22} className="text-gray-400" />}
            <span className="font-bold text-gray-700">{t('settings.sound')}</span>
          </div>
          <button
            onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
            className={`relative w-12 h-7 rounded-full transition-colors cursor-pointer ${
              settings.soundEnabled ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${
              settings.soundEnabled ? 'left-[calc(100%-1.625rem)]' : 'left-0.5'
            }`} />
          </button>
        </div>
      </motion.div>

      {/* Class selector */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <p className="font-bold text-gray-700 mb-3">{t('settings.class')}</p>
        <div className="grid grid-cols-4 gap-2">
          {([1, 2, 3, 4] as Klasse[]).map((k) => (
            <button
              key={k}
              onClick={() => updateProfile({ klasse: k })}
              className={`py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                profile?.klasse === k
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Language */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <p className="font-bold text-gray-700 mb-3">{t('settings.language')}</p>
        <LanguageSwitch />
      </motion.div>

      {/* Timer mode */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <p className="font-bold text-gray-700 mb-3">{t('settings.timer')}</p>
        <div className="grid grid-cols-3 gap-2">
          {(['relaxed', 'standard', 'challenge'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => updateSettings({ timerMode: mode })}
              className={`py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                settings.timerMode === mode
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t(`settings.timer${mode.charAt(0).toUpperCase() + mode.slice(1)}`)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Data management */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3">
        <p className="font-bold text-gray-700">{t('settings.data')}</p>

        <BigButton onClick={downloadUserData} color="primary" size="sm" className="w-full flex items-center justify-center gap-2">
          <Download size={18} /> {t('settings.exportData')}
        </BigButton>

        <label className="block">
          <div className="bg-primary/10 text-primary font-bold py-3 px-4 rounded-2xl text-center cursor-pointer hover:bg-primary/20 transition-colors flex items-center justify-center gap-2 min-h-[44px]">
            <Upload size={18} /> {t('settings.importData')}
          </div>
          <input type="file" accept=".json" onChange={handleImport} className="hidden" />
        </label>
        {importMessage && <p className="text-sm text-center font-semibold text-gray-600">{importMessage}</p>}

        <div className="pt-2 border-t border-gray-100">
          <BigButton onClick={() => setShowDeleteConfirm(true)} color="wrong" size="sm" className="w-full flex items-center justify-center gap-2">
            <Trash2 size={18} /> {t('settings.deleteData')}
          </BigButton>
        </div>
      </motion.div>

      <Modal isOpen={showDeleteConfirm} onClose={() => setShowDeleteConfirm(false)} title="⚠️">
        <p className="text-gray-700 mb-6">{t('settings.deleteConfirm')}</p>
        <div className="flex gap-3 justify-end">
          <BigButton onClick={() => setShowDeleteConfirm(false)} color="gray" size="sm">{t('actions.cancel')}</BigButton>
          <BigButton onClick={handleDelete} color="wrong" size="sm">{t('actions.delete')}</BigButton>
        </div>
      </Modal>
    </div>
  );
}
