const supabase = require('../supabaseClient');

// Create Order + Items
exports.createOrder = async (req, res) => {
    const { user_id, items } = req.body;

    try {
    // Step 1: Create the order
    const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({ user_id })
        .select()
        .single();

    if (orderError) throw orderError;

    const order_id = order.id;

    // Step 2: Fetch prices from products table and insert items
    for (const item of items) {
      // Get product price
    const { data: product, error: prodErr } = await supabase
        .from('products')
        .select('price')
        .eq('id', item.product_id)
        .single();
    if (prodErr) throw prodErr;

    const price = product.price;

      // Insert into order_items
    const { error: itemError } = await supabase.from('order_items').insert([
    {
        order_id,
        product_id: item.product_id,
        quantity: item.quantity,
        price
    }
]);
    if (itemError) throw itemError;
    }

    res.status(201).json({ message: 'Order placed', order_id });

} catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to place order' });
}
};

// (Optional) Get all orders with items and user info
exports.getAllOrders = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('orders')
            .select(`
            id,
            user_id,
            order_date,
            status,
            users ( full_name ),
            order_items (
            quantity,
            price,
            products ( name )
            )
        `)
        .order('order_date', { ascending: false });
        
        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
