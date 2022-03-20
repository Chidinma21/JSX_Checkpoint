// import logo from "./logo.svg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />
        <img src={require("./imageInSrc.jpeg")} alt="in src"></img>

        <br />
        <img src="../imageInPublic.png" alt="in public"></img>
      </div>

      <video style={{ width: 320, height: 240 }} controls>
        <source src="myVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
