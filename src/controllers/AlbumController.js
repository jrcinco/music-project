class AlbumController {

  constructor () {
      // debug.log('Welcome API Controller Constructor')
  }

  albums (req, res) {
    try {
      let albums = [{id: 1, user_name: 'jhonny'}]
      res.send(albums)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = {
  AlbumController
}