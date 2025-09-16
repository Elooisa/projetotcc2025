import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ods9 from "../../assets/ods9.png"; 
import fiebLogo from "../../assets/logofieb.png"; 
import { useNavigate } from "react-router-dom";

const integrantes = [
  {
    nome: "Eloisa Ramos Silva",
    imagem: "../../assets/eloisa.png", 
    descricao: "Programadora da parte web.",
  },
  {
    nome: "Emmanuelle de Sousa Oliveira",
    imagem: "../../assets/emmanuelle.png",
    descricao: "Editora da parte da documentação.",
  },
  {
    nome: "Gabrielly Aparecida de Jesus Santos",
    imagem: "../../assets/gabrielly.png",
    descricao: "Programadora da parte mobile.",
  },
  {
    nome: "Leticia Alves da Silva",
    imagem: "../../assets/leticia.png",
    descricao: "Editora da parte da documentação.",
  },
  {
    nome: "Larissa Basilio Lima",
    imagem: "../../assets/larissa.png",
    descricao: "Editora da parte da documentação.",
  },
];

const SobreProjetoPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIndex(null);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-2">
      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-8 py-4 bg-[#f3eaf7] shadow-md">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={fiebLogo} alt="Logo FIEB" className="h-12 w-auto" />
        </div>
        <button
          onClick={() => navigate("/admin/login")}
          className="border-2 border-[#732457] bg-white text-[#732457] px-5 py-2 rounded-lg font-semibold transition hover:bg-[#732457] hover:text-white hover:shadow"
        >
          Login
        </button>
      </header>

      {/* Descrição do Projeto */}
      <div className="bg-[#f3eaf7] rounded-xl shadow-lg p-6 w-full max-w-3xl mt-4 mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#732457] mb-2">
          Sobre o Projeto
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          O projeto visa otimizar o controle e o planejamento das refeições
          escolares, promovendo o uso eficiente dos recursos alimentares e
          reduzindo o desperdício de merenda. Por meio de um sistema digital, é
          possível registrar, analisar e visualizar dados sobre o consumo de
          refeições, facilitando o planejamento e a tomada de decisões para uma
          alimentação mais sustentável e adequada às necessidades dos alunos.
        </p>
        <h2 className="text-xl font-semibold text-[#a64182] mt-4 mb-1">
          O que é a CDM?
        </h2>
        <p className="text-gray-700">
          CDM significa <b>Controle de Desperdício de Merenda</b>. Trata-se de
          uma iniciativa que busca monitorar e gerenciar o consumo de merenda
          escolar, utilizando tecnologia para registrar informações, identificar
          padrões de consumo e propor melhorias no processo, contribuindo para a
          redução do desperdício de alimentos nas escolas.
        </p>
        <h2 className="text-xl font-semibold text-[#a64182] mt-4 mb-1">
          Qual o nosso objetivo?
        </h2>
        <p className="text-gray-700">
          Nosso objetivo é criar uma solução inovadora que auxilie no controle e
          planejamento das refeições escolares, contribuindo para a redução do
          desperdício de merenda e para a promoção de uma alimentação mais
          eficiente e sustentável. Assim, buscamos apoiar as instituições de
          ensino na otimização de recursos e na melhoria da qualidade de vida
          dos alunos.
        </p>
      </div>

      {/* Integrantes */}
      <div className="w-full max-w-5xl flex flex-col items-center mb-10">
        <h2 className="text-2xl font-bold text-[#732457] mb-6">
          Integrantes do Grupo
        </h2>
        <div className="flex flex-row justify-center gap-6 w-full overflow-x-auto pb-4">
          {integrantes.map((int, idx) => (
            <motion.div
              key={idx}
              className={`bg-white rounded-xl shadow-lg flex flex-col items-center p-4 min-w-[192px] w-48 transition-all duration-300 cursor-pointer ${
                hovered === idx || activeIndex === idx
                  ? "scale-110 z-10"
                  : "scale-100"
              }`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              style={{
                minHeight: hovered === idx || activeIndex === idx ? 320 : 220,
              }}
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 overflow-hidden flex items-center justify-center">
                {/* Espaço para imagem */}
                {int.imagem ? (
                  <img
                    src={int.imagem}
                    alt={int.nome}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Foto</span>
                )}
              </div>
              <h3 className="font-bold text-[#732457] text-lg mb-1">
                {int.nome}
              </h3>
              {(hovered === idx || activeIndex === idx) && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gray-700 text-sm mt-2"
                >
                  {int.descricao}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ODS 9 */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center bg-[#f3eaf7] rounded-xl shadow-lg p-6 mb-10">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <div className="w-32 h-32 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow">
            <img
              src={ods9}
              alt="ODS 9"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#732457] mb-2">
            ODS 9 - Indústria, Inovação e Infraestrutura
          </h2>
          <p className="text-gray-700">
            A ODS 9 busca construir infraestruturas resilientes, promover a
            industrialização inclusiva e sustentável e fomentar a inovação. O
            projeto está alinhado a esse objetivo ao propor soluções inovadoras
            para a gestão e redução do desperdício de alimentos, promovendo
            eficiência e sustentabilidade no ambiente escolar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreProjetoPage;
