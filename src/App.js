import "./App.css";
import BlocksRendered from "./components/BlocksRendered";
import MainContainer from "./components/Container";
import Header from "./components/Header";
import ClearBoardBtn from "./components/ClearBoardBtn";

function App() {
  return (
    <div className="App">
      <Header style={{ marginTop: "10px" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <div>
          <MainContainer>
            <BlocksRendered />
          </MainContainer>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <ClearBoardBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
