import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch users when the component is mounted
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data); // Menyimpan data pengguna ke state
                setLoading(false);
            } catch (err) {
                setError('Gagal mengambil data pengguna');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-4xl p-6">
                <h1 className="text-3xl font-bold mb-4 text-center">Daftar Pengguna</h1>
                <div className="overflow-x-auto flex justify-center items-center">
                    <table className="min-w-full bg-gray-800 text-white border border-gray-700">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-center">No.</th>
                                <th className="py-2 px-4 border-b text-center">Nama</th>
                                <th className="py-2 px-4 border-b text-center">Kelas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="hover:bg-gray-700">
                                    <td className="py-2 px-4 border-b text-center">{index + 1}</td> {/* Menampilkan nomor urut */}
                                    <td className="py-2 px-4 border-b text-center">{user.nama}</td>
                                    <td className="py-2 px-4 border-b text-center">{user.kelas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;