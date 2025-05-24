const dataSource = require('../models');

class Services {
    constructor(model) {
        this.model = model;
    }
    async getAll() {
        try {
            const listAll = await dataSource[this.model].findAll();
            return listAll;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getById(id) {
        try {
            const entity = await dataSource[this.model].findByPk(id);
            if (!entity) {
                throw new Error('Entity not found');
            }
            return entity;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async create(data) {
        try {
            const entity = await dataSource[this.model].create(data);
            return entity;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, data) {
        try {
            const entity = await dataSource[this.model].findByPk(id);
            if (!entity) {
                throw new Error('Entity not found');
            }
            await entity.update(data);
            return entity;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async delete(id) {
        try {
            const entity = await dataSource[this.model].findByPk(id);
            if (!entity) {
                throw new Error('Entity not found');
            }
            await entity.destroy();
            return entity;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = Services;