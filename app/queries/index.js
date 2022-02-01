const queries = {
    createUser: `INSERT INTO users( first_name, last_name, email, phone_number, password, confirmation_code) VALUES($1, $2, $3, $4, $5, $6)`,
    verifyUser: `SELECT * FROM users WHERE confirmation_code = $1`,
    loginUser: `SELECT * FROM users WHERE email = $1`,
    createAdmin: `INSERT INTO admin (first_name, last_name, email, phone_number, password, confirmation_code) VALUES($1, $2, $3, $4, $5, $6)`,
    verifyAdmin: `SELECT * FROM admin WHERE confirmation_code = $1`,
    adminLogin: `SELECT * FROM admin WHERE email = $1`,
}




module.exports = queries