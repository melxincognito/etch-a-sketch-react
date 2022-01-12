import "./App.css";
import BlocksRendered from "./components/BlocksRendered";
import MainContainer from "./components/Container";
import Header from "./components/Header";
import ClearBoardBtn from "./components/ClearBoardBtn";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <div style={{ marginTop: 60 }}>
          <MainContainer>
            <BlocksRendered />
          </MainContainer>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <ClearBoardBtn />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
