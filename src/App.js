import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Videos } from "./components/Videos";
import { Projects } from "./components/Projects";
import { Notes } from "./components/Notes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/notes" element={<Notes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
