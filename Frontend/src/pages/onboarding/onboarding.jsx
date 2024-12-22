import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 p-12 bg-slate-950 text-white">
      {/* Judul utama */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-purple-600">
        Algoritma dan Pemrograman
      </h1>

      {/* Subjudul */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        Fase E
      </h1>

      {/* Deskripsi */}
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black bg-slate-100 rounded-xl p-4">
        Komponen Dasar Program Prosedural Bahasa C
      </h1>

      {/* Tombol */}
      <Link
        to="/guide"
        className="px-10 sm:px-16 md:px-20 py-2 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white"
      >
        Mulai
      </Link>
    </div>
  );
};

export default Onboarding;
