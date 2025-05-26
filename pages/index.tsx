// pages/index.tsx
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

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

      <div className="relative min-h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video-fantasy.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-10" />

        <div className="relative z-20 flex flex-col justify-center items-center text-center min-h-screen px-4 py-24 md:py-40">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md animate-pulse">
            Bem-vindo ao GURPS Brasil
          </h1>
          <p className="text-lg md:text-2xl text-yellow-400 font-semibold mt-6 animate-fade-in">
            {messages[index]}
          </p>

          {/* Blocos de postagens fixos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-4 w-full max-w-7xl">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 bg-black/40 border border-yellow-500 rounded-xl backdrop-blur-sm shadow-lg hover:scale-[1.03] hover:border-[#f8c946] transition-all duration-300 flex flex-col justify-end p-6 relative overflow-hidden group"
              >
                <h3 className="text-white text-lg font-bold mb-2 drop-shadow-lg">Título do Conto {i}</h3>
                <p className="text-sm text-gray-300">Resumo breve do conto ou descrição mágica...</p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 group-hover:opacity-60 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#1a1414] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row justify-between">
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Sugestões</h3>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
              <input
                type="text"
                placeholder="Digite sua sugestão..."
                className="flex-1 w-full p-2 rounded bg-white text-black"
              />
              <button className="bg-[#f8c946] hover:bg-[#d3a72a] text-black px-4 py-2 rounded font-semibold w-full sm:w-auto">
                Enviar
              </button>
            </div>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="mailto:contato@gurpsbrasil.com.br" className="hover:scale-110 transition"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="https://instagram.com/gurpsbrasil" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://youtube.com/@gurpsbrasil" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
            {[
              { src: "/team/Screenshot_1.png", nome: "Caio Peralta", funcao: "Conteudista" },
              { src: "/team/Screenshot_2.png", nome: "Vitor Hugo", funcao: "Conteudista" },
              { src: "/team/Screenshot_4.png", nome: "Samuel Romano", funcao: "Conteudista" },
              { src: "/team/Screenshot_3.png", nome: "Marcos Antônio", funcao: "Dev" }
            ].map((membro, i) => (
              <div className="text-center" key={i}>
                <div className="w-24 h-24 mx-auto relative">
                  <Image
                    src={membro.src}
                    alt={membro.nome}
                    fill
                    className="object-cover rounded-full border-2 border-white shadow-md"
                  />
                </div>
                <p className="font-bold mt-3">{membro.nome}</p>
                <p className="text-sm">{membro.funcao}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">© 2025 GURPS Fórum Brasil. Todos os direitos reservados.</p>
      </footer>
    </MainLayout>
  );
}
