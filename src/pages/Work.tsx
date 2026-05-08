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
  const [lb, setLb] = useState<Lightbox>({ open: false, project: null, index: 0 });

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
      const i = (prev.index - 1 + projects.length) % projects.length;
      return { open: true, project: projects[i], index: i };
    });
  }, []);

  const lbNext = useCallback(() => {
    setLb((prev) => {
      const i = (prev.index + 1) % projects.length;
      return { open: true, project: projects[i], index: i };
    });
  }, []);

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

  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroLabel}>{t.heroLabel}</p>
        <h1 className={styles.heroQuote}>{t.heroQuote}</h1>
      </section>

      {/* Intro */}
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>{t.workIntro}</h2>
        <p className={styles.introPara}>{t.workIntroPara}</p>
      </div>

      {/* Grid — pairs of images */}
      <div className={styles.grid}>
        {rows.map((row, ri) => (
          <div className={styles.row} key={ri}>
            {row.map((project, ci) => (
              <div key={project.imageKey} className={styles.item} onClick={() => openLightbox(project, ri * 2 + ci)}>
                <div className={styles.imgWrap}>
                  <img src={getImage(project.imageKey)} alt={lang === 'de' ? project.titleDe : project.title} />
                </div>
                <div className={styles.caption}>
                  <strong>{lang === 'de' ? project.titleDe : project.title}</strong>
                  <span>{lang === 'de' ? project.descDe : project.desc}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lb.open && lb.project && (
        <div className={styles.lightbox} onClick={closeLb}>
          <button className={styles.lbClose} onClick={closeLb}>✕ Close</button>
          <img
            src={getImage(lb.project.imageKey)}
            alt={lang === 'de' ? lb.project.titleDe : lb.project.title}
            className={styles.lbImg}
            onClick={(e) => e.stopPropagation()}
          />
          <p className={styles.lbCaption}>
            {lang === 'de' ? lb.project.titleDe : lb.project.title}
          </p>
          <button className={styles.lbPrev} onClick={(e) => { e.stopPropagation(); lbPrev(); }}>‹</button>
          <button className={styles.lbNext} onClick={(e) => { e.stopPropagation(); lbNext(); }}>›</button>
        </div>
      )}
    </main>
  );
}
