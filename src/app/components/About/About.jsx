const About = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        
          
            <h3 className="text-2xl h-6 ">
              Oi, meu nome é
            </h3>
            <h1 className="font-poppins text-6xl font-medium text-purple-r">
              Talona Costa.
            </h1>
            <h2 className="font-poppins text-4xl left">
              Eu construo coisas para a web
            </h2>
            <p className="font-roboto text-1xl text-paragraph-bg">
              Sou um desenvolvedor web designer apaixonado por combinar
              criatividade e tecnologia para criar experiências digitais
              impactantes e funcionais.
            </p>

            <div className="border-solid border-[#9400ff] flex flex-col mt-52 h-17 items-start border-2 rounded-lg">
              <div className="text-center text-2xl font-sans text-[#9400ff] ml-6 mr-8 mt-3 mb-3 ">
                Conheça mais sobre mim!
              </div>
            </div>
            <img src="/img/Union.svg" alt="rosa" className="self-end" />
          </div>
        
    
    </>
  );
};

export default About;