"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-24">
        <h3 className="text-2xl text-yellow-500">Oi, meu nome é</h3>
        <div className="font-poppins text-purple-r pl-10 text-6xl">
          <span className="font-medium text-purple-600">Talona</span> 
          <span className="text-purple-600"> Costa</span>
          <span className="font-medium text-purple-600">.</span>
        </div>
        <h2 className="font-poppins text-center text-4xl ">
          Eu construo coisas para a web
        </h2>
      
        <p className="text-1xl max-w-lg text-center font-roboto text-paragraph-bg leading-relaxed text-zinc-900">
          Sou um desenvolvedor web designer apaixonado por combinar criatividade
          e tecnologia para criar experiências digitais impactantes.
        </p>

        <Link href="/Sobre" passHref>
          <button
            className="font-poppins mx-auto my-8 flex rounded-lg border-none bg-yellow-500
      p-4 text-center text-2xl text-white"
          >
            Conheça meu blog!
          </button>
        </Link>

        <div className="my-1 flex items-center justify-center">
          <IoIosArrowDown size={24} className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
