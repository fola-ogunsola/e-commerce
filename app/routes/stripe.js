var express = require('express');
var router = express.Router();

const stripe = require('stripe')('sk_test_51KOYWJESv2xOqESz9UpnVbonUmzSnBnFu9UD5KMnkrhHXTGgBYVcQrBYLRD2J6CUmXi2CDHoXQ74OrAZHPaucNsl00qJZekZlQ');

router.post('/payment', (req,res) => {
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

module.exports = router;