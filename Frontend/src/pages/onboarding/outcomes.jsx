import React from 'react';
import { Link } from 'react-router-dom';

const Outcomes = () => {
  return (
    <section className="flex-col gap-12 bg-gray-50 dark:bg-slate-950 h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
      {/* Judul */}
      <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-white font-bold text-center">
        Capaian Pembelajaran (CP)
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl dark:text-white text-justify max-w-4xl">
        Pada akhir fase E, peserta didik mampu menerapkan praktik baik konsep pemrograman prosedural dalam salah satu bahasa pemrograman prosedural dan mampu mengembangkan program yang terstruktur dalam notasi algoritma atau notasi lain, berdasarkan strategi algoritmik yang tepat.
      </p>

      {/* Tombol navigasi */}
      <div className="space-x-4 sm:space-x-8 md:space-x-12 flex w-full justify-between">
        <Link
          to="/menu"
          className="px-6 sm:px-10 md:px-16 lg:px-20 py-2 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 opacity-50 text-white"
        >
          Sebelumnya
        </Link>
        <Link
          to="/objective"
          className="px-6 sm:px-10 md:px-16 lg:px-20 py-2 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-gradient-to-r from-orange-600 to-orange-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white"
        >
          Selanjutnya
        </Link>
      </div>
    </section>
  );
};

export default Outcomes;
