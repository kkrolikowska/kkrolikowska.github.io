import { useRef, type FC } from 'react';
import { profileData } from '../data/profile';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Skills: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  return (
    <section id="skills" style={{ backgroundColor: 'var(--card-bg)' }} className="lazy-section">
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Expertise & <span className="text-accent">Skills</span></h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '0 auto' }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          justifyContent: 'center'
        }} className="skills-grid">
          {profileData.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                backgroundColor: 'var(--bg-color)',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '1.25rem', 
                borderLeft: '4px solid var(--accent-color)', 
                paddingLeft: '0.75rem',
                color: 'var(--text-color)',
                fontWeight: 600
              }}>
                {skillGroup.category}
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem',
                marginTop: 'auto'
              }}>
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.35rem 0.75rem',
                      backgroundColor: 'var(--card-bg)',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.2s ease'
                    }}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .skill-badge:hover {
          background-color: var(--accent-color) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          border-color: var(--accent-color) !important;
        }
        
        @media (min-width: 1200px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1199px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
