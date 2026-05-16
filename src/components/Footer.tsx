import { type FC } from 'react';
import { profileData } from '../data/profile';

export const Footer: FC = () => {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--footer-bg)', color: 'white', padding: '5rem 0 2rem', transition: 'background-color 0.3s ease' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-header)' }}>
              Katarzyna<span className="text-accent">.K</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '400px', marginBottom: '2rem' }}>
              Building the future of data platforms and leading engineering excellence at Roche.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href={`mailto:${profileData.contact.email}`} style={{ color: 'white' }}>
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#hero" style={{ color: '#94a3b8' }}>Home</a></li>
              <li><a href="#experience" style={{ color: '#94a3b8' }}>Experience</a></li>
              <li><a href="#skills" style={{ color: '#94a3b8' }}>Skills</a></li>
              <li><a href="#hobbies" style={{ color: '#94a3b8' }}>Hobbies</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Contact Info</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94a3b8' }}>
              <li><i className="fa-solid fa-location-dot" style={{ marginRight: '0.75rem', color: 'var(--accent-color)' }}></i> {profileData.location}</li>
              <li><i className="fa-solid fa-envelope" style={{ marginRight: '0.75rem', color: 'var(--accent-color)' }}></i> {profileData.contact.email}</li>
              <li><i className="fa-solid fa-globe" style={{ marginRight: '0.75rem', color: 'var(--accent-color)' }}></i> {profileData.contact.linkedin.replace('https://', '')}</li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#64748b',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} Katarzyna Królikowska. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
