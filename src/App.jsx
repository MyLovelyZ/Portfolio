// The root component — the top of your component tree.
// For a single-page portfolio it simply renders the Home page.
// (Later, if you add routing, this is where routes would go.)

import Home from "./pages/Home";
import Project from "./pages/Project";

export default function App() {
  return <Home />;
}
