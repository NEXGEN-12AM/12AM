const supabase = require('../supabaseClient');

// Get all products
exports.getAllProducts = async (req, res) => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
}

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id',id)
        .single();
    if (error) return res.status(404).json({ error: 'Product not found' });
    res.json(data);
}

// POST create product
exports.createProduct = async (req, res) => {
    const { name, description, price, stock, image_url } = req.body;
    const { data, error } = await supabase.from('products').insert([
        { name, description, price, stock, image_url }
    ]).select().single();

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
};


// PUT update product
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, image_url } = req.body;
    const { data, error } = await supabase
        .from('products')
        .update({ name, description, price, stock, image_url })
        .eq('id', id)
        .select()
        .single();
    
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

  // DELETE product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: 'Product deleted' });
};