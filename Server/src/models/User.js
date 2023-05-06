const { Sequelize, DataTypes } = require('sequelize');
const users = require('../../../Server/src/utils/users');



module.exports = (sequelize) => {
  sequelize.define('User', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primariKey: true,
      allowNull: false    // que este campo no venga vacío
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true     //REGEX
      }
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      // validate: {
      // }
    }
  }, { timestamps: false });
};
