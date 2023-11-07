import React from "react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <>
    <header>
      <div className="w-full h-20  top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
          <Image
            src="/img/Union.svg"
            alt="rosa"
            width={51}
            height={47}
           
          />
          <ul className="hidden md:flex gap-x-8 font-roboto">
       <li>
                <Link href="/Sobre">
                  <span className="text-purple-r">01.</span> Sobre Mim
                </Link>
              </li>
              <li>
                <Link href="/Flores">
                <span className="text-purple-r">02.</span>Flores
                </Link>
              </li>
              <li>
                <Link href="/Projetos">
                <span className="text-purple-r">03.</span>Projetos
                </Link>
              </li>
              <li>
                <Link href="/Links">
                <span className="text-purple-r">04.</span>Meus Links
                </Link>
              </li>
              <li>
                <Link href="/">
                Home
                </Link>
              </li> 
              
            </ul>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Navbar;