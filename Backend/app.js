const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');
const authRoute = require('./routes/authRoute')
const regRoute = require('./routes/regRoute')
const commentRoute = require('./routes/commentRoute')
const boardRoute = require('./routes/boardRoutes')
const cookieParser = require('cookie-parser');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true                // Включает передачу куки
}));
app.use(cookieParser())

// Подключаем маршруты
app.use(authRoute);
app.use(videoRoutes);
app.use(regRoute);
app.use(commentRoute);
app.use(boardRoute);

module.exports = app;