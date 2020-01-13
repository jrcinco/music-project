
const { AlbumController } = require('../controllers/AlbumController')

/**
 * APIs V1 Routes
 */

const albumCtl = new AlbumController()

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
  .delete(albumCtl.remove)
  .all(send405)

module.exports = Route