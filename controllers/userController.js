const db = require('../database/conection');
const HttpError = require('../utils/httpError');

const getUsers = async (req, res, next) => {
  try {
    let users = await db('users');
    return res.status(200).json({
      "result":true,
      "message":"all users",
      "status":200,
      "total":users.length,
      "data":users
    });
  } catch (err) {
    return next(new HttpError(err, 404));
  }
};

module.exports = {
  getUsers,
};
