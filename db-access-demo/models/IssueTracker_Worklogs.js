/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_Worklogs', {
		WorklogId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		IssueId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'IssueTracker_Issues',
				key: 'IssueId'
			}
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		DateTimeCreated: {
			type: DataTypes.DATE,
			allowNull: true
		},
		HoursWorked: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		DescriptionOfWork: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DateOfLog: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_Worklogs'
	});
};
