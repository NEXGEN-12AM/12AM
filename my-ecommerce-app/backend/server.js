const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const supabase = require('./supabaseClient');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use("/api/auth", authRoutes); // ✅ Register Auth Routes

app.use('/api', productRoutes);

app.use('/api', userRoutes); // ✅ Register User Routes

app.use('/api', orderRoutes);

// test supabase connection
app.get('/test-DB', async (req, res) => {
    const { data, error } = await supabase.from("Products").sectect("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json({ data });
});

app.listen( port, () => {
    console.log(`Server running on http://localhost:${port}`);
});