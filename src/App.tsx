// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookDetails from "./pages/bookDetails";
import { RouteItem, routes } from "./data/routes";

const elementMap: Record<string, React.ReactNode> = {
  home: <Home />,
  about: <About />,
  contact: <Contact />,
};

const App: React.FC = () => (
  <Router>
    <Header />
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/books/:id" element={<BookDetails />} />
        {routes.map((r: RouteItem) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}

        <Route
          path="*"
          element={
            <div className="p-6 text-center text-gray-500">صفحه یافت نشد</div>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;
