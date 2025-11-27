"use client";

import { Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-gray-50 text-black px-5 py-3 shadow-2xl ">
      <div className="flex justify-between items-center">
        {/* اللوجو */}
        <h1 className="text-2xl font-bold ">TeckMart</h1>

        {/* اللينكات - تظهر فقط من MD وطالع */}
        <div className="hidden md:flex gap-6">
          <Link href="/">
            <Button
              variant={"ghost"}
              className={`px-4 py-2 rounded transition  font-bold  ${
                pathname === "/"
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              Home
            </Button>
          </Link>
          <Button
            variant={"ghost"}
            className={`px-4 py-2 rounded transition   font-bold ${
              pathname === "/Products"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            Products
          </Button>
          <Button
            variant={"ghost"}
            className={`px-4 py-2 rounded transition   font-bold ${
              pathname === "/Products"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            Contact
          </Button>
        </div>

        {/* الأيقونات + زر المنيو في الموبايل */}
        <div className="flex items-center gap-4 text-xl">
          <Search className="cursor-pointer" />
          <User className="cursor-pointer" />

          {/* زر المنيو - يظهر فقط في الموبايل */}
          <Menu
            className="cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* المنيو للموبايل */}
      {open && (
        <div className="mt-4 flex flex-col gap-3  md:hidden">
          <button className="bg-gray-200 px-4 py-2 rounded">Home</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Products</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Contact</button>
        </div>
      )}
    </nav>
  );
}
