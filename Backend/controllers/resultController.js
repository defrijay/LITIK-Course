let results = []; // Temporary in-memory storage

// Get all results
const getAllResults = (req, res) => {
    res.json(results);
};

// Get result by ID
const getResultById = (req, res) => {
    const result = results.find((r) => r.id === parseInt(req.params.id));
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: "Result not found" });
    }
};

// Create a new result
const createResult = (req, res) => {
    const { nama, kelas, answers, score } = req.body;
    const newResult = { id: results.length + 1, nama, kelas, answers, score };
    results.push(newResult);
    res.status(201).json(newResult);
};

module.exports = {
    getAllResults,
    getResultById,
    createResult,
};
