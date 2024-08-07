import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Deposit,
  ForgotPassword,
  GameDetails,
  Home,
  Livescore,
  Login,
  News,
  Register,
  Results,
} from "./pages";
import { Header, Navbar, Footer, Article } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/results/:id" element={<Results />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/news/" element={<News />} />
          <Route path="/livescore/" element={<Livescore />} />
          <Route path="/game_details/" element={<GameDetails />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
