
module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define("Question", {

    question: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
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

  return Question;
};