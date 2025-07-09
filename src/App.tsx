import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
    <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Favorites" element={<Favorites/>}></Route>
      </Routes>
    </main>
    </MovieProvider>
  );
}
export default App;
