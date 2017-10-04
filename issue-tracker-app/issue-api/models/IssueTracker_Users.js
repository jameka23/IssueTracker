/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_Users', {
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		UserName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		UserPassword: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'none'
		},
		DisplayName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Disabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		StartDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EmployeeTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_EmployeeTypes',
				key: 'EmployeeTypeId'
			}
		}
	}, {
		tableName: 'IssueTracker_Users',
        timestamps: false
	});
};
