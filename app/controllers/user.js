const db = require('../../config/database');
const queries = require('../queries/user');
const stripe = require('stripe')('sk_test_51KOYWJESv2xOqESz9UpnVbonUmzSnBnFu9UD5KMnkrhHXTGgBYVcQrBYLRD2J6CUmXi2CDHoXQ74OrAZHPaucNsl00qJZekZlQ');


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

function createOrder(req, res){
    var user_id = req.params.user_id;
    var name = req.body.name;
    const value = [user_id, name]
    db.any(queries.createOrder, value)
    .then(function(data){
    //  return res.redirect('./routes/stripe')
    stripe.paymentLinks.create({
        line_items: [
            {
              price: 'price_1KP7HmESv2xOqESzyO78IbyP',
              quantity: 1,
            },
            {
              price: 'price_1KOio9ESv2xOqESz5Vw0Z8ms',
              quantity: 2, 
            },
            {
                price: 'price_1KOimfESv2xOqESz65eqObsX',
                quantity: 3,
            }
          ],
},(stripeErr, stripeRes) => {
    if(stripeErr){
        res.status(500).json(stripeErr)
    }
    else {
        res.status(200).json(stripeRes)
    }
})
})
  .catch(function(err){
      return res.status(400).json({message: "something went wrong", err})
  })
}



module.exports = {getAllProduct, getOneProduct, createOrder}