import React, { useState } from 'react';

// Layout unik untuk setiap halaman
const Layout1 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-xl md:text-2xl font-bold text-green-700">Operator Bilangan</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <img src="/assets/course2/1.operator.png" alt="gambar" className="" />
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h2>Oprator Aritmatika Unary</h2>
        <img src="/assets/course2/2.operator.png" alt="gambar" className="" />
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg col-span-1 md:col-span-2">
        <h2 className="text-lg md:text-xl mb-4">
          Operator aritmatika adalah operator yang biasa kita temukan untuk operasi matematika.
        </h2>
      </div>
    </div>
  </div>
);

const Layout2 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-xl md:text-2xl font-bold text-green-700">Operator Bilangan</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <img src="/assets/course2/3.operator.png" alt="gambar" className="h-40 md:h-60 lg:h-full" />
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl mb-4">
          Operator perbandingan dipakai untuk <b>membandingkan 2 buah nilai</b>.
        </h2>
      </div>
    </div>
  </div>
);

const Layout3 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-xl md:text-2xl font-bold text-green-700">Contoh Operator</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <img src="/assets/course2/4.contoh_operator.png" alt="gambar" className="h-40 md:h-60 lg:h-full" />
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl mb-4">Output :</h2>
        <img src="/assets/course2/5.output_operator.png" alt="img" className="h-40" />
      </div>
    </div>
  </div>
);

const Layout4 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-xl md:text-2xl font-bold text-green-700">Operator Logika / Boolean</h1>
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <img src="/assets/course2/6.operator.png" alt="gambar" className="" />
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl mb-4">
          Operator logika dipakai untuk menghasilkan nilai boolean <b>true</b> atau <b>false</b> dari 2 kondisi atau lebih.
        </h2>
      </div>
    </div>
  </div>
);

const StartPage = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium text-sm text-center">
    <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4">03</h1>
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">Operator Bilangan</h1>
    <button
      onClick={onStart}
      className="text-lg sm:text-xl md:text-2xl text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full px-12 sm:px-16 md:px-24 py-2.5 text-center mb-2"
    >
      Mulai
    </button>
  </div>
);

const Course3 = () => {
  const [currentPage, setCurrentPage] = useState(null); // Untuk kontrol halaman StartPage
  const [started, setStarted] = useState(false); // Menandakan apakah materi sudah dimulai

  // Array halaman dengan layout berbeda
  const pages = [
    { component: Layout1 },
    { component: Layout2 },
    { component: Layout3 },
    { component: Layout4 },
  ];

  // Fungsi navigasi
  const goToNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      window.location.replace("/quiz-course3"); 
    }
  };

  const goToPrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Fungsi untuk mulai materi
  const handleStart = () => {
    setStarted(true); // Set materi sudah dimulai
    setCurrentPage(0); // Mulai dari halaman pertama
  };

  // Render halaman StartPage atau halaman aktif
  if (!started) {
    return <StartPage onStart={handleStart} />;
  }

  const ActivePage = pages[currentPage].component;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-950 px-8">
      <div className="bg-white shadow-lg rounded-lg m-8 p-8 w-full max-w-4xl text-center overflow-auto">
        <ActivePage /> {/* Menampilkan layout berdasarkan halaman aktif */}

        {/* Navigasi */}
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded ${
              currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            className={`px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white`}
          >
            {currentPage === pages.length - 1 ? 'Selesai' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course3;
