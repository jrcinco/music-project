const AlbumsSchema = require('../models/AlbumsSchema')

class AlbumController {

  constructor () {
    console.debug('Album API Controller Constructor')
  }

  albums (req, res) {
    try {
      let albums = [{id: 1, user_name: 'jhonny'}]
      res.send(albums)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  saveAlbum (req, res) {
    try {
      let album = new AlbumsSchema()
      album.title = req.body.title
      album.year = req.body.year
      album.rating = req.body.rating
      album.releaseDate = req.body.releaseDate
      album.save((error, storedAlbum) => {
        if (error) {
          res.status(500).send(error)
        } else {
          res.send({ album: storedAlbum })
        }
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = {
  AlbumController
}