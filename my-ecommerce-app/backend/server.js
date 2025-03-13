const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const supabase = require('./supabaseClient');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use("/api/auth", authRoutes); // ✅ Register Auth Routes

// test supabase connection
app.get('/test-DB', async (req, res) => {
    const { data, error } = await supabase.from("Products").sectect("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data });
});

app.listen( port, () => {
    console.log(`Server running on http://localhost:${port}`);
});