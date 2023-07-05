import logo from "./logo.svg";
import "./App.css";

function App() {
  const paragraphs = document.querySelectorAll("p");
  // paragraphs[0] 是第一个 <p> 元素
  // paragraphs[1] 是第二个 <p> 元素，依此类推
  console.log(paragraphs[0].nodeName);

  return (
    <div className="App">
      <p>123</p>
    </div>
  );
}

export default App;
