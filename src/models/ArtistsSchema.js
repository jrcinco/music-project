const Schema = mongoose.Schema

const ArtistsSchema = Schema({
  firstName: String,
  lastName: String,
  birthDate: Date
})

module.exports = mongoose.model("Artists", ArtistsSchema)