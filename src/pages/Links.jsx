import { useEffect } from "react";
import Navbar from "../app/components/Navbar/NavbarComponent";

export default function Links() {
  useEffect(() => {
    const handleCopyToClipboard = () => {
      const textToCopy = "talona_"; // Replace with the text you want to copy
      const tempInput = document.createElement("textarea");
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      console.log(`Copied to clipboard: ${textToCopy}`);
    };

    const discordLink = document.getElementById("discord-link");
    if (discordLink) {
      discordLink.addEventListener("click", handleCopyToClipboard);
    }

    return () => {
      // Cleanup event listener
      if (discordLink) {
        discordLink.removeEventListener("click", handleCopyToClipboard);
      }
    };
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="my-4 text-center text-3xl text-purple-r">Meus Links</h1>
      <p className="text-1xl my-4 text-center text-zinc-900  ">
        Aqui estão alguns links importantes para me encontrar online.
      </p>
      <div id="links" className="mx-auto max-w-[675px]">
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          href="https://github.com/Talonacosta"
          target="_blank"
        >
          Github
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          href="https://www.linkedin.com/in/talona-costa-b83054295/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          href="https://twitter.com/Talonaa_"
          target="_blank"
        >
          Twitter
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          href="https://www.instagram.com/talonaa_/"
          target="_blank"
        >
          Instagram
        </a>

        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          id="discord-link"
          href="#"
        >
          Discord
        </a>

        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          href="https://open.spotify.com/user/12184323470?si=ae5fd5e22a9141b7&nd=1"
          target="_blank"
        >
          Spotify
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          href="mailto:talonacostaa@gmail.com"
          target="_blank"
        >
          Gmail
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent mx-10 my-3 block rounded-lg border-2 border-black bg-transparent p-2 text-center font-roboto text-lg transition duration-300"
          href="https://www.twitch.tv/talona_"
          target="_blank"
        >
          Twitch
        </a>
      </div>

      <div id="hashtag" className="my-4 text-center text-2xl font-normal">
        #Flower❤
      </div>
    </div>
  );
}
