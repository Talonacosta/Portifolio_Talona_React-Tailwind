import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container mx-auto flex-col items-center p-5 md:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 text-base md:ml-auto">
            <Link href="/">
              <span className="text-center font-roboto text-xl font-normal leading-normal tracking-wider text-yellow-500">
                01.
              </span>{" "}
              <span className="font-roboto text-xl font-normal leading-normal tracking-wide text-black">
                PROTIFOLIO
              </span>
            </Link>
            <Link href="/Sobre">
              <span className="text-center font-roboto text-xl font-normal leading-normal tracking-wider text-yellow-500">
                02.
              </span>{" "}
              <span className="font-roboto text-xl font-normal leading-normal tracking-wide text-black">
                RESUME
              </span>
            </Link>
            <a
              href="/"
              className="title-font mb-4 flex items-center font-medium text-black md:mb-0"
            >
              <Image src="/img/Union.svg" alt="rosa" width={50} height={12} />
            </a>
            <Link href="/Projetos">
              <span className="text-center font-roboto text-xl font-normal leading-normal tracking-wider text-yellow-500">
                03.
              </span>
              <span className="font-roboto text-xl font-normal leading-normal tracking-wide text-black">
                ABOUT
              </span>
            </Link>
            <Link href="/Links">
              <span className="text-center font-roboto text-xl font-normal leading-normal tracking-wider text-yellow-500">
                04.
              </span>
              <span className="font-roboto text-xl font-normal leading-normal tracking-wide text-black">
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
