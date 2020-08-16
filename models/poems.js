var mongoose = require("mongoose");

//SCHEMA SETUP
var poemSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Campground", campgroundSchema);