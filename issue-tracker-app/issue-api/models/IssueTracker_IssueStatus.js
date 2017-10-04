/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_IssueStatus', {
		IssueStatusID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		IssueStatusName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IssueStatusDescription: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IssueStatusPermission: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((1))'
		},
		IsDefault: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		IsRequired: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		StatusTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_IssueStatusType',
				key: 'StatusTypeId'
			}
		}
	}, {
		tableName: 'IssueTracker_IssueStatus',
        timestamps: false
	});
};
