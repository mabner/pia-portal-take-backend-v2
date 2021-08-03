let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Teste — Páginas.', () => {
	it('Página não encontrada', (done) => {
		chai
			.request('http://localhost:3001')
			.get(`/api/v1/toolstest/`)
			.end((err, res) => {
				res.should.have.status(404);
				done();
			});
	});
	it('Página encontrada', (done) => {
		chai
			.request('http://localhost:3001')
			.get(`/api/v1/tools/`)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
});
