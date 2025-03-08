'use client';
import React from "react";
import ToggleDarkmode from "./ui/toggleDarkmode";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (
    <div className="flex bg-background justify-between p-10">
        <ToggleDarkmode />
        <div className="flex justify-center items-center">
          {/* Visible on bigger devices */}
          <div className="hidden md:flex justify-center items-center"> 
            <Button variant="link" className="text-md font-light">
              Home
            </Button>
            <Button variant="link" className="text-md font-light">
              Projects
            </Button>
            <Button variant="link" className="text-md font-light">
              Experience
            </Button>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Connect
            </button>
          </div>

          {/* Small device toggle */}
          <Sheet>
            <SheetTrigger className="md:hidden flex gap-2" >
              <Button variant="ghost">
                <Menu className="scale-150" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col p-6 ">
                <Button variant="link" className="text-md font-light">
                  Home
                </Button>
                <Button variant="link" className="text-md font-light">
                  Projects
                </Button>
                <Button variant="link" className="text-md font-light">
                  Experience
                </Button>
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Connect
                </button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
    </div>
  )
}

export default Navbar
