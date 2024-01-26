import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";

const LoadingFallback = lazy(() =>
  import("./pages/LoadingFallback/LoadingFallback")
);
const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Education = lazy(() => import("./pages/Education/Education"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  useEffect(() => {
    const savedColor = localStorage.getItem("theme");
    document.documentElement.style.setProperty(
      "--clr-hover",
      savedColor || "#00c3ff"
    );
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
