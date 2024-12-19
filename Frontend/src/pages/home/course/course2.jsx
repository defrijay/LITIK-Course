import React, { useState } from 'react';

// Layout unik untuk setiap halaman
const Layout1 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-xl md:text-2xl font-bold text-green-700">Operator Bilangan</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <img src="/assets/course2/1.operator.png" alt="gambar" className="h-40 md:h-60 lg:h-full" />
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h2>Oprator Aritmatika Unary</h2>
        <img src="/assets/course2/2.operator.png" alt="gambar" className="h-40 md:h-60 lg:h-full" />
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
        <img src="/assets/course2/5.output_operator.png" alt="img" className="h-full" />
      </div>
    </div>
  </div>
);

const Layout4 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-xl md:text-2xl font-bold text-green-700">Operator Logika / Boolean</h1>
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <img src="/assets/course2/6.operator.png" alt="gambar" className="h-40 md:h-60 lg:h-full" />
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
  <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-sm text-center mb-2">
    <h1 className="text-6xl md:text-8xl font-bold mb-4">02</h1>
    <h1 className="text-6xl md:text-8xl font-bold mb-4">Operator Bilangan</h1>
    <button
      onClick={onStart}
      className="text-xl md:text-2xl text-white bg-gradient-to-r from-yellow-400 to-lime-300 hover:bg-gradient-to-l hover:from-yellow-400 hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full px-16 md:px-24 py-2.5 text-center me-2 mb-2"
    >
      Mulai
    </button>
  </div>
);

const Course2 = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [started, setStarted] = useState(false);

  const pages = [{ component: Layout1 }, { component: Layout2 }, { component: Layout3 }, { component: Layout4 }];

  const goToNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      window.location.replace("/course3");
    }
  };

  const goToPrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleStart = () => {
    setStarted(true);
    setCurrentPage(0);
  };

  if (!started) {
    return <StartPage onStart={handleStart} />;
  }

  const ActivePage = pages[currentPage].component;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-950">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-4xl text-center">
        <ActivePage />

        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded ${currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
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

export default Course2;
