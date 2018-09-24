module.exports = function(sequelize, Sequelize) {
    var Character = sequelize.define('char', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        div_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        char_name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        hp: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        attack: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        defence: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Character;
}