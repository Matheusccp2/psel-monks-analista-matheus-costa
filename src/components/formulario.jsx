import { useState } from "react";

import img1 from '../assets/person-icon.svg'

export default function Formulario() {
    const [resultado, setResultado] = useState("");

  // Simulação dos valores da verificação de segurança
  const num1 = 427;
  const num2 = 628;

  // Função para verificar o resultado
  const handleCheck = () => {
    if (parseInt(resultado) === num1 + num2) {
      alert("Verificação correta!");
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  };

    return (
        <div className='flex flex-col md:flex-row justify-center gap-10 bg-[#2D2D2D] p-12 '>
            <img src={img1} alt="" />
            <div className=" flex flex-col justify-center mx-auto w-[312px] md:w-[851px] bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur</h3>
                <p className="text-gray-500 text-sm mt-2">
                    Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque
                </p>
                <p className="text-gray-700 text-sm mt-4">*Lorem ipsum dolor sit amet consectetur</p>

                {/* Campos de Entrada */}
                <div className="flex flex-wrap mt-4 gap-4">
                    <input type="text" placeholder="Categoria*" className="w-full p-2 bg-white rounded-md md:w-[392px]" />
                    <input type="text" placeholder="Categoria" className="w-full p-2 bg-white rounded-md md:w-[392px]" />
                    <input type="text" placeholder="Categoria*" className="w-full p-2 bg-white rounded-md md:w-[392px]" />
                    <input type="text" placeholder="Categoria" className="w-full p-2 bg-white rounded-md md:w-[392px]" />
                </div>

                {/* Verificação de Segurança */}
                <div className="flex flex-col md:flex-row justify-around md:items-center gap-4 md:gap-8 mt-6">
                    <p className="text-md text-left md:text-2xl font-semibold">Verificação de segurança</p>
                    <div className="flex justify-center items-center gap-6 my-2">
                        <div className="flex gap-2 md:gap-6 justify-center items-center bg-gray-300 px-4 py-2 rounded-md w-[123px] md:w-[184px]">
                            <span className=" rounded-md text-base md:text-xl text-[#7D26C9] font-bold">{num1}</span>
                            <span className="text-lg">+</span>
                            <span className=" rounded-md text-base md:text-xl text-[#7D26C9] font-bold">{num2}</span>
                        </div>
                        <span className="text-lg">=</span> 
                        <input
                            type="text"
                            placeholder="*Resultado"
                            value={resultado}
                            onChange={(e) => setResultado(e.target.value)}
                            className="w-[95px] md:w-[234px] p-2 rounded-md bg-white"
                        />
                    </div>
                </div>

                {/* Botão de Envio */}
                <button
                    onClick={handleCheck}
                    className="w-full md:ml-75 md:w-[180px] bg-[#DFBBFE] opacity-50 mt-6 py-2 rounded-md text-[#2D2D2D] font-semibold hover:bg-purple-600"
                >
                    Lorem ipsum
                </button>
            </div>
        </div>
    )
}