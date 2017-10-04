/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectStatusMap', {
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Projects',
				key: 'ProjectId'
			}
		},
		IssueStatusId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_IssueStatus',
				key: 'IssueStatusID'
			}
		}
	}, {
		tableName: 'IssueTracker_ProjectStatusMap',
        timestamps: false
	});
};
