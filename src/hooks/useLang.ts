import { useState, useCallback } from 'react';
import type { Lang } from '../data/translations';

const STORAGE_KEY = 'lang';

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem(STORAGE_KEY) as Lang | null) ?? 'en'
  );

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
    setLangState(l);
  }, []);

  return [lang, setLang];
}

export default useLang;
