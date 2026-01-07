import Header from "./components/Header"
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe"
import Skills from "./pages/Skills"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // Kiểm tra xem URL có chứa hash (#) không
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Lấy chữ 'about'
      const element = document.getElementById(id);
      if (element) {
        // Đợi một chút để component render xong rồi mới cuộn
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-[#0f172a] text-white">
      <Header/> 
      <Home/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}

export default App
