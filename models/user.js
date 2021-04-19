'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, { foreignKey: 'userId' });
    };
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email must not be empty"
        },
        isEmail: {
          args: true,
          msg: "Invalid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password must not be empty"
        },
        len: {
          args: [6, 30],
          msg: "Password should be between 6 to 30 characters"
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