const supabase = require('../supabaseClient');

// GET all users
exports.getAllUsers = async (req, res) => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// GET user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
    if (error) return res.status(404).json({ error: 'User not found' });
    res.json(data);
};

// POST create user
exports.createUser = async (req, res) => {
    const { full_name, email } = req.body;
    const { data, error } = await supabase
        .from('users')
        .insert([{ full_name, email }])
        .select()
        .single();

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
};

// PUT update user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { full_name, email } = req.body;
    const { data, error } = await supabase
        .from('users')
        .update({ full_name, email })
        .eq('id', id)
        .select()
        .single();

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// DELETE user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('users').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'User deleted' });
};
