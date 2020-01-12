
const { AlbumController } = require('../controllers/AlbumController')

/**
 * APIs V1 Routes
 */

Route.route('/api/v1')
  .get((req, res) => res.send("APIs V1"))  
  .all(send405)

Route.route('/api/v1/albums')
  .get(new AlbumController().albums)  
  .all(send405)

module.exports = Route