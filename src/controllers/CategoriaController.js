const Controller = require('./Controllers');
const Services = require('../services/CategoriaServices');

const categoriaServices = new Services();

class CategoriaController extends Controller {
    constructor() {
        super(categoriaServices);
    }
}
module.exports = CategoriaController;
