import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brown-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B&</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brown-800">Bites&co</h1>
              <p className="text-xs text-brown-500">Cookies New York Style</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-brown-700 hover:text-brown-900 font-medium">
              Início
            </Link>
            <Link href="/cardapio" className="text-brown-700 hover:text-brown-900 font-medium">
              Cardápio
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cardapio" className="btn-primary text-sm">
              Pedir Agora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
