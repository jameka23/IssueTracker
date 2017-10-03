/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('email_LastBatchRunDateTime', {
		lastRunDateTime: {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'email_LastBatchRunDateTime'
	});
};
