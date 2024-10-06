import React from 'react';

const Dsa = () => {
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
      <div style={boxStyle} className="box">Introduction to DSA course - Welcome!</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[Interview help] guides, links, questions, resources</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[NEW] - DSA - 150 - zip solutions</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[NEW] - 150 DSA solutions - part 1</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[NEW] - 150 DSA solutions - part 2</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">[NEW] - 150 DSA solutions - part 3</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Time complexity, Big-O notation</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Arrays, Hashmaps - Introduction and Questions</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Arrays, Pointers, Sliding window revision</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Binary search</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Linked lists</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Recursion, Backtracking</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Dynamic programming</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Stacks, Queues</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Graphs - Introduction</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Graphs - algorithms and questions</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Trees - Binary, BST, BFS, DFS</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Tries, Priority Queue</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Sorting</div>
      <div style={arrowContainerStyle}>
        <div style={arrowTailStyle}></div>
        <div style={arrowHeadStyle}></div>
      </div>
      <div style={boxStyle} className="box">Revising DSA using Chat GPT</div>
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

export default Dsa;
