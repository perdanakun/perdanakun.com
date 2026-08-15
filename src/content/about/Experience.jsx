import {
  Folder,
  Notepad2,
  Computer,
} from '@react95/icons';

export default function Experience() {
  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '24px 1fr',
    columnGap: '8px',
    margin: '0 0 20px',
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    marginTop: '1px',
  };

  const headingStyle = {
    margin: '0 0 8px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 700,
  };

  const paragraphStyle = {
    margin: '0 0 16px',
  };

  const linkStyle = {
    color: '#000080',
    textDecoration: 'underline',
  };

  const strongStyle = {
    fontWeight: 700,
  };

  return (
    <section
      aria-label="Experience"
      style={{
        display: 'block',
        fontFamily: '"MS Sans Serif", sans-serif',
        fontSize: 12,
        lineHeight: '18px',
        fontWeight: 400,
        color: '#000000',
      }}
    >
      {/* ==================================
          INTRODUCTION
      ================================== */}

      <p
        style={{
          margin: '0 0 20px',
        }}
      >
        Perdana's professional experience spans visual design,
        iconography, illustration, social media design, environmental
        graphics, and technical systems.
      </p>


      {/* ==================================
          CONANIA
      ================================== */}

      <section
        aria-labelledby="conania-heading"
        style={sectionStyle}
      >
        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Folder variant="16x16_4" />
        </div>

        <div>
          <h3
            id="conania-heading"
            style={headingStyle}
          >
            Visual Design &amp; Design Leadership
          </h3>

          <p style={paragraphStyle}>
            At{' '}
            <a
              href="https://www.fiverr.com/conania"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Conania
            </a>
            , Perdana has worked across{' '}
            <strong style={strongStyle}>
              thousands of design projects
            </strong>{' '}
            for startups, founders, and businesses worldwide.
            His work focuses on scalable iconography, illustration,
            visual systems, and consistent design execution across
            digital products, websites, applications, and physical
            products.
          </p>

          <p style={paragraphStyle}>
            Alongside hands-on design work, he leads design direction
            and coordinates external designers, freelancers, and
            production partners to maintain quality, consistency, and
            delivery across client projects.
          </p>

          <p style={{ margin: 0 }}>
            <a
              href="https://www.fiverr.com/conania"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View selected work →
            </a>
          </p>
        </div>
      </section>


      {/* ==================================
          SINIDIKARA
      ================================== */}

      <section
        aria-labelledby="social-heading"
        style={sectionStyle}
      >
        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Notepad2 variant="16x16_4" />
        </div>

        <div>
          <h3
            id="social-heading"
            style={headingStyle}
          >
            Social Media &amp; Brand Design
          </h3>

          <p style={paragraphStyle}>
            At Sinidikara, Perdana contributed to social media strategy,
            content exploration, and visual development for major
            consumer brands including Mayora, Kopiko, Beng-Beng, and
            Le Minerale.
          </p>

          <p style={paragraphStyle}>
            The work combined audience research, content experimentation,
            visual systems, and performance data to develop repeatable
            content formats. The work contributed to growing Mayora's
            community from{' '}
            <strong style={strongStyle}>
              40K to 100K followers
            </strong>{' '}
            within the first year.
          </p>

          <p style={{ margin: 0 }}>
            <a
              href="https://honorable-slicer-cf7.notion.site/Mayora-Unwrapped-Strategic-Social-Media-in-Action-2d13e6c89623802aaf4fe1ed7c23ae28?pvs=143"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View Mayora case study →
            </a>
          </p>
        </div>
      </section>


      {/* ==================================
          ENGINEERING
      ================================== */}

      <section
        aria-labelledby="technical-heading"
        style={{
          ...sectionStyle,
          margin: 0,
        }}
      >
        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Computer variant="16x16_4" />
        </div>

        <div>
          <h3
            id="technical-heading"
            style={headingStyle}
          >
            Engineering Background
          </h3>

          <p style={paragraphStyle}>
            Before becoming a full-time designer, Perdana studied{' '}
            <strong style={strongStyle}>
              Industrial Electronics Engineering
            </strong>{' '}
            and worked as an electronics and network technician
            intern at Telkom Indonesia.
          </p>

          <p style={{ margin: 0 }}>
            This technical background introduced him to systems,
            hardware, troubleshooting, and structured problem solving.
            Today, that systems-oriented thinking continues to influence
            how he approaches interface logic, product structure, and
            design engineering.
          </p>
        </div>
      </section>
    </section>
  );
}