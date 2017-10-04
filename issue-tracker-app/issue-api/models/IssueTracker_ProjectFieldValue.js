/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectFieldValue', {
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_Projects',
				key: 'ProjectId'
			}
		},
		ProjectFieldId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_ProjectField',
				key: 'ProjectFieldId'
			}
		},
		Value: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_ProjectFieldValue',
        timestamps: false
	});
};
