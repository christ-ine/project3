
module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define("Question", {

    question: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    topic: {
      type: DataTypes.STRING,
      allowNull: true
    },

    content: {
      type: DataTypes.STRING,
      allowNull: true
    },

    UserId: {
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

  return Question;
};