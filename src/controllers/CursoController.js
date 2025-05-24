const Controller = require('./Controllers');
const Services = require('../services/CursoServices');

const cursoServices = new Services();

class CursoController extends Controller {
    constructor() {
        super(cursoServices);
    }
}
module.exports = CursoController;
