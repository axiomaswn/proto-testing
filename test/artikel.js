const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('menjalankan method untuk artikel', function() {
  // it('artikel berhasil disimpan', function(done){
  //   chai.request('http://localhost:3000').post('/artikel').send({"judul":"ini judul","isi":"ini isi"}).end(function (err,res){
  //     res.body.should.have.deep.property("judul","ini judul")
  //     done()
  //   })
  // })
  // it('artikel berhasil dimunculkan pada daftar artikel', function(done){
  //   chai.request('http://localhost:3000').get('/artikel').end(function (err,res){
  //     res.body.should.have.deep.property("[0].judul","ini judul")
  //     done()
  //   })
  // })
  it('artikel berhasil diupdate', function(done){
    const art_id = '58afdd23126ab208decc87cc'
    chai.request('http://localhost:3000').put(`/artikel/${art_id}`).send({"judul":"berhasil ubah judul"}).end(function (err,res){
      res.body.should.have.deep.property("judul","berhasil ubah judul")
      done()
    })
  })
  // it('artikel berhasil dihapus', function(done){
  //   const art_id = '58afdaa80af4750862e02658'
  //   chai.request('http://localhost:3000').delete(`/artikel/${art_id}`).end(function (err,res){
  //     // console.log(res);
  //     res.body.message.should.equal(`artikel dengan id ${art_id} berhasil dihapus`);
  //     // res.body.n.should.equal(1)
  //     done()
  //   })
  // })

})
