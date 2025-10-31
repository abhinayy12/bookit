export async function validatePromo(req, res) {
    const { code, price, qty } = req.body;
    const subtotal = price * qty;
  
    if (code === "FLAT100") return res.json({ valid: true, discount: 100 });
    if (code === "SAVE10") return res.json({ valid: true, discount: Math.round(subtotal * 0.1) });
  
    res.status(400).json({ valid: false, discount: 0 });
}  