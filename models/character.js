module.exports = function(sequelize, DataTypes){
    return sequelize.define('character', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    campaign: {
        type: DataTypes.STRING,
        allowNull: false
      },
    race: {
        type: DataTypes.STRING,
        allowNull: false
      },
    class: {
        type: DataTypes.STRING,
        allowNull: false
      },
    alignment: {
          type: DataTypes.STRING,
          allowNull: false
      },
    strength: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
    dexterity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    constitution: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    intelligence: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    wisdom: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    charisma: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    armorClass: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    hitPoints: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    equipment: {
        type: DataTypes.STRING(1200),
        allowNull: false
      },
    weapons: {          
        type: DataTypes.STRING(1200),
        allowNull: false
    },
    spells: {
        type: DataTypes.STRING(1200),
        allowNull: false
    }
    })
  };
