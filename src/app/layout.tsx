import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
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
  title: 'Talona - Design e Desenvolvimento Web',
  description: 'Explore meu portfólio para experiências web excepcionais. Contate-nos para colaborações inovadoras!',
  keywords: 'design web, desenvolvimento web, portfólio, inovação ,Talona ,talona',
  author: 'Tales Costa',
  ogImage: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:image" content={metadata.ogImage} />
      </Head>
      <html lang="pt-BR" className={`${customFontPoppins.variable} ${customFontRoboto.variable}`}>
        <body>
          {children}
        </body>
      </html>
    </>
  );
}