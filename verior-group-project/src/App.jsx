import { Routes, Route, Navigate } from "react-router-dom";
import NotebookPage from "./pages/NotebookPage";
import NotebookDetailPage from "./pages/NotebookDetailPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/notebook" />} />
      <Route path="/notebook" element={<NotebookPage />} />
      <Route path="/notebook/:id" element={<NotebookDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="*"
        element={
          <div className="text-red-500 p-10 text-center text-xl">
            Page not found
          </div>
        }
      />
    </Routes>
  );
};

export default App;
