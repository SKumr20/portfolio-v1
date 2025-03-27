'use client';
import React from "react";
import ToggleDarkmode from "../ui/toggleDarkmode";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-background justify-between p-12">
      <ToggleDarkmode />
      <div className="flex justify-center items-center">
        {/* Visible on bigger devices */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <Button variant="ghost" className="text-md font-light">
            <Link href='/'>
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="text-md font-light">
            Projects
          </Button>
          <Button variant="ghost" className="text-md font-light">
            <Link href='/experience'>
              Experience
            </Link>
          </Button>
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Connect
          </button>
        </div>
        
        {/* Small device toggle */}
        <Sheet>
          <SheetTrigger className="md:hidden flex gap-2">
            <Button variant="ghost">
              <Menu className="scale-150" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-center p-6 w-full space-y-4">
              <Link href='/' className="w-full text-center">
                <SheetClose asChild>
                  <Button variant="ghost" className="text-md font-light w-full justify-center">
                    Home
                  </Button>
                </SheetClose>
              </Link>
              
              <SheetClose asChild>
                <Button variant="ghost" className="text-md font-light w-full justify-center">
                  Projects
                </Button>
              </SheetClose>
              
              <Link href='/experience' className="w-full text-center">
                <SheetClose asChild>
                  <Button variant="ghost" className="text-md font-light w-full justify-center">
                    Experience
                  </Button>
                </SheetClose>
              </Link>
              
              {/* Connect */}
              <SheetClose asChild>
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mt-2">
                  Connect
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;