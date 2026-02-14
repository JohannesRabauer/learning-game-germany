import { useTranslation } from 'react-i18next';
import { useUser } from '../../context/UserContext';

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const { updateProfile, profile } = useUser();
  const currentLang = i18n.language?.startsWith('de') ? 'de' : 'en';

  const switchLanguage = (lang: 'de' | 'en') => {
    i18n.changeLanguage(lang);
    if (profile) updateProfile({ language: lang });
  };

  return (
    <div className="flex rounded-xl overflow-hidden border-2 border-gray-200">
      <button
        onClick={() => switchLanguage('de')}
        className={`px-3 py-1.5 text-sm font-bold transition-colors cursor-pointer ${
          currentLang === 'de' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        DE 🇩🇪
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-sm font-bold transition-colors cursor-pointer ${
          currentLang === 'en' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN 🇬🇧
      </button>
    </div>
  );
}
