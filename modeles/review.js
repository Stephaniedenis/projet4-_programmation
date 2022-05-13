const mongoose = require ('mongoose');

const reviewSchema = mongoose.Schema({
    review: {type: String, required: true},
    name: {type: String, required:true},
    user_id:{type: String, required:true},
    date: {type: date, required:true}
});

module.exports = mongoose.model('Review', reviewSchema);
