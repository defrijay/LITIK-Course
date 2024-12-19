import React from 'react';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <section className="flex-col gap-12 bg-gray-50 dark:bg-slate-950 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Judul */}
      <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white font-bold text-center">
        Petunjuk Penggunaan
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl dark:text-white text-justify max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        Selamat datang di aplikasi belajar interaktif kami! 🎉 Berikut adalah panduan penggunaan aplikasi ini:
        <br />
        <br />
        1️⃣ <b>Pilih Menu Materi:</b> Mulailah perjalanan belajarmu dengan memilih menu materi yang tersedia. Setiap materi dirancang untuk membantu kamu memahami konsep dengan lebih mudah.
        <br />
        2️⃣<b>Ikuti Setiap Tahapan:</b> Bacalah setiap penjelasan, tonton video animasi jika tersedia, dan pahami setiap langkah.
        <br />
        3️⃣ <b>Lakukan Evaluasi:</b> Setelah selesai belajar, tantang dirimu dengan kuis evaluasi di akhir.
        <br />
        4️⃣ <b>Dapatkan Hasil:</b> Lihat hasil kuismu, termasuk jawaban yang benar, untuk mengetahui sejauh mana pemahamanmu.
        <br />
        <br />
        Nikmati pengalaman belajar yang seru dan interaktif! 📚✨
      </p>

      {/* Tombol navigasi */}
      <div className="space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 flex w-full justify-between">
        <Link
          to="/"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 opacity-50 text-white"
        >
          Sebelumnya
        </Link>
        <Link
          to="/menu"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-gradient-to-r from-orange-600 to-orange-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white"
        >
          Selanjutnya
        </Link>
      </div>
    </section>
  );
};

export default Guide;
