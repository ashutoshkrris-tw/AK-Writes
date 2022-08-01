import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/Create";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:blogId" element={<BlogDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
