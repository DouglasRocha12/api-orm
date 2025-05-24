

class Controller{
    constructor(entityService){
        this.entityService = entityService;
    }
    async getAll(req, res){
        try {
            const listAll = await this.entityService.getAll();
            return res.status(200).json(listAll);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
    async getById(req, res){
        try {
            const { id } = req.params;
            const entity = await this.entityService.getById(id);
            if (!entity) {
                return res.status(404).json({message: 'Entity not found'});
            }
            return res.status(200).json(entity);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
    async create(req, res){
        try {
            const entity = await this.entityService.create(req.body);
            return res.status(201).json(entity);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
    async update(req, res){
        try {
            const { id } = req.params;
            const entity = await this.entityService.update(id, req.body);
            if (!entity) {
                return res.status(404).json({message: 'Entity not found'});
            }
            return res.status(200).json(entity);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
    async delete(req, res){
        try {
            const { id } = req.params;
            const entity = await this.entityService.delete(id);
            if (!entity) {
                return res.status(404).json({message: 'Entity not found'});
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = Controller;