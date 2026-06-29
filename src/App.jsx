// The root component — the top of your component tree.
// This is where we declare the routes: which URL shows which page.

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

export default function App() {
  // <Routes> looks at the current URL and renders the FIRST <Route>
  // whose "path" matches it. Only one route renders at a time.
  return (
    <Routes>
      {/* URL "/"        -> show the Home page    */}
      <Route path="/" element={<Home />} />
      {/* URL "/projects" -> show the Project page */}
      <Route path="/projects" element={<Project />} />
      {/* bagian not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
