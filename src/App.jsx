import { Route, Routes } from "react-router-dom";
import Home from "./components/Hero/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navigation from "./components/Navigation/Navbar";

function App() {

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
