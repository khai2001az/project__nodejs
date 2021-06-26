const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Toy = new Schema({
    img: { type: String, required:true, },
    name: { type: String,required:true, maxLength: 50 },
    description: { type: String,required:true, maxLength: 600 },
    cost: { type: Number,required:true, maxLength: 10, },
    slug: { type: String, slug:"name", unique: true},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Toy', Toy);