import { useState } from "react";
import Header from "./components/Header";
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import Footer from "./components/Footer";

export default function App() {
  const [phase, setPhase] = useState(true);

  return (
    <div className="app">
      <Header phase={phase} setPhase={setPhase} />
      <div className="main">
        <div className="lists">
          <Albums phase={phase} />
          <Artists phase={phase} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
