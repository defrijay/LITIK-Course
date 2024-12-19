import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <section className="flex-col bg-gray-50 dark:bg-slate-950 h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="h-screen flex flex-col items-center justify-center space-y-8 dark:bg-slate-950 text-white">
        {/* Judul */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
          Table of Contents
        </h1>

        {/* Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Card 1 */}
          <Link
            to=""
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
              01
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-purple-600">
                Mekanisme
              </h2>
              <p className="text-xs sm:text-sm">Input, Proses, Output</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to=""
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
              02
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-orange-500">
                Operator
              </h2>
              <p className="text-xs sm:text-sm">Bilangan</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to=""
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
              03
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-red-500">
                Video
              </h2>
              <p className="text-xs sm:text-sm">Animasi</p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to=""
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
              04
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-blue-500">
                Kuis
              </h2>
            </div>
          </Link>
        </div>

        {/* Navigasi */}
        <div className="space-x-4 sm:space-x-8 md:space-x-12 flex w-full justify-between">
          <Link
            to="/outcomes"
            className="px-6 sm:px-10 md:px-16 lg:px-20 py-2 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-gradient-to-r from-orange-800 to-orange-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 opacity-50 text-white"
          >
            Sebelumnya
          </Link>
          <Link
            to="/course"
            className="px-6 sm:px-10 md:px-16 lg:px-20 py-2 text-sm sm:text-lg md:text-xl lg:text-2xl rounded-full bg-gradient-to-r from-orange-600 to-orange-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white"
          >
            Selanjutnya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
