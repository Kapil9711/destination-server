const { connect } = require("mongoose");

const connectDb = (url) => {
  return connect(url);
};

module.exports = connectDb;
