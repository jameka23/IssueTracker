/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_Log', {
		LogId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		LogMessage: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LogDatetime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		LogStackTrace: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_Log',
        timestamps: false
	});
};
