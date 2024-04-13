const express = require('express');
const cors = require('cors');
const { fbRouter } = require('./routes/feedbacks.js');


const port = 3001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/',fbRouter)


// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});