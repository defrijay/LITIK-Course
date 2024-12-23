import React, { useState } from 'react';

// Layout unik untuk setiap halaman
const Layout1 = () => (
  <div className="p-6 bg-green-100 border-l-4 border-green-500 rounded-lg">
    <h1 className="text-2xl font-bold text-green-700">Jenis - Jenis Library</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          <code className="bg-green-200 px-2 py-1 rounded-md">#include &lt;stdio.h&gt;</code>
        </h2>
        <p>Library stdio.h digunakan untuk operasi input output (stdio = Standard Input and Output)</p>
        <h2 className='text-xl font-bold'>
          <code>printf() , puts()</code>
        </h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          <code className="bg-green-200 px-2 py-1 rounded-md">#include &lt;math.h&gt;</code>
        </h2>
        <p>Library math.h disediakan untuk melakukan perhitungan secara matematika</p>
        <h2 className='text-md font-bold'>
          <code>cos(), sin()</code>
        </h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          <code className="bg-green-200 px-2 py-1 rounded-md">#include &lt;stdlib.h&gt;</code>
        </h2>
        <p>Library stdlib.h merupakan library yang hampir sama dengan library math.h</p>
        <h2 className='text-xl font-bold'>
          <code>malloc()</code>
        </h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          <code className="bg-green-200 px-2 py-1 rounded-md">#include &lt;string.h&gt;</code>
        </h2>
        <p>Library string.h digunakan untuk memberikan nilai suatu karakter string</p>
        <h2 className='text-xl font-bold'>
          <code>strcpy()</code>
        </h2>
      </div>
    </div>
  </div>
);

const Layout2 = () => (
  <div className="p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
    <h1 className="text-2xl font-bold text-yellow-700">Printf (Output)</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p>printf adalah fungsi yang paling sering digunakan untuk mencetak output ke layar dalam bahasa C.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p> Format string dalam printf menggunakan spesifikasi format, seperti <b> %d untuk mencetak bilangan bulat, %f untuk mencetak bilangan desimal, %s untuk mencetak string,</b> dan sebagainya.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p>Fungsi ini memungkinkan untuk <b>mencetak data</b> dengan format tertentu, seperti string format, variabel, dll. Printf dapat <b>menggabungkan teks statis dengan nilai</b> yang ingin dicetak.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center">
        <p className='text-sm'>Teks untuk ditampilkan <code className='text-yellow-500'>"format"</code></p><br />
        <p><code>printf("format", ...);</code></p><br />
        <p className='text-sm'>(opsional) variabel atau nilai untuk ditampilkan <code className='text-yellow-500'>"..."</code></p>
      </div>
    </div>
  </div>
);


const Layout3 = () => (
  <div className="p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 text-start">
      <h1 className="text-2xl font-bold text-yellow-700 text-start">Contoh printf()</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center">
        <p>printf adalah fungsi yang paling sering digunakan untuk mencetak output ke layar dalam bahasa C.</p>
        <img src="/assets/course/1.printf().png" alt="gambar" className='w-full' />
      </div>
      <h1 className="text-2xl font-bold text-yellow-700 text-start">Output printf()</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center text-start">
        <p>Menggunakan \n untuk baris baru</p>
        <img src="/assets/course/2.output_printf().png" alt="gambar" className='w-full' />
      </div>
    </div>
  </div>
);

const Layout4 = () => (
  <div className="p-6 bg-gray-100 border-l-4 border-gray-500 rounded-lg">
    <h1 className="text-2xl font-bold text-gray-700">Puts</h1>
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p>Puts adalah fungsi sederhana yang digunakan untuk mencetak <b>string ke layar, tanpa format.</b></p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p>puts sangat berguna untuk mencetak teks sederhana <b>tanpa perlu mengatur format.</b></p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p> Fungsi ini akan mencetak string, kemudian menambahkan karakter newline (\n) di akhir string, sehingga setiap pemanggilan puts akan <b>mencetak teks baru di baris berikutnya..</b></p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <p className='text-sm'>Teks untuk ditampilkan <code className='text-gray-500'>"hello world"</code></p>
        <p><code>puts("Hellow World");</code></p><br />
      </div>
    </div>
  </div>
);


const Layout5 = () => (
  <div className="p-6 bg-gray-100 border-l-4 border-gray-500 rounded-lg">
    <div className="grid grid-cols-1 gap-4 p-4 text-start">
      <h1 className="text-2xl font-bold text-gray-700 text-start">Kode Program</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center">
        <img src="/assets/course/3.kode_puts().png" alt="gambar" className='h-40' />
      </div>
      <h1 className="text-2xl font-bold text-gray-700 text-start">Output</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center text-start">
        <p>Tanpa menggunakan \n</p><br />
        <img src="/assets/course/4.teknologi.png" alt="gambar" className='h-40' />
      </div>
    </div>
  </div>
);

const Layout6 = () => (
  <div className="p-6 bg-lime-100 border-l-4 border-lime-500 rounded-lg">
    <h1 className="text-2xl font-bold text-lime-700">Scanf (input)</h1>
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p>Fungsi <b>scanf()</b> adalah fungsi untuk <b>mengambil input dari keyboard.</b> Fungsi ini memiliki format seperti fungsi printf().</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p> Simbol <b>&</b> berfungsi untuk <b>mengambil alamat memori dari sebuah variabel.</b></p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <p>Format yang diberikan <b>tergantung dari jenis tipe data</b> apa yang ingin kita ambil. Misalnya mau mengambil angka, maka kita bisa pakai <b>%d.</b></p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center">
        <p className='text-sm'>Teks untuk ditampilkan <code className='text-lime-500'>"format"</code></p><br />
        <p><code>scanf("%s", &var);</code></p><br />
        <p className='text-sm'>Simbol untuk mengambil alamat memori dari variabel<code className='text-lime-500'>"&"</code></p>
      </div>
    </div>
  </div>
);


const Layout7 = () => (
  <div className="p-6 bg-gray-100 border-l-4 border-gray-500 rounded-lg">
    <div className="grid grid-cols-1 gap-4 p-4 text-start">
      <h1 className="text-2xl font-bold text-gray-700 text-start">Kode Program</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center">
        <img src="/assets/course/5.kode_scanf().png" alt="gambar" className='' />
      </div>
      <h1 className="text-2xl font-bold text-gray-700 text-start">Output</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex-col items-center justify-center text-start">
        <img src="/assets/course/6.output_scanf().png" alt="gambar" className='' />
      </div>
    </div>
  </div>
);

const StartPage = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-sm text-center mb-2">
    <h1 className="text-6xl md:text-8xl font-bold mb-4">02</h1>
    <h1 className="text-6xl md:text-8xl font-bold mb-8">Fungsi Dasar</h1>
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

  const pages = [
    { component: Layout1 }, { component: Layout2 }, { component: Layout3 }, { component: Layout4 },
    { component: Layout5 }, { component: Layout6 }, { component: Layout7 } 
  ];

  const goToNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      window.location.replace("/quiz-course2");
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
    <div className="h-screen flex flex-col items-center justify-center bg-slate-950 px-8">
      <div className="bg-white shadow-lg rounded-lg m-8 p-8 md:p-8 w-full max-w-4xl text-center overflow-auto">
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
