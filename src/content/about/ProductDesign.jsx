import {
  Globe,
  WindowsExplorer,
  Folder,
} from '@react95/icons';

export default function ProductDesign() {

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

  const paragraphStyle = {
    margin: '0 0 16px',
  };

  const linkStyle = {
    color: '#000080',
    textDecoration: 'underline',
  };

  return (
    <section
      aria-label="Product Design"
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
        Product design is the direction Perdana is currently exploring
        as he extends his background in visual design into user
        experience, interaction, and digital product development.
      </p>


      <p
        className="reading-font"
        style={paragraphStyle}
      >
        His transition is built on an existing foundation in{' '}
        <strong className="reading-heading">
          visual systems
        </strong>
        , but moves the focus from individual visual assets toward
        understanding how complete experiences work.
      </p>


      {/* ==================================
          FROM VISUALS TO EXPERIENCES
      ================================== */}

      <section
        aria-labelledby="visuals-heading"
        style={sectionStyle}
      >

        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Globe variant="16x16_4" />
        </div>


        <div
          style={{
            minWidth: 0,
          }}
        >

          <h3
            id="visuals-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            From Visuals to Experiences
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            Instead of focusing only on how an interface looks, Perdana
            is exploring how users understand, navigate, interact with,
            and complete tasks within a product.
          </p>

        </div>

      </section>


      {/* ==================================
          UX & INTERACTION
      ================================== */}

      <section
        aria-labelledby="ux-heading"
        style={sectionStyle}
      >

        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <WindowsExplorer variant="16x16_4" />
        </div>


        <div
          style={{
            minWidth: 0,
          }}
        >

          <h3
            id="ux-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            UX &amp; Interaction
          </h3>


          <p
            className="reading-font"
            style={paragraphStyle}
          >
            His current learning and practice include user experience,
            information architecture, interaction design, prototyping,
            usability, and interface systems.
          </p>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            <a
              href="https://www.perdanakun.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Explore the current product experiment →
            </a>
          </p>

        </div>

      </section>


      {/* ==================================
          PRODUCT THINKING
      ================================== */}

      <section
        aria-labelledby="product-thinking-heading"
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
            id="product-thinking-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Product Thinking
          </h3>


          <p
            className="reading-font"
            style={paragraphStyle}
          >
            The goal is to connect user needs, business requirements,
            visual communication, and{' '}
            <strong className="reading-heading">
              technical constraints
            </strong>{' '}
            rather than treating them as isolated design problems.
          </p>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            This is an ongoing transition from designing individual
            deliverables toward designing systems and experiences that
            can be built, tested, measured, and improved.
          </p>

        </div>

      </section>

    </section>
  );
}
