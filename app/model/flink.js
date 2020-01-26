'use strict';
module.exports = ({ mongoose }) => {
  const FlinkSchema = new mongoose.Schema({
    name: String,
    link: String,
    date: Date,
    display: {
      type: Boolean,
      default: false,
    },
  });

  return mongoose.model('Flink', FlinkSchema, 'Flink');
};
