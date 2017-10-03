/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectSLARolloverHours', {
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		AllottedHours: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		EffectiveStartDate: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		},
		EffectiveEndDate: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_ProjectSLARolloverHours'
	});
};
