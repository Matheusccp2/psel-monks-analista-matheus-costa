import { useState, useEffect } from "react";

import img1 from '../assets/person-icon.svg'

export default function Formulario() {
  const [resultado, setResultado] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const [campo3, setCampo3] = useState("");
  const [campo4, setCampo4] = useState("");

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 1000));
    setNum2(Math.floor(Math.random() * 1000));
  }, []);

  const handleCheck = async () => {
    if (!campo1 || !campo2 || !campo3 || !campo4 || !resultado) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    if (parseInt(resultado) !== num1 + num2) {
      alert("Resposta incorreta. Tente novamente.");
      return;
    }
  
    const formData = new FormData();
    formData.append("action", "salvar_dados_formulario");
    formData.append("categoria1", campo1);
    formData.append("categoria2", campo2);
    formData.append("categoria3", campo3);
    formData.append("categoria4", campo4);
    formData.append("resultado", resultado);
  
    try {
      const response = await fetch("http://psel-monks-analista.local/wp-admin/admin-ajax.php", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      alert(data.message);
    } catch (err) {
        console.error("Erro ao processar a verificação:", err);
      }
  };
  

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 bg-[#2D2D2D] p-12">
        <img src={img1} alt="" />
        <div className="flex flex-col justify-center mx-auto w-[312px] md:w-[851px] bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur</h3>
            <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque</p>
            <p className="text-gray-700 text-sm mt-4">*Lorem ipsum dolor sit amet consectetur</p>

            <div className="flex flex-wrap mt-4 gap-4">
              <input
                  type="text"
                  placeholder="Categoria*"
                  required
                  value={campo1}
                  onChange={(e) => setCampo1(e.target.value)}
                  className="w-full p-2 bg-white rounded-md md:w-[392px]"
              />
              <input
                  type="text"
                  placeholder="Categoria"
                  required
                  value={campo2}
                  onChange={(e) => setCampo2(e.target.value)}
                  className="w-full p-2 bg-white rounded-md md:w-[392px]"
              />
              <input
                  type="text"
                  placeholder="Categoria*"
                  required
                  value={campo3}
                  onChange={(e) => setCampo3(e.target.value)}
                  className="w-full p-2 bg-white rounded-md md:w-[392px]"
              />
              <input
                  type="text"
                  placeholder="Categoria"
                  required
                  value={campo4}
                  onChange={(e) => setCampo4(e.target.value)}
                  className="w-full p-2 bg-white rounded-md md:w-[392px]"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-around md:items-center gap-4 md:gap-8 mt-6">
              <p className="text-md text-left md:text-2xl font-semibold">Verificação de segurança</p>
              <div className="flex justify-center items-center gap-6 my-2">
                  <div className="flex gap-2 md:gap-6 justify-center items-center bg-gray-300 px-4 py-2 rounded-md w-[123px] md:w-[184px]">
                    <span className="rounded-md text-base md:text-xl text-[#7D26C9] font-bold">{num1}</span>
                    <span className="text-lg">+</span>
                    <span className="rounded-md text-base md:text-xl text-[#7D26C9] font-bold">{num2}</span>
                  </div>
                  <span className="text-lg">=</span>
                  <input
                      type="number"
                      placeholder="*Resultado"
                      value={resultado}
                      onChange={(e) => setResultado(e.target.value)}
                      className="w-[95px] md:w-[234px] p-2 rounded-md bg-white text-center font-bold"
                  />


              </div>
            </div>

            
            <button
              onClick={handleCheck}
              className="w-full md:ml-75 md:w-[180px] bg-[#DFBBFE] opacity-50 mt-6 py-2 rounded-md text-[#2D2D2D] font-semibold hover:bg-purple-600 hover:text-white"
              >
              Lorem ipsum
            </button>
        </div>
    </div>
  );
}

