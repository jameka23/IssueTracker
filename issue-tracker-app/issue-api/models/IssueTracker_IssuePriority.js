/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_IssuePriority', {
		IssuePriorityID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		IssuePriorityName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IssuePriorityDescription: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_IssuePriority',
        timestamps: false
	});
};
