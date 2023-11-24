import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container mx-auto p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-x-8">
            <Link href="/">
              <span className="text-[#6800B4] text-center font-roboto text-xl font-normal leading-normal tracking-wider">
                01.
              </span>{" "}
              <span className="text-black font-roboto text-xl font-normal leading-normal tracking-wide">
                PROTIFOLIO
              </span>
            </Link>
            <Link href="/Sobre">
              <span className="text-[#6800B4] text-center font-roboto text-xl font-normal leading-normal tracking-wider">
                02.
              </span>{" "}
              <span className="text-black font-roboto text-xl font-normal leading-normal tracking-wide">
                RESUME
              </span>
            </Link>
            <a
              href="/"
              className="flex title-font font-medium items-center text-black mb-4 md:mb-0"
            >
              <Image src="/img/Union.svg" alt="rosa" width={50} height={12} />
            </a>
            <Link href="/Projetos">
              <span className="text-[#6800B4] text-center font-roboto text-xl font-normal leading-normal tracking-wider">
                03.
              </span>{" "}
              <span className="text-black font-roboto text-xl font-normal leading-normal tracking-wide">
                ABOUT
              </span>
            </Link>
            <Link href="/Links" >
              <span className="text-[#6800B4] text-center font-roboto text-xl font-normal leading-normal tracking-wider">
                04.
              </span>{" "}
              <span className="text-black font-roboto text-xl font-normal leading-normal tracking-wide">
                CONTACT
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
