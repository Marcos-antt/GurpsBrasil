// pages/404.tsx
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';
import Image from 'next/image';

export default function Custom404() {
  return (
    <MainLayout>
      <Head>
        <title>404 - Página não encontrada</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white px-6">
        <h1 className="text-5xl font-bold text-[#f8c946] mb-4">Erro 404</h1>
        <p className="text-lg text-gray-300 mb-6 max-w-xl">
          Você está perdido em outra dimensão... O Mestre dos Magos não pode te ajudar agora. 😔
        </p>
        <div className="w-[320px] h-[320px] relative">
          <Image src="/tenor.gif" alt="Mestre dos Magos" layout="fill" objectFit="contain" />
        </div>
        <p className="mt-8 text-gray-400">Verifique o endereço digitado ou retorne para a <a href="/" className="underline text-[#f8c946]">página inicial</a>.</p>
      </div>
      
    </MainLayout>
  );
}
