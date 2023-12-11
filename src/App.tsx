import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import AddMovies from "./pages/AddMovies/AddMovies";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Movies />} />
          <Route path="/filmes/adicionar" element={<AddMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
