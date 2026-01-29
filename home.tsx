import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">Litbang Guenkk</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Selamat Datang
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Platform penelitian dan pengembangan terpercaya
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg">
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Fitur Utama</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Riset", "Analisis", "Laporan"].map((feature) => (
              <div key={feature} className="p-6 border rounded-lg text-center">
                <h4 className="text-xl font-bold mb-2">{feature}</h4>
                <p className="text-gray-600">Deskripsi fitur {feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
