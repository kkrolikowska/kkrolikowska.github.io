import { type FC } from 'react';
import { profileData } from '../data/profile';
import { motion } from 'framer-motion';

export const Hero: FC = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem' }}>
              Hi, I'm <span className="text-accent">{profileData.name.split(' ')[0]}</span>
            </h1>
            <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 500, marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              {profileData.title}
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
              {profileData.summary}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#experience" className="btn btn-primary">
                View Experience
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', justifySelf: 'center' }}
          >
            <div
              style={{
                width: 'clamp(280px, 40vw, 450px)',
                height: 'clamp(280px, 40vw, 450px)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                border: '8px solid var(--accent-color)',
                boxShadow: 'var(--card-shadow)',
                animation: 'morph 8s ease-in-out infinite'
              }}
            >
              <img
                src="/images/profile.jpg"
                alt={profileData.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .btn {
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .btn-primary {
          background-color: var(--accent-color);
          color: white;
        }
        .btn-primary:hover {
          background-color: var(--accent-secondary);
          transform: translateY(-3px);
        }
        .btn-secondary {
          border: 2px solid var(--accent-color);
          color: var(--accent-color);
        }
        .btn-secondary:hover {
          background-color: var(--accent-color);
          color: white;
          transform: translateY(-3px);
        }
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
      `}</style>
    </section>
  );
};
