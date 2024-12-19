import React from "react";

const Discussion = ({ questions, answers, correctAnswers }) => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Pembahasan Soal</h1>
        {questions.map((question, index) => (
            <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold">Soal {index + 1}</h2>
                <img src={question.imageSrc} alt={`Soal ${index + 1}`} className="mt-4 w-full max-w-lg" />
                <p className={`mt-4 ${answers[index] === correctAnswers[index] ? "text-green-500" : "text-red-500"}`}>
                    Jawaban Anda: {answers[index]} ({answers[index] === correctAnswers[index] ? "Benar" : "Salah"})
                </p>
                <p className="text-green-500">Jawaban Benar: {correctAnswers[index]}</p>
            </div>
        ))}
    </div>
);

export default Discussion;
