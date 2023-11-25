import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const customFontPoppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ["400", "500"],
});

const customFontRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});


export const metadata = {
  title: "Talona - Design e Desenvolvimento Web",
  description: "Explore nosso portfólio para experiências web excepcionais. Contate-nos para colaborações inovadoras!",
  keywords: "design web, desenvolvimento web, portfólio, inovação",
  author: "Seu Nome",
  ogImage: "URL_DA_IMAGEM_PARA_REDES_SOCIAIS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${customFontPoppins.variable} ${customFontRoboto.variable}`}>
      <body>
      
        {children}
      </body>
    </html>
  );
}
