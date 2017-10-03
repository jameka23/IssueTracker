/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectCustomFields', {
		CustomFieldId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Projects',
				key: 'ProjectId'
			}
		},
		CustomFieldName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CustomFieldRequired: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		CustomFieldDataType: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_ProjectCustomFields'
	});
};
