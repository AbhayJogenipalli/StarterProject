import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu className="p-4 border-b bg-white shadow w-full">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className="text-blue-600 hover:underline px-4 py-2">Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className="text-blue-600 hover:underline px-4 py-2">About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/example">
            <NavigationMenuLink className="text-blue-600 hover:underline px-4 py-2">Example</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
