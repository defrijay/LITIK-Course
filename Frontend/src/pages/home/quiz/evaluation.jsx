import React from "react";
import { useNavigate } from "react-router-dom";

const Evaluation = ({ score, totalQuestions }) => {
  const navigate = useNavigate();

  const goToPembahasan = () => {
    navigate("/pembahasan");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Hasil Evaluasi</h1>
      <p className="text-xl mb-6">
        Skor Anda: {score} dari {totalQuestions}
      </p>
      <button
        onClick={goToPembahasan}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Pembahasan Soal
      </button>
    </div>
  );
};

export default Evaluation;
