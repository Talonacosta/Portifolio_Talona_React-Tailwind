import React from "react";
import Navbar from '../app/components/NavbarComponent'; 

export default function Links() {
  return (
    <div>
      <Navbar />
      <h1>Meus Links</h1>
      <p>Aqui estão alguns links importantes para me encontrar online.</p>
      <ul>
        <li><a href="https://seusite.com">Meu Site</a></li>
        <li><a href="https://linkedin.com/seulinkedin">LinkedIn</a></li>
        <li><a href="https://github.com/seugithub">GitHub</a></li>
        
      </ul>
    </div>
  );
}