import { useRef, type FC } from 'react';
import { profileData } from '../data/profile';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Experience: FC = () => {
  return (
    <section id="experience" className="lazy-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Professional <span className="text-accent">Experience</span></h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '0 auto' }}></div>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'var(--border-color)',
            transform: 'translateX(-50%)',
          }} className="timeline-line"></div>

          {profileData.experience.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 20px !important; }
        }
      `}</style>
    </section>
  );
};

const ExperienceItem: FC<{ exp: any; index: number }> = ({ exp, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.2, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: isEven ? 'flex-start' : 'flex-end',
        alignItems: 'center',
        marginBottom: '6rem',
        position: 'relative',
        width: '100%'
      }}
      className="experience-row"
    >
      {/* Timeline Dot */}
      <div style={{
        position: 'absolute',
        left: '50%',
        width: '20px',
        height: '20px',
        backgroundColor: 'var(--accent-color)',
        borderRadius: '50%',
        transform: 'translateX(-50%)',
        border: '4px solid var(--bg-color)',
        zIndex: 10
      }} className="timeline-dot"></div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          width: '45%',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          boxShadow: 'var(--card-shadow)',
          border: '1px solid var(--border-color)'
        }}
        className="experience-card"
      >
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <img src={exp.image} alt={exp.role} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
        </div>
        <div style={{ padding: '2rem' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>{exp.period}</span>
          <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{exp.role}</h3>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{exp.company}</h4>
          <p>{exp.description}</p>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .experience-row { justify-content: flex-start !important; padding-left: 50px; }
          .timeline-dot { left: 20px !important; }
          .experience-card { width: 100% !important; }
        }
      `}</style>
    </div>
  );
};
