'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    // underscored: true,
    // timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: 'deleted_at',
    // paranoid: true,
    // defaultScope: {
    //   attributes: { exclude: ['deleted_at'] }
    // },
    // scopes: {
    //   withDeleted: {
    //     attributes: { include: ['deleted_at'] }
    //   }
    // }
  });
  return Pessoa;
};