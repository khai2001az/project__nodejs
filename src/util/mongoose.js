module.exports = {
    multipleMongooseToObject: function(mongoose){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    MongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};