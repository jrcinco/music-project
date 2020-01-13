const Schema = mongoose.Schema
const ArtistsSchema = require('../models/ArtistsSchema')

const AlbumsSchema = Schema({
  title: String,
  year: Number,
  rating: Number,
  releaseDate: Date,
  artists: [{
    type: Schema.ObjectId, ref: "ArtistsSchema"
  }]
})

module.exports = mongoose.model("Albums", AlbumsSchema)