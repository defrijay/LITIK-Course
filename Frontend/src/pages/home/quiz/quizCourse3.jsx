import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Guide = ({ onNext }) => (
  <div className="h-screen px-12 sm:px-8 md:px-16 lg:px-20 flex flex-col items-center justify-center text-white bg-gradient-to-r from-green-400 to-blue-500">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-6">PETUNJUK PENGERJAAN QUIZ</h1>
    <div className="max-w-2xl text-lg sm:text-xl md:text-2xl bg-gray-900 p-6 rounded-lg shadow-lg space-y-4">
      <p>1. Bacalah setiap soal dengan cermat sebelum menjawab.</p>
      <p>2. Pilih jawaban yang paling tepat untuk setiap soal pilihan ganda.</p>
      <p>3. Tuliskan jawaban Anda pada lembar jawaban yang telah disediakan.</p>
      <p>4. Kerjakan soal pilihan ganda sesuai instruksi.</p>
      <p>5. Pastikan semua soal telah dijawab sebelum menyerahkan hasil quiz.</p>
    </div>
    <button
      onClick={onNext}
      className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-xl font-semibold shadow-lg"
    >
      Mulai Quiz
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
    {/* Nomor Soal */}
    <div className="mb-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Soal {number}</h2>
    </div>

    {/* Teks Soal */}
    {text && (
      <div className="mb-4">
        <p className="text-lg sm:text-xl md:text-2xl font-medium">{text}</p>
      </div>
    )}

    {/* Gambar Soal */}
    <div className="mb-4 flex justify-center">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`Soal ${number}`}
          className="w-full sm:w-3/4 lg:w-1/2 h-auto shadow-md"
        />
      )}
    </div>

    {/* Pilihan Jawaban */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-wrap">
      {options.map((option, index) => (
        <label
          key={index}
          className={`cursor-pointer rounded-lg p-2 sm:p-3 md:p-4 shadow-md flex items-center justify-center text-sm sm:text-base md:text-lg font-semibold transition duration-200 
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
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4">Quiz</h1>
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4">Materi 3</h1>
    <button
      onClick={onStart}
      className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 font-medium rounded-full px-16 sm:px-20 md:px-24 py-2.5"
    >
      Mulai
    </button>
  </div>
);

const ResultPage = ({ answers, questions, score, correctAnswers, onFinish, onGoToPembahasan }) => (
  <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 p-12">
    <div className="w-full max-w-lg flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hasil Quiz</h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">Skor Anda: {score} / {questions.length}</p>
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
          </div>
        ))}
      </div>
      {/* <button
        onClick={onGoToPembahasan}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Lihat Pembahasan
      </button> */}
      <Link
        to='/quiz'
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Selesai
      </Link>
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

            {/* Menampilkan pembahasan */}
            <p className="text-lg text-gray-300 mt-4">
              Pembahasan: <span className="italic text-sm">{pembahasan[question.number]}</span>
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

const QuizCourse3 = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isGuideVisible, setIsGuideVisible] = useState(false);
  const [showPembahasan, setShowPembahasan] = useState(false);


  const questions = [
    { number: 1, imageSrc: "./assets/quiz/image2.png", text: "Jika a = 7 dan b = 4, apa hasil dari operasi berikut?", options: ["12", "11", "15", "7"] },
    { number: 2, imageSrc: "./assets/quiz/image3.png", text: "Apa hasil dari operasi berikut ini pada bahasa C?", options: ["3", "10", "1", "0"] },
    { number: 3, imageSrc: "./assets/quiz/image4.png", text: "Jika a = 10 dan b = 5, apa hasil dari ekspresi berikut?", options: ["false", "true", "0", "10"] },
  ];

  const correctAnswers = {
    1: "11",
    2: "1",
    3: "true",
  };

  const pembahasan = {
    1: "Fungsi utama dari library stdio.h adalah untuk operasi input dan output, seperti fungsi printf() dan scanf().",
    2: "Operator logika menghasilkan nilai boolean (benar atau salah).",
    3: "Format %d digunakan untuk mencetak bilangan bulat dalam format desimal.",
  };


  const score = Object.keys(answers).reduce(
    (total, key) => total + (answers[key] === correctAnswers[key] ? 1 : 0),
    0
  );
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
    return <ResultPage answers={answers} questions={questions} correctAnswers={correctAnswers} score={score} onFinish={onFinish} />;
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
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 px-12">
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

export default QuizCourse3;
