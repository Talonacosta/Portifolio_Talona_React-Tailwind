const About = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <h3 className="text-2xl h-6 pl-10">Oi, meu nome é</h3>
        <h1 className="font-poppins text-6xl font-medium text-purple-r pl-10">
          Talona Costa.
        </h1>
        <h2 className="font-poppins text-4xl left pl-12">
          Eu construo coisas para a web
        </h2>
        <p className="font-roboto text-1xl text-paragraph-bg pl-12">
          Sou um desenvolvedor web designer apaixonado por combinar criatividade
          e tecnologia para criar experiências digitais impactantes e
          funcionais.
        </p>

        <div className="border-solid border-[#9400ff] max-w-[675px] mx-auto my-3  items-start border-2 rounded-lg">
          <div className="text-center text-2xl font-poppins text-[#9400ff] ml-6 mr-8 mt-3 mb-3 ">
            Conheça mais sobre mim!
          </div>
        </div>
        <img
          src="/img/Union.svg"
          alt="rosa"
          className="self-end"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default About;
