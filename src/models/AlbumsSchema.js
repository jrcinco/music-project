const Schema = mongoose.Schema

const AlbumsSchema = Schema({
  title: String,
  year: Number,
  rating: Number,
  releaseDate: Date
})

module.exports = mongoose.model("Albums", AlbumsSchema)