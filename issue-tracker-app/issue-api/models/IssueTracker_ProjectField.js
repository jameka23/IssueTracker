/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectField', {
		ProjectFieldId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ProjectFieldTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_ProjectFieldType',
				key: 'ProjectFieldTypeId'
			}
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ValidValues: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Ordinal: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		IsRequired: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		IsActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		IsVisibleProjectGrid: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		IsVisibleIssueGrid: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		IsProjectFilter: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		IsIssueFilter: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		DefaultValue: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_ProjectField'
	});
};
