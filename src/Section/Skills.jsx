import React from 'react';
import ChromaGrid from '../components/ChromaGrid.jsx';
import { languages, frameworks } from '../data/skill.js';

export const SkillsSection = () => {
  return (
    <section >
      {/* Category 1 */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
           Languages
        </h2>
        <ChromaGrid items={languages} columns={6} />
      </div>

      {/* Category 2 */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
          Frameworks & Libraries
        </h2>
        <ChromaGrid items={frameworks} columns={6} />
      </div>
    </section>
  );
};

export default SkillsSection;