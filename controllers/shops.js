const Shop = require('../models/shop')

module.exports = {
    new: newShop,
    create,
    index,
    show
};

async function show(req, res) {
    const shop = await Shop.findById(req.params.id)
    res.render('shops/show',{
        title: 'Shop Detail',
        shop
    })
}

async function index(req, res) {
    const shops = await Shop.find({})
    res.render('shops/index', { title: 'All Shops', shops })
}

function newShop(req, res) {
    res.render('shops/new', {
        title: 'Add Shop',
        errorMsg: ''
    });
}

async function create(req, res) {
    req.body.delivers = !!req.body.delivers
    req.body.ramen = req.body.ramen.trim();
    if (req.body.ramen) req.body.ramen = req.body.ramen.split(/\s*,\s*/);
    console.log(req.body)
    try {
        await Shop.create(req.body);
        res.redirect('/shops');
    } catch (err) {
        console.log(err);
        res.render('shops/new', { errorMsg: err.message });
    }
}