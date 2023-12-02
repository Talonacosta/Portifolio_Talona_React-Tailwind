import React from "react";
import Navbar from "../app/components/Navbar/NavbarComponent";

export default function Sobre() {
  return (
    <div>
      <Navbar />
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Front-end Developer From Brazil</h2>
        <p class="mb-4 text-lg">
        Sou um experiente desenvolvedor front-end, com habilidades sólidas em
        JavaScript, HTML/CSS e design responsivo. Comprometido com a qualidade,
        tenho experiência em desenvolvimento orientado a testes. Minha paixão é
        criar experiências excepcionais para os usuários. Busco oportunidades
        para contribuir em projetos desafiadores, alinhados com os mais altos
        padrões de usabilidade e design.
        </p>
        <a href="#" class="bg-purple-600 text-white px-4 py-2 rounded">
          Download PDF
        </a>
      </div>
    </div>
  );
}
