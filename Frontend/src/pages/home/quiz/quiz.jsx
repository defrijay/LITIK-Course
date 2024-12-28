import React, { useState } from "react";
import { useIdentity } from "../../../context/IdentityContext";

const Guide = ({ onNext }) => (
  <div className="h-screen px-12 sm:px-10 md:px-20 flex flex-col items-center justify-center text-white bg-gradient-to-r from-green-400 to-blue-500">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-6">PETUNJUK PENGERJAAN EVALUASI</h1>
    <div className="max-w-2xl text-lg sm:text-xl md:text-2xl bg-gray-900 p-6 rounded-lg shadow-lg space-y-4">
      <p>1. Bacalah setiap soal dengan cermat sebelum menjawab.</p>
      <p>2. Pilih jawaban yang paling tepat untuk setiap soal pilihan ganda.</p>
      <p>3. Tuliskan jawaban Anda pada lembar jawaban yang telah disediakan.</p>
      <p>4. Kerjakan soal essay dengan jelas dan sesuai instruksi.</p>
      <p>5. Pastikan semua soal telah dijawab sebelum menyerahkan hasil evaluasi.</p>
    </div>
    <button
      onClick={onNext}
      className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-xl font-semibold shadow-lg"
    >
      Mulai Evaluasi
    </button>
  </div>
);



