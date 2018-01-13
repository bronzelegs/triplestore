var mongoose = require('mongoose');

var TStoreSchema = mongoose.Schema({
    subj: String,
    pred: String,
    obj: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Triple', TStoreSchema);
