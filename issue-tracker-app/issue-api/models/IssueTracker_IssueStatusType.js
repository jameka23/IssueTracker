/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IssueTracker_IssueStatusType', {
    StatusTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StatusType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'IssueTracker_IssueStatusType'
  });
};
