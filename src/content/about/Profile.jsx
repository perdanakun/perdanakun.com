export default function Profile() {

  const paragraphStyle = {
    margin: '0 0 16px',
  };

  const linkStyle = {
    color: '#000080',
    textDecoration: 'underline',
  };

  return (
    <section
      aria-label="Profile"
      style={{
        display: 'block',
        width: '100%',
        minWidth: 0,
        boxSizing: 'border-box',
        color: '#000000',
      }}
    >

      {/* ==================================
          INTRODUCTION
      ================================== */}

      <p
        className="reading-font"
        style={paragraphStyle}
      >
        Perdana Kurniawan Arta is a visual designer from Indonesia
        specializing in visual systems, iconography, illustration,
        and visual communication.
      </p>


      {/* ==================================
          EXPERIENCE
      ================================== */}

      <p
        className="reading-font"
        style={paragraphStyle}
      >
        With{' '}
        <strong className="reading-heading">
          10+ years of experience
        </strong>
        , he has worked across more than{' '}
        <strong className="reading-heading">
          3,000 design projects
        </strong>{' '}
        for founders, startups, and businesses worldwide,
        creating visual systems that are clear, consistent, and
        scalable across digital and physical products.
      </p>


      {/* ==================================
          PROFESSIONAL PRACTICE
      ================================== */}

      <p
        className="reading-font"
        style={paragraphStyle}
      >
        His professional design practice has included work through{' '}
        <a
          href="https://www.fiverr.com/conania"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Conania
        </a>
        , working across iconography, illustration, visual systems,
        and digital products.
      </p>


      {/* ==================================
          CURRENT DIRECTION
      ================================== */}

      <p
        className="reading-font"
        style={paragraphStyle}
      >
        Today, his practice is expanding into{' '}
        <strong className="reading-heading">
          Product Design and Design Engineering
        </strong>
        , with a focus on UX, interaction design, design systems,
        and front-end development.
      </p>


      {/* ==================================
          DESIGN + DEVELOPMENT
      ================================== */}

      <p
        className="reading-font"
        style={paragraphStyle}
      >
        He is exploring how design and development can work as one
        process, using code to prototype, test, and refine digital
        experiences rather than treating implementation as a separate
        handoff.
      </p>


      {/* ==================================
          CURRENT PRINCIPLE
      ================================== */}

      <p
        className="reading-font"
        style={{ margin: 0 }}
      >
        His current direction can be summarized as:{' '}
        <strong className="reading-heading">
          Design, Build, and Ship.
        </strong>
      </p>

    </section>
  );
}
