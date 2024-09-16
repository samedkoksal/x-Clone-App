import React from "react";
import "./index.css";
import Container from "./components/Container";
import LeftBar from "./LeftBar/LeftBar";
import Content from "./Main/Content";
import RightBar from "./RightBar/RightBar";

function App() {
  return (
    <div>
      <Container>
        <LeftBar />
        <div className="flex-1 flex gap-30 ">
          <Content />
          <RightBar />
        </div>
      </Container>
    </div>
  );
}

export default App;
