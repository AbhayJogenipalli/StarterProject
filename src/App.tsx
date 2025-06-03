import { Routes, Route } from "react-router-dom";
import "./App.css";

function Home() {

  return (
    <>
    {/* Add main page components here */}
    </>
  );
}


// ----------------------
// App Component with Routing
// ----------------------
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
