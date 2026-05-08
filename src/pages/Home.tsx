import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Translations } from '../data/translations';
import { getImage } from '../data/images';
import styles from './Home.module.css';
import homeImage from '../assets/gifs/home.gif';
import frameOne from '../assets/images/one.jpeg';
import frameTwo from '../assets/gifs/second.gif';
import frameThree from '../assets/gifs/third.gif';
import frameFour from '../assets/images/four.jpeg';
import brandWatanya from '../assets/images/watanya.png';
import brandOzy from '../assets/images/ozy.png';
import brandClamant from '../assets/images/clamant.png';
import brandChancy from '../assets/images/chancy.png';
import brandCiteCulture from '../assets/images/citeCulture.png';
import brandSaraya from '../assets/images/saraya.png';

const brandLogos = [brandWatanya, brandOzy, brandClamant, brandChancy, brandCiteCulture, brandSaraya];

interface Props {
  t: Translations;
}

export default function Home({ t }: Props) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:oumaimaogeb@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main className={styles.page}>

      <div className={styles.imageCenter}>
        <img
          src={homeImage}
          sizes="(max-width: 864px) 100vw, 864px"
          alt="Ogeb Oumaima"
        />
      </div>

      {/* Role typing */}
      <div className={styles.roleBanner}>
        <span className={styles.roleTyping}>{t.roleTitle}</span>
      </div>

      {/* Bio */}
      <div className={`${styles.tree} ${styles.treePadded}`}>
        <div className={styles.treeBig}>
          <p className={styles.bioText}>{t.bio}</p>
        </div>
        <div className={`${styles.treeSmall} ${styles.treeBottom}`}>
          <p className={styles.location}>Tunis, Tunisia.</p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Services */}
      <div className={`${styles.tree} ${styles.treeServicesPad}`}>
        <div className={styles.treeBig}>
          <h2 className={styles.servicesHeading}>{t.servicesHeading}</h2>
        </div>
        <div className={styles.treeSmall}>
          <div className={styles.servicesList}>
            {t.services.map((s) => (
              <div key={s.title}>
                <strong>{s.title}</strong>
                <span>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Framed image grid */}
      <div className={styles.frameGrid}>
        {[frameOne, frameTwo, frameThree, frameFour].map((src, i) => (
          <div key={i} className={styles.frameItem}>
            <span className={`${styles.corner} ${styles.cornerTL}`} />
            <span className={`${styles.corner} ${styles.cornerTR}`} />
            <span className={`${styles.corner} ${styles.cornerBL}`} />
            <span className={`${styles.corner} ${styles.cornerBR}`} />
            <img src={src} alt="" />
          </div>
        ))}
      </div>


      {/* Stats */}
      <div className={styles.stats}>
        {t.stats.map((s) => (
          <div className={styles.statCol} key={s.num}>
            <div className={styles.statNumber}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Brands */}
      <div className={styles.brandsSection}>
        <div className={styles.brandsHeading}>
          <h2>{t.brandsHeading}</h2>
          <p>{t.brandsSub}</p>
        </div>
        <div className={styles.brandsGrid}>
          {brandLogos.map((src, i) => (
            <div key={i} className={styles.brandItem}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Some work */}
      <div className={`${styles.headingCenter} ${styles.headingCenterTop}`}>
        <h2>{t.workHeading}</h2>
        <p>{t.workSub}</p>
      </div>

      <div className={styles.gallery}>
        <div className={styles.gCol} style={{ paddingTop: '0rem' }}>
          <div className={styles.gItem}><img src={getImage('work1')} alt="" /></div>
          <div className={styles.gItem}><img src={getImage('work2')} alt="" /></div>
        </div>
        <div className={styles.gCol} style={{ paddingTop: '3rem' }}>
          <div className={styles.gItem}><img src={getImage('work3')} alt="" /></div>
          <div className={styles.gItem}><img src={getImage('work4')} alt="" /></div>
        </div>
        <div className={styles.gCol} style={{ paddingTop: '1rem' }}>
          <div className={styles.gItem}><img src={getImage('work5')} alt="" /></div>
          <div className={styles.gItem}><img src={getImage('work6')} alt="" /></div>
        </div>
        <div className={styles.gCol} style={{ paddingTop: '0rem' }}>
          <div className={styles.gItem}><img src={getImage('work7')} alt="" /></div>
          <div className={styles.gItem}><img src={getImage('work8')} alt="" /></div>
          <div className={styles.gItem}><img src={getImage('work9')} alt="" /></div>
        </div>
        <div className={styles.gCol} style={{ paddingTop: '2rem' }}>
          <div className={styles.gItem}><img src={getImage('work10')} alt="" /></div>
          <div className={styles.gItem}><img src={getImage('work11')} alt="" /></div>
        </div>
        <div className={styles.gCol} style={{ paddingTop: '4rem' }}>
          <div className={styles.gItem}><img src={getImage('work12')} alt="" /></div>
        </div>
      </div>

      <div className={styles.modButton}>
        <Link to="/work" className={styles.exploreBtn}>{t.exploreBtn} &nbsp;→</Link>
      </div>

      {/* Contact */}
      <div id="contact" className={styles.contact}>
        <p className={styles.contactSub}>{t.contactSub}</p>
        <h2
          className={styles.contactTitle}
          dangerouslySetInnerHTML={{ __html: t.contactTitle }}
        />
      </div>

      {/* Form */}
      <div className={styles.formWrap}>
        {sent ? (
          <p className={styles.formSent}>{t.form.thanks}</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>{t.form.name} *</label>
              <input
                type="text"
                value={form.name}
                placeholder={t.form.namePh}
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label>{t.form.email} *</label>
              <input
                type="email"
                value={form.email}
                placeholder="your@email.com"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label>{t.form.message} *</label>
              <textarea
                value={form.message}
                placeholder={t.form.messagePh}
                required
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>{t.form.submit} →</button>
          </form>
        )}
        <div ref={formRef} />
      </div>

    </main>
  );
}
