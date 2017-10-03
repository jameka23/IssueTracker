/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_FilterDefinitions', {
		FilterId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'IssueTracker_FilterEntries',
				key: 'FilterId'
			}
		},
		FilterKey: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		FilterValue: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_FilterDefinitions'
	});
};
