import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import PageNotFoundPage from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
