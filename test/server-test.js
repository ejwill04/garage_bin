process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const app = require('../server.js')
const chaiHttp = require('chai-http')
const configuration = require('../knexfile')['test']
const database = require('knex')(configuration)

chai.use(chaiHttp)

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist
  })
})

const beforeAndAfterEach = () => {
  beforeEach((done) => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
      .then(() => {
        return database.seed.run()
        .then(() => {
          done();
        })
      })
    })
  })

  afterEach((done) => {
    database.migrate.rollback()
    .then(() => {
      done();
    })
  })
}

describe('GET /api/v1/items', () => {
  beforeAndAfterEach()

  it('should respond back with all items', (done) => {
    chai.request(app)
    .get('/api/v1/items')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.equal('Golf clubs');
      expect(res.body[0].reason).to.equal('because');
      expect(res.body[0].cleanliness).to.equal('Dusty');
      done()
    })
  })
})

describe('POST /api/v1/items', () => {
  beforeAndAfterEach()

  it('should post a new item', (done) => {
    let item = {
      name: 'cycling wheels',
      reason: 'emergency',
      cleanliness: 'Rancid'
    }
    chai.request(app)
    .post('/api/v1/items')
    .send(item)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body.length).to.equal(2);
      done();
    })
  })
})

describe('PUT /api/v1/items/:id', () => {
  beforeAndAfterEach()

  it('should PUT an existing item', (done) => {
    let item = {
      name: 'cycling rims',
      reason: 'now',
      cleanliness: 'Rancid'
    }

    chai.request(app)
    .put('/api/v1/items/1')
    .send(item)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body[0].name).to.equal('cycling rims');
      expect(res.body.length).to.equal(1);
      done();
    })
  })
})
