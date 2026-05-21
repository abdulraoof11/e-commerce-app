import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Orders", path: "/orders" },
  ];

  const desktopLinkClass = ({ isActive }) =>
    isActive ? "text-black font-medium" : "text-gray-600 hover:text-black";

  const mobileLinkClass = ({ isActive }) =>
    `block py-[18px] px-6 text-base font-medium border-b last:border-b-0 transition ${
      isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-50"
    }`;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on resize (sm and above)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between py-5 font-medium relative">
        <img src={assets.logo} alt="logo" className="w-36" />

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={desktopLinkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-5 cursor-pointer" />
          <img src={assets.profile_icon} className="w-5 cursor-pointer" />

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-6" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          <img
            src={assets.menu_icon}
            className="w-6 cursor-pointer sm:hidden"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-md z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-[80%] z-50 shadow-2xl transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full flex flex-col bg-white/30 backdrop-blur-xl">
          
          {/* MENU */}
          <div className="bg-white">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* SPACER */}
          <div className="flex-1 bg-white/40 backdrop-blur-sm" />

          {/* FOOTER */}
          <div className="p-6 bg-white/40">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;