import React from 'react';
import { Link } from 'react-router-dom';

const CourseMenu = () => {
  return (
    <section className="flex-col bg-slate-950 h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="h-screen gap-4 flex flex-col items-center justify-center space-y-8 bg-slate-950 text-white">
        {/* Judul */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
          Course Menu
        </h1>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Card 1 */}
          <Link
            to="/introduction"
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
              01
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-purple-600">
                Pendahuluan
              </h2>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/course"
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
              02
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-orange-500">
                Materi 1
              </h2>
              <p className="text-sm sm:text-base md:text-lg ">Mekanisme Input,Proses, Output</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/course2"
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
              03
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-red-500">
                Materi 2
              </h2>
              <p className="text-sm sm:text-base md:text-lg">Fungsi Dasar</p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/course3"
            className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md text-gray-900 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-lime-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
              04
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-lime-500">
                Materi 3
              </h2>
              <p className="text-sm sm:text-base md:text-lg">Operator Bilangan</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseMenu;
