import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
