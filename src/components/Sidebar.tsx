import { NavbarData } from "@/data/headerData";
import { X } from "lucide-react";
import type { FC } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import SocialLink from "./SocialLink";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { Navbar } = NavbarData;

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0   transition-all duration-300 " onClick={onClose} />}
      <div className={`fixed inset-y-0 right-0 z-50 min-w-72 bg-bg transition-all duration-300 transform  ${isOpen ? "translate-x-0 shadow-lg " : "translate-x-full  "}`}>
        <div className="flex justify-end p-4 bg-black/95 border-b border-white/10">
          <button className="hover:text-red-600 hoverEffect" aria-label="Close" onClick={onClose}>
            <X />
          </button>
        </div>
        {/* Mobile Navigation */}
        <nav className="p-4 bg-black/95 flex flex-col  min-h-screen ">
          <Logo title="Ahmed" subtitle="." />
          <ul className="flex flex-col gap-4 text-sm uppercase tracking-wide font-medium mt-5">
            {Navbar?.map((item, index) => (
              <li key={index}>
                <NavLink
                  onClick={onClose}
                  to={item?.href}
                  className={({ isActive }: { isActive: boolean }) =>
                    cn(
                      "hover:text-hover hoverEffect relative inline-block",
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
            <button className="relative px-[1px] py-[1px] w-28 mt-5 mb-24 uppercase hover:text-hover font-medium cursor-pointer text-white  overflow-hidden group">
              {/* Border layer */}
              <span className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-borderSpin"></span>

              {/* Inner background */}
              <a href="https://wa.me/8801738588956?text=Hi%20Sakib,%20I%20want%20to%20hire%20you%20for%20a%20project." target="_blank" rel="noreferrer noopener">
                <span className="relative block rounded-md bg-gray-800 py-2 transition">Hire Me</span>
              </a>
            </button>
          </ul>
          <SocialLink />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
