import { useState } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu-hamburguer.svg";
import closeIcon from "../assets/close.svg";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="bg-[#2D2D2D] p-4 inline-flex items-center">
        <div className="flex items-center gap-4 ">
            <img src={logo} alt="Logo" className="w-[93.33px] h-[16px] md:w-[140px] md:h-[24px]" />
            <button className="md:hidden" onClick={() => setMenuAberto(!menuAberto)}>
              <img src={menuIcon} alt="Menu" className="h-8 w-8" />
            </button>
        </div>

        <div className="hidden md:flex gap-6 ml-10">
            <p className="text-[#EAE8E4] text-xl hover:text-gray-300 hover:cursor-pointer">Categoria 1</p>
            <p className="text-[#EAE8E4] text-xl hover:text-gray-300 hover:cursor-pointer">Categoria 2</p>
            <p className="text-[#EAE8E4] text-xl hover:text-gray-300 hover:cursor-pointer">Categoria 3</p>
            <p className="text-[#EAE8E4] text-xl hover:text-gray-300 hover:cursor-pointer">Categoria 4</p>
        </div>

        {menuAberto && (
          <div className="absolute top-16 left-0 w-full bg-[#DFBBFE] flex flex-col items-start gap-4 p-4 md:hidden">
              <ul className="list-disc list-inside space-y-4">
                <li className="text-[#2D2D2D] text-xl font-bold hover:text-gray-700">Categoria 1</li>
                <li className="text-[#2D2D2D] text-xl font-bold hover:text-gray-700">Categoria 2</li>
                <li className="text-[#2D2D2D] text-xl font-bold hover:text-gray-700">Categoria 3</li>
                <li className="text-[#2D2D2D] text-xl font-bold hover:text-gray-700">Categoria 4</li>
              </ul>
          
              <button onClick={() => setMenuAberto(false)} className="mt-4">
                <img src={closeIcon} alt="Fechar Menu" className="h-full w-full" />
              </button>
          </div>
        )}
    </nav>
  );
}
