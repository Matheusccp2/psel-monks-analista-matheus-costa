import Navbar from "./Navbar";
import bgImage1 from "../assets/img-banner1.svg"; // Imagem principal
import bgImage2 from "../assets/img-banner2.svg"; // Imagem deslocada
import imgScroll from "../assets/scroll.svg";

export default function Header() {
  return (
    <header className="relative bg-[#2D2D2D] h-[450px] md:h-[480px] flex flex-col overflow-hidden md:rounded-b-[32px]">
        <div className="relative z-10"> {/* Adicionando z-10 para garantir que o conteúdo fique na frente */}
            <Navbar />
            <div className="flex flex-col gap-[24px] md:gap-[37px] w-[236px] md:mx-[80px] md:w-[700px]">
                <div className="ml-[24px] w-[180px] md:w-full">
                    <h1 className="text-[24px] md:text-[48px] text-[#EAE8E4] font-bold md:mt-[40px]">Lorem ipsum dolor sit amet consectetur</h1>
                    <p className="text-[16px] md:text-[21px] text-[#EAE8E4] font-thin">Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra</p>
                </div>
                <div className="flex justify-center items-center md:gap-[37px]">
                    <img src={imgScroll} alt="" className="h-[60px] md:h-[120px]" />
                </div>
            </div>
        </div>

        {/* Container das imagens */}
        <div className="absolute inset-0 flex justify-end md:right-[-10px] right-[-190px] z-0"> {/* Definindo z-0 para as imagens ficarem atrás */}
            {/* Primeira Imagem */}
            <img 
                src={bgImage1} 
                alt="Imagem de fundo 1"
                className="absolute right-0 top-0 w-auto h-full opacity-50"
            />

            {/* Segunda Imagem (Deslocada) */}
            <img 
                src={bgImage2} 
                alt="Imagem de fundo 2"
                className="absolute right-0 top-0 w-auto h-full opacity-50 translate-x-[3px]"
            />
        </div>
    </header>

  );
}
