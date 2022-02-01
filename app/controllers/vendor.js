const db = require('../../config/database');
const queries = require('../queries/vendor')


function createProduct(req, res){
    var name = req.body.name;
    var price = req.body.price;
    var description = req.body.description;
    //var image = req.file && req.file.location ? req.file.location : req.body.image;
    var image = req.body.image;
    const values = [name, price, description, image]
    db.any(queries.createProduct, values)
    .then(function(result){
        return res.status(200).json({message: "Product created sucessfully", result:result})
    })
    .catch(function(err){
        return res.status(400).json({message: "Server error"})
    })
}

function updateProduct(req, res){
    console.log(req.params)
    const value = [req.body.name,req.body.price,req.body.description, req.body.image, req.params.id];
    db.none(queries.updateProduct, value)
    .then(function(data){
        console.log(data ,'data')
        return res.status(200).json({message: 'Product updated successfully', data:data});
    })
    .catch(function(error){
        return error
    })
}

function deleteProduct(req, res){
    var id = req.params.id;
    db.none(queries.deleteProduct, [id])
    .then(function(data){
        return res.status(200).json({message: "Product Item deleted", data})
    })
    .catch(function(err){
        return err
    })
}


module.exports = {createProduct, updateProduct, deleteProduct}