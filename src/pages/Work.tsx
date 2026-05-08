import { useState, useEffect, useCallback } from 'react';
import type { Translations } from '../data/translations';
import { getImage } from '../data/images';
import projects from '../data/projects';
import type { Project } from '../data/projects';
import styles from './Work.module.css';

interface Props {
  t: Translations;
  lang: string;
}

interface Lightbox {
  open: boolean;
  project: Project | null;
  index: number;
}

export default function Work({ t, lang }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lb, setLb] = useState<Lightbox>({ open: false, project: null, index: 0 });

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) =>
        lang === 'de' ? p.categoryDe === activeCategory : p.category === activeCategory
      );

  const openLightbox = (project: Project, index: number) => {
    setLb({ open: true, project, index });
    document.body.style.overflow = 'hidden';
  };

  const closeLb = useCallback(() => {
    setLb((prev) => ({ ...prev, open: false }));
    document.body.style.overflow = '';
  }, []);

  const lbPrev = useCallback(() => {
    setLb((prev) => {
      const i = (prev.index - 1 + filtered.length) % filtered.length;
      return { open: true, project: filtered[i], index: i };
    });
  }, [filtered]);

  const lbNext = useCallback(() => {
    setLb((prev) => {
      const i = (prev.index + 1) % filtered.length;
      return { open: true, project: filtered[i], index: i };
    });
  }, [filtered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lb.open) return;
      if (e.key === 'ArrowLeft') lbPrev();
      if (e.key === 'ArrowRight') lbNext();
      if (e.key === 'Escape') closeLb();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lb.open, lbPrev, lbNext, closeLb]);

  // Reset category when language changes
  useEffect(() => { setActiveCategory('all'); }, [lang]);

  const categories = lang === 'de' ? t.categories : ['Performance', 'Brand & Identity'];

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>{t.heroLabel}</p>
        <h1 className={styles.heroQuote}>{t.heroQuote}</h1>
      </section>

      {/* Filter */}
      <div className={styles.filterBar}>
        <button
          className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.filterActive : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          {t.filterAll}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <div
            key={project.imageKey}
            className={styles.card}
            onClick={() => openLightbox(project, i)}
          >
            <img src={getImage(project.imageKey)} alt={lang === 'de' ? project.captionDe : project.caption} />
            <div className={styles.cardOverlay}>
              <p className={styles.cardCaption}>
                {lang === 'de' ? project.captionDe : project.caption}
              </p>
              <span className={styles.cardCategory}>
                {lang === 'de' ? project.categoryDe : project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lb.open && lb.project && (
        <div className={styles.lightbox} onClick={closeLb}>
          <button className={styles.lbClose} onClick={closeLb}>✕ Close</button>
          <img
            src={getImage(lb.project.imageKey)}
            alt={lang === 'de' ? lb.project.captionDe : lb.project.caption}
            className={styles.lbImg}
            onClick={(e) => e.stopPropagation()}
          />
          <p className={styles.lbCaption}>
            {lang === 'de' ? lb.project.captionDe : lb.project.caption}
          </p>
          <button className={styles.lbPrev} onClick={(e) => { e.stopPropagation(); lbPrev(); }}>‹</button>
          <button className={styles.lbNext} onClick={(e) => { e.stopPropagation(); lbNext(); }}>›</button>
        </div>
      )}
    </main>
  );
}
