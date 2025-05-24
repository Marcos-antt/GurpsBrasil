// pages/admin.tsx
import { getSession } from 'next-auth/react';
import MainLayout from '../layouts/MainLayout';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function AdminPage() {
  const [formVisible, setFormVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [act, setAct] = useState('');
  const [era, setEra] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, act, era, content });
    alert('História enviada (simulada)!');
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Área Administrativa</h1>

      {!formVisible ? (
        <button
          onClick={() => setFormVisible(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-200"
        >
          Nova História
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 mt-6 bg-white p-6 rounded-xl shadow-xl">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Título da História"
              className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Ato (ex: Ato I)"
              className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              value={act}
              onChange={(e) => setAct(e.target.value)}
            />

            <input
              type="text"
              placeholder="Era (ex: Era da Guerra Sombria)"
              className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              value={era}
              onChange={(e) => setEra(e.target.value)}
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <ReactQuill value={content} onChange={setContent} className="min-h-[200px]" />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-200"
            >
              Enviar História
            </button>
          </div>
        </form>
      )}
    </MainLayout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session || session.user.role !== 'admin') {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: { session }
  };
}
