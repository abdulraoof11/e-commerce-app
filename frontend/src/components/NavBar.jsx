import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const desktopLinkClass = ({ isActive }) =>
    isActive ? "text-black font-medium" : "text-gray-600 hover:text-black";

  const mobileLinkClass = ({ isActive }) =>
    `block py-[18px] px-6 text-base font-medium border-b last:border-b-0 transition ${
      isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-50"
    }`;

  // close on route change
  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  // close on outside click (mobile + profile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
        <div className="flex items-center gap-6 relative">
          <img src={assets.search_icon} className="w-5 cursor-pointer" />

          {/* PROFILE DROPDOWN WRAPPER */}
          <div ref={profileRef} className="relative">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              onClick={() => setProfileOpen((prev) => !prev)}
            />

            {/* DROPDOWN */}
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden border border-gray-100 z-50 animate-fadeIn">
                
                <Link
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                >
                  👤 My Profile
                </Link>

                <Link
                  to="/orders"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                >
                  📦 My Orders
                </Link>

                <hr className="my-1" />

                <button
                  onClick={() => {
                    setProfileOpen(false);
                    console.log("logout clicked");
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>

          {/* CART */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-6" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          {/* MOBILE MENU ICON */}
          <img
            src={assets.menu_icon}
            className="w-6 cursor-pointer sm:hidden"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {/* MOBILE OVERLAY */}
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

          <div className="flex-1 bg-white/40" />

          <div className="p-6 bg-white/40">
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;