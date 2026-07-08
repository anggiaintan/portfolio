import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import en from '../data/en';
import id from '../data/id';

const dictionaries = { en, id };

const LanguageContext = createContext(null);

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'id';
    return window.localStorage.getItem('lang') || 'id';
  });

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'id' : 'en'));

  const value = useMemo(() => {
    const dict = dictionaries[lang];
    const t = (path) => {
      const result = getByPath(dict, path);
      return result === undefined ? path : result;
    };
    return { lang, setLang, toggleLang, t, dict };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
