/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectMembers', {
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Projects',
				key: 'ProjectId'
			}
		}
	}, {
		tableName: 'IssueTracker_ProjectMembers',
        timestamps: false
	});
};
