import React from "react";
import { Moon, Sun } from "lucide-react";
import DelegateDialog from "./DelegateDialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface NavigationProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
  onDelegateClick?: () => void;
}

const Navigation = ({
  onThemeToggle = () => {},
  isDarkMode = false,
  onDelegateClick = () => {},
}: NavigationProps) => {
  const [delegateOpen, setDelegateOpen] = React.useState(false);
  const sections = [
    { name: "Home", href: "#home" },
    { name: "Pool Metrics", href: "#metrics" },
    { name: "Technical Specs", href: "#specs" },
    { name: "About", href: "#about" },
  ];

  const handleSectionClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">Dutch Stake Pool</div>

            <NavigationMenu>
              <NavigationMenuList>
                {sections.map((section) => (
                  <NavigationMenuItem key={section.name}>
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                      onClick={() => handleSectionClick(section.href)}
                    >
                      {section.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="h-9 w-9 rounded-md"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setDelegateOpen(true)}
            >
              Delegate Now
            </Button>
            <DelegateDialog
              open={delegateOpen}
              onOpenChange={setDelegateOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
