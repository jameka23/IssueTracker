/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectStaffing', {
		ProjectStaffingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Projects',
				key: 'ProjectId'
			}
		},
		WeekEndingDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		HoursRequired: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Skill: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_ProjectStaffing'
	});
};