const Question = ({
  number,
  text,
  imageSrc,
  options,
  selectedOption,
  onOptionChange,
}) => (
<form className="text-center text-white space-y-12">
    <div className="mb-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Soal {number}</h2>
    </div>
    {text && (
      <div className="mb-4">
        <p className="text-lg sm:text-xl md:text-2xl font-medium">{text}</p>
      </div>
    )}
    <div className="mb-4 flex justify-center">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`Soal ${number}`}
          className="w-full sm:w-3/4 lg:w-1/2 h-auto shadow-md"
        />
      )}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-wrap">
      {options.map((option, index) => (
        <label
          key={index}
          className={`cursor-pointer rounded-lg p-2 sm:p-3 md:p-4 shadow-md flex items-center justify-center text-sm md:text-lg font-semibold transition duration-200 
            ${selectedOption === option
              ? "bg-pink-600 text-white"
              : "bg-blue-800 hover:bg-pink-400 hover:text-white"
            }`}
        >
          <input
            type="radio"
            name={`question-${number}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
            className="hidden"
            required
          />
          {option}
        </label>
      ))}
    </div>
  </form>
);

const StartPage = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500">
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4">03</h1>
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4">Evaluasi</h1>
    <button
      onClick={onStart}
      className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 font-medium rounded-full px-16 sm:px-20 md:px-24 py-2.5"
    >
      Mulai
    </button>
  </div>
);

const ResultPage = ({ answers, questions, score, correctAnswers, onFinish, pembahasan }) => (
  <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 p-12">
    <div className="w-full max-w-lg flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hasil Quiz</h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">Skor Anda: {score} / {questions.length}</p>
      <div className="w-full space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold text-md md:text-lg mb-2">Soal {question.number}</h3>

            {/* Menampilkan teks soal */}
            <p className="text-lg text-gray-300 mb-4">{question.text}</p>

            {/* Menampilkan gambar soal */}
            <div className="mb-4 flex justify-center">
              {question.imageSrc && (
                <img
                  src={question.imageSrc}
                  alt={`Soal ${question.number}`}
                  className="w-full sm:w-3/4 lg:w-1/2 h-auto shadow-md"
                />
              )}
            </div>

            {/* Menampilkan jawaban */}
            <p
              className={`font-medium ${answers[question.number] === correctAnswers[question.number]
                ? "text-lime-500"
                : "text-red-600"
                }`}
            >
              Jawaban Anda: {answers[question.number]} (
              {answers[question.number] === correctAnswers[question.number] ? "Benar" : "Salah"})
            </p>

            {/* Menampilkan jawaban yang benar */}
            <p className="font-medium text-green-500">
              Jawaban yang Benar: {correctAnswers[question.number]}
            </p>

            {/* Menampilkan pembahasan */}
            <p className="text-lg text-gray-300 mt-4">
              Pembahasan: <span className="italic text-sm">{pembahasan[question.number]}</span>
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={onFinish}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Selesai
      </button>
    </div>
  </div>
);


const Pembahasan = ({ answers, correctAnswers, questions, pembahasan, onBackToStart }) => (
  <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 py-6 px-4">
    <div className="w-full max-w-lg flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Pembahasan</h2>
      <div className="w-full space-y-6">
        {questions.map((question, index) => (
          <div key={index}>
            <h3 className="font-semibold text-md md:text-lg mb-2">Soal {question.number}</h3>

            {/* Menampilkan gambar soal */}
            <div className="mb-4 flex justify-center">
              {question.imageSrc && (
                <img
                  src={question.imageSrc}
                  alt={`Soal ${question.number}`}
                  className="w-full sm:w-3/4 lg:w-1/2 h-auto shadow-md"
                />
              )}
            </div>

            {/* Menampilkan jawaban */}
            <p
              className={`font-medium ${answers[question.number] === correctAnswers[question.number]
                ? "text-lime-500"
                : "text-red-600"
                }`}
            >
              Jawaban Anda: {answers[question.number]} (
              {answers[question.number] === correctAnswers[question.number] ? "Benar" : "Salah"})
            </p>

            {/* Menampilkan jawaban yang benar */}
            <p className="font-medium text-green-500">
              Jawaban yang Benar: {correctAnswers[question.number]}
            </p>

            {/* Pembahasan Soal */}
            <p className="text-lg text-gray-300 mt-4">
              Pembahasan: <span className="italic text-sm">{pembahasan[question.number]}</span>
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={onBackToStart}
        className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Kembali ke Halaman Awal
      </button>
    </div>
  </div>
);

const Quiz = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isGuideVisible, setIsGuideVisible] = useState(false);
  const [showPembahasan, setShowPembahasan] = useState(false);


  const questions = [
    { number: 1, imageSrc: "", text: "Apa fungsi utama dari library stdio.h dalam bahasa C?", options: ["Mengelola Memori", "Operasi Input dan Output", "Operasi logika", "Pengolahan String"] },
    { number: 2, imageSrc: "", text: "Operator logika digunakan untuk...", options: ["Membandingkan dua nilai", "Melakukan perhitungan matematika", "Menghasilkan nilai boolean", "Menampilkan hasil keluaran"] },
    { number: 3, imageSrc: "", text: "Format string %d pada fungsi printf() digunakan untuk mencetak…", options: ["String", "Bilangan desimal", "Bilangan bulat", "Karakter tunggal"] },
    { number: 4, imageSrc: "", text: "Fungsi puts() dalam bahasa C akan...", options: ["Mencetak string dengan format tertentu", "Mengambil input dari keyboard", "Mencetak string dengan tambahan baris baru", "Menghitung panjang string"] },
    { number: 5, imageSrc: "", text: "Simbol & pada fungsi scanf() berfungsi untuk...", options: ["Menyimpan nilai variabel", "Mengakses alamat memori variabel", "Menambah nilai variabel", "Menampilkan nilai variabel"] },
    { number: 6, imageSrc: "", text: "Apa yang dimaksud dengan output pada mekanisme Input-Proses-Output?", options: ["Data yang dimasukkan pengguna ke programr", "Langkah-langkah pemrosesan data", "Informasi yang dihasilkan setelah pemrosesan", "Variabel yang digunakan dalam program"] },
    { number: 7, imageSrc: "", text: "Manakah yang merupakan operator perbandingan dalam bahasa C?", options: ["=", "==", "&&", "+"] },
    { number: 8, imageSrc: "", text: "Apa tujuan utama dari penggunaan operator % dalam bahasa C?", options: ["Membandingkan dua nilai", "Mengambil sisa hasil pembagian", "Menyimpan nilai ke variabel", "Menampilkan nilai ke layar"] },
    { number: 9, imageSrc: "./assets/quiz/image.png", text: "Apa output dari kode berikut?", options: ["15", "10", "5", "Tidak ada output"] },
    { number: 10, imageSrc: "", text: "Manakah pernyataan berikut yang benar tentang fungsi puts() dalam bahasa C?", options: ["Mencetak string tanpa tambahan baris baru di akhir.", "Mencetak string dengan format tertentu.", "Mencetak string sederhana dan menambahkan baris baru di akhir.", "Mengambil input dari keyboard."] },
  ];

  const correctAnswers = {
    1: "Operasi Input dan Output",
    2: "Menghasilkan nilai boolean",
    3: "Bilangan bulat",
    4: "Mencetak string dengan tambahan baris baru",
    5: "Mengakses alamat memori variabel",
    6: "Informasi yang dihasilkan setelah pemrosesan",
    7: "==",
    8: "Mengambil sisa hasil pembagian",
    9: "15",
    10: "Mencetak string sederhana dan menambahkan baris baru di akhir.",
  };

  const pembahasan = {
    1: "Fungsi utama dari library stdio.h adalah untuk operasi input dan output, seperti fungsi printf() dan scanf().",
    2: "Operator logika menghasilkan nilai boolean (benar atau salah).",
    3: "Format %d digunakan untuk mencetak bilangan bulat dalam format desimal.",
    4: "Fungsi puts() mencetak string dan menambahkan baris baru di akhir.",
    5: "Simbol & pada scanf() digunakan untuk mengakses alamat memori variabel.",
    6: "Output adalah informasi yang dihasilkan setelah pemrosesan data.",
    7: "Operator == adalah operator perbandingan yang digunakan untuk membandingkan dua nilai.",
    8: "Operator % digunakan untuk mengambil sisa hasil pembagian.",
    9: "Output dari kode tersebut adalah 15.",
    10: "Fungsi puts() mencetak string sederhana dan menambahkan baris baru di akhir.",
  };


  const score = Object.keys(answers).reduce(
    (total, key) => total + (answers[key] === correctAnswers[key] ? 1 : 0),
    0
  );

  const { identity } = useIdentity();

  const handleSubmitScore = async () => {
    if (!identity || !identity.id) {
      console.error('User ID not found');
      return;
    }
  
    try {
      const response = await fetch(`https://litik-course-be.vercel.app/api/users/${identity.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ score }),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Parsing error response dari backend
        throw new Error(`Error ${response.status}: ${errorData.message || 'Failed to update score'}`);
      }
  
      const data = await response.json();
      console.log(data.message); // Success message
    } catch (error) {
      console.error('Error updating score:', error.message);
    }
  };
  
  
  
  // Panggil fungsi ini setelah submit
  handleSubmitScore();

  
  const goToPage = (page) => {
    if (page >= 0 && page < questions.length) {
      setCurrentPage(page);
    }
  };

  const handleOptionChange = (option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questions[currentPage].number]: option, // Gunakan number dari soal
    }));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    setShowResults(true);
    handleSubmitScore();
    closeModal();
  };

  const handleStart = () => {
    setIsGuideVisible(true);
    setAnswers({});      // Reset semua jawaban
  };

  const handleNextFromGuide = () => {
    setIsGuideVisible(false);
    setCurrentPage(0);
    setAnswers({});
  };

  const onFinish = () => {
    setShowResults(false);
    setCurrentPage(null);
    setAnswers({});
  };

  const onGoToPembahasan = () => {
    setShowPembahasan(true); // Menampilkan Pembahasan setelah hasil quiz
    setShowResults(false);   // Menyembunyikan hasil quiz
  };
  
  const onBackToStart = () => {
    setShowPembahasan(false);  // Kembali ke halaman awal setelah pembahasan
    setCurrentPage(null);      // Reset halaman quiz
  };

  if (showPembahasan) {
    return <Pembahasan answers={answers} correctAnswers={correctAnswers} questions={questions} onBackToStart={onBackToStart} />;
  }

  if (showResults) {
    return (
      <ResultPage
        answers={answers}
        questions={questions}
        correctAnswers={correctAnswers}
        pembahasan={pembahasan}
        score={score}
        onFinish={onFinish}
      />
    );
  }
  

  if (isGuideVisible) {
    return <Guide onNext={handleNextFromGuide} />;
  }

  if (currentPage === null) {
    return <StartPage onStart={handleStart} />;
  }

  const currentQuestion = questions[currentPage];

  return (
    <>
      {currentPage === null ? (
        <StartPage onStart={handleStart} />
      ) : (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 px-12 py-96">
          <div className="bg-blue-950 shadow-lg rounded-lg p-8 w-full max-w-4xl">
            <div className="flex justify-center mb-6 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-8 h-8 rounded-full text-white font-bold ${currentPage === index
                    ? "bg-pink-600"
                    : "bg-blue-700 hover:bg-pink-400"
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <Question
              number={currentQuestion.number}
              text={currentQuestion.text}
              imageSrc={currentQuestion.imageSrc}
              options={currentQuestion.options}
              selectedOption={answers[currentQuestion.number] || ""}
              onOptionChange={handleOptionChange}
            />

            <div className="flex justify-between mt-6">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded ${currentPage === 0
                  ? "bg-slate-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
              >
                Previous
              </button>
              {currentPage < questions.length - 1 ? (
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={openModal}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-blue-900 text-white rounded-lg p-6 w-full max-w-md shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Submit Jawaban?</h2>
                <p className="text-lg mb-6">
                  Pastikan semua jawaban sudah benar sebelum disubmit.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Submit
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Quiz;
