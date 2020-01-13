const ArtistsSchema = require('../models/ArtistsSchema')

class ArtistController {

  constructor () {
    console.debug('Artist API Controller Constructor')
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
}

module.exports = {
  ArtistController
}