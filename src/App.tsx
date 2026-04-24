import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer"; 
import { useEffect } from "react";

// Component chứa nội dung trang chủ cũ
const MainPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer/>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0f172a] text-white">
        <Routes>
          {/* Đường dẫn trang chủ */}
          <Route path="/" element={<MainPage />} />
          
          {/* Đường dẫn trang chi tiết */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;