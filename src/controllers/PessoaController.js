const Controller = require('./Controllers');
const Services = require('../services/PessoaServices');

const pessoaServices = new Services();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }
}
module.exports = PessoaController;
