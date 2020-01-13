const request = require('supertest')
const app = require('../src/server')

describe('Album Module Endpoints', () => {
  var id = 0
  it('Must be able to create an album', async () => {
    const res = await request(app)
      .post('/api/v1/albums')
      .send({
        title:"Ciber",
        year:2020,
        rating:5,
        releaseDate:"2002-12-09",
        artists:[]        
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('album')
    expect(res.body.album).toHaveProperty('_id')
    id = res.body.album._id
  })

  it('Must be able to list albums', async () => {
    const res = await request(app).get('/api/v1/albums')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('albums')    
  })

  it('Should be able to edit an existing album', async () => {
    const res = await request(app)
      .put(`/api/v1/albums/${id}`)
      .send({
        title:"Ciber58",
        year:2020,
        rating:10,
        releaseDate:"2002-12-09",
        artists:[]
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('album')
  })

  it('Should be able to delete an album', async () => {
    const res = await request(app).delete(`/api/v1/albums/${id}`)
    expect(res.statusCode).toEqual(200)
  })
})