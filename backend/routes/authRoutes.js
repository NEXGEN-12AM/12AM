const express = require("express");
const jwt = require("jsonwebtoken");
const supabase = require("../supabaseClient");

const router = express.Router();

// ✅ Generate JWT Token
const generateToken = (userId, email) => {
    return jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ✅ Register User (Fix: No Hashing Needed)
router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email & Password are required" });
        }

        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            console.error("Supabase Register Error:", error);
            return res.status(400).json({ error: error.message });
        }

        const token = generateToken(data.user.id, email);
        res.json({ user: data.user, token });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

// ✅ Login User (Fix: Debug Supabase Response)
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email & Password are required" });
        }

        console.log("Login Attempt:", { email, password });

        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        console.log("Supabase Login Response:", { data, error });

        if (error || !data.user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = generateToken(data.user.id, email);
        res.json({ user: data.user, token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
