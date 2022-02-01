const queries = {
    createUser: `INSERT INTO users( first_name, last_name, email, phone_number, password, is_admin, confirmation_code) VALUES($1, $2, $3, $4, $5, $6, $7)`,
    verifyUser: `SELECT * FROM users WHERE confirmation_code = $1`,
    loginUser: `SELECT * FROM users WHERE email = $1`,
}




module.exports = queries