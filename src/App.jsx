import "./App.css";
import HomePage from "./components/homepage/homepage.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HatsPage = () => {
  return <h1>hats</h1>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/hats" element={<HatsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
