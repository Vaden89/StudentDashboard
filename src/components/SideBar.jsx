import { NavLink, Outlet } from "react-router";
import { navItem } from "../resources/resources";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="w-full flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden w-full border-b-2 p-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold text-black">LOGO</span>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative w-72 shadow-lg px-4 sm:px-8 py-10 h-screen flex flex-col gap-14 bg-white transition-transform duration-300 z-50`}
      >
        <span className="text-2xl underline-offset-2 underline font-semibold text-black hidden lg:block">
          LOGO
        </span>
        <nav className="bg-white w-full">
          <ul className="flex flex-col text-black font-semibold gap-3 text-lg sm:text-base">
            {navItem.map((item, index) => {
              return (
                <NavLink
                  to={item.link}
                  end={item.link === "/dashboard"}
                  className={({ isActive }) =>
                    isActive
                      ? "active-link flex items-center gap-2 bg-[#FCEEFE] p-2 rounded-xl"
                      : "flex items-center gap-2 p-2"
                  }
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={`w-5 h-5 ${
                          isActive ? "text-purple-500" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={isActive ? "text-black" : "text-gray-600"}
                      >
                        {item.title}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full flex flex-col">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between p-4 sm:px-8 sm:border-b-2">
          <span className="font-bold text-black text-2xl mb-4 sm:mb-0">
            Welcome, Eric 👋🏽
          </span>
          <div className="hidden sm:flex items-center gap-6">
            <span className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full">
              <Bell
                size={16}
                className="text-gray-700 font-semibold"
                fill="#374151"
              />
            </span>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 rounded-full sm:p-1">
              <span className="w-8 h-8 flex justify-center items-center bg-blue-500 rounded-full text-white font-semibold">
                EF
              </span>
              <span className="font-semibold flex items-center gap-2">
                Eric Foster <ChevronDown size={16} />
              </span>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
        <Outlet />
      </main>
    </main>
  );
};
