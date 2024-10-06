import React from 'react';

const Java= () => {
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
      <div style={boxStyle} className="box">Java - Installation and Basics</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Variables and Data Types</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Operators and Math Methods</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">String and its methods</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Loop and Array</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Classes and objects</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Methods and functions</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Constructor</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Nested class and Class name</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Packages, Access modifiers, Private, Public, Getter, and Setter</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">this, inheritance and its types, super keyword</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Abstraction, Polymorphism, and Method overriding</div>
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

export default Java ;
