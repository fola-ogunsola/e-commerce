const queries = {
    getAllItem: `SELECT * FROM products`,
    getOne: `SELECT * FROM products WHERE id = $1`,
}




module.exports = queries