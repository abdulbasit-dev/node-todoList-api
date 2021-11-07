const db = require('../database/conection');
const HttpError = require('../utils/httpError');

const testFunction = async (req, res, next) => {
  try {
    let a = await db.select().from('users');
    return res.json(a);
  } catch (err) {
    return next(new HttpError(err, 404));
  }
};

module.exports = {
  testFunction,
};
