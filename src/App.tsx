import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

// ----------------------
// Navbar Component
// ----------------------
function Navbar() {
  return (
    <NavigationMenu className="p-4 border-b bg-white shadow w-full">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className="text-blue-600 hover:underline">Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className="text-blue-600 hover:underline">About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/example">
            <NavigationMenuLink className="text-blue-600 hover:underline">Example</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ----------------------
// Home Page Component
// ----------------------
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center gap-8 pt-12 mx-auto">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
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
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="text-xl">
        📄 This is the About Page (You can add more here)
      </p>
    </div>
  );
}

// ----------------------
// Not Found Page Component
// ----------------------
function NotFound() {
  return (
    <Card className="m-6 border-red-300">
      <CardHeader>
        <CardTitle className="text-red-600">Error</CardTitle>
      </CardHeader>
      <CardContent className="text-xl text-red-600">
        404 - Page Not Found
      </CardContent>
    </Card>
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
