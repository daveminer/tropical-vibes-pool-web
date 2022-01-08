import logo from "./logo.png"; // Titan One font
import palmTree from "./palm-tree.png";

import "./Title.css";

function Title() {
  return (
    <div className="banner-row">
      <img src={palmTree} className="palm-tree" alt="logo" />
      <img src={logo} className="banner" alt="TropicPool.io" />
    </div>
  );
}

export default Title;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>;
