const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
// const resultRoutes = require("./routes/resultRoutes");

const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// User Routes
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
