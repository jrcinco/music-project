
const { AlbumController } = require('../controllers/AlbumController')
const { ArtistController } = require('../controllers/ArtistController')

/**
 * APIs V1 Routes
 */

const albumCtl = new AlbumController()
const artistCtl = new ArtistController()

Route.route('/api')
	.get((req, res) => res.send("Welcome API"))
	.all(send405)

Route.route('/api/v1')
  .get((req, res) => res.send("APIs V1"))  
  .all(send405)

Route.route('/api/v1/albums')
  .get(albumCtl.albums)
  .post(albumCtl.saveAlbum)
  .all(send405)

Route.route('/api/v1/albums/:albumId')
  .put(albumCtl.update)
  .delete(albumCtl.remove)
  .all(send405)

Route.route('/api/v1/artists')
  .get(artistCtl.artists)
  .post(artistCtl.save)
  .all(send405)

Route.route('/api/v1/artists/:artistId')
  .put(artistCtl.update)
  .all(send405)

module.exports = Route