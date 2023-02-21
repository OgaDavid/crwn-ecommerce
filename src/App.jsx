import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import Header from "./components/header/header.component";
import Signup from "./pages/signup-and-login/signup.component";
import SignIn from "./pages/signup-and-login/signin.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
