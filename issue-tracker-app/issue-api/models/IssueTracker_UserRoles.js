/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_UserRoles', {
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		RoleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Roles',
				key: 'RoleId'
			}
		}
	}, {
		tableName: 'IssueTracker_UserRoles',
        timestamps: false
	});
};
