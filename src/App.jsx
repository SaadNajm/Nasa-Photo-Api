import { createRoot } from "react-dom/client";
import Home from "./components/Home"
import NasaPhoto from "./components/NasaPhoto"
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App = () => {
  return (
<div className="app">
<BrowserRouter>

  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/nasaphoto" element={<NasaPhoto />} />
  
  </Routes>
</BrowserRouter>
</div>

  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
