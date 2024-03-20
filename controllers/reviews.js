const Shop = require('../models/shop')

module.exports = {
    create
}

async function create(req, res) {
    const shop = await Shop.findById(req.params.id)
    shop.reviews.push(req.body)
    try {
        await shop.save()
    } catch (err) {
        console.log(err)

    }
    res.redirect(`/shops/${shop._id}`)
}