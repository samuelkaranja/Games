import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deposit, Home, Login, News, Register, Results } from "./pages";
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
          <Route path="/news" element={<News />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
