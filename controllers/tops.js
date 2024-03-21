const Top = require('../models/top');
const Shop = require('../models/shop');

module.exports = {
  new: newTop,
  create
};

async function newTop(req, res) {
  //Sort tops by their name
  const tops = await Top.find({}).sort('name');
  res.render('tops/new', { title: 'Add Top', tops });
}

async function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // Fix by either reformatting to "MM-DD-YYYY" or by 
  // appending a "time" fragment like this... 
  req.body.born += 'T00:00';
  try {
    await Top.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/tops/new');
}