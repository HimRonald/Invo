import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="mb-16 bg-muted">
      <nav className="fixed inset-x-4 top-6 mx-auto h-16 max-w-screen-xl rounded-full border bg-background dark:border-secondary-foreground">
        <div className="mx-auto flex h-full items-center justify-between px-6">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <ModeToggle />
            <Link href="/create-invoice">
              <Button className="cursor-pointer rounded-full">
                Create Invoice
              </Button>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
