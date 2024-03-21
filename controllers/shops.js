const Shop = require('../models/shop');

module.exports = {
  index,
  show,
  new: newShop,
  create,
  delete: deleteShop,
  editShop,
  updateShop
};

 async function deleteShop(req, res) {
    await Shop.findByIdAndDelete(req.params.id)
    res.redirect('/shops')
}

async function updateShop(req, res) {
    req.body.delivers = !!req.body.delivers;
    await Shop.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/shops')
}

async function index(req, res) {
  const shops = await Shop.find({});
  res.render('shops/index', { title: 'All Shops', shops });
}

async function show(req, res) {
  const shop = await Shop.findById(req.params.id);
  res.render('shops/show', { title: 'Shop Detail', shop });
}

function newShop(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('shops/new', { title: 'Add Shop', errorMsg: '' });
}

async function editShop( req, res) {
    const shop = await Shop.findById(req.params.id)
    res.render('shops/edit', {title: 'Edit Shop', shop, errorMsg: '' }) 
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.delivers = !!req.body.delivers;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Shop.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the shops index after we implement it
    res.redirect('/shops');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('shops/new', { errorMsg: err.message });
  }
}