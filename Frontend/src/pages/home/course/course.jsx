import React, { useState } from 'react';

// Layout unik untuk setiap halaman
const Layout1 = () => (
  <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-md shadow">
    <h1 className="text-6xl font-bold text-purple-500">I-P-O</h1>
    <ul className='text-start space-y-4 list-disc px-12 py-4'>
      <li>
        <h2 className='text-2xl font-bold pl'>Input</h2>
        <p>
          Sesuatu data yang kita masukan ke dalam program. Input biasanya diambil dari perangkat inputan seperti keyboard, mouse, kamera, microphone, dll.
        </p>
      </li>
      <li>
        <h2 className='text-2xl font-bold '>Process</h2>
        <p>
          Langkah-langkah yang harus dilakukan program untuk menghasilkan output.
        </p>
      </li>
      <li>
        <h2 className='text-2xl font-bold '>Output</h2>
        <p>
          Informasi yang dihasilkan setelah dilakukan proses. Output biasanya ditampilkan ke layar komputer.
        </p>
      </li>
    </ul>
  </div>
);

const Layout2 = () => (
  <div className="p-4 bg-blue-100 border-l-4 border-blue-500 rounded-lg shadow-lg space-y-12">
    <h1 className="text-4xl font-bold text-blue-700">Video Input-Process-Output</h1>
    <iframe
      className="w-full h-80 rounded-lg"
      src="https://www.youtube.com/embed/jA8qifE0y_Q?si=81GWM3Q7fPg1j5Xy"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);

// Halaman StartPage pertama
const StartPage = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-r from-purple-800 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 dark:focus:ring-purple-800 font-medium text-sm px-5 text-center">
    <h1 className="text-8xl font-bold mb-4">01</h1>
    <h1 className="text-6xl font-bold mb-12">Mekanisme Input, Proses, Output</h1>
    <button
      onClick={onStart}
      className="text-2xl text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full px-24 py-2.5 text-center me-2 mb-2"
    >
      Mulai
    </button>
  </div>
);

// Halaman StartPage kedua
const StartPage2 = ({ onNext }) => (
  <div className="h-screen flex flex-col items-center justify-center text-white bg-slate-950 font-medium text-sm px-5 text-center">
    <h1 className="text-6xl font-bold mb-12">Apa Input, Proses, Output itu?...</h1>
    <button
      onClick={onNext}
      className="text-2xl text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full px-24 py-2.5 text-center me-2 mb-2"
    >
      Mulai Materi
    </button>
  </div>
);

const Course = () => {
  const [currentPage, setCurrentPage] = useState(null); // Untuk kontrol halaman StartPage
  const [started, setStarted] = useState(false); // Menandakan apakah materi sudah dimulai
  const [secondPage, setSecondPage] = useState(false); // Menandakan apakah StartPage2 ditampilkan

  // Array halaman dengan layout berbeda
  const pages = [
    { component: Layout1 },
    { component: Layout2 },
  ];



  // Fungsi navigasi
  const goToNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      window.location.replace("/quiz-course");  
    }
  };



  const goToPrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Fungsi untuk mulai materi
  const handleStart = () => {
    setStarted(true); // Set materi sudah dimulai
    setSecondPage(true); // Tampilkan halaman StartPage2
  };

  // Fungsi untuk melanjutkan ke materi pertama
  const handleNext = () => {
    setSecondPage(false); // Menyembunyikan StartPage2
    setCurrentPage(0); // Mulai dari halaman pertama materi
  };

  // Render halaman StartPage, StartPage2, atau halaman aktif
  if (!started) {
    return <StartPage onStart={handleStart} />;
  }

  if (secondPage) {
    return <StartPage2 onNext={handleNext} />;
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
            className={`px-4 py-2 rounded ${currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Previous
          </button>
          <button
            onClick={goToNext}
            // disabled={currentPage === pages.length - 1}
            className={`px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white`}
          >
            {currentPage === pages.length - 1 ? 'Selesai' : 'Next'}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Course;
