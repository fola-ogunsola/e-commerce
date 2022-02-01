const queries = {
    createProduct: `INSERT INTO products( name, price, description, image) VALUES($1, $2, $3, $4)`,
    updateProduct: `UPDATE products SET name = $1, price = $2 , image = $3, description = $4 WHERE id = $5`,
    deleteProduct: `DELETE FROM products WHERE id = $1`
 
}




module.exports = queries