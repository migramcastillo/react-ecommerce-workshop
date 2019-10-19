import React from "react";

const NavHeader = () => {
  return (
    <header className="bg-gray-800 py-2">
      <div className="container flex flex-col md:flex-row mx-auto items-center">
        <div className="logo w-32 text-white text-center">LOGO</div>
        <nav className="flex-1 flex justify-between">
          <ul className="flex justify-between items-center">
            <li className="mx-4">
              <a className="text-gray-100" href="#">
                Inicio
              </a>
            </li>
            <li className="mx-4">
              <a className="text-gray-400" href="#">
                Acerca de
              </a>
            </li>
            <li className="mx-4">
              <a className="text-gray-400" href="#">
                Portfolio
              </a>
            </li>
            <li className="mx-4">
              <a className="text-gray-400" href="#">
                Contacto
              </a>
            </li>
          </ul>

          <a href="#" className="bg-emerald text-gray-100 rounded py-2 px-4">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;
