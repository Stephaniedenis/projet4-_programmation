const mongoose = require ('mongoose');

const movieSchema = mongoose.Schema({
    title: {type: String, required: true},
    rated: {type: String, required:true},
    timestramps:{type: String, required:true}
});

module.exports = mongoose.model('Movie', movieSchema);
