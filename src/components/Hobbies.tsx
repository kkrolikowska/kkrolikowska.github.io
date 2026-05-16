import { useRef, type FC } from 'react';
import { profileData } from '../data/profile';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Hobbies: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section id="hobbies" className="lazy-section">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Beyond the <span className="text-accent">Office</span></h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '0 auto' }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {profileData.hobbies.map((hobby, idx) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                backgroundColor: 'var(--card-bg)',
                padding: '2.5rem 2rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.3s ease'
              }}
              className="hobby-card"
            >
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: 'var(--accent-color)'
              }}>
                <i className={hobby.icon}></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{hobby.name}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .hobby-card:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </section>
  );
};
