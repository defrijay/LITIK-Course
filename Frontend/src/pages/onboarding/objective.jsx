import React from 'react';
import { Link } from 'react-router-dom';

const Outcomes = () => {
  return (
    <section className="flex-col gap-8 bg-slate-950 h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
      {/* Judul */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold text-center">
        Tujuan Pembelajaran (TP)
      </h1>

      {/* Tujuan AP-02 */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center sm:text-left max-w-4xl">
        <b>AP-02 :</b> Mempraktikkan menulis kode program kemudian menjalankan dengan bahasa prosedural/tekstual tertentu
      </p>

      {/* Evidence */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl">
        <b>Evidence</b>
        <br />
        <b>AP-02 :</b>
        <ul className="list-disc pl-5">
          <li>A. Siswa menjelaskan komponen penyusun program</li>
          <li>B. Siswa membuat kode program sederhana dengan bahasa prosedural/tekstual tertentu dan menjalankannya.</li>
        </ul>
      </p>

      {/* Tombol navigasi */}
      <div className="space-x-4 sm:space-x-8 md:space-x-12 flex w-full justify-between">
        <Link
          to="/outcomes"
          className="px-6 sm:px-10 md:px-16 lg:px-20 py-2 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200  opacity-50 text-white"
        >
          Sebelumnya
        </Link>
        {/* <Link
          to="/content"
          className="px-6 sm:px-10 md:px-16 lg:px-20 py-2 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-gradient-to-r from-orange-600 to-orange-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 focus:ring-purple-800 text-white"
        >
          Selanjutnya
        </Link> */}
      </div>
    </section>
  );
};

export default Outcomes;
