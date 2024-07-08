import { CircleUser, Menu, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function AppLayout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block ">
        <div className="flex h-full max-h-screen flex-col gap-2 ">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              {/* <Button
                variant="link"
                onClick={() => {
                  navigate("/");
                }}
                className="m-0 p-0"
              >
                <img src={kmd} alt="Example" className="h-10 cursor-pointer " />
              </Button> */}
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                <Package className="h-4 w-4" />
                Dashboard
              </div>
              {/* <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/rate-cards");
                }}
              >
                <Package className="h-4 w-4" />
                Rate Cards
              </div> */}
              {/* <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/organization");
                }}
              >
                <Package className="h-4 w-4" />
                Organization
              </div> */}

              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/customers");
                }}
              >
                <Package className="h-4 w-4" />
                Members
              </div>
              {/* <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/dependants");
                }}
              >
                <Package className="h-4 w-4" />
                Dependants
              </div> */}
              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/entry-exit");
                }}
              >
                <Package className="h-4 w-4" />
                Entry/Exits
              </div>
              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate("/reports");
                }}
              >
                <Package className="h-4 w-4" />
                Reports
              </div>

              {/* Divider */}
              {/* <hr className="my-4 border-t border-gray-200" /> */}

              {/* Retiree Section */}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex justify-end h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <div
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Dashboard
                </div>

                <div
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/customers");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Customers
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/dependants");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Dependants
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/entry-exit");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Entry/Exits
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/organization");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Organization
                </div>
                <div
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/rate-cards");
                  }}
                >
                  <Package className="h-4 w-4" />
                  Rate Cards
                </div>

                {/* Divider */}
                {/* <hr className="my-4 border-t border-gray-200" /> */}

                {/* Retiree Section */}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex items-center justify-around gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

AppLayout.defaultProps = {
  children: <></>,
};

AppLayout.propTypes = {
  children: PropTypes.element,
};
