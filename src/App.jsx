import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
