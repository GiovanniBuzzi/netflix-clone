const { Model, DataTypes } = require('sequelize');

class List extends Model {
    static init(sequelize) {
        super.init({
            item: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Perfil, {foreignKey: 'id_profile', as: 'profiles'});
    }
}

module.exports = List;