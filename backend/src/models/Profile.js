const { Model, DataTypes } = require('sequelize');

class Profile extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.List, {foreignKey: 'id_profile', as: 'lists'});
    }
}

module.exports = Profile;