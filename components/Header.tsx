import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 md:px-10 py-4 flex flex-col md:flex-row items-center md:justify-start gap-6 text-white backdrop-blur-md bg-black/40">
      <div className="flex items-center gap-3 min-w-[180px]">
        <Image src="/logo-gurps.png" alt="Logo GURPS" width={48} height={48} />
        <span className="text-2xl md:text-3xl font-bold tracking-wide whitespace-nowrap">GURPS Brasil</span>
      </div>

      <nav className="flex flex-wrap gap-x-8 gap-y-2 text-lg md:text-xl font-semibold transition-all">
        {[
          { href: '/', label: 'Início' },
          { href: '/encyclopedia', label: 'Contos de Karim' },
          { href: '/blog', label: 'Blog' },
          { href: '/repositorio', label: 'Repositório' }
        ].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="text-white hover:text-yellow-400 transition duration-200 ease-in-out hover:underline underline-offset-4"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto">
        <Link href="/login">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full shadow whitespace-nowrap">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
