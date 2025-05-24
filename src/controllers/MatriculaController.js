const Controller = require('./Controllers');
const Services = require('../services/MatriculaServices');

const matriculaServices = new Services();

class MatricualController extends Controller {
    constructor() {
        super(matriculaServices);
    }
}
module.exports = MatricualController;
