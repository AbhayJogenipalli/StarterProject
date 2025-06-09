import { Routes, Route } from "react-router-dom";
import "./App.css";
import ExampleBackgrounds from "./pages/ExampleBackgrounds";
import NotFound from "./pages/NotFound";

// ----------------------
// App Component with Routing
// ----------------------
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Routes>
        <Route path="/background-test" element={<ExampleBackgrounds />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
