const { createClient } = require( "@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = 'https://rtxonqsxmmindphdtqae.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY; // Ensure this matches your `.env` file
const supabase = createClient(supabaseUrl, supabaseKey);


module.exports = supabase;