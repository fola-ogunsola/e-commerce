const queries = {
    getAllItem: `SELECT * FROM products`,
    getOne: `SELECT * FROM products WHERE id = $1`,
    createOrder: `INSERT INTO orders (user_id, name) VALUES($1, $2)`
}




module.exports = queries