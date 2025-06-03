import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
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

  return (
    <>
    {/* Add main page components here */}
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
