import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/filmes" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
