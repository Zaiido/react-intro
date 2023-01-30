import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent label="Button" />
        <ImageComponent
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
          alt="Image"
        />
      </header>
    </div>
  );
}

export default App;
