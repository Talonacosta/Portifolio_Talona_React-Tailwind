import Navbar from "./components/NavbarComponent";

export default async function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <div id="NewRootRoot" className="flex flex-col w-full">
          <div className="relative flex flex-col justify-end pt-40 w-2/3 items-end">
            <div className="border-solid border-[#9400ff]  bg-black absolute top-0 left-10 right-10 flex flex-col gap-3 items-start pt-16 pb-24 pl-24 pr-24 border-8 rounded-lg">
              <h3 className="text-2xl absolute top-0 left-0 h-6 w-40">
                Hi, my name is
              </h3>
              <h1 className="font-poppins text-6xl font-medium text-purple-r absolute top-5 left-0 h-24 w-[406px]">
                Talona Costa.
              </h1>
              <h2 className="font-poppins text-4xl absolute top-20 left-3 h-16 w-[643px]">
                Eu construo coisas para a web
              </h2>
              <p className="font-roboto text-1xl text-paragraph-bg absolute top-36 left-3 h-20 w-1/2 ">
                Sou um desenvolvedor web designer apaixonado por combinar
                criatividade e tecnologia para criar experiências digitais
                impactantes e funcionais.
              </p>

              <div className="border-solid border-[#9400ff] flex flex-col mt-52 h-17 items-start border-2  rounded-lg">
                <div className="text-center text-2xl font-sans text-[#9400ff] ml-6 mr-8 mt-3 mb-3 ">
                  Conheça mais sobre mim !
                </div>
              </div>
              <img
                src="/img/Union.svg"
                alt="rosa"
                className="self-end "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
