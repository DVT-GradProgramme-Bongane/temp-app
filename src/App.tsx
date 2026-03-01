import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import PageNotFoundPage from "./pages/PageNotFound";
import EmployeeDirectoryPage from "./pages/EmployeeDirectory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFoundPage />} />
          <Route
            path="/employee-directory"
            element={<EmployeeDirectoryPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
