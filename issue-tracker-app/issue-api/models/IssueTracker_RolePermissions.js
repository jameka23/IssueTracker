/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_RolePermissions', {
		RoleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Roles',
				key: 'RoleId'
			}
		},
		PermissionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Permissions',
				key: 'PermissionId'
			}
		}
	}, {
		tableName: 'IssueTracker_RolePermissions',
        timestamps: false
	});
};
