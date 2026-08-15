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

  const headingStyle = {
    margin: '0 0 10px',
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

  return (
    <section
      aria-label="Design Approach"
      style={{
        display: 'block',
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '12px',
        lineHeight: '18px',
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

        <div>
          <h3
            id="understand-heading"
            style={headingStyle}
          >
            Understand the Problem
          </h3>

          <p
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

        <div>
          <h3
            id="people-heading"
            style={headingStyle}
          >
            Design for People
          </h3>

          <p
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

        <div>
          <h3
            id="reality-heading"
            style={headingStyle}
          >
            Build for Reality
          </h3>

          <p
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

        <div>
          <h3
            id="systems-heading"
            style={headingStyle}
          >
            Systems Over One-Offs
          </h3>

          <p
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

        <div>
          <h3
            id="ship-heading"
            style={headingStyle}
          >
            Design, Build, and Ship
          </h3>

          <p
            style={paragraphStyle}
          >
            The current direction of his practice is to move closer to
            implementation: design the idea, build it, test it, learn
            from the result, and ship the experience.
          </p>

          <p
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