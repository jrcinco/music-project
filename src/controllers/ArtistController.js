const ArtistsSchema = require('../models/ArtistsSchema')

class ArtistController {

  constructor () {
    console.debug('Artist API Controller Constructor')
  }

  artists (req, res) {
    try {
      ArtistsSchema.find((error, artists) => {
        if (error) {
          res.status(500).send({ message: "Internal Server Error" })
        } else if (!artists) {
          res.status(404).send({ message: "Not Found" })
        } else {
          res.send({ artists })
        }
      })
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" })
    }
  }

  save (req, res) {
    try {
      let artist = new ArtistsSchema()
      artist.firstName = req.body.firstName
      artist.lastName = req.body.lastName
      artist.birthDate = req.body.birthDate
      artist.save((error, storedArtist) => {
        if (error) {
          res.status(500).send({ message: "Internal Server Error" })
        } else {
          res.send({ artist: storedArtist })
        }
      })
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" })
    }
  }

  update (req, res) {
    try {
      ArtistsSchema.findByIdAndUpdate(
        req.params.artistId, req.body, { new: true }, (error, updatedArtist) => {
        if (error) {
          res.status(500).send({ message: "Internal Server Error" })
        } else {
          res.send({ artist: updatedArtist })
        }
      })
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" })
    }
  }
}

module.exports = {
  ArtistController
}