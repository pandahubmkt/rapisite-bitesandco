"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaPlus, FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Chocolate",
    description: "O clássico com pedaços de chocolate",
    price: 12.90,
    category: "Tradicional",
    popular: true,
    image: "🍪",
  },
  {
    id: 2,
    name: "Double Chocolate",
    description: "Massa de chocolate com pedaços de chocolate meio amargo",
    price: 14.90,
    category: "Especial",
    popular: true,
    image: "🍫",
  },
  {
    id: 3,
    name: "Oatmeal Raisin",
    description: "Aveia com passas e toque de canela",
    price: 12.90,
    category: "Tradicional",
    popular: false,
    image: "🥣",
  },
  {
    id: 4,
    name: "White Macadamia",
    description: "Chocolate branco com nozes macadâmia crocantes",
    price: 15.90,
    category: "Premium",
    popular: true,
    image: "🌰",
  },
  {
    id: 5,
    name: "Peanut Butter",
    description: "Pasta de amendoim com pedaços de chocolate",
    price: 14.90,
    category: "Especial",
    popular: false,
    image: "🥜",
  },
  {
    id: 6,
    name: "Red Velvet",
    description: "Biscoito red velvet com cream cheese",
    price: 16.90,
    category: "Premium",
    popular: true,
    image: "❤️",
  },
  {
    id: 7,
    name: "Salted Caramel",
    description: "Doce de leite com pitada de sal marinho",
    price: 14.90,
    category: "Especial",
    popular: false,
    image: "🧂",
  },
  {
    id: 8,
    name: "Box 6 Unidades",
    description: "Escolha 6 sabores diferentes",
    price: 69.90,
    category: "Box",
    popular: true,
    image: "📦",
  },
  {
    id: 9,
    name: "Box 12 Unidades",
    description: "Perfeito para presentear!",
    price: 129.90,
    category: "Box",
    popular: false,
    image: "🎁",
  },
];

const categories = ["Todos", "Tradicional", "Especial", "Premium", "Box"];

export default function Cardapio() {
  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de pedir: ${productName}`
    );
    window.open(`https://wa.me/55?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-cream-50">
        {/* Hero */}
        <section className="bg-brown-800 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nosso Cardápio
            </h1>
            <p className="text-brown-200 text-lg">
              Escolha seus favoritos e faça seu pedido!
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    cat === "Todos"
                      ? "bg-brown-600 text-white"
                      : "bg-white text-brown-700 hover:bg-brown-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="card group"
                >
                  <div className="bg-cream-100 p-8 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform">
                      {product.image}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs font-medium text-brown-500 uppercase tracking-wide">
                          {product.category}
                        </span>
                        <h3 className="text-xl font-bold text-brown-800">
                          {product.name}
                        </h3>
                      </div>
                      {product.popular && (
                        <span className="bg-yellow-light text-brown-800 text-xs font-medium px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-brown-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-brown-800">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleOrder(product.name)}
                        className="btn-primary flex items-center gap-2 text-sm"
                      >
                        <FaPlus /> Pedir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-brown-800 mb-4">
                Fazemos cookies personalizados!
              </h3>
              <p className="text-brown-600 mb-6">
                Precisa de cookies para evento, empresa ou presente especial?
                Fale conosco!
              </p>
              <a
                href="https://wa.me/55"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FaWhatsapp /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
