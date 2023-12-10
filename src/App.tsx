import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
