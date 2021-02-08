const { NULL } = require("node-sass");
const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {
    const Comments = sequelize.define("Comment", {
  
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      
      dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },

      QuestionId: {
        type: DataTypes.INTEGER
      },

      UserId: {
        type: DataTypes.INTEGER
      },

      parentCommentId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },

      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }

    });
  
    return Comments;
  };