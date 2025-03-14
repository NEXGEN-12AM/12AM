const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const supabase = require('./supabaseClient');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// test supabase connection
app.get('/test_DB', async (req, res) => {
    const { data, error } = await supabase.from("Products").sectect("*");
    if (error) return res.status(404).json({ error: error.message });
    res.json({ product: data });
});

app.listen( port, () => {
    console.log(`Server running on http://localhost:${port}`);
});