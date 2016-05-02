"use strict";

module.exports = function(sequelize, DataTypes) {
  var Device = sequelize.define('Device', {
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        notEmpty: true
      }
    },
    ip: {
      type: DataTypes.STRING,
      validate: {
        isIPv4: true
      }
    },
    mac: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Device.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Device;
};