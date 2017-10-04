/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_Roles', {
		RoleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		RoleName: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_Roles',
        timestamps: false
	});
};
