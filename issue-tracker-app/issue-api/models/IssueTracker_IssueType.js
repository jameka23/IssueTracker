/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_IssueType', {
		TypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		TypeName: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_IssueType',
        timestamps: false
	});
};
