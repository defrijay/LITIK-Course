import React from 'react';
import { Link } from 'react-router-dom';

const introduction = () => {
  return (
    <section className="flex-col gap-12 bg-gray-50 dark:bg-slate-950 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Judul */}
      <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white font-bold text-center">
        Pendahuluan
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl dark:text-white text-justify max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        Halo, Sobat Programmer! 🚀
        Selamat datang di materi Bahasa C yang dirancang khusus untuk membantumu memahami dasar-dasar program prosedural. Bahasa C adalah fondasi banyak bahasa pemrograman modern, dan di sini kamu akan belajar tentang:
        <br />
        <br />
        <strong>1. Mekanisme Input, Proses, Output:</strong> Pelajari bagaimana program menerima data, mengolahnya, dan memberikan hasil yang bermanfaat.
        <br />
        <strong>2. Operator Bilangan:</strong> Pahami cara kerja operator dalam Bahasa C untuk melakukan berbagai perhitungan.
        <br />
        <strong>3. Video Animasi:</strong> Nikmati visualisasi interaktif yang mempermudah pemahamanmu.
        <br />
        <strong>4. Kuis:</strong> Tantang dirimu dengan kuis menarik untuk menguji sejauh mana pemahamanmu.
        <br />
        <br />
        Yuk, mulai perjalananmu menjadi programmer yang hebat dengan menguasai Bahasa C! 💻🔥
      </p>

      {/* Tombol navigasi */}
      <div className="space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 flex w-full justify-between">
        <Link
          to="/course-menu"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 opacity-50 text-white"
        >
          Sebelumnya
        </Link>
        {/* <Link
          to="/course-emu"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-gradient-to-r from-orange-600 to-orange-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white"
        >
          Selanjutnya
        </Link> */}
      </div>
    </section>
  );
};

export default introduction;
