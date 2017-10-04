/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_Permissions', {
		PermissionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		PermissionName: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_Permissions',
        timestamps: false
	});
};
