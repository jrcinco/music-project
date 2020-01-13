const AlbumsSchema = require('../models/AlbumsSchema')
const ArtistsSchema = require('../models/ArtistsSchema')

class AlbumController {

  constructor () {
    console.debug('Album API Controller Constructor')
  }

  albums (req, res) {
    try {
      AlbumsSchema.find((error, albums) => {
        if (error) {
          res.status(500).send({ message: "Internal Server Error" })
        } else if (!albums) {
          res.status(404).send({ message: "Not Found" })
        } else {
          ArtistsSchema.populate(albums, { path: "artists" }, (error, albums) => {
            if (error) {
              res.status(500).send({ message: "Internal Server Error" })
            } else {
              res.send({ albums })
            }
          })
        }
      })
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" })
    }
  }

  saveAlbum (req, res) {
    try {
      let album = new AlbumsSchema()
      album.title = req.body.title
      album.year = req.body.year
      album.rating = req.body.rating
      album.releaseDate = req.body.releaseDate
      album.artists = req.body.artists
      album.save((error, storedAlbum) => {
        if (error) {
          res.status(500).send({ message: "Internal Server Error" })
        } else {
          res.send({ album: storedAlbum })
        }
      })
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" })
    }
  }

  update (req, res) {
    try {
      AlbumsSchema.findByIdAndUpdate(
        req.params.albumId, req.body, { new: true }, (error, updatedAlbum) => {
        if (error) {
          res.status(500).send({ message: "Internal Server Error" })
        } else {
          res.send({ album: updatedAlbum })
        }
      })
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" })
    }
  }

  remove (req, res) {
    try {
      AlbumsSchema.findById(req.params.albumId, (error, album) => {
        if (error) {
          res.status(500).send({ message: "Internal Server Error" })
        } else if (!album) {
          res.status(404).send({ message: "Not Found" })
        } else {
          album.remove(error => {
            if (error) {
              res.status(500).send({ message: "Internal Server Error" })
            } else {
              res.send({ message: "Album was removed" })
            }
          })
        }
      })
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" })
    }
  }
}

module.exports = {
  AlbumController
}