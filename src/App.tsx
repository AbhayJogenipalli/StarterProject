import { Routes, Route } from "react-router-dom";
import "./App.css";
import ExampleBackgrounds from "./pages/ExampleBackgrounds";

// ----------------------
// App Component with Routing
// ----------------------
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Routes>
        <Route path="/background-test" element={<ExampleBackgrounds />} />
      </Routes>
    </div>
  );
}

export default App;
