import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-brown-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-light rounded-full flex items-center justify-center">
                <span className="text-brown-800 font-bold text-xl">B&</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Bites&co</h2>
                <p className="text-sm text-brown-300">Cookies New York Style</p>
              </div>
            </div>
            <p className="text-brown-300 max-w-md">
              Os melhores cookies estilo Nova York, assados na hora e entregues quentinhos 
              na sua porta. Experimente a diferença de um cookie fresco!
            </p>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FaClock /> Horários
            </h3>
            <ul className="space-y-2 text-brown-300">
              <li>Seg - Sex: 10h - 22h</li>
              <li>Sáb - Dom: 11h - 23h</li>
              <li className="text-yellow-light">Delivery até 23h</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FaWhatsapp /> Contato
            </h3>
            <ul className="space-y-2 text-brown-300">
              <li>
                <a 
                  href="https://wa.me/55" 
                  className="hover:text-yellow-light transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp /> Faça seu pedido
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Entrega em domicílio
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-light transition-colors flex items-center gap-2"
                >
                  <FaInstagram /> @bitesandco
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-800 mt-8 pt-8 text-center text-brown-400 text-sm">
          <p>© 2024 Bites&co. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
