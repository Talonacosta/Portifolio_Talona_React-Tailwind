import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-32">
        <h3 className="text-2xl">Oi, meu nome é</h3>
        <h1 className="font-poppins text-6xl font-medium text-purple-r">
          Tales Costa.
        </h1>
        <h2 className="font-poppins text-4xl text-zinc-700">
          Eu construo coisas para a web
        </h2>
        <p className="font-roboto text-1xl text-zinc-700 max-w-lg">
          Sou um desenvolvedor web designer apaixonado por combinar criatividade
          e tecnologia para criar experiências digitais impactantes e
          funcionais.
        </p>

        <Link href="/Sobre" passHref>
          <button
            className="mx-auto my-3 bg-[#9400ff] border-none rounded-lg block text-center 
           text-white text-2xl font-poppins ml-12 mr-8 mt-4 mb-3 p-3"
          >
            Conheça mais!
          </button>
        </Link>

        <div className="pt-6">
          <IoIosArrowDown size={24} className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
