import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// ----------------------
// Navbar Component
// ----------------------
function Navbar() {
  return (
    <nav className="p-4 border-b flex gap-4 bg-white shadow place-content-between">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      <Link to="/example" className="text-blue-600 hover:underline">Example</Link>
    </nav>
  );
}

// ----------------------
// Home Page Component
// ----------------------
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// ----------------------
// About Page Component
// ----------------------
function About() {
  return (
    <div className="p-6 text-xl">
      📄 This is the About Page (You can add more here)
    </div>
  );
}

// ----------------------
// Not Found Page Component
// ----------------------
function NotFound() {
  return (
    <div className="p-6 text-xl text-red-600">
      404 - Page Not Found
    </div>
  );
}

// ----------------------
// App Component with Routing
// ----------------------
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
