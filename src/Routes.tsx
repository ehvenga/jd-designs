import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Home1 = React.lazy(() => import("pages/Home1"));
const Showcase1 = React.lazy(() => import("pages/Showcase1"));
const ShowcaseOne = React.lazy(() => import("pages/ShowcaseOne"));
const Showcase = React.lazy(() => import("pages/Showcase"));
const Header = React.lazy(() => import("pages/Header"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/header" element={<Header />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/showcaseone" element={<ShowcaseOne />} />
          <Route path="/showcase1" element={<Showcase1 />} />
          <Route path="/home1" element={<Home1 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
