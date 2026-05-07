import type { Translations } from '../data/translations';
import styles from './Footer.module.css';

interface Props {
  t: Translations;
}

export default function Footer({ t }: Props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <span>{t.footer}</span>
      <button className={styles.back} onClick={scrollTop}>
        {t.backTop} ↑
      </button>
    </footer>
  );
}
