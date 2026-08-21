import {
  Wangimg128,
  Notepad2,
  Folder,
} from '@react95/icons';

export default function VisualSystems() {

  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '24px 1fr',
    columnGap: '8px',
    margin: '0 0 18px',
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    marginTop: '1px',
  };

  const paragraphStyle = {
    margin: '0 0 12px',
  };

  const linkStyle = {
    color: '#000080',
    textDecoration: 'underline',
  };

  return (
    <section
      aria-label="Visual Systems"
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
        style={{
          margin: '0 0 18px',
        }}
      >
        Visual systems are the foundation of Perdana's design
        practice. His work has focused on creating visual languages
        that remain consistent across large sets of assets,
        interfaces, products, and communication touchpoints.
      </p>


      {/* ==================================
          ICONOGRAPHY
      ================================== */}

      <section
        aria-labelledby="iconography-heading"
        style={sectionStyle}
      >

        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Wangimg128 variant="16x16_4" />
        </div>


        <div
          style={{
            minWidth: 0,
          }}
        >

          <h3
            id="iconography-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Iconography
          </h3>


          <p
            className="reading-font"
            style={paragraphStyle}
          >
            Perdana has designed and developed{' '}
            <strong className="reading-heading">
              thousands of icons
            </strong>{' '}
            for digital products, websites, applications, and visual
            libraries. His iconography practice focuses on clarity,
            consistency, grid systems, visual weight, and scalability.
          </p>


          <p
            className="reading-font"
            style={paragraphStyle}
          >
            <a
              href="https://holo.health"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View HoloHealth →
            </a>
          </p>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            <a
              href="https://www.shipfasterui.com/components/icons"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View Shipfaster UI →
            </a>
          </p>

        </div>

      </section>


      {/* ==================================
          ILLUSTRATION
      ================================== */}

      <section
        aria-labelledby="illustration-heading"
        style={sectionStyle}
      >

        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Notepad2 variant="16x16_4" />
        </div>


        <div
          style={{
            minWidth: 0,
          }}
        >

          <h3
            id="illustration-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Illustration
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            His illustration work explores how{' '}
            <strong className="reading-heading">
              visual language
            </strong>{' '}
            can communicate information, personality, and product
            context while remaining systematic enough to work across
            different formats and applications.
          </p>

        </div>

      </section>


      {/* ==================================
          DESIGN SYSTEMS
      ================================== */}

      <section
        aria-labelledby="design-systems-heading"
        style={{
          ...sectionStyle,
          margin: 0,
        }}
      >

        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Folder variant="16x16_4" />
        </div>


        <div
          style={{
            minWidth: 0,
          }}
        >

          <h3
            id="design-systems-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Design Systems
          </h3>


          <p
            className="reading-font"
            style={paragraphStyle}
          >
            Working with large collections of visual assets has led
            Perdana to think beyond individual graphics and toward{' '}
            <strong className="reading-heading">
              reusable systems, components, rules, and guidelines
            </strong>.
          </p>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            This systems-oriented approach now informs his transition
            into{' '}
            <strong className="reading-heading">
              product design
            </strong>
            , where visual consistency becomes part of a broader
            system involving UX, interaction, components, and
            implementation.
          </p>

        </div>

      </section>

    </section>
  );
}
