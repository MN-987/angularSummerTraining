var mongoose = require("mongoose");
let mongooseSchema = mongoose.Schema({
  adult:Boolean,
         backdrop_path:String,
         "genre_ids":Array,
         "id":Number,
         "original_language":String,
         "original_title":String,
         "overview": String,
         "poster_path":String,
         "release_date":String,
         "title":String,
         "video":Boolean,
         "vote_average":Number,
         "vote_count":Number

        });

module.exports=mongoose.model("Movie",mongooseSchema);
