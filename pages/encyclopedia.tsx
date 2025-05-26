// pages/encyclopedia.tsx
import MainLayout from '../layouts/MainLayout';
import data from '../data/encyclopedia.json';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Encyclopedia() {
  const { data: session } = useSession();

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Contos de Carim</h1>
        {session?.user.role === 'admin' && (
          <Link href="/admin">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200">
              Nova História
            </button>
          </Link>
        )}
      </div>

      <div className="grid gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200 border-l-4 border-blue-500"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 italic mb-3">{item.act} / {item.era}</p>
            <p className="text-gray-700 leading-relaxed">{item.summary}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
