/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_EmployeeTypes', {
		EmployeeTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		EmployeeTypeDesc: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IsSalaried: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_EmployeeTypes'
	});
};
