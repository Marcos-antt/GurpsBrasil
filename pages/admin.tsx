// pages/index.tsx
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const messages = [
  "📚 Descubra mundos através das histórias dos jogadores",
  "🎲 Compartilhe suas campanhas GURPS com a comunidade",
  "🧙 Encare aventuras além da realidade",
  "⚔️ Crie personagens, cidades e reinos épicos"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>GURPS Fórum - Explore Fantasias</title>
      </Head>

      {/* Fundo com vídeo e overlay escuro */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video-fantasy.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>



        {/* Conteúdo centralizado */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-xl p-10 rounded-xl shadow-xl max-w-3xl mt-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-wide">
              Bem-vindo ao GURPS Fórum
            </h1>
            <p className="text-lg sm:text-2xl text-[#f8c946] font-semibold transition-opacity duration-1000 ease-in-out min-h-[48px]">
              {messages[index]}
            </p>
            <Link href="/encyclopedia">
              <button className="mt-8 bg-[#ed1b24] hover:bg-[#b90d1b] text-white font-semibold px-6 py-3 rounded-md shadow-md">
                Explorar Enciclopédia
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111] text-white py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Equipe</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Image src="/team/Screenshot_1.png" alt="Caio Peralta" width={32} height={32} className="rounded-full" />
                <span>Caio Peralta – Conteudista</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/team/Screenshot_2.png" alt="Vitor Hugo" width={32} height={32} className="rounded-full" />
                <span>Vitor Hugo – Conteudista</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/team/Screenshot_4.png" alt="Samuel Romano" width={32} height={32} className="rounded-full" />
                <span>Samuel Romano – Conteudista</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/team/Screenshot_3.png" alt="Marcos Antônio" width={32} height={32} className="rounded-full" />
                <span>Marcos Antônio – Desenvolvedor</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contatos</h3>
            <ul className="space-y-1 text-sm">
              <li>📧 contato@gurpsbrasil.com.br</li>
              <li>📷 Instagram: @gurpsbrasil</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Sugestões</h3>
            <input
              type="text"
              placeholder="Envie uma sugestão..."
              className="w-full p-2 rounded-md text-black"
            />
            <button className="mt-2 w-full bg-[#ed1b24] hover:bg-[#b90d1b] text-white py-2 rounded-md font-semibold">
              Enviar
            </button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6">© 2025 GURPS Fórum Brasil. Todos os direitos reservados.</div>
      </footer>
    </MainLayout>
  );
}
