import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Services from './pages/Services';
import AssistiveTech from './pages/AssistiveTech';
import Forms from './pages/Forms';
import PlatformGuide from './pages/PlatformGuide';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/AssistiveTech" element={<AssistiveTech/>} />
        <Route path="/Forms" element={<Forms/>} />
        <Route path="/PlatformGuide" element={<PlatformGuide/>} />
      </Routes>
    </Router>
  );
}

export default App;