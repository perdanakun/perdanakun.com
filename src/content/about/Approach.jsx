import {
  Folder,
  User,
  Computer,
  Wangimg128,
  WindowsExplorer,
} from '@react95/icons';

export default function Approach() {

  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '24px 1fr',
    columnGap: '8px',
    margin: '0 0 20px',
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    marginTop: '2px',
  };

  const linkStyle = {
    color: '#000080',
    textDecoration: 'underline',
  };

  return (
    <section
      aria-label="Design Approach"
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
          margin: '0 0 20px',
        }}
      >
        Perdana's approach to design is grounded in a simple idea:
        understand the problem, design for the user, and create
        something that works for both people and the business.
      </p>


      {/* ==================================
          UNDERSTAND THE PROBLEM
      ================================== */}

      <section
        aria-labelledby="understand-heading"
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
            id="understand-heading"
            className="reading-heading"
            style={{
              margin: '0 0 10px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Understand the Problem
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            Before designing a solution, he looks at the context,
            requirements, constraints, users, and the reason a design
            problem exists in the first place.
          </p>

        </div>

      </section>


      {/* ==================================
          DESIGN FOR PEOPLE
      ================================== */}

      <section
        aria-labelledby="people-heading"
        style={sectionStyle}
      >

        <div
          aria-hidden="true"
          style={iconStyle}
        >
          <User variant="16x16_4" />
        </div>


        <div
          style={{
            minWidth: 0,
          }}
        >

          <h3
            id="people-heading"
            className="reading-heading"
            style={{
              margin: '0 0 10px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Design for People
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            Clarity and usability take priority over unnecessary
            complexity. Visual decisions should help people understand
            what something is, what they can do, and what happens next.
          </p>

        </div>

      </section>


      {/* ==================================
          BUILD FOR REALITY
      ================================== */}

      <section
        aria-labelledby="reality-heading"
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
            id="reality-heading"
            className="reading-heading"
            style={{
              margin: '0 0 10px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Build for Reality
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            A design is not finished when the mockup is finished.
            Technical constraints, implementation, responsiveness,
            performance, and real-world production are part of the
            design problem.
          </p>

        </div>

      </section>


      {/* ==================================
          SYSTEMS OVER ONE-OFFS
      ================================== */}

      <section
        aria-labelledby="systems-heading"
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
            id="systems-heading"
            className="reading-heading"
            style={{
              margin: '0 0 10px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Systems Over One-Offs
          </h3>


          <p
            className="reading-font"
            style={{
              margin: 0,
            }}
          >
            From iconography to interfaces, Perdana looks for patterns
            that can be reused, maintained, and scaled instead of
            repeatedly solving the same problem from scratch.
          </p>

        </div>

      </section>


      {/* ==================================
          DESIGN, BUILD, AND SHIP
      ================================== */}

      <section
        aria-labelledby="ship-heading"
        style={{
          ...sectionStyle,
          margin: 0,
        }}
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
            id="ship-heading"
            className="reading-heading"
            style={{
              margin: '0 0 10px',
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Design, Build, and Ship
          </h3>


          <p
            className="reading-font"
            style={{
              margin: '0 0 16px',
            }}
          >
            The current direction of his practice is to move closer to
            implementation: design the idea, build it, test it, learn
            from the result, and ship the experience.
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
              See this approach in practice →
            </a>
          </p>

        </div>

      </section>

    </section>
  );
}
