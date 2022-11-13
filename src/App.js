import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Roadmap from "./Components/Roadmap";
import Mintapuppy from "./Components/Mintapuppy";
import Connecttometamask from "./Components/Connecttometamask";
import Seeyourpup from "./Components/Seeyourpup";
import Glossary from "./Components/Glossary";
import Faqs from "./Components/Faqs";
import Thetopdogs from "./Components/Thetopdogs";
import Contact from "./Components/Contact";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Roadmap" element={<Roadmap />} />
      <Route path="/Mintapuppy" element={<Mintapuppy />} />
      <Route path="/Connecttometamask" element={<Connecttometamask />} />

      <Route path="/Seeyourpup" element={<Seeyourpup />} />
      <Route path="/Glossary" element={<Glossary />} />
      <Route path="/Faqs" element={<Faqs />} />
      <Route path="/Thetopdogs" element={<Thetopdogs />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    // <Roadmap/>
    // <Mintapuppy/>
    // <Connecttometamask/>
    // <Seeyourpup/>
    // <Glossary/>
    // <Faqs/>
    // <Thetopdogs/>
    // <Contact/>
  );
}

export default App;
