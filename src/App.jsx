import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryManager from "./context/GalleryManager";
import Navbar from "./components/Navbar";
import GalleryBody from "./pages/Gallery/GalleryBody";
import Loginpage from "./pages/LoginPage/Loginpage";
import Signup from "./pages/SignupPage/Signup";

function App() {
  return (
    <>
      <GalleryManager>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<GalleryBody />} />
            <Route path="/gallery" element={<GalleryBody />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </GalleryManager>
    </>
  );
}

export default App;
