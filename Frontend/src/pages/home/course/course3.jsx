import React, { useState } from 'react';

// Layout unik untuk setiap halaman
const Layout1 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-700">Video Animasi</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 sm:col-span-2">
        <iframe
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg"
          src="https://www.youtube.com/embed/0cYQgHOMvdQ?si=ikjOQAYjhkAqfB1t"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

const StartPage = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium text-sm text-center">
    <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4">03</h1>
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">Video Animasi</h1>
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
  ];

  // Fungsi navigasi
  const goToNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      window.location.replace("/quiz"); // Ganti dengan replace untuk tidak menambahkannya ke history
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
    <div className="h-screen flex flex-col items-center justify-center bg-slate-950">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl text-center">
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
