import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "COMPANY", path: "/company" },
    { name: "SERVICE", path: "/service" },
    { name: "CASE STUDY", path: "/case-study" },
    { name: "NEWS", path: "/news" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            <span>株式会社コールテン</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

