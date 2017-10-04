/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker', {
		C1: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker',
		timestamps: false

	});
};
