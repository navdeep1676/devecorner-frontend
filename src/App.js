import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Videos } from "./components/Videos";
import { Projects } from "./components/Projects";
import { Notes } from "./components/Notes";
import { NoData } from "./components/NoData";
import { Problems } from "./components/Problems";
import { AdminLayout } from "./components/admin/layout";
import { Dashboard } from "./components/admin/Dashboard";
import { VideoList } from "./components/admin/VideoList";
import { AddVideo } from "./components/admin/AddVideo";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/tutorials" element={<NoData />} />
            <Route path="/howto" element={<NoData />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="video/video-list" element={<VideoList />} />
            <Route path="video/add-video" element={<AddVideo />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
