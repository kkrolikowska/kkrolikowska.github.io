import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Lazy load sections for performance
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Hobbies = lazy(() => import('./components/Hobbies').then(m => ({ default: m.Hobbies })));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading...</div>}>
          <Experience />
          <Skills />
          <Hobbies />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
