import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Roadmap from "./Components/Roadmap";
import Mintapuppy from "./Components/Mintapuppy";
import Connecttometamask from "./Components/Connecttometamask";
import Seeyourpup from "./Components/Seeyourpup";
import Glossary from "./Components/Glossary";
import Faqs from "./Components/Faqs";
import Thetopdogs from "./Components/Thetopdogs";
import Contact from "./Components/Contact";
import HowtobuyETHonCoinbase from "./Components/How to buy ETH on Coinbase";
import TransferETHtoMetaMask from "./Components/Transfer ETH to MetaMask";
import InputNiftyPupscontracttoMetaMask from "./Components/Input NiftyPups contract to MetaMask";
import Mintyourveryownpuppy from "./Components/Mint your very own puppy";
import AZ from "./Components/AZ";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Roadmap" element={<Roadmap />} />
      <Route path="/Mintapuppy" element={<Mintapuppy />} />
      <Route path="/Connect to metamask" element={<Connecttometamask />} />
      <Route
        path="/How to buy ETH on Coinbase"
        element={<HowtobuyETHonCoinbase />}
      />
      <Route
        path="/Transfer ETH to MetaMask"
        element={<TransferETHtoMetaMask />}
      />
      <Route
        path="/Input NiftyPups contract to MetaMask"
        element={<InputNiftyPupscontracttoMetaMask />}
      />
      <Route
        path="/Mint your very own puppy"
        element={<Mintyourveryownpuppy />}
      />
      <Route path="/A-Z" element={<AZ />} />

      <Route path="/Seeyourpup" element={<Seeyourpup />} />
      <Route path="/Glossary" element={<Glossary />} />
      <Route path="/Faqs" element={<Faqs />} />
      <Route path="/Thetopdogs" element={<Thetopdogs />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
