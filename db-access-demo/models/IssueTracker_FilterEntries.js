/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_FilterEntries', {
		FilterId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		FilterName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IsDefault: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'IssueTracker_FilterEntries'
	});
};
