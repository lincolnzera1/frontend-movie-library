import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import AddMovies from "./pages/AddMovies/AddMovies";
import Users from "./pages/Users/Users";
import AddUsers from "./pages/AddUsers/AddUsers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Movies />} />
          <Route path="/filmes/adicionar" element={<AddMovies />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/usuarios/adicionar" element={<AddUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
