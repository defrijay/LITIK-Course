import React from 'react';
import { Link } from 'react-router-dom';

const introduction = () => {
  return (
    <section className="flex-col gap-12 bg-gray-50 dark:bg-slate-950 min-h-screen flex items-center justify-center p-20 px-12 sm:px-16 md:px-20 lg:px-28">
      {/* Judul */}
      <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white font-bold text-center">
        Pendahuluan
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl dark:text-white text-justify max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        Di era digital yang serba canggih, pemahaman dasar mengenai mekanisme Input-Proses-Output (IPO) menjadi salah satu kunci dalam penguasaan pemrograman. Konsep ini menjelaskan bagaimana data diambil sebagai input, diproses oleh program, dan menghasilkan output berupa informasi yang dapat dimanfaatkan untuk berbagai keperluan.
        <br />
        <br />
        Pada materi ini, kita akan membahas peran perangkat input dan output serta memahami bagaimana data diproses menggunakan bahasa pemrograman C. Penggunaan library seperti stdio.h, math.h, dan string.h akan dipelajari untuk mendukung berbagai fungsi dasar, seperti printf, puts, dan scanf, yang mempermudah pengembangan program yang interaktif. Selain itu, pengenalan operator dalam bahasa C, seperti aritmatika, logika, dan perbandingan, akan memberikan fondasi untuk memecahkan masalah secara sistematis.
        <br />
        <br />
        Dengan pendekatan yang mencakup simulasi, evaluasi melalui quiz, dan pembahasan menyeluruh, materi ini dirancang agar pembelajaran lebih menarik, praktis, dan relevan dalam mengembangkan keterampilan pemrograman yang aplikatif.
      </p>

      {/* Tombol navigasi */}
      <div className="space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 flex w-full justify-between">
        <Link
          to="/course-menu"
          className="px-4 sm:px-6 md:px-8 lg:px-12 py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 opacity-50 text-white"
        >
          Sebelumnya
        </Link>
      </div>
    </section>
  );
};

export default introduction;
