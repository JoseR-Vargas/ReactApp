import Navbar from "./components/Navbar.jsx";
import "./App.css";


function App() {
  const title = "E-commerce App";
  return (
    <>
      <Navbar />
      <div>
        <h1>Your title {title}</h1>
      </div>
    </>
  );
}

export default App;
