import React, { useState } from "react";

const Question = ({
  number,
  imageSrc,
  options,
  selectedOption,
  onOptionChange,
}) => (
  <form className="text-center text-white space-y-12">
    {/* Nomor Soal */}
    <div className="mb-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Soal {number}</h2>
    </div>

    {/* Pilihan Jawaban */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
          />
          {option}
        </label>
      ))}
    </div>

    {/* Gambar Soal */}
    <div className="mb-4 flex justify-center">
      <img
        src={imageSrc}
        alt={`Soal ${number}`}
        className="w-full sm:w-3/4 lg:w-1/2 h-auto shadow-md"
      />
    </div>
  </form>
);

const StartPage = ({ onStart }) => (
  <div className="h-screen flex flex-col items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500">
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4">04</h1>
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4">Kuis</h1>
    <button
      onClick={onStart}
      className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full px-16 sm:px-20 md:px-24 py-2.5"
    >
      Mulai
    </button>
  </div>
);

const ResultPage = ({ answers, questions, score, correctAnswers, onFinish }) => (
  <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 dark:bg-gray-900 py-6 px-4">
    <div className="w-full max-w-lg flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hasil Quiz</h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">Skor Anda: {score} / {questions.length}</p>
      <div className="w-full space-y-6">
        {questions.map((question, index) => (
          <div key={index}>
            <h3 className="font-semibold text-md md:text-lg mb-2">Soal {question.number}</h3>
            
            {/* Menampilkan gambar soal */}
            <div className="mb-4 flex justify-center">
              <img
                src={question.imageSrc}
                alt={`Soal ${question.number}`}
                className="w-full sm:w-3/4 lg:w-1/2 h-auto shadow-md"
              />
            </div>
            
            {/* Menampilkan jawaban */}
            <p
              className={`font-medium ${answers[index] === correctAnswers[index]
                ? "text-lime-500"
                : "text-red-600"
              }`}
            >
              Jawaban Anda: {answers[index]} (
              {answers[index] === correctAnswers[index] ? "Benar" : "Salah"})
            </p>
            
            {/* Menampilkan jawaban yang benar */}
            <p className="font-medium text-green-500">
              Jawaban yang Benar: {correctAnswers[index]}
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


const Quiz = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { number: 1, imageSrc: "/assets/quiz/1.Question.png", options: ["Variabel", "Tipe Data", "Prosedur", "Fungsi"] },
    { number: 2, imageSrc: "/assets/quiz/2.Question.png", options: ["Variabel", "Tipe Data", "Prosedur", "Fungsi"] },
    { number: 3, imageSrc: "/assets/quiz/3.Question.png", options: ["Variabel", "Perintah Cetak", "Penugasan", "Fungsi"] },
    { number: 4, imageSrc: "/assets/quiz/4.Question.png", options: ["Perintah Cetak", "Tipe Data", "Prosedur", "Fungsi"] },
    { number: 5, imageSrc: "/assets/quiz/5.Question.png", options: ["Variabel", "Tipe Data", "Prosedur", "Menyimpan"] },
    { number: 6, imageSrc: "/assets/quiz/6.Question.png", options: ["Memanggil Prosedur", "Tipe Data", "Memanggil Nilai Variabel", "Fungsi"] },
    { number: 7, imageSrc: "/assets/quiz/7.Question.png", options: ["Variabel", "Mengembalikan Nilai", "Prosedur", "Fungsi"] },
  ];

  const correctAnswers = {
    1: "Tipe Data",
    2: "Tipe Data",
    3: "Perintah Cetak",
    4: "Perintah Cetak",
    5: "Menyimpan",
    6: "Memanggil Prosedur",
    7: "Mengembalikan Nilai",
  };

  const score = Object.keys(answers).reduce(
    (total, key) => total + (answers[key] === correctAnswers[key] ? 1 : 0),
    0
  );

  const goToPage = (page) => setCurrentPage(page);
  const handleOptionChange = (option) => {
    setAnswers({ ...answers, [currentPage]: option });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    setShowResults(true);
    closeModal();
  };

  const handleStart = () => setCurrentPage(0);

  const onFinish = () => {
    setShowResults(false);
    setCurrentPage(null);
    setAnswers({}); 
  };
  

  if (showResults) {
    return <ResultPage answers={answers} questions={questions} correctAnswers={correctAnswers} score={score} onFinish={onFinish} />;
  }
  
  const currentQuestion = questions[currentPage];

  return (
    <>
      {currentPage === null ? (
        <StartPage onStart={handleStart} />
      ) : (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="bg-gray-50 dark:bg-blue-950 shadow-lg rounded-lg p-8 w-full max-w-4xl">
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
              imageSrc={currentQuestion.imageSrc}
              options={currentQuestion.options}
              selectedOption={answers[currentPage] || ""}
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
              <div className="bg-gray-50 dark:bg-blue-900 text-white rounded-lg p-6 w-full max-w-md shadow-lg text-center">
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
