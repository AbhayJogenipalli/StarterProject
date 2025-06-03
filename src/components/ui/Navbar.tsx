import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu className="p-4 border-b bg-white shadow w-full">
      <NavigationMenuList className="flex gap-4">
        {/* Can you navigation items if needed */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
