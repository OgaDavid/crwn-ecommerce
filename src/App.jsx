import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import Header from "./components/header/header.component";
import Signup from "./pages/signup-and-login/signup.component";
import SignIn from "./pages/signup-and-login/signin.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
