import React from 'react';

import Profile from '../../content/about/Profile';
import Experience from '../../content/about/Experience';
import VisualSystems from '../../content/about/VisualSystems';
import ProductDesign from '../../content/about/ProductDesign';
import DesignEngineering from '../../content/about/DesignEngineering';
import Approach from '../../content/about/Approach';

const contentMap = {
  profile: Profile,
  experience: Experience,
  'visual-systems': VisualSystems,
  'product-design': ProductDesign,
  'design-engineering': DesignEngineering,
  approach: Approach,
};

function InstallerContent({
  step,
  onNext,
  onBack,
}) {
  const ContentComponent = step
    ? contentMap[step.id]
    : null;

  return (
    <section
      aria-labelledby="installer-content-title"
      style={{
        flex: 1,
        padding: '16px',
        background: '#c0c0c0',
        overflow: 'auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Accessible heading untuk container installer */}
      <h2
        id="installer-content-title"
        style={{
          margin: '0 0 16px',
          fontSize: 18,
        }}
      >
        {step?.title || 'Installation'}
      </h2>

      {/* Actual About content */}
      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <p>
          Follow the installation wizard to continue.
        </p>
      )}

      {/* Navigation */}
      <div
        style={{
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '8px',
        }}
      >
        <button
          type="button"
          onClick={onBack}
          disabled={!onBack}
        >
          Back
        </button>

        <button
          type="button"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default InstallerContent;