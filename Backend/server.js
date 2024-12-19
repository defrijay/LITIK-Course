const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const resultRoutes = require("./routes/resultRoutes");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', userRoutes);
app.use("/api/results", resultRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
