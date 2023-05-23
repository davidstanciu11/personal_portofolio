import { Route, Routes } from "react-router-dom";
import Home from "./pages/Hero/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Navigation from "./components/Navigation/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 1800,
    offset:100,
  })
  return (
    <>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
