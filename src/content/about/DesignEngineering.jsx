import {
  Computer,
  Folder,
  WindowsExplorer,
  Notepad2,
} from '@react95/icons';

export default function DesignEngineering() {

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

  return (
    <section
      aria-label="Design Engineering"
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
        Design engineering is an extension of Perdana's design practice:
        using code as part of the design process rather than treating
        development as a separate handoff.
      </p>


      <p
        className="reading-font"
        style={{
          margin: '0 0 18px',
        }}
      >
        His current practice brings together visual design, UX,
        interaction design, front-end development, and design systems
        to explore how ideas can move from concept to{' '}
        <strong className="reading-heading">
          functional digital experiences
        </strong>.
      </p>


      {/* ==================================
          DESIGN IN CODE
      ================================== */}

      <section
        aria-labelledby="design-code-heading"
        style={sectionStyle}
      >

        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <Computer variant="16x16_4" />
        </div>


        <div
          style={{
            minWidth: 0,
          }}
        >

          <h3
            id="design-code-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Design in Code
          </h3>


          <p
            className="reading-font"
            style={paragraphStyle}
          >
            Perdana works with HTML, CSS, JavaScript, and React to
            prototype and build interfaces directly in the browser.
          </p>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            Working in code makes it possible to explore interaction,
            layout, responsive behavior, and visual systems through
            implementation rather than only through static design files.
          </p>

        </div>

      </section>


      {/* ==================================
          DESIGN, BUILD, AND SHIP
      ================================== */}

      <section
        aria-labelledby="ship-heading"
        style={sectionStyle}
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
            id="ship-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Design, Build, and Ship
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            His current workflow follows a simple loop: design the idea,
            build the experience, test the result, refine the system,
            and{' '}
            <strong className="reading-heading">
              ship something that can actually be used
            </strong>.
          </p>

        </div>

      </section>


      {/* ==================================
          AI
      ================================== */}

      <section
        aria-labelledby="ai-heading"
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
            id="ai-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            AI-Assisted Development
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            AI-assisted development is part of this experimentation.
            Perdana uses AI as a development partner while maintaining
            ownership of the design direction, interaction decisions,
            implementation, and final experience.
          </p>

        </div>

      </section>


      {/* ==================================
          CURRENT PRACTICE
      ================================== */}

      <section
        aria-labelledby="current-practice-heading"
        style={{
          ...sectionStyle,
          margin: 0,
        }}
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
            id="current-practice-heading"
            className="reading-heading"
            style={{
              margin: '0 0 8px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Current Practice
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            His Windows 95-inspired portfolio is an ongoing experiment
            in this approach, combining information architecture,
            interaction design, visual systems, React development, and
            technical constraints into one{' '}
            <strong className="reading-heading">
              functional product
            </strong>.
          </p>

        </div>

      </section>

    </section>
  );
}
