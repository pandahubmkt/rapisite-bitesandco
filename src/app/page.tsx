import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaCookie, FaWhatsapp, FaMotorcycle, FaGift } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-cream-100 to-cream-50 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-light rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-brown-200 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-yellow-light text-brown-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaCookie /> Delivery disponível
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-brown-900 mb-6 leading-tight">
                Cookies New York Style, <span className="text-brown-600">Quentinhos!</span>
              </h1>
              
              <p className="text-xl text-brown-600 mb-8 leading-relaxed">
                Experimente os cookies mais gostosos da cidade. 
                Assados na hora, entregues quentinhos na sua porta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cardapio" className="btn-primary text-lg px-8 py-4">
                  Ver Cardápio
                </Link>
                <a 
                  href="https://wa.me/55" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Pedir no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-yellow-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCookie className="text-2xl text-brown-600" />
                </div>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">Fresh & Hot</h3>
                <p className="text-brown-600">Assados na hora, sempre quentinhos e crocantes</p>
              </div>
              
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-yellow-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMotorcycle className="text-2xl text-brown-600" />
                </div>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">Delivery Rápido</h3>
                <p className="text-brown-600">Entregamos quentinho na sua porta</p>
              </div>
              
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-yellow-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGift className="text-2xl text-brown-600" />
                </div>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">Presente Ideal</h3>
                <p className="text-brown-600">Perfeitos para compartilhar com quem você ama</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brown-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para experimentar?
            </h2>
            <p className="text-brown-200 text-lg mb-8">
              Peça agora e receba os cookies quentinhos no conforto da sua casa!
            </p>
            <Link href="/cardápio" className="btn-secondary text-lg px-8 py-4 inline-block">
              Ver Nossos Sabores
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
