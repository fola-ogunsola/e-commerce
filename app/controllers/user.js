const db = require('../../config/database');
const queries = require('../queries/user')


function getAllProduct(req, res){
    db.any(queries.getAllItem)
    .then(function(data){
        return res.json({status: "success", message: "All products Items Retrieved Successfully", data})
    })
    .catch(function(err){
        return res.json({status: "failed", message: " error occurred while retrieving product Items"})
    })
}


function getOneProduct(req, res){
    var id = req.params.id;
    db.one(queries.getOne, [id])
    .then(function(data){
        return res.json({status: "success", message: "Retrieved Successfully", data})
    })
    .catch(function(err){
        return res.json({status: "failed", message: "Failed To Retrieved"})
    })
}




module.exports = {getAllProduct, getOneProduct}