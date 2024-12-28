import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useIdentity } from '../../../context/IdentityContext';

const Identity = () => {
    const [nama, setNama] = useState('');
    const [kelas, setKelas] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setIdentity } = useIdentity();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ambil URL dari .env
            const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://litik-course-be.vercel.app';
            const response = await axios.post(`${backendUrl}/api/users`, { nama, kelas });

            // Simpan identitas ke context
            setIdentity({ nama, kelas, id: response.data.id });

            // Reset pesan dan arahkan ke halaman quiz
            setMessage('');
            navigate('/quiz');
        } catch (error) {
            console.error('Error:', error);
            setMessage('Gagal menyimpan data. Pastikan server berjalan dengan baik.');
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center space-y-8 bg-slate-950 text-white">
            <h1 className="text-6xl font-bold text-center">Masukkan Identitas</h1>
            <div className="flex flex-col w-full max-w-xl p-6">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input
                            type="text"
                            id="name"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Nama"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="text"
                            id="kelas"
                            value={kelas}
                            onChange={(e) => setKelas(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Kelas"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-xl w-full px-5 py-2.5 text-center"
                    >
                        Mulai
                    </button>
                </form>
                {message && <p className="text-center mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default Identity;
