import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import NotFound from "../pages/NotFound";
import Layout from "./Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
