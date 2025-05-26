// pages/encyclopedia.tsx
import { useSession } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import data from "../data/encyclopedia.json";


export default function Encyclopedia() {
  const { data: session } = useSession();

  return (
    <MainLayout>
      <Head>
        <title>Contos de Karim</title>
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-white drop-shadow">
            Contos de Karim
          </h1>

          {session?.user?.role === "admin" && (
            <Link href="/admin">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200">
                Nova História
              </button>
            </Link>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white shadow hover:scale-[1.01] transition"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-yellow-300 mt-1">
                {item.act} — {item.era}
              </p>
              <p className="mt-2 text-white/90 text-sm">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
