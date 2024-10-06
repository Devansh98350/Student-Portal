import React from 'react';

const Fullstack = () => {
  const flowchartStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  };

  const boxStyle = {
    backgroundColor: '#ffffff',
    border: '2px dotted #000',
    borderRadius: '5px',
    padding: '15px',
    margin: '10px 0',
    textAlign: 'center',
    width: '100%',
    maxWidth: '600px',
    fontWeight: 'bold',
  };

  const arrowContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0',
    animation: 'moveDown 2s infinite',
  };

  const arrowTailStyle = {
    width: '2px',
    height: '30px',
    backgroundColor: '#ccc',
  };

  const arrowHeadStyle = {
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #ccc',
  };

  return (
    <div style={flowchartStyle}>
      <div style={boxStyle} className="box">Introduction, MVP, Full stack, Ideas</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Project ideas and basic implementations - mini series</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">MVP building series - No code, Next JS, landing pages</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 1] - HTML, CSS, JS, React mini projects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 2] - Build a signature app</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 3] - Build a youtube clone</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 4] - Ecommerce app in MERN stack</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 5] - Build MVPs and apps quickly with Firebase</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 6] - Build a Next JS dashboard</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 7] - Supabase projects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 8] - Build a Trello clone using Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 9] - Social media MERN app</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 10] - Job portal with Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 11] - Traveling AI app</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 12] - Link in bio app in Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Full stack project 13] - Book my show app in MERN stack</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Building a SaaS product part 1 - Introduction</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Building a SaaS part 2 - planning, finding, marketing</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Building a SaaS part 3 - building the app</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Building a SaaS part 4 - running Ads</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Build these AI and Blockchain projects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Build MVPs and full projects with Chat GPT</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Building in public mini short - series</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Explore AI tools for marketing</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Indie hackers, Products, Stories</div>
    </div>
  );
};

// Adding CSS for keyframes for animation
const style = document.createElement('style');
style.textContent = `
  @keyframes moveDown {
    0% { transform: translateY(0); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0); }
  }
`;
document.head.append(style);

export default Fullstack;
