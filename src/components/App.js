import React from "react";
import NavBar from "./Navbar";
import Home from "./Home";
import About from "./About";




function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home/>
      {/* add your <About> component here */}
      <About/>
    </div>
  );
}

// export {About};

export default App;
