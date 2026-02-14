import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useUser, createDefaultProfile } from '../context/UserContext';
import BigButton from '../components/common/BigButton';
import MascotSpeech from '../components/common/MascotSpeech';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useConfetti } from '../hooks/useConfetti';
import type { Klasse } from '../types/question';

type Step = 'welcome' | 'name' | 'class' | 'language' | 'ready';

export default function OnboardingPage() {
  const { t, i18n } = useTranslation();
  const { setProfile } = useUser();
  const { getInstance, fireBig } = useConfetti();
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [klasse, setKlasse] = useState<Klasse>(1);
  const [lang, setLang] = useState<'de' | 'en'>(i18n.language?.startsWith('de') ? 'de' : 'en');

  const handleFinish = () => {
    fireBig();
    i18n.changeLanguage(lang);
    const profile = createDefaultProfile(name.trim(), klasse, lang);
    setTimeout(() => setProfile(profile), 1500);
  };

  const renderStep = () => {
    switch (step) {
      case 'welcome':
        return (
          <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="text-8xl mb-6">
              🦉
            </motion.div>
            <h1 className="text-3xl font-extrabold text-primary mb-3">{t('onboarding.welcomeTitle')}</h1>
            <p className="text-xl text-gray-600 mb-8">{t('onboarding.welcomeText')}</p>
            <MascotSpeech message={t('mascot.intro')} mood="excited" />
            <div className="mt-8">
              <BigButton onClick={() => setStep('name')} size="lg">{t('actions.start')}</BigButton>
            </div>
          </motion.div>
        );
      case 'name':
        return (
          <motion.div key="name" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="text-center">
            <div className="text-5xl mb-4">🦉</div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6">{t('onboarding.namePrompt')}</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('onboarding.namePlaceholder')}
              maxLength={20}
              className="w-full max-w-xs text-2xl font-bold text-center border-3 border-gray-300 rounded-2xl p-4 focus:border-primary focus:outline-none mx-auto block"
              autoFocus
            />
            <div className="mt-8">
              <BigButton onClick={() => setStep('class')} size="lg" disabled={!name.trim()}>
                {t('actions.next')} →
              </BigButton>
            </div>
          </motion.div>
        );
      case 'class':
        return (
          <motion.div key="class" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="text-center">
            <div className="text-5xl mb-4">🦉</div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6">{t('onboarding.classPrompt')}</h2>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
              {([1, 2, 3, 4] as Klasse[]).map((k) => (
                <BigButton
                  key={k}
                  onClick={() => { setKlasse(k); setStep('language'); }}
                  color={klasse === k ? 'primary' : 'gray'}
                  size="lg"
                  className="w-full"
                >
                  Klasse {k}
                </BigButton>
              ))}
            </div>
          </motion.div>
        );
      case 'language':
        return (
          <motion.div key="language" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="text-center">
            <div className="text-5xl mb-4">🦉</div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6">{t('onboarding.languagePrompt')}</h2>
            <div className="flex gap-4 justify-center">
              <BigButton
                onClick={() => { setLang('de'); setStep('ready'); }}
                color={lang === 'de' ? 'primary' : 'gray'}
                size="lg"
              >
                🇩🇪 Deutsch
              </BigButton>
              <BigButton
                onClick={() => { setLang('en'); setStep('ready'); }}
                color={lang === 'en' ? 'primary' : 'gray'}
                size="lg"
              >
                🇬🇧 English
              </BigButton>
            </div>
          </motion.div>
        );
      case 'ready':
        return (
          <motion.div key="ready" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center">
            <ReactCanvasConfetti
              onInit={({ confetti }) => getInstance(confetti)}
              style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}
            />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="text-8xl mb-6">
              🎉
            </motion.div>
            <h2 className="text-3xl font-extrabold text-primary mb-2">{t('onboarding.readyTitle')}</h2>
            <p className="text-xl text-gray-600 mb-8">{t('onboarding.readyText', { name: name.trim() })}</p>
            <BigButton onClick={handleFinish} size="lg">{t('onboarding.letsGo')} 🚀</BigButton>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
      </div>
    </div>
  );
}
