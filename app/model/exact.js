'use strict';
module.exports = ({ mongoose }) => {
  const ExactSchema = new mongoose.Schema({
    email: String,
    date: Date,
  });

  return mongoose.model('Exact', ExactSchema, 'Exact');
};
