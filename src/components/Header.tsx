import { NavbarData } from "@/data/headerData";
import { NavLink } from "react-router";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Header() {
  const { logo, Navbar } = NavbarData;
  const { title, subtitle } = logo;

  // Sideber State
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="border-b border-b-hover/20 py-2.5  fixed top-0 left-0 w-full z-50 bg-opacity-90 backdrop-blur-sm ">
        <div className="container ">
          <div className=" flex items-center justify-between">
            {/* Logo */}
            <Logo title={title} subtitle={subtitle} />
            {/* Navigation */}
            <nav className="hidden md:inline-block items-center text-sm uppercase tracking-wide font-medium">
              <ul className="flex items-center gap-4">
                {Navbar?.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item?.href}
                      className={({ isActive }: { isActive: boolean }) =>
                        cn(
                          "hover:text-hover hoverEffect relative",
                          "after:block after:h-[2px] after:bg-hover after:scale-x-0 after:origin-left after:transtion-transform after:duration-300 after:ease-in-out",
                          "hover:after:scale-x-100",
                          isActive && "after:scale-x-100 text-hover",
                        )
                      }
                    >
                      {item?.name}
                    </NavLink>
                  </li>
                ))}

                {/* Button Animation */}
                <button className="relative px-[1px] py-[1px]  uppercase hover:text-hover font-medium cursor-pointer text-white  overflow-hidden group">
                  {/* Border layer */}
                  <span className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-borderSpin"></span>

                  {/* Inner background */}
                  <a href="https://wa.me/8801738588956?text=Hi%20Sakib,%20I%20want%20to%20hire%20you%20for%20a%20project." target="_blank" rel="noreferrer noopener">
                    <span className="relative block rounded-md bg-gray-800 px-3.5 py-1.5 transition">Hire Me</span>
                  </a>
                </button>
              </ul>
            </nav>
            {/* hamburger */}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="inline-flex md:hidden">
              <Menu className="hoverEffect hover:text-hover " />
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
      </header>
    </>
  );
}
