// pages/index.tsx
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">Bem-vindo ao GURPS BRASIL</h1>
      <p className="mt-4 text-gray-700">
        Explore histórias, personagens, itens mágicos e muito mais sobre o sistema GURPS.
      </p>
    </MainLayout>
  );
}
