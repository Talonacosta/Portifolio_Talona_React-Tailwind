const Contact = () => {
  return (
    <section className="body-font relative text-gray-400">
      <div className="absolute inset-0 bg-purple-950">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Belo%20Horizonte&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
        ></iframe>
      </div>
      <div className="container mx-auto flex px-5 py-24">
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-black">
            Me Chame
          </h2>
          <p className="mb-5 leading-relaxed">
            Me mande um E-mail para me contatar
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-700 bg-white px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-900"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="text-sm leading-7 text-black">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-gray-700 bg-white px-3 py-1 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:ring-2 focus:ring-purple-900"
            ></textarea>
          </div>
          <button className="hover:bg-purple-6600 rounded border-0 bg-purple-500 px-6 py-2 text-lg text-white focus:outline-none">
            Confimar
          </button>
          <p className="mt-3 text-xs text-gray-400 text-opacity-90">
            Clique no botão para confimar a mensagem
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
