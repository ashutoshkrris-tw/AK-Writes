import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
