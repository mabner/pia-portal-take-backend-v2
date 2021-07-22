let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Teste — Cadastro de ferramenta não encontrado.', () => {
	it('Ferramenta não encontrada', (done) => {
		chai
			.request('http://localhost:3001')
			.get(`/api/v1/tools/999`)
			.end((err, res) => {
				res.should.have.status(500);
				done();
			});
	});
});

describe('Teste — Cadastro de ferramenta encontrado.', () => {
	it('Ferramenta encontrada', (done) => {
		chai
			.request('http://localhost:3001')
			.get(`/api/v1/tools/60f24239ebb9e009b8687594`)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
});

describe('Teste — Página não encontrada.', () => {
	it('Página não encontrada', (done) => {
		chai
			.request('http://localhost:3001')
			.get(`/api/v1/toolstest/`)
			.end((err, res) => {
				res.should.have.status(404);
				done();
			});
	});
});
