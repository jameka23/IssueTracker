/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectCustomFieldValues', {
		IssueId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		CustomFieldId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_ProjectCustomFields',
				key: 'CustomFieldId'
			}
		},
		CustomFieldValue: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_ProjectCustomFieldValues'
	});
};
