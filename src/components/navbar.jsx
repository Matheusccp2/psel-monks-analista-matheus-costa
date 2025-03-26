import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="flex items-center pt-6 pl-20 gap-[24px] bg-[#2D2D2D]">
            <img src={logo} alt="Logo" className="h-10 w-[140px] h-[24px]" />
            <div className="flex gap-[24px]">
                <p className="text-[#EAE8E4] text-xl hover:text-gray-300">Categoria 1</p>
                <p className="text-[#EAE8E4] text-xl hover:text-gray-300">Categoria 2</p>
                <p className="text-[#EAE8E4] text-xl hover:text-gray-300">Categoria 3</p>
                <p className="text-[#EAE8E4] text-xl hover:text-gray-300">Categoria 4</p>
            </div>
        </nav>
    );
}
