import React from 'react';

const Next = () => {
  const flowchartStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  };

  const boxStyle = {
    backgroundColor: '#ffffff',
    border: '2px dotted #000',  // Changed border color to dark
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
    height: '30px', // Lengthened arrow tail
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
      <div style={boxStyle} className="box">Introduction to NEXT JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Setup, Git, GitHub, Deploying</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Everything about HTML, CSS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">CSS and Tailwind - everything about Styling</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Bonus] HTML, CSS projects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Everything about JavaScript - theory</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Everything about JavaScript - DOM</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Bonus] - Build JavaScript Projects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[NEW] Build games with HTML, CSS, JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Everything about React JS part 1 - Theory</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Everything about React JS part 2 - hooks</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Additional JS and React mini projects]</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[React JS project] - Build a Youtube clone app</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Bonus projects] React JS projects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Frontend Development with NEXT JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Backend Development with NEXT JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#1 Next JS project] - Authentication with Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#2 Next JS project] - Build a Next JS 14 Dashboard : Frontend + Backend + Next Auth + Server Action</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#3 Next JS project] - Build a Trello clone with Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#4 Next JS project] - Build AI full stack apps with Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#5 Next JS project] - Additional React and Next JS projects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#6 Next JS project] - Build a Job portal using Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#7 Next JS project] - Build quick projects with Free Next JS Templates</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#8 Next JS project] - Build an AI traveling app</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#9 Next JS project] - Build a link in bio LinkTree app with Next JS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[#10 Next JS project] - Build a code to image converting app like carbon</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Everything about Firebase</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Deploying full stack apps</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Bonus] Open source mini series - Next JS version</div>
    </div>
  );
};

export default Next;