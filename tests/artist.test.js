const request = require('supertest')
const app = require('../src/server')

describe('Artist Module Endpoints', () => {
  var id = 0
  it('Must be able to create an artist', async () => {
    const res = await request(app)
      .post('/api/v1/artists')
      .send({        
        firstName:"Ciber54",
        lastName:"Cibernetico54",
        birthDate:"2002-12-09"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('artist')
    expect(res.body.artist).toHaveProperty('_id')
    id = res.body.artist._id
  })

  it('Must be able to list artists', async () => {
    const res = await request(app).get('/api/v1/artists')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('artists')    
  })

  it('Should be able to edit an existing artist', async () => {
    const res = await request(app)
      .put(`/api/v1/artists/${id}`)
      .send({
        firstName:"Ciber548",
        lastName:"Cibernetico548",
        birthDate:"2002-12-09"
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('artist')
  })

  it('Should be able to delete an artist', async () => {
    const res = await request(app).delete(`/api/v1/artists/${id}`)
    expect(res.statusCode).toEqual(200)
  })
})