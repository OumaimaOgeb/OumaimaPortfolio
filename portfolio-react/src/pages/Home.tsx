import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Translations } from '../data/translations';
import { getImage } from '../data/images';
import styles from './Home.module.css';

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

      {/* Portrait */}
      <div className={styles.imageCenter}>
        <img
          src="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/9ab6e0d1-dcc1-4988-aa06-2587b7df8636_rw_1200.gif?h=885e2978a4018e3cfb5b132d3f6e20c2"
          srcSet="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/9ab6e0d1-dcc1-4988-aa06-2587b7df8636_rw_600.gif?h=b4166b5b3d7ebafb4e7bb77e132b0aa1 600w, https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/9ab6e0d1-dcc1-4988-aa06-2587b7df8636_rw_1200.gif?h=885e2978a4018e3cfb5b132d3f6e20c2 864w"
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

      {/* Image pairs */}
      <div className={`${styles.imagePair} ${styles.imagePairPadV}`}>
        <div className={styles.pairImg}>
          <img
            src="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/eceba8ab-2c15-4a73-ace4-c9d993f4eab0_rw_1200.png?h=4e2e81e7227f3de45dd9a1367d6e9a2d"
            srcSet="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/eceba8ab-2c15-4a73-ace4-c9d993f4eab0_rw_600.png?h=69320735024a004c241cfda5302450ac 600w, https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/eceba8ab-2c15-4a73-ace4-c9d993f4eab0_rw_1200.png?h=4e2e81e7227f3de45dd9a1367d6e9a2d 700w"
            sizes="(max-width: 700px) 100vw, 700px"
            alt=""
          />
        </div>
        <div className={styles.pairImg}>
          <img
            src="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/457f896a-3499-4d89-a303-08bec4268a8d_rw_1200.gif?h=9fcd3a5036d071145bbd5bf09b8c5d5b"
            srcSet="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/457f896a-3499-4d89-a303-08bec4268a8d_rw_600.gif?h=e190bf8a8fdfc87d9416dfa1b64f6026 600w, https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/457f896a-3499-4d89-a303-08bec4268a8d_rw_1200.gif?h=9fcd3a5036d071145bbd5bf09b8c5d5b 700w"
            sizes="(max-width: 700px) 100vw, 700px"
            alt=""
          />
        </div>
      </div>

      <div className={`${styles.imagePair} ${styles.imagePairPadB}`}>
        <div className={styles.pairImg}>
          <img
            src="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/405882f5-2ae0-445d-9b22-581d373904a5_rw_1200.gif?h=12c43daba93dbf1eade2de49fffd16d3"
            srcSet="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/405882f5-2ae0-445d-9b22-581d373904a5_rw_600.gif?h=9add923fa56e0f777a9759112ea6a643 600w, https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/405882f5-2ae0-445d-9b22-581d373904a5_rw_1200.gif?h=12c43daba93dbf1eade2de49fffd16d3 700w"
            sizes="(max-width: 700px) 100vw, 700px"
            alt=""
          />
        </div>
        <div className={styles.pairImg}>
          <img
            src="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/d51158d5-709f-498a-adbd-ff08bce37a61_rw_1200.png?h=cafe72a6703b6c5fa10593f9ecbf4ace"
            srcSet="https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/d51158d5-709f-498a-adbd-ff08bce37a61_rw_600.png?h=3fbbdf4ebfc6fcebb121aa47cc8a15d8 600w, https://cdn.myportfolio.com/bd64156d-0404-4e28-bf35-e8584a8679cc/d51158d5-709f-498a-adbd-ff08bce37a61_rw_1200.png?h=cafe72a6703b6c5fa10593f9ecbf4ace 700w"
            sizes="(max-width: 700px) 100vw, 700px"
            alt=""
          />
        </div>
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

      {/* Some work */}
      <div className={`${styles.headingCenter} ${styles.headingCenterTop}`}>
        <h2>{t.workHeading}</h2>
        <p>{t.workSub}</p>
      </div>

      <div className={styles.gallery}>
        {(['img1','img3','img5','img6','img7','img8','img9','img10','img11','img12','img13','img14','img15','img16'] as const).map((key) => (
          <div key={key} className={styles.gItem}>
            <img src={getImage(key)} alt="" />
          </div>
        ))}
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
