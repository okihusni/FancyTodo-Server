'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, { foreignKey: 'userId' })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Please input the correct mail!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 30],
          msg: "Password length should be min 6 and max 30 characters"
        }
      }
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate(instance) {
        var salt = bcrypt.genSaltSync(10);
        instance.password = bcrypt.hashSync(instance.password, salt)
      }
    },
    modelName: 'User',
  });
  return User;
};